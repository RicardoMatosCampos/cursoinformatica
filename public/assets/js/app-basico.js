document.addEventListener('DOMContentLoaded', () => {
    const sidebarList = document.getElementById('modules-sidebar-list');
    const breadcrumb = document.querySelector('.breadcrumb');
    const lessonTitle = document.getElementById('lesson-title-display');
    const lessonTextContent = document.getElementById('lesson-text-content');
    
    // Check if basicCourseData exists
    if (typeof basicCourseData === 'undefined') {
        console.error("Course data not found.");
        return;
    }

    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwICJpxYs6JVOO5Htck3L4zEylMj01CyDnzOQxvBZP6UJXSi4CHU74sG9TjauAfqdzt/exec";

    let activeModuleId = null;
    let activeLessonId = null;

    function renderSidebar() {
        sidebarList.innerHTML = '';
        
        basicCourseData.modules.forEach((mod, index) => {
            const moduleDiv = document.createElement('div');
            moduleDiv.className = `module-item ${index === 0 ? 'expanded' : ''}`;
            
            const moduleHeader = document.createElement('div');
            moduleHeader.className = 'module-header';
            moduleHeader.innerHTML = `
                <span>${mod.title}</span>
                <i class="fa-solid fa-chevron-${index === 0 ? 'up' : 'down'}"></i>
            `;
            
            const lessonsList = document.createElement('div');
            lessonsList.className = 'lessons-list';
            lessonsList.style.display = index === 0 ? 'block' : 'none';
            
            moduleHeader.addEventListener('click', () => {
                const isExpanded = lessonsList.style.display === 'block';
                // Close all
                document.querySelectorAll('.lessons-list').forEach(list => list.style.display = 'none');
                document.querySelectorAll('.module-header i').forEach(icon => {
                    icon.classList.remove('fa-chevron-up');
                    icon.classList.add('fa-chevron-down');
                });
                
                if (!isExpanded) {
                    lessonsList.style.display = 'block';
                    moduleHeader.querySelector('i').classList.replace('fa-chevron-down', 'fa-chevron-up');
                }
            });
            
            mod.lessons.forEach(lesson => {
                const lessonDiv = document.createElement('div');
                lessonDiv.className = 'lesson-item';
                lessonDiv.innerHTML = `
                    <i class="fa-regular fa-circle-play"></i>
                    <span>${lesson.title}</span>
                `;
                
                lessonDiv.addEventListener('click', () => {
                    document.querySelectorAll('.lesson-item').forEach(item => item.classList.remove('active'));
                    lessonDiv.classList.add('active');
                    loadLesson(mod, lesson);
                });
                
                lessonsList.appendChild(lessonDiv);
            });
            
            moduleDiv.appendChild(moduleHeader);
            moduleDiv.appendChild(lessonsList);
            sidebarList.appendChild(moduleDiv);
        });
    }

    function loadLesson(mod, lesson) {
        breadcrumb.textContent = `Informática Básica / ${mod.title.split('–')[0].trim()} / ${lesson.title.split(':')[0]}`;
        lessonTitle.textContent = lesson.title;
        
        // Handle Video Injection
        const videoContainer = document.getElementById('video-container');
        const videoWrapper = document.querySelector('.video-wrapper');
        if (lesson.videoUrl) {
            videoContainer.style.display = 'block';
            videoWrapper.innerHTML = `<iframe src="${lesson.videoUrl}" title="${lesson.title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
        } else {
            videoContainer.style.display = 'none';
            videoWrapper.innerHTML = '';
        }

        let contentHtml = lesson.content || '';
        
        if (lesson.quiz && lesson.quiz.length > 0) {
            contentHtml += `<div class="quiz-container">`;
            contentHtml += `<div class="quiz-header"><h3><i class="fa-solid fa-clipboard-question"></i> Atividade de Fixação</h3></div>`;
            
            lesson.quiz.forEach((q, qIndex) => {
                contentHtml += `<div class="quiz-question">
                    <p>${qIndex + 1}. ${q.question}</p>
                    <div class="quiz-options" id="quiz-${qIndex}">`;
                
                q.options.forEach((opt, optIndex) => {
                    contentHtml += `
                        <label class="quiz-option">
                            <input type="radio" name="q${qIndex}" value="${optIndex}" style="margin-right: 10px;">
                            ${opt}
                        </label>
                    `;
                });
                
                contentHtml += `</div>
                    <button class="btn btn-primary btn-sm mt-10 check-answer-btn" data-qindex="${qIndex}" style="margin-top: 16px;">Verificar Resposta</button>
                    <div class="quiz-feedback" id="feedback-${qIndex}"></div>
                </div>`;
            });
            contentHtml += `</div>`;
        }
        
        lessonTextContent.innerHTML = contentHtml;
        
        // Attach event listeners for quizzes
        if (lesson.quiz && lesson.quiz.length > 0) {
            document.querySelectorAll('.check-answer-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const qIndex = parseInt(e.target.getAttribute('data-qindex'));
                    const qData = lesson.quiz[qIndex];
                    const selectedOption = document.querySelector(`input[name="q${qIndex}"]:checked`);
                    const feedbackDiv = document.getElementById(`feedback-${qIndex}`);
                    
                    if (!selectedOption) {
                        alert("Por favor, selecione uma opção!");
                        return;
                    }
                    
                    const selectedVal = parseInt(selectedOption.value);
                    if (selectedVal === qData.correctAnswer) {
                        feedbackDiv.className = 'quiz-feedback show';
                        feedbackDiv.style.background = 'rgba(16, 185, 129, 0.1)';
                        feedbackDiv.style.color = '#10b981';
                        feedbackDiv.style.border = '1px solid #10b981';
                        feedbackDiv.innerHTML = `<h4><i class="fa-solid fa-circle-check"></i> Correto!</h4><p>${qData.explanation || ''}</p>`;
                    } else {
                        feedbackDiv.className = 'quiz-feedback show';
                        feedbackDiv.style.background = 'rgba(239, 68, 68, 0.1)';
                        feedbackDiv.style.color = '#ef4444';
                        feedbackDiv.style.border = '1px solid #ef4444';
                        feedbackDiv.innerHTML = `<h4><i class="fa-solid fa-circle-xmark"></i> Incorreto.</h4><p>Tente novamente!</p>`;
                    }
                });
            });
        }
        
        // Verifica se há um formulário de solicitação de certificado na aula e anexa o evento
        const lessonForm = lessonTextContent.querySelector('form.custom-form');
        if (lessonForm) {
            lessonForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const form = e.target;
                const formData = new FormData(form);
                const submitBtn = form.querySelector('button[type="submit"]');
                const originalBtnText = submitBtn.innerText;
                
                submitBtn.innerText = "Enviando...";
                submitBtn.disabled = true;
                
                fetch(SCRIPT_URL, {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: new URLSearchParams(formData).toString()
                })
                .then(() => {
                    const carga = formData.get('carga_horaria') || 'Não informada';
                    const pagador = formData.get('nome_pagador') || 'O próprio';
                    const wppText = `Olá, vim da plataforma! Acabei de solicitar o meu certificado.\n\n👤 *Aluno:* ${formData.get('nome')}\n💳 *Pagador:* ${pagador}\n🎓 *Opção:* ${carga}\n\nSegue abaixo o meu comprovante de pagamento:`;
                    const wppUrl = `https://wa.me/5592994901349?text=${encodeURIComponent(wppText)}`;
                    
                    form.reset();
                    submitBtn.innerText = "Enviado com sucesso";
                    alert("Dados salvos com sucesso! Vamos abrir o WhatsApp agora para você enviar o comprovante. (Se não abrir, clique no botão verde que vai aparecer)");
                    
                    // Tenta abrir em nova aba
                    let wppWindow = window.open(wppUrl, '_blank');
                    
                    // Se o navegador bloquear o pop-up (comum em celulares após o fetch), cria o botão na tela
                    if (!wppWindow || wppWindow.closed || typeof wppWindow.closed === 'undefined') {
                        submitBtn.outerHTML = `<a href="${wppUrl}" target="_blank" class="btn w-100" style="background:#25D366; color:white; padding:12px; border-radius:4px; text-align:center; display:block; font-weight:bold; text-decoration:none;"><i class="fa-brands fa-whatsapp"></i> Concluir: Enviar Comprovante no WhatsApp</a>`;
                    }
                })
                .catch((error) => {
                    alert("Houve um erro ao enviar. Tente novamente.");
                    submitBtn.innerText = originalBtnText;
                    submitBtn.disabled = false;
                });
            });
        }
        
        // Scroll to top of content
        window.scrollTo(0, 0);
    }

    // Initialize
    renderSidebar();
    
    // Load first lesson by default
    if (basicCourseData.modules.length > 0 && basicCourseData.modules[0].lessons.length > 0) {
        const firstMod = basicCourseData.modules[0];
        const firstLesson = firstMod.lessons[0];
        
        // Mark first lesson as active in sidebar
        setTimeout(() => {
            const firstLessonElem = document.querySelector('.lesson-item');
            if (firstLessonElem) firstLessonElem.classList.add('active');
        }, 100);
        
        loadLesson(firstMod, firstLesson);
    }
});

// Funções globais para o modal de vídeo
window.openVideoModal = function(url) {
    const frame = document.getElementById('videoModalFrame');
    const modal = document.getElementById('videoModal');
    if (frame && modal) {
        frame.src = url;
        modal.classList.add('active');
    }
};

window.closeVideoModal = function() {
    const frame = document.getElementById('videoModalFrame');
    const modal = document.getElementById('videoModal');
    if (frame && modal) {
        frame.src = '';
        modal.classList.remove('active');
    }
};
