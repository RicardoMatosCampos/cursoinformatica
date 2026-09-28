import re

def update_file(filename):
    with open(filename, 'r', encoding='utf-8') as f:
        content = f.read()

    # Módulo 2 (10 aulas)
    mod2_quiz = '''[
                        { isFixacao: true, question: "Aula 1: Qual é a principal função de organizar arquivos e pastas?", options: ["Deixar o PC mais rápido", "Facilitar a busca por arquivos", "Economizar energia", "Evitar vírus"], correctAnswer: 1, explanation: "Pastas funcionam como gavetas para organizar seus documentos." },
                        { isFixacao: true, question: "Aula 2: Qual o atalho para criar uma nova pasta rapidamente no Windows?", options: ["Ctrl + Shift + N", "Ctrl + C", "Ctrl + P", "Alt + F4"], correctAnswer: 0, explanation: "Ctrl + Shift + N cria uma nova pasta automaticamente." },
                        { isFixacao: true, question: "Aula 3: Como se chama a imagem de fundo da Área de Trabalho?", options: ["Ícone", "Barra de Tarefas", "Papel de Parede", "Menu Iniciar"], correctAnswer: 2, explanation: "Papel de Parede (Wallpaper) é a imagem de fundo do desktop." },
                        { isFixacao: true, question: "Aula 4: Antes de puxar um Pen Drive do computador, o que você deve fazer?", options: ["Apertar Esc", "Clicar em 'Ejetar com segurança'", "Desligar a tela", "Limpar a lixeira"], correctAnswer: 1, explanation: "Ejetar evita que arquivos sejam corrompidos." },
                        { isFixacao: true, question: "Aula 5: Qual destas extensões representa um arquivo de texto não editável?", options: [".docx", ".pdf", ".mp4", ".xlsx"], correctAnswer: 1, explanation: "O formato PDF preserva a formatação e geralmente não é editável." },
                        { isFixacao: true, question: "Aula 6: Onde encontramos as opções de mudar a hora e desinstalar programas?", options: ["No Bloco de Notas", "Nas Configurações ou Painel de Controle", "Na Lixeira", "No Navegador"], correctAnswer: 1, explanation: "As configurações do Windows centralizam esses controles." },
                        { isFixacao: true, question: "Aula 7: Por que as atualizações do sistema são importantes?", options: ["Para corrigir falhas de segurança e melhorar o sistema", "Para o computador ficar mais pesado", "Apenas para mudar o visual", "Para gastar mais internet"], correctAnswer: 0, explanation: "Atualizações corrigem vulnerabilidades." },
                        { isFixacao: true, question: "Aula 8: O que fazer se um programa travar (não fechar no X)?", options: ["Desligar da tomada", "Usar o Gerenciador de Tarefas (Ctrl+Shift+Esc)", "Jogar água", "Excluir o atalho"], correctAnswer: 1, explanation: "O Gerenciador de Tarefas pode forçar o fechamento de um programa travado." },
                        { isFixacao: true, question: "Aula 9: Qual é o cuidado principal ao instalar um novo programa?", options: ["Sempre avançar clicando em 'Next' sem ler", "Baixar do site oficial e ler as telas de instalação", "Instalar 5 antivírus juntos", "Usar apenas CDs"], correctAnswer: 1, explanation: "Ler evita instalar programas indesejados (barras de pesquisa, etc) junto com o software." },
                        { isFixacao: true, question: "Aula 10: Sobre a Revisão Geral, qual destas práticas é essencial?", options: ["Manter a Área de Trabalho cheia", "Fazer backup e organizar os dados em pastas", "Desligar puxando da tomada", "Não usar antivírus"], correctAnswer: 1, explanation: "O backup e a organização são fundamentais no uso diário do Windows." }
                    ]'''
    
    mod2_content = '''`<h2>🎯 Atividade de Fixação - Módulo 2</h2>
<p>Responda as questões abaixo para testar seus conhecimentos. (Não vale XP)</p>
<hr style="border-color: var(--border-color); margin: 32px 0;">
<h3>Revisão em Vídeo</h3>
<p>Clique nas miniaturas abaixo para rever o conteúdo de qualquer aula do Módulo 2 e tirar suas dúvidas antes de responder:</p>
<div class="video-grid">
    <img src="https://img.youtube.com/vi/RchK_zW1ZNc/mqdefault.jpg" class="video-thumb" title="Aula 1" onclick="window.openVideoModal('https://www.youtube.com/embed/RchK_zW1ZNc?autoplay=1')">
    <img src="https://img.youtube.com/vi/kTg9zJrnnOw/mqdefault.jpg" class="video-thumb" title="Aula 2" onclick="window.openVideoModal('https://www.youtube.com/embed/kTg9zJrnnOw?autoplay=1')">
    <img src="https://img.youtube.com/vi/o1FiPSv60aY/mqdefault.jpg" class="video-thumb" title="Aula 3" onclick="window.openVideoModal('https://www.youtube.com/embed/o1FiPSv60aY?autoplay=1')">
    <img src="https://img.youtube.com/vi/o1FiPSv60aY/mqdefault.jpg" class="video-thumb" title="Aula 4" onclick="window.openVideoModal('https://www.youtube.com/embed/o1FiPSv60aY?autoplay=1')">
    <img src="https://img.youtube.com/vi/o1FiPSv60aY/mqdefault.jpg" class="video-thumb" title="Aula 5" onclick="window.openVideoModal('https://www.youtube.com/embed/o1FiPSv60aY?autoplay=1')">
    <img src="https://img.youtube.com/vi/o1FiPSv60aY/mqdefault.jpg" class="video-thumb" title="Aula 6" onclick="window.openVideoModal('https://www.youtube.com/embed/o1FiPSv60aY?autoplay=1')">
    <img src="https://img.youtube.com/vi/o1FiPSv60aY/mqdefault.jpg" class="video-thumb" title="Aula 7" onclick="window.openVideoModal('https://www.youtube.com/embed/o1FiPSv60aY?autoplay=1')">
    <img src="https://img.youtube.com/vi/o1FiPSv60aY/mqdefault.jpg" class="video-thumb" title="Aula 8" onclick="window.openVideoModal('https://www.youtube.com/embed/o1FiPSv60aY?autoplay=1')">
    <img src="https://img.youtube.com/vi/o1FiPSv60aY/mqdefault.jpg" class="video-thumb" title="Aula 9" onclick="window.openVideoModal('https://www.youtube.com/embed/o1FiPSv60aY?autoplay=1')">
    <img src="https://img.youtube.com/vi/o1FiPSv60aY/mqdefault.jpg" class="video-thumb" title="Aula 10" onclick="window.openVideoModal('https://www.youtube.com/embed/o1FiPSv60aY?autoplay=1')">
</div>`'''

    # Módulo 3 (9 aulas)
    mod3_quiz = '''[
                        { isFixacao: true, question: "Aula 1: Qual é a função de um Navegador (Browser)?", options: ["Limpar o computador", "Acessar sites da internet (ex: Chrome)", "Criar planilhas", "Remover vírus"], correctAnswer: 1, explanation: "Navegadores como o Chrome ou Edge servem para entrar na internet." },
                        { isFixacao: true, question: "Aula 2: Por que devemos evitar downloads de sites desconhecidos?", options: ["Porque a internet pode acabar", "Porque podem conter vírus", "Porque são muito grandes", "Porque o computador fica sujo"], correctAnswer: 1, explanation: "Arquivos de fontes não confiáveis podem estar infectados." },
                        { isFixacao: true, question: "Aula 3: O que é o 'Assunto' em um e-mail?", options: ["O texto completo da mensagem", "O título ou resumo do que se trata o e-mail", "O anexo", "A assinatura"], correctAnswer: 1, explanation: "O assunto serve como um título para a mensagem." },
                        { isFixacao: true, question: "Aula 4: O que é Phishing?", options: ["Técnica para acelerar o PC", "Técnica de enganação para roubar dados", "Um tipo de impressora", "Um aplicativo de música"], correctAnswer: 1, explanation: "Phishing tenta 'pescar' suas informações valiosas." },
                        { isFixacao: true, question: "Aula 5: Sobre redes sociais, qual é uma prática recomendada?", options: ["Aceitar todos os convites de amizade", "Postar senhas", "Ajustar as configurações de privacidade", "Clicar em todos os links"], correctAnswer: 2, explanation: "Proteger sua privacidade é essencial." },
                        { isFixacao: true, question: "Aula 6: O que caracteriza uma Senha Forte?", options: ["Sua data de nascimento", "A palavra 'senha'", "Uso de números, símbolos, maiúsculas e minúsculas", "O nome do seu pet"], correctAnswer: 2, explanation: "Senhas complexas são difíceis de serem descobertas." },
                        { isFixacao: true, question: "Aula 7: O que a Autenticação em 2 Fatores (2FA) adiciona na sua conta?", options: ["Mais lentidão", "Uma segunda camada de proteção (ex: SMS ou código no celular)", "Mais anúncios", "Mais amigos nas redes"], correctAnswer: 1, explanation: "O 2FA exige um código extra para confirmar sua identidade." },
                        { isFixacao: true, question: "Aula 8: Qual é o risco das redes de Wi-Fi públicas e abertas?", options: ["Não têm riscos", "Podem ter os dados interceptados por hackers", "Gastam sua bateria rápido", "Dão vírus no celular físico"], correctAnswer: 1, explanation: "Redes abertas podem ser monitoradas por pessoas mal intencionadas." },
                        { isFixacao: true, question: "Aula 9: O que é 'Netiqueta'?", options: ["Um novo tipo de internet", "Conjunto de regras de boa convivência na internet", "Um software de proteção", "Uma etiqueta física do PC"], correctAnswer: 1, explanation: "Netiqueta é a etiqueta (boas maneiras) da rede." }
                    ]'''
    
    mod3_content = '''`<h2>🎯 Atividade de Fixação - Módulo 3</h2>
<p>Responda as questões abaixo para testar seus conhecimentos. (Não vale XP)</p>
<hr style="border-color: var(--border-color); margin: 32px 0;">
<h3>Revisão em Vídeo</h3>
<p>Clique nas miniaturas abaixo para rever o conteúdo de qualquer aula do Módulo 3 e tirar suas dúvidas antes de responder:</p>
<div class="video-grid">
    <img src="https://img.youtube.com/vi/o1FiPSv60aY/mqdefault.jpg" class="video-thumb" title="Aula 1" onclick="window.openVideoModal('https://www.youtube.com/embed/o1FiPSv60aY?autoplay=1')">
    <img src="https://img.youtube.com/vi/o1FiPSv60aY/mqdefault.jpg" class="video-thumb" title="Aula 2" onclick="window.openVideoModal('https://www.youtube.com/embed/o1FiPSv60aY?autoplay=1')">
    <img src="https://img.youtube.com/vi/o1FiPSv60aY/mqdefault.jpg" class="video-thumb" title="Aula 3" onclick="window.openVideoModal('https://www.youtube.com/embed/o1FiPSv60aY?autoplay=1')">
    <img src="https://img.youtube.com/vi/o1FiPSv60aY/mqdefault.jpg" class="video-thumb" title="Aula 4" onclick="window.openVideoModal('https://www.youtube.com/embed/o1FiPSv60aY?autoplay=1')">
    <img src="https://img.youtube.com/vi/o1FiPSv60aY/mqdefault.jpg" class="video-thumb" title="Aula 5" onclick="window.openVideoModal('https://www.youtube.com/embed/o1FiPSv60aY?autoplay=1')">
    <img src="https://img.youtube.com/vi/o1FiPSv60aY/mqdefault.jpg" class="video-thumb" title="Aula 6" onclick="window.openVideoModal('https://www.youtube.com/embed/o1FiPSv60aY?autoplay=1')">
    <img src="https://img.youtube.com/vi/o1FiPSv60aY/mqdefault.jpg" class="video-thumb" title="Aula 7" onclick="window.openVideoModal('https://www.youtube.com/embed/o1FiPSv60aY?autoplay=1')">
    <img src="https://img.youtube.com/vi/o1FiPSv60aY/mqdefault.jpg" class="video-thumb" title="Aula 8" onclick="window.openVideoModal('https://www.youtube.com/embed/o1FiPSv60aY?autoplay=1')">
    <img src="https://img.youtube.com/vi/o1FiPSv60aY/mqdefault.jpg" class="video-thumb" title="Aula 9" onclick="window.openVideoModal('https://www.youtube.com/embed/o1FiPSv60aY?autoplay=1')">
</div>`'''

    # Módulo 4 (10 aulas)
    mod4_quiz = '''[
                        { isFixacao: true, question: "Aula 1: O que é o Pacote Office?", options: ["Um sistema operacional", "Um conjunto de aplicativos para escritório (Word, Excel, etc)", "Um jogo", "Um hardware"], correctAnswer: 1, explanation: "Office e LibreOffice são suítes de produtividade." },
                        { isFixacao: true, question: "Aula 2: Para que serve o Microsoft Word?", options: ["Criação de planilhas", "Navegar na internet", "Criação e edição de textos", "Fazer apresentações"], correctAnswer: 2, explanation: "Word é um processador de textos." },
                        { isFixacao: true, question: "Aula 3: O que é a Formatação de um documento?", options: ["Alterar a cor, fonte, tamanho e estilo do texto", "Apagar tudo", "Salvar no pendrive", "Enviar por e-mail"], correctAnswer: 0, explanation: "Formatar é dar a aparência visual desejada." },
                        { isFixacao: true, question: "Aula 4: No Word, qual recurso permite criar linhas e colunas estruturadas?", options: ["Gráfico", "Tabela", "WordArt", "Imagem"], correctAnswer: 1, explanation: "As tabelas organizam informações em linhas e colunas." },
                        { isFixacao: true, question: "Aula 5: Como adicionamos uma foto em um documento de texto?", options: ["Menu Arquivo > Salvar", "Menu Inserir > Imagens", "Menu Exibir > Zoom", "Menu Página Inicial > Negrito"], correctAnswer: 1, explanation: "O menu Inserir possui a opção Imagens." },
                        { isFixacao: true, question: "Aula 6: O Excel é conhecido como um programa de:", options: ["Edição de vídeo", "Apresentações", "Planilhas eletrônicas", "Desenho"], correctAnswer: 2, explanation: "O Excel organiza dados matemáticos e tabelas." },
                        { isFixacao: true, question: "Aula 7: Toda fórmula matemática no Excel começa com qual símbolo?", options: ["+", "-", "=", "*"], correctAnswer: 2, explanation: "O sinal de = diz ao Excel que um cálculo vai começar." },
                        { isFixacao: true, question: "Aula 8: Para que serve o Microsoft PowerPoint?", options: ["Criação de slides e apresentações", "Cálculos matemáticos complexos", "Proteção contra vírus", "Instalação de impressoras"], correctAnswer: 0, explanation: "PowerPoint cria apresentações visuais." },
                        { isFixacao: true, question: "Aula 9: O que é um 'Modelo' de apresentação no PowerPoint?", options: ["Um slide em branco", "Um design pronto para ser reutilizado", "Um tipo de fonte", "O salvamento automático"], correctAnswer: 1, explanation: "Modelos poupam trabalho trazendo um design pré-feito." },
                        { isFixacao: true, question: "Aula 10: O LibreOffice Writer é a alternativa gratuita para qual programa do Office?", options: ["Excel", "PowerPoint", "Word", "Outlook"], correctAnswer: 2, explanation: "O Writer é o processador de textos do LibreOffice." }
                    ]'''
    
    mod4_content = '''`<h2>🎯 Atividade de Fixação - Módulo 4</h2>
<p>Responda as questões abaixo para testar seus conhecimentos. (Não vale XP)</p>
<hr style="border-color: var(--border-color); margin: 32px 0;">
<h3>Revisão em Vídeo</h3>
<p>Clique nas miniaturas abaixo para rever o conteúdo de qualquer aula do Módulo 4 e tirar suas dúvidas antes de responder:</p>
<div class="video-grid">
    <img src="https://img.youtube.com/vi/o1FiPSv60aY/mqdefault.jpg" class="video-thumb" title="Aula 1" onclick="window.openVideoModal('https://www.youtube.com/embed/o1FiPSv60aY?autoplay=1')">
    <img src="https://img.youtube.com/vi/o1FiPSv60aY/mqdefault.jpg" class="video-thumb" title="Aula 2" onclick="window.openVideoModal('https://www.youtube.com/embed/o1FiPSv60aY?autoplay=1')">
    <img src="https://img.youtube.com/vi/o1FiPSv60aY/mqdefault.jpg" class="video-thumb" title="Aula 3" onclick="window.openVideoModal('https://www.youtube.com/embed/o1FiPSv60aY?autoplay=1')">
    <img src="https://img.youtube.com/vi/o1FiPSv60aY/mqdefault.jpg" class="video-thumb" title="Aula 4" onclick="window.openVideoModal('https://www.youtube.com/embed/o1FiPSv60aY?autoplay=1')">
    <img src="https://img.youtube.com/vi/o1FiPSv60aY/mqdefault.jpg" class="video-thumb" title="Aula 5" onclick="window.openVideoModal('https://www.youtube.com/embed/o1FiPSv60aY?autoplay=1')">
    <img src="https://img.youtube.com/vi/o1FiPSv60aY/mqdefault.jpg" class="video-thumb" title="Aula 6" onclick="window.openVideoModal('https://www.youtube.com/embed/o1FiPSv60aY?autoplay=1')">
    <img src="https://img.youtube.com/vi/o1FiPSv60aY/mqdefault.jpg" class="video-thumb" title="Aula 7" onclick="window.openVideoModal('https://www.youtube.com/embed/o1FiPSv60aY?autoplay=1')">
    <img src="https://img.youtube.com/vi/o1FiPSv60aY/mqdefault.jpg" class="video-thumb" title="Aula 8" onclick="window.openVideoModal('https://www.youtube.com/embed/o1FiPSv60aY?autoplay=1')">
    <img src="https://img.youtube.com/vi/o1FiPSv60aY/mqdefault.jpg" class="video-thumb" title="Aula 9" onclick="window.openVideoModal('https://www.youtube.com/embed/o1FiPSv60aY?autoplay=1')">
    <img src="https://img.youtube.com/vi/o1FiPSv60aY/mqdefault.jpg" class="video-thumb" title="Aula 10" onclick="window.openVideoModal('https://www.youtube.com/embed/o1FiPSv60aY?autoplay=1')">
</div>`'''

    # Módulo 5 (7 aulas)
    mod5_quiz = '''[
                        { isFixacao: true, question: "Aula 1: O método 5S na informática sugere:", options: ["Ter 5 softwares de segurança", "Descartar, organizar e manter o PC limpo física e digitalmente", "Criar 5 senhas", "Ter 5 pastas na Área de Trabalho"], correctAnswer: 1, explanation: "Os sensos do 5S ajudam na organização e eficiência." },
                        { isFixacao: true, question: "Aula 2: Qual a importância de apagar arquivos antigos e esvaziar a Lixeira?", options: ["Liberar espaço no disco e organizar", "Deixar o Windows mais bonito", "Evitar que o mouse quebre", "Diminuir a conta de luz"], correctAnswer: 0, explanation: "Arquivos inúteis ocupam espaço no HD (disco)." },
                        { isFixacao: true, question: "Aula 3: O que é armazenar na 'Nuvem'?", options: ["Salvar arquivos no HD local", "Guardar num pendrive voador", "Salvar arquivos em servidores na internet (ex: Google Drive)", "Imprimir os documentos"], correctAnswer: 2, explanation: "Nuvem é o armazenamento online em servidores seguros." },
                        { isFixacao: true, question: "Aula 4: Com o que devemos limpar a tela do monitor?", options: ["Álcool comum", "Pano umedecido com produto multiuso", "Pano de microfibra seco ou específico para telas", "Papel toalha"], correctAnswer: 2, explanation: "Pano de microfibra não arranha nem desgasta a película." },
                        { isFixacao: true, question: "Aula 5: O que é a 'Manutenção Preventiva'?", options: ["Consertar o PC depois que ele queima", "Cuidar e limpar antes para evitar que estrague", "Comprar um computador novo a cada ano", "Desligar da tomada"], correctAnswer: 1, explanation: "Prevenir é agir antes do problema acontecer." },
                        { isFixacao: true, question: "Aula 6: O PC não liga de forma alguma. Qual o primeiro passo?", options: ["Abrir o gabinete", "Chamar o técnico imediatamente", "Verificar se a régua (filtro) e os cabos de força estão bem conectados e ligados", "Instalar antivírus"], correctAnswer: 2, explanation: "Muitos problemas são apenas conexões soltas." },
                        { isFixacao: true, question: "Aula 7: Ao tentar resolver uma falha, o que NUNCA devemos fazer?", options: ["Tentar reiniciar o PC", "Pesquisar o erro no Google", "Apagar arquivos vitais do sistema (Windows) ou forçar peças físicas", "Verificar os cabos"], correctAnswer: 2, explanation: "Nunca devemos apagar pastas do sistema sem conhecimento." }
                    ]'''
    
    mod5_content = '''`<h2>🎯 Atividade de Fixação - Módulo 5</h2>
<p>Responda as questões abaixo para testar seus conhecimentos. (Não vale XP)</p>
<hr style="border-color: var(--border-color); margin: 32px 0;">
<h3>Revisão em Vídeo</h3>
<p>Clique nas miniaturas abaixo para rever o conteúdo de qualquer aula do Módulo 5 e tirar suas dúvidas antes de responder:</p>
<div class="video-grid">
    <img src="https://img.youtube.com/vi/o1FiPSv60aY/mqdefault.jpg" class="video-thumb" title="Aula 1" onclick="window.openVideoModal('https://www.youtube.com/embed/o1FiPSv60aY?autoplay=1')">
    <img src="https://img.youtube.com/vi/o1FiPSv60aY/mqdefault.jpg" class="video-thumb" title="Aula 2" onclick="window.openVideoModal('https://www.youtube.com/embed/o1FiPSv60aY?autoplay=1')">
    <img src="https://img.youtube.com/vi/o1FiPSv60aY/mqdefault.jpg" class="video-thumb" title="Aula 3" onclick="window.openVideoModal('https://www.youtube.com/embed/o1FiPSv60aY?autoplay=1')">
    <img src="https://img.youtube.com/vi/o1FiPSv60aY/mqdefault.jpg" class="video-thumb" title="Aula 4" onclick="window.openVideoModal('https://www.youtube.com/embed/o1FiPSv60aY?autoplay=1')">
    <img src="https://img.youtube.com/vi/o1FiPSv60aY/mqdefault.jpg" class="video-thumb" title="Aula 5" onclick="window.openVideoModal('https://www.youtube.com/embed/o1FiPSv60aY?autoplay=1')">
    <img src="https://img.youtube.com/vi/o1FiPSv60aY/mqdefault.jpg" class="video-thumb" title="Aula 6" onclick="window.openVideoModal('https://www.youtube.com/embed/o1FiPSv60aY?autoplay=1')">
    <img src="https://img.youtube.com/vi/o1FiPSv60aY/mqdefault.jpg" class="video-thumb" title="Aula 7" onclick="window.openVideoModal('https://www.youtube.com/embed/o1FiPSv60aY?autoplay=1')">
</div>`'''

    def replace_module(content, fix_id, new_quiz, new_html):
        # We need to set videoUrl: "", replace quiz array, and replace content string
        # Match from id: "fix-X", down to videoUrl, quiz, and content
        pattern = r'(id:\s*"' + fix_id + r'",\s*title:.*?\n\s*duration:.*?\n\s*videoUrl:).*?\n(\s*quiz:\s*)\[([\s\S]*?)\](,\s*content:\s*)`([\s\S]*?)`'
        
        match = re.search(pattern, content)
        if match:
            # group 1 has id, title, duration, videoUrl:
            # we need to append ' "",\n' after videoUrl:
            new_text = match.group(1) + ' "",\n' + match.group(2) + new_quiz + match.group(4) + new_html
            content = content[:match.start()] + new_text + content[match.end():]
        return content

    content = replace_module(content, 'fix-2', mod2_quiz, mod2_content)
    content = replace_module(content, 'fix-3', mod3_quiz, mod3_content)
    content = replace_module(content, 'fix-4', mod4_quiz, mod4_content)
    content = replace_module(content, 'fix-5', mod5_quiz, mod5_content)

    with open(filename, 'w', encoding='utf-8') as f:
        f.write(content)

update_file('public/assets/js/curso-basico.js')
update_file('extracted_data.js')
