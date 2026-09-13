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
        const videoWrapper = document.querySelector('.video-wrapper');
        if (lesson.videoUrl) {
            // Se houver URL do vídeo nos dados da aula, injeta o iframe
            videoWrapper.innerHTML = `<iframe src="${lesson.videoUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
        } else {
            // Se não houver, mostra o placeholder
            videoWrapper.innerHTML = `
                <div class="video-placeholder">
                    Espaço para o Vídeo<br>
                    <span>Insira a propriedade "videoUrl" nesta aula no arquivo curso-basico.js</span>
                </div>
            `;
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
