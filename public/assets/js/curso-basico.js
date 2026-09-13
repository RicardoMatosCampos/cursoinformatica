const basicCourseData = {
    title: "Curso de Informática Básica",
    progress: 0,
    modules: [
        {
            id: 1,
            title: "Módulo 1 – Introdução à Informática (10h)",
            description: "O que é Informática, História dos Computadores, Componentes Físicos e Introdução ao Windows.",
            image: "https://images.unsplash.com/photo-1547082299-de196ea013d6?w=600&q=80",
            lessons: [
                {
                    id: "1-1",
                    title: "Aula 1: O que é Informática e a História dos Computadores",
                    duration: "Leitura (15 min)",
                    videoUrl: "https://www.youtube.com/embed/o1FiPSv60aY",
                    attachmentUrl: "https://drive.google.com/drive/folders/1CuHTB-k4KFvEUGbm7L8-jZk599XTN3ZV?usp=sharing",
                    quiz: [
                        {
                            question: "O que a palavra Informática significa na sua essência?",
                            options: [
                                "Informação + Matemática",
                                "Informação + Automática",
                                "Internet + Máquinas",
                                "Interação + Eletrônica"
                            ],
                            correctAnswer: 1,
                            explanation: "A Informática é a ciência que trata do processamento automático da informação usando computadores."
                        }
                    ],
                    content: `<h2>📘 Apostila – Aula 1</h2>
<h3>Tema: O que é Informática? E a História dos Computadores</h3>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🧩 Parte 1 – O que é Informática, afinal?</h3>
<p>Se você parar para pensar, a tecnologia domina o nosso dia a dia, mas poucas pessoas sabem o que a palavra Informática realmente significa. Ela é a junção de duas palavras: <strong>Informação + Automática</strong>.</p>
<p>Na prática, a informática é a ciência que utiliza máquinas eletrônicas (os computadores) para receber dados, processá-los automaticamente e entregar um resultado útil. O computador não pensa sozinho; ele precisa de instruções exatas para facilitar a nossa vida.</p>
<p><strong>A Informática no seu Cotidiano:</strong> Você já usa a informática muito mais do que imagina. Veja alguns exemplos práticos:</p>
<ul>
    <li><strong>Na comunicação:</strong> Quando você usa o celular para mandar uma mensagem no WhatsApp ou fazer uma chamada de vídeo.</li>
    <li><strong>Nas finanças:</strong> Ao usar o aplicativo do banco para fazer um Pix, pagar contas ou fazer compras em lojas virtuais.</li>
    <li><strong>No trabalho:</strong> Quando uma empresa usa um sistema para registrar vendas ou o Excel para organizar o estoque de mercadorias.</li>
</ul>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🖥️ Parte 2 – Antes dos Computadores Modernos</h3>
<p>O ser humano sempre buscou formas de facilitar cálculos e organizar informações. Muito antes de existirem telas e teclados, a "computação" já acontecia de forma mecânica.</p>
<ul>
    <li><strong>O Ábaco (2400 a.C.):</strong> Considerado o "avô" dos computadores, era um instrumento de madeira com fios e bolinhas, inventado na Ásia, usado para fazer contagens e cálculos rápidos.</li>
    <li><strong>A Máquina de Pascal ou "Pascalina" (1642):</strong> Criada pelo matemático Blaise Pascal, foi uma das primeiras calculadoras mecânicas do mundo, capaz de realizar somas e subtrações através de engrenagens.</li>
    <li><strong>A Máquina de Leibniz (1673):</strong> Uma evolução da Pascalina, essa máquina já conseguia realizar cálculos mais complexos, como multiplicações e divisões.</li>
</ul>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🧠 Parte 3 – As 5 Gerações dos Computadores</h3>
<p>A evolução da informática é dividida em "gerações". Cada geração é marcada por uma grande invenção que fez os computadores ficarem menores, mais rápidos e mais baratos.</p>
<ul>
    <li><strong>1ª Geração (1940 – 1956) - A Era das Válvulas:</strong> Os primeiros computadores eram gigantes. O famoso ENIAC ocupava uma sala inteira, pesava 30 toneladas e usava milhares de válvulas de vidro (parecidas com lâmpadas). Eles esquentavam muito, consumiam uma energia absurda e eram usados apenas para cálculos militares.</li>
    <li><strong>2ª Geração (1956 – 1963) - A Chegada dos Transistores:</strong> As válvulas gigantes foram substituídas pelos transistores. Isso mudou tudo! Os computadores diminuíram de tamanho, tornaram-se muito mais rápidos e começaram a ser usados por grandes empresas, não apenas pelo exército.</li>
    <li><strong>3ª Geração (1964 – 1971) - Os Circuitos Integrados (Chips):</strong> Aqui nasceram os "chips" de silício. Em um único chip pequeno, era possível colocar milhares de transistores. Foi nessa geração que os computadores começaram a ter monitores e teclados, tornando-se peças fundamentais para conquistas históricas, como a chegada do homem à Lua.</li>
    <li><strong>4ª Geração (1971 – Presente) - Os Microprocessadores:</strong> É a era em que vivemos hoje. Os chips ficaram tão potentes e baratos que surgiram os PCs (Computadores Pessoais) e os notebooks. O computador saiu das grandes empresas e foi para dentro das nossas casas.</li>
    <li><strong>5ª Geração (Presente e Futuro) - Inteligência Artificial e Conectividade:</strong> A quinta geração é marcada por máquinas que "aprendem". É a era da Inteligência Artificial, do reconhecimento de voz, da computação em nuvem e dos smartphones. Hoje, um celular no seu bolso é milhares de vezes mais potente do que os computadores que levaram o homem à Lua.</li>
</ul>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<div style="background-color: var(--bg-hover); padding: 24px; border-radius: var(--border-radius); border: 1px solid var(--accent-color);">
    <h3 style="margin-top: 0;">💡 Para Refletir (Atividade Prática)</h3>
    <p style="margin-bottom: 0;">Imagine que você foi convidado a explicar para uma criança de 8 anos o que é um computador e para que ele serve, usando apenas exemplos do dia a dia. Como você explicaria? Anote no seu caderno e prepare-se para compartilhar com a turma!</p>
</div>`
                },
                {
                    id: "1-2",
                    title: "Aula 2: Componentes Físicos (Hardware e Periféricos)",
                    duration: "Leitura (15 min)",
                    videoUrl: "https://www.youtube.com/embed/o1FiPSv60aY",
                    content: `<h2>📘 Apostila – Aula 2</h2>
<h3>Tema: Componentes de um Computador (Hardware e Periféricos)</h3>
<p>Na primeira aula, vimos o que é a informática e como ela evoluiu. Hoje, vamos "abrir o capô" e entender do que um computador é feito.</p>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🧩 Parte 1 – O que é Hardware?</h3>
<p>Na informática, dividimos tudo em duas grandes categorias: Hardware e Software. Hoje o nosso foco é o Hardware.</p>
<ul>
    <li><strong>Hardware:</strong> É toda a parte física do computador. Em resumo, é tudo aquilo que você pode ver e tocar.</li>
    <li><strong>Exemplos:</strong> A tela, o teclado, os cabos e até as placas que ficam escondidas dentro do computador.</li>
</ul>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🖥️ Parte 2 – O Gabinete e seus "Órgãos Vitais"</h3>
<p>A maior confusão para quem está começando é chamar aquela "caixa" grande do computador de CPU. O nome correto da caixa é <strong>Gabinete</strong>. A CPU é apenas uma das peças que ficam lá dentro.</p>
<p>Vamos conhecer os 5 componentes principais que ficam protegidos dentro do gabinete. Pense neles como o corpo humano:</p>
<ol>
    <li><strong>Placa-mãe (O Esqueleto e Sistema Nervoso):</strong> É a maior placa do computador. O papel dela é conectar todas as outras peças para que elas conversem entre si.</li>
    <li><strong>Processador ou CPU (O Cérebro):</strong> CPU significa Unidade Central de Processamento. É a peça mais importante. Ele é quem faz todos os cálculos e obedece aos seus comandos.</li>
    <li><strong>Memória RAM (A Mesa de Trabalho):</strong> É uma memória temporária e super-rápida. Quando você abre um programa, ele é colocado na RAM para o processador trabalhar. Atenção: Quando você desliga o PC, tudo que estava na RAM é apagado.</li>
    <li><strong>HD e SSD (O Arquivo ou Guarda-roupas):</strong> É aqui que as suas fotos, vídeos e o próprio Windows ficam guardados para sempre (armazenamento permanente). O HD é o modelo mais antigo e mecânico. O SSD é a tecnologia moderna, muito mais rápida, que faz o computador ligar em segundos.</li>
    <li><strong>Fonte de Energia (O Coração):</strong> Ela recebe a energia da tomada e distribui na voltagem correta para todas as peças não queimarem.</li>
</ol>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>⌨️ Parte 3 – Os Periféricos</h3>
<p>Os componentes do gabinete fazem o trabalho pesado, mas eles precisam se comunicar com você. Para isso, usamos os Periféricos (equipamentos que ficam na "periferia", ou seja, do lado de fora). Eles se dividem em três tipos:</p>
<ul>
    <li><strong>1. Periféricos de Entrada (Mandam informações para o PC):</strong>
        <ul>
            <li>Teclado: Para digitar textos e dar comandos.</li>
            <li>Mouse: Para guiar a setinha e clicar na tela.</li>
            <li>Microfone e Câmera (Webcam): Para enviar sua voz e imagem.</li>
        </ul>
    </li>
    <li><strong>2. Periféricos de Saída (Mostram o resultado para você):</strong>
        <ul>
            <li>Monitor: A tela onde você enxerga tudo.</li>
            <li>Impressora: Passa o documento digital para o papel físico.</li>
            <li>Caixas de som / Fones de ouvido: Onde você escuta o áudio.</li>
        </ul>
    </li>
    <li><strong>3. Periféricos de Entrada e Saída (Armazenamento Portátil):</strong> São aqueles que fazem as duas coisas: você pode salvar arquivos neles ou copiar arquivos deles para o computador.
        <ul>
            <li>Exemplos: Pen drives, HDs externos e cartões de memória do celular.</li>
        </ul>
    </li>
</ul>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<div style="background-color: var(--bg-hover); padding: 24px; border-radius: var(--border-radius); border: 1px solid var(--accent-color);">
    <h3 style="margin-top: 0;">🛠️ Guia Rápido: Resolução de Problemas Comuns</h3>
    <p>Antes de chamar um técnico, você mesmo pode resolver falhas simples no dia a dia conferindo alguns detalhes:</p>
    <ul>
        <li><strong>O computador não liga de jeito nenhum:</strong>
            <p style="margin-bottom: 8px;"><em>O que fazer:</em> Verifique o básico. O cabo de energia está bem encaixado atrás do gabinete e na tomada? O filtro de linha (régua) está com o botão aceso?</p>
        </li>
        <li><strong>O teclado ou o mouse não responde:</strong>
            <p style="margin-bottom: 8px;"><em>O que fazer:</em> Siga o cabo e veja se ele está bem conectado na entrada USB. Se estiver, tire e coloque em uma porta USB diferente.</p>
        </li>
        <li><strong>O computador liga, faz barulho, mas o monitor não dá imagem:</strong>
            <p style="margin-bottom: 0;"><em>O que fazer:</em> Veja se o monitor está ligado na tomada. Depois, confira o cabo de vídeo (geralmente azul, preto ou com ponta HDMI) e certifique-se de que ele está bem parafusado ou encaixado tanto no monitor quanto no gabinete.</p>
        </li>
    </ul>
</div>`
                },
                {
                    id: "1-3",
                    title: "Aula 3: O Passo a Passo Físico (Ligar, Desligar, Conexões e Energia)",
                    duration: "Leitura (20 min)",
                    videoUrl: "https://www.youtube.com/embed/o1FiPSv60aY",
                    content: `<h2>📘 Apostila – Aula 3</h2>
<h3>Tema: Ligar, Desligar e Conectar – Primeiros Passos com o Computador</h3>
<p>Chegou o momento de colocar a mão na massa! Antes de começarmos a mexer nos programas, precisamos entender como o computador se comunica com a energia elétrica e com os seus periféricos. Ligar e desligar a máquina do jeito certo é o primeiro passo para evitar falhas e não perder seus arquivos.</p>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🖥️ Parte 1 – Como Ligar o Computador Corretamente</h3>
<p>Ligar o computador parece simples, mas exige atenção aos detalhes:</p>
<ol>
    <li><strong>Confira a Energia:</strong> Antes de apertar qualquer botão, verifique se o cabo de energia está bem conectado à tomada, ao filtro de linha (régua) ou ao nobreak, e se esses equipamentos estão ligados.</li>
    <li><strong>O Botão Power:</strong> Localize no gabinete (ou no notebook) o botão principal, geralmente identificado pelo símbolo universal de Liga/Desliga (🔵 ⏻).</li>
    <li><strong>Paciência na Inicialização:</strong> Após apertar o botão, aguarde. O Sistema Operacional (como o Windows ou Linux) precisa de alguns segundos ou minutos para carregar todos os programas e a Área de Trabalho. Não saia clicando antes da tela estar completamente pronta.</li>
</ol>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>📴 Parte 2 – Como Desligar com Segurança</h3>
<p>NUNCA puxe o computador da tomada e evite desligar direto no botão do gabinete. Cortar a energia de uma vez pode corromper (estragar) o Windows e fazer você perder seus arquivos.</p>
<ol>
    <li><strong>Salve seu Trabalho:</strong> Feche todos os programas e salve seus documentos.</li>
    <li><strong>O Jeito Certo:</strong> Use o mouse. Vá até o Menu Iniciar, clique no botão de energia e selecione Desligar. A máquina fará o encerramento seguro sozinha.</li>
    <li><strong>A Exceção (Travamento):</strong> Só use o botão físico Power (segurando ele apertado por alguns segundos) se o computador travar completamente e o mouse não mexer de jeito nenhum.</li>
</ol>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🔌 Parte 3 – Conhecendo os Botões e Conexões Físicas</h3>
<p>Atrás do gabinete e nas laterais do notebook, existem várias portas. Cada cabo tem um formato único e só entra no lugar certo. Não force!</p>
<ul>
    <li><strong>Botão Power:</strong> Liga e desliga a máquina.</li>
    <li><strong>Botão Reset:</strong> Um botão menor usado para forçar a reinicialização em caso de travamento grave. Use com muita cautela.</li>
    <li><strong>Portas USB:</strong> Entradas retangulares usadas para quase tudo (pen drives, teclado, mouse, cabo de celular).</li>
    <li><strong>Porta HDMI ou VGA:</strong> É por aqui que a imagem vai para o monitor ou projetor.</li>
    <li><strong>Porta de Rede (RJ45):</strong> Entrada parecida com a de telefone, usada para conectar a internet via cabo (que é mais rápida e estável que o Wi-Fi).</li>
    <li><strong>Entradas de Áudio (P2):</strong> Conectores redondos e coloridos para fone de ouvido, caixas de som (geralmente verde) e microfone (geralmente rosa).</li>
    <li><strong>Porta de Energia:</strong> Onde entra o cabo da fonte (no gabinete) ou o carregador (no notebook).</li>
</ul>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>⚡ Parte 4 – Proteção: Estabilizadores, Nobreaks e Filtros de Linha</h3>
<p>A energia que chega da rua pode oscilar e queimar suas peças. Veja como proteger seu equipamento:</p>
<ul>
    <li><strong>Filtro de Linha (A Régua):</strong> É a opção mais barata e eficiente. Ele protege contra picos de energia (se vier uma carga forte, o fusível dele queima e salva o PC) e permite ligar vários aparelhos.</li>
    <li><strong>Estabilizador (O Mito):</strong> Ele tenta regular pequenas variações de energia. Porém, hoje em dia é cada vez menos recomendado. As fontes modernas dos computadores (Fontes ATX) já fazem essa correção de forma automática e muito mais rápida. Usar um estabilizador antigo pode até forçar a fonte do PC.</li>
    <li><strong>Nobreak (UPS):</strong> É uma "bateria externa". Quando falta luz, ele apita e mantém o computador ligado por alguns minutos, dando tempo para você salvar tudo e desligar com segurança.</li>
</ul>

<div style="background-color: var(--bg-hover); padding: 24px; border-radius: var(--border-radius); border: 1px solid var(--accent-color); margin-bottom: 24px;">
    <h3 style="margin-top: 0; color: #f59e0b;">💡 Atenção Máxima com o Nobreak (Capacidade em kVA)</h3>
    <p style="margin-bottom: 0;">Um nobreak de baixa potência (ex: 600 VA) suporta apenas o computador e o monitor. <strong>NUNCA ligue impressoras multifuncionais ou a laser nele!</strong> O pico de energia que a impressora puxa ao aquecer o papel pode desarmar, queimar o nobreak ou destruir a bateria dele.</p>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<div style="background-color: var(--bg-hover); padding: 24px; border-radius: var(--border-radius); border: 1px solid var(--accent-color); margin-bottom: 24px;">
    <h3 style="margin-top: 0;">🛠️ Guia Rápido de Solução de Problemas (Troubleshooting)</h3>
    <p>Se algo der errado no dia a dia, verifique estes pontos antes de chamar um técnico:</p>
    <ul>
        <li><strong>O computador não liga de jeito nenhum:</strong> Verifique se a régua ou filtro de linha está ligado na tomada e com o botão aceso.</li>
        <li><strong>O computador reinicia sozinho em dias de chuva:</strong> Verifique se ele está ligado direto na tomada sem proteção. Picos de energia causam isso.</li>
        <li><strong>O nobreak apita e desliga quando mando imprimir:</strong> Sobrecarga! Tire a impressora do nobreak e ligue-a em um filtro de linha separado.</li>
    </ul>
</div>

<div style="background-color: var(--bg-main); padding: 24px; border-radius: var(--border-radius); border: 1px dashed var(--border-color);">
    <h3 style="margin-top: 0;">🧠 Atividade Final da Aula (Para o Aluno)</h3>
    <ol style="margin-bottom: 0;">
        <li><strong>Tabela de Proteção:</strong> No seu caderno, faça uma tabela simples comparando: Filtro de Linha, Estabilizador e Nobreak, destacando a função de cada um.</li>
        <li><strong>Discussão em Grupo:</strong> Qual desses equipamentos você usaria na sua casa ou no seu local de trabalho? Por quê?</li>
        <li><strong>Relato Rápido:</strong> Escreva em 5 linhas um problema que você já viu, viveu ou ouviu falar envolvendo energia elétrica e aparelhos eletrônicos.</li>
    </ol>
</div>`
                },
                {
                    id: "1-4",
                    title: "Aula 4: O que é Sistema Operacional e a Evolução do Windows",
                    duration: "Leitura (25 min)",
                    videoUrl: "https://www.youtube.com/embed/o1FiPSv60aY",
                    content: `<h2>📘 Apostila – Aula 4</h2>
<h3>Tema: Sistemas Operacionais e a Evolução do Windows</h3>
<p>Nas aulas passadas, entendemos como o computador funciona fisicamente (o Hardware). Mas, se você ligar as peças sem nenhum programa dentro, a máquina não fará nada. Para que o computador ganhe "vida", precisamos de um software principal. É aqui que entra o Sistema Operacional.</p>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🧩 Parte 1 – O que é um Sistema Operacional (SO)?</h3>
<p>O Sistema Operacional é o programa mais importante de qualquer dispositivo. Ele é o grande "gerente" ou "tradutor" da máquina.</p>
<p>O hardware (processador, memória) só entende a linguagem elétrica. Você, usuário, entende cliques, janelas e pastas. O Sistema Operacional faz essa ponte: ele recebe o seu clique no mouse e traduz isso em uma ordem para o processador abrir um programa, organizar um arquivo ou acessar a internet.</p>
<p><strong>📌 Principais tipos de SO usados atualmente:</strong></p>
<ul>
    <li><strong>Windows (Microsoft):</strong> É o mais popular do mundo. Quase todas as empresas e computadores pessoais usam. Ele é pago (requer uma licença).</li>
    <li><strong>Linux:</strong> É um sistema de código aberto (totalmente livre e gratuito). É muito seguro e usado por profissionais de TI, servidores de internet e também em PCs pessoais mais antigos para dar "vida nova" a eles.</li>
    <li><strong>macOS:</strong> É o sistema da Apple, exclusivo dos computadores Mac (iMac, MacBook). É muito famoso por seu design e estabilidade.</li>
    <li><strong>Sistemas Mobile:</strong> Nossos celulares também são computadores e têm seus próprios sistemas! Os gigantes são o Android (do Google, presente na maioria dos celulares) e o iOS (exclusivo do iPhone e iPad).</li>
</ul>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🖥️ Parte 2 – A Evolução do Windows</h3>
<p>Como o Windows é o padrão exigido no mercado de trabalho, vamos conhecer a "árvore genealógica" dele. A Microsoft lançou várias versões ao longo do tempo, cada vez mais modernas:</p>
<ul>
    <li><strong>Windows 95 (1995):</strong> Uma revolução! Foi a primeira versão a trazer o famoso Botão Iniciar.</li>
    <li><strong>Windows 98:</strong> Trouxe mais estabilidade e foi o responsável por popularizar o uso da internet nas casas.</li>
    <li><strong>Windows XP (2001):</strong> Um dos sistemas mais amados e utilizados da história. Muito fácil de usar e com a clássica tela de fundo verde.</li>
    <li><strong>Windows Vista (2007):</strong> Trouxe muitas melhorias gráficas (janelas transparentes), mas era considerado muito "pesado" e travava em computadores mais simples.</li>
    <li><strong>Windows 7 (2009):</strong> Rápido, estável e seguro. Foi um sucesso absoluto e ainda é lembrado com carinho por muitas empresas.</li>
    <li><strong>Windows 8 e 8.1 (2012):</strong> Uma mudança radical. A Microsoft tirou o Menu Iniciar clássico e colocou uma tela cheia de blocos coloridos, pensada para telas sensíveis ao toque (tablets).</li>
    <li><strong>Windows 10 (2015):</strong> Voltou com o Menu Iniciar e unificou a experiência para PCs e notebooks. É um sistema robusto e com longo tempo de suporte.</li>
    <li><strong>Windows 11 (2021):</strong> O padrão atual! Tem um design moderno, com o Menu Iniciar centralizado (parecido com celulares), focado em produtividade e forte integração com a nuvem (internet).</li>
</ul>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<div style="background-color: var(--bg-hover); padding: 24px; border-radius: var(--border-radius); border: 1px solid var(--accent-color); margin-bottom: 24px;">
    <h3 style="margin-top: 0;">🛠️ Guia Rápido: Resolução de Problemas no Sistema (Troubleshooting)</h3>
    <p>No dia a dia, você pode se deparar com alguns desafios de Software. Veja como resolver:</p>
    <ul>
        <li><strong>O computador é muito antigo e o Windows 11 não quer instalar:</strong>
            <p style="margin-bottom: 8px;"><em>O que aconteceu:</em> O Windows 11 exige peças mais modernas e seguras.</p>
            <p style="margin-bottom: 16px;"><em>A solução:</em> Para computadores antigos, a alternativa é instalar o Windows 10 ou usar um sistema Linux, que é mais leve e fará a máquina voltar a ser rápida.</p>
        </li>
        <li><strong>Baixei um programa, mas o computador diz que ele é incompatível:</strong>
            <p style="margin-bottom: 8px;"><em>O que aconteceu:</em> Alguns softwares são exclusivos. Um programa feito para Windows não roda no macOS (Apple) e vice-versa. É preciso baixar a versão correta para o seu sistema.</p>
        </li>
        <li><strong>O Windows 8 não tem o botão de Desligar no lugar de sempre:</strong>
            <p style="margin-bottom: 16px;"><em>A solução:</em> Como o Windows 8 mudou o visual, para desligar é necessário levar o mouse até o canto direito da tela (para abrir a Charms bar), clicar em Configurações e só então em Desligar.</p>
        </li>
        <li><strong>O Windows está atualizando e pede "Não desligue o computador":</strong>
            <p style="margin-bottom: 0;"><em>A solução:</em> Nunca desligue! O sistema está mexendo em arquivos vitais. Se você desligar, o sistema corrompe e o computador pode não ligar mais.</p>
        </li>
    </ul>
</div>

<div style="background-color: var(--bg-main); padding: 24px; border-radius: var(--border-radius); border: 1px dashed var(--border-color);">
    <h3 style="margin-top: 0;">🧠 Atividade Final da Aula (Para o Aluno)</h3>
    <p><strong>📝 Tarefa Prática no Caderno:</strong></p>
    <ol style="margin-bottom: 0;">
        <li><strong>Linha do Tempo:</strong> Monte a sua própria linha do tempo da evolução do Windows, destacando as principais versões e uma característica marcante de cada uma.</li>
        <li><strong>Comparação:</strong> Escreva, em 5 linhas, a principal diferença entre o Windows, o Linux e o macOS.</li>
        <li><strong>Debate em Grupo:</strong> Qual sistema operacional você acha mais adequado para (A) Trabalhar em um escritório, (B) Reviver um computador velho e (C) Jogar games modernos? Explique o porquê.</li>
    </ol>
</div>`
                },
                {
                    id: "1-5",
                    title: "Aula 5: O Ambiente Digital (Área de Trabalho, Menus e Janelas)",
                    duration: "Leitura (20 min)",
                    videoUrl: "https://www.youtube.com/embed/o1FiPSv60aY",
                    content: `<h2>📘 Apostila – Aula 5</h2>
<h3>Tema: Área de Trabalho, Menus e Janelas Principais do Windows</h3>
<p>Chegou a hora de olharmos para a tela e assumirmos o controle! Nas aulas passadas, entendemos como o computador funciona por dentro. Agora, vamos explorar a interface visual do Windows, que foi desenhada para ser o seu ambiente de trabalho digital.</p>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🖥️ Parte 1 – A Área de Trabalho (Desktop)</h3>
<p>Quando você liga o computador e o sistema termina de carregar, a primeira tela que aparece é a <strong>Área de Trabalho (ou Desktop)</strong>. A ideia da Microsoft foi imitar uma mesa de escritório real.</p>
<p>Veja o que encontramos em cima dessa "mesa":</p>
<ul>
    <li><strong>Papel de Parede:</strong> É a imagem de fundo da tela. Pode ser uma paisagem, o logotipo da empresa ou uma foto pessoal. É totalmente personalizável.</li>
    <li><strong>Ícones:</strong> São os pequenos desenhos na tela. Eles funcionam como atalhos rápidos para abrir seus programas, pastas e arquivos mais importantes.</li>
    <li><strong>Barra de Tarefas:</strong> É a barra comprida que geralmente fica na parte de baixo da tela. Ela mostra os programas que estão abertos no momento.</li>
    <li><strong>Relógio e Área de Notificação:</strong> Fica no canto inferior direito. É onde você confere a hora, a data, controla o volume do som e verifica se está conectado à internet.</li>
</ul>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>📂 Parte 2 – O Menu Iniciar</h3>
<p>No canto da Barra de Tarefas (ou no meio, dependendo da versão do Windows), existe um botão com o desenho de quatro quadradinhos. Esse é o <strong>Menu Iniciar</strong>, o ponto central e o "coração" do Windows.</p>
<p>Ele é o seu painel de controle e permite:</p>
<ol>
    <li>Abrir programas que estão instalados, mas não têm atalho na tela inicial.</li>
    <li>Pesquisar rapidamente por arquivos, documentos ou aplicativos.</li>
    <li>Acessar as Configurações do sistema (para mudar a senha, o papel de parede, etc.).</li>
    <li>Desligar ou reiniciar o computador de forma segura.</li>
</ol>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🪟 Parte 3 – Trabalhando com Janelas do Windows</h3>
<p>Sempre que você abre um programa, arquivo ou pasta, ele aparece dentro de um quadrado na tela chamado <strong>Janela</strong> (é por isso que o sistema se chama Windows).</p>
<p>Você pode ter várias janelas abertas ao mesmo tempo. Para controlá-las, olhe para o canto superior direito de qualquer janela. Você verá três botões mágicos:</p>
<ul>
    <li><strong>➖ Minimizar (O Traço):</strong> Reduz a janela e a esconde na Barra de Tarefas. O programa não fecha, apenas "desce" para não atrapalhar a visão.</li>
    <li><strong>▢ Maximizar / Restaurar (O Quadrado):</strong> Aumenta a janela para ocupar a tela inteira. Se ela já estiver grande, clicar nele fará a janela voltar ao tamanho menor (Restaurar).</li>
    <li><strong>❌ Fechar (O X vermelho):</strong> Encerra o programa de vez.</li>
</ul>
<div style="background-color: var(--bg-hover); padding: 16px; border-radius: var(--border-radius); border-left: 4px solid var(--accent-color); margin-top: 16px;">
    <p style="margin-bottom: 0;"><strong>💡 Como organizar sua tela:</strong> Você pode clicar e segurar o topo de uma janela para arrastá-la pela tela. Para alternar entre um programa e outro, basta clicar no ícone correspondente na Barra de Tarefas lá embaixo.</p>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<div style="background-color: var(--bg-hover); padding: 24px; border-radius: var(--border-radius); border: 1px solid var(--accent-color); margin-bottom: 24px;">
    <h3 style="margin-top: 0;">🛠️ Guia Rápido: Solução de Problemas no Dia a Dia</h3>
    <ul>
        <li><strong>Não encontro o ícone de um programa na Área de Trabalho!</strong>
            <p style="margin-bottom: 16px;"><em>Solução:</em> Não se desespere. Clique no botão Iniciar e digite o nome do programa na barra de pesquisa. Ele vai aparecer!</p>
        </li>
        <li><strong>A janela ficou tão grande que cobriu a tela toda e não acho meus outros programas.</strong>
            <p style="margin-bottom: 16px;"><em>Solução:</em> Vá até o canto superior direito e clique no botão Restaurar (▢). A janela vai encolher e você verá sua tela novamente.</p>
        </li>
        <li><strong>Fechei uma janela (❌) sem querer e não sei como reabrir.</strong>
            <p style="margin-bottom: 0;"><em>Solução:</em> Vá até o Menu Iniciar, pesquise o nome do programa (ex: Word, Calculadora) e clique para abrir novamente.</p>
        </li>
    </ul>
</div>

<div style="background-color: var(--bg-main); padding: 24px; border-radius: var(--border-radius); border: 1px dashed var(--border-color);">
    <h3 style="margin-top: 0;">🧠 Atividade Final da Aula (Prática no Computador)</h3>
    <p><strong>📝 Mão na massa:</strong></p>
    <ol style="margin-bottom: 0;">
        <li>Abra um programa no computador (ex: o Bloco de Notas).</li>
        <li>Teste os três botões de controle: minimize para a barra de tarefas, maximize para a tela toda e depois feche no "X".</li>
        <li>Em Duplas: Abram dois programas diferentes. Simulem o uso alternando entre eles clicando na Barra de Tarefas.</li>
        <li>No Caderno: Relate em 5 linhas o que você achou mais interessante sobre a Área de Trabalho e os Menus.</li>
    </ol>
</div>`
                },
                {
                    id: "fix-1",
                    title: "Atividade de Fixação: Módulo 1",
                    duration: "Prática (5 min)",
                    videoUrl: "https://www.youtube.com/embed/o1FiPSv60aY",
                    quiz: [
                        {
                            isFixacao: true,
                            question: "Qual destes é o componente considerado o 'cérebro' do computador?",
                            options: ["Memória RAM", "Disco Rígido (HD)", "Processador (CPU)", "Placa Mãe"],
                            correctAnswer: 2,
                            explanation: "O Processador (CPU) executa todos os cálculos e instruções do sistema."
                        }
                    ],
                    content: `<h2>🎯 Atividade de Fixação - Módulo 1</h2><p>Responda as questões acima para testar seus conhecimentos. (Não vale XP)</p>`
                }
            ]
        },
        {
            id: 2,
            title: "Módulo 2 – Sistema Operacional e Windows (20h)",
            description: "Organização de arquivos e pastas, personalização, segurança e soluções práticas.",
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=600&q=80",
            lessons: [
                {
                    id: "2-1",
                    title: "Aula 01: Organização de arquivos e pastas",
                    duration: "Leitura (20 min)",
                    videoUrl: "https://www.youtube.com/embed/o1FiPSv60aY",
                    content: `<h2>📘 Apostila – Módulo 2 | Aula 1</h2>
<h3>Tema: Organização de Arquivos, Pastas e Subpastas</h3>
<p>Neste módulo, vamos colocar a mão na massa e usar o Windows para organizar a nossa vida digital. Imagine que o seu computador é um grande escritório vazio. Se você jogar todos os seus papéis no chão, nunca vai achar o que precisa. O Windows oferece ferramentas perfeitas para organizar tudo isso: as <strong>Pastas</strong> e os <strong>Arquivos</strong>.</p>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>📁 Parte 1 – A Regra do Arquivo Físico (Entendendo a Lógica)</h3>
<p>Para entender como o Windows organiza as coisas, basta pensar em um Gaveteiro de Escritório:</p>
<ul>
    <li><strong>O Arquivo de Aço (O Disco Rígido/HD):</strong> É a peça física onde tudo fica guardado.</li>
    <li><strong>A Gaveta (A Pasta Principal):</strong> É onde você separa os grandes temas. Exemplo: Uma gaveta só para "Documentos" e outra só para "Fotos".</li>
    <li><strong>As Pastas de Papel (As Subpastas):</strong> Dentro da gaveta de "Documentos", você pode ter uma pasta de papel só para "Contas a Pagar" e outra para "Contratos". Uma pasta dentro de outra pasta é chamada de Subpasta.</li>
    <li><strong>As Folhas de Papel (Os Arquivos):</strong> São os documentos reais. Uma foto, um texto do Word, uma música ou uma planilha.</li>
</ul>
<div style="background-color: var(--bg-hover); padding: 16px; border-radius: var(--border-radius); border-left: 4px solid var(--accent-color); margin-top: 16px;">
    <p style="margin-bottom: 0;"><strong>💡 Resumo:</strong> Os arquivos são as "folhas" (o conteúdo real). As pastas e subpastas são apenas os "recipientes" para guardar essas folhas de forma organizada.</p>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>📂 Parte 2 – Como Criar e Renomear Pastas</h3>
<p>Criar uma pasta nova é um dos comandos mais usados na informática e é muito simples.</p>
<p><strong>Passo a passo para criar uma pasta:</strong></p>
<ol>
    <li>Vá para a Área de Trabalho (ou abra o Explorador de Arquivos).</li>
    <li>Clique com o Botão Direito do mouse em qualquer espaço vazio.</li>
    <li>No menu que aparecer, posicione a setinha sobre a palavra <strong>Novo</strong>.</li>
    <li>Clique em <strong>Pasta</strong>.</li>
    <li>Uma nova pasta amarela vai aparecer com o nome sublinhado em azul. Não clique fora! Digite imediatamente o nome que você deseja (Ex: Meus Documentos) e aperte a tecla <code>Enter</code> no teclado.</li>
</ol>
<p><strong>Como Renomear (Mudar o nome) de uma pasta:</strong> Se você errou o nome ou quer mudá-lo, não precisa apagar a pasta.</p>
<ol>
    <li>Clique com o Botão Direito em cima da pasta.</li>
    <li>Escolha a opção <strong>Renomear</strong> (ou o ícone de um lápis, no Windows 11).</li>
    <li>Digite o novo nome e aperte <code>Enter</code>.</li>
</ol>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>✂️ Parte 3 – Copiar, Recortar e Colar (A Mágica do Windows)</h3>
<p>Como fazemos para colocar um arquivo que está solto dentro de uma pasta? Usamos três comandos mágicos.</p>
<ul>
    <li><strong>📄 Copiar (Tirar um xerox):</strong> O computador cria uma cópia idêntica do arquivo. O original fica onde estava, e uma cópia vai para o novo lugar.</li>
    <li><strong>✂️ Recortar (Mover de lugar):</strong> O computador tira o arquivo do lugar original e move definitivamente para o novo local.</li>
    <li><strong>📋 Colar (Despejar):</strong> É o comando final. Depois de Copiar ou Recortar, você abre a pasta de destino, clica com o botão direito e escolhe "Colar" para o arquivo aparecer ali.</li>
</ul>
<p><strong>Os Atalhos de Teclado (Para trabalhar mais rápido):</strong> No escritório, profissionais ágeis usam o teclado em vez do mouse para essas ações:</p>
<ul style="list-style-type: none; padding-left: 0;">
    <li><kbd>Ctrl</kbd> + <kbd>C</kbd> : Copia</li>
    <li><kbd>Ctrl</kbd> + <kbd>X</kbd> : Recorta</li>
    <li><kbd>Ctrl</kbd> + <kbd>V</kbd> : Cola</li>
</ul>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<div style="background-color: var(--bg-hover); padding: 24px; border-radius: var(--border-radius); border: 1px solid var(--accent-color); margin-bottom: 24px;">
    <h3 style="margin-top: 0;">🛠️ Guia Rápido: Resolução de Problemas no Dia a Dia</h3>
    <ul>
        <li><strong>Fui criar uma pasta, mas cliquei fora sem querer e ela ficou com o nome "Nova Pasta".</strong>
            <p style="margin-bottom: 16px;"><em>Solução:</em> Basta clicar com o botão direito sobre ela, escolher Renomear, digitar o nome correto e dar Enter.</p>
        </li>
        <li><strong>Recortei um arquivo importante, mas esqueci de colar na pasta certa. Perdi o arquivo?</strong>
            <p style="margin-bottom: 16px;"><em>Solução:</em> Não. Enquanto você não "Colar", o arquivo original não some de onde estava. Pode voltar lá e fazer o processo novamente.</p>
        </li>
        <li><strong>Apaguei uma pasta sem querer!</strong>
            <p style="margin-bottom: 0;"><em>Solução:</em> Calma! Se você não esvaziou a Lixeira, dê um duplo clique no ícone da Lixeira na Área de Trabalho, encontre sua pasta, clique com o botão direito nela e escolha Restaurar. Ela voltará exatamente para o lugar de onde sumiu.</p>
        </li>
    </ul>
</div>

<div style="background-color: var(--bg-main); padding: 24px; border-radius: var(--border-radius); border: 1px dashed var(--border-color);">
    <h3 style="margin-top: 0;">🧠 Atividade Final da Aula (Prática no Computador)</h3>
    <p><strong>📝 Mão na massa:</strong></p>
    <ol style="margin-bottom: 0;">
        <li>Na sua Área de Trabalho, crie uma pasta principal chamada "Meu Curso de Informática".</li>
        <li>Dê um duplo clique para abrir essa pasta. Lá dentro, crie três subpastas: Textos, Imagens e Planilhas.</li>
        <li>Renomeie a pasta Textos para Documentos de Texto.</li>
        <li>Desafio do Teclado: No Bloco de Notas, digite seu nome, selecione o texto, aperte <kbd>Ctrl</kbd> + <kbd>C</kbd> e depois aperte <kbd>Ctrl</kbd> + <kbd>V</kbd> cinco vezes seguidas para ver a mágica da cópia acontecer.</li>
    </ol>
</div>`
                },
                {
                    id: "2-2",
                    title: "Aula 02: Criação e gerenciamento de subpastas",
                    duration: "Leitura (20 min)",
                    videoUrl: "https://www.youtube.com/embed/o1FiPSv60aY",
                    content: `<h2>📘 Apostila – Módulo 2 | Aula 2</h2>
<h3>Tema: Criação e Gerenciamento Avançado de Subpastas</h3>
<p>Na aula anterior, aprendemos que uma pasta serve para guardar arquivos. Mas o que acontece quando uma pasta fica cheia demais? A solução é criar "pastas dentro de pastas". A essas pastas internas damos o nome de <strong>Subpastas</strong>. Hoje, vamos dominar a arte de organizar informações como um verdadeiro profissional de escritório.</p>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🌳 Parte 1 – A Lógica da Árvore (Hierarquia de Pastas)</h3>
<p>O Windows organiza os arquivos usando um sistema de <strong>Hierarquia</strong>, que funciona exatamente como os galhos de uma árvore.</p>
<ul>
    <li><strong>O Tronco (Pasta Principal):</strong> É o assunto geral. Exemplo: Pasta "Empresa".</li>
    <li><strong>Os Galhos Maiores (Subpastas de Nível 1):</strong> Dividem o assunto principal. Exemplo: Subpastas "Financeiro", "RH" e "Vendas".</li>
    <li><strong>Os Galhos Menores (Subpastas de Nível 2):</strong> Detalham ainda mais. Exemplo: Dentro de "Financeiro", criamos as subpastas "Ano 2025" e "Ano 2026".</li>
    <li><strong>As Folhas (Os Arquivos):</strong> São os documentos finais, como a planilha de janeiro, que ficará guardada lá no final do caminho.</li>
</ul>
<div style="background-color: var(--bg-hover); padding: 16px; border-radius: var(--border-radius); border-left: 4px solid var(--accent-color); margin-top: 16px;">
    <p style="margin-bottom: 0;"><strong>💡 A grande vantagem:</strong> Se o seu chefe pedir o "Recibo de Março de 2026 do RH", você não precisa procurar em 5.000 arquivos misturados. Você vai direto na "gaveta" certa!</p>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🗺️ Parte 2 – O Caminho do Arquivo (A Barra de Endereços)</h3>
<p>Quando você entra em várias subpastas, como saber onde você está? O Windows tem um "GPS" para isso, chamado <strong>Barra de Endereços</strong>, que fica na parte de cima da janela.</p>
<p>Se você abrir a pasta do RH do ano de 2026, a barra de endereços mostrará o Caminho do Arquivo assim:<br>
<code>Este Computador > Área de Trabalho > Empresa > RH > 2026</code></p>
<ul>
    <li><strong>Dica de Navegação:</strong> Se você quiser voltar rapidamente para a pasta "Empresa", não precisa fechar a janela. Basta clicar na palavra "Empresa" lá na barra de endereços, e o Windows "volta" para a pasta anterior automaticamente!</li>
</ul>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🖱️ Parte 3 – Seleção Múltipla e "Arrastar e Soltar"</h3>
<p>Trabalhar movendo um arquivo de cada vez demora muito. Veja como selecionar e mover dezenas de arquivos de uma só vez:</p>
<ul>
    <li><strong>Para selecionar vários arquivos em sequência:</strong> Clique no primeiro arquivo, segure a tecla <kbd>Shift</kbd> no teclado e clique no último arquivo. Todos do meio ficarão azuis (selecionados).</li>
    <li><strong>Para selecionar arquivos alternados (pingados):</strong> Segure a tecla <kbd>Ctrl</kbd> no teclado e vá clicando apenas nos arquivos que você quer.</li>
    <li><strong>Para selecionar TUDO de uma vez:</strong> Use o atalho mágico <kbd>Ctrl</kbd> + <kbd>A</kbd> (A de All, que significa "Tudo" em inglês).</li>
</ul>
<p><strong>Arrastar e Soltar (Drag and Drop):</strong> Em vez de usar o botão direito para "Recortar e Colar", você pode simplesmente clicar em um arquivo selecionado, segurar o botão do mouse apertado e arrastar o arquivo para dentro da subpasta desejada. Solte o botão e pronto, o arquivo foi movido!</p>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<div style="background-color: var(--bg-hover); padding: 24px; border-radius: var(--border-radius); border: 1px solid var(--accent-color); margin-bottom: 24px;">
    <h3 style="margin-top: 0;">🛠️ Guia Rápido: Resolução de Problemas no Dia a Dia</h3>
    <ul>
        <li><strong>Arrastei uma pasta inteira para o lugar errado sem querer. E agora?</strong>
            <p style="margin-bottom: 16px;"><em>A solução mágica:</em> Use o atalho <kbd>Ctrl</kbd> + <kbd>Z</kbd> (Desfazer). O Windows vai cancelar o seu último movimento e a pasta voltará para onde estava antes do erro.</p>
        </li>
        <li><strong>Tenho uma pasta "Fotos" e lá dentro criei uma subpasta "Fotos". O computador não deixa!</strong>
            <p style="margin-bottom: 16px;"><em>A solução:</em> O Windows não permite que duas pastas tenham exatamente o mesmo nome dentro do mesmo lugar. Mude o nome para algo mais específico, como "Fotos de Viagem".</p>
        </li>
        <li><strong>Fui selecionar vários arquivos com o "Ctrl", mas acabei criando várias cópias deles na tela!</strong>
            <p style="margin-bottom: 0;"><em>A solução:</em> Você arrastou os arquivos enquanto segurava o Ctrl (isso é um atalho para copiar). Dê um clique duplo na Lixeira ou aperte <kbd>Ctrl</kbd> + <kbd>Z</kbd> para desfazer e apagar as cópias indesejadas.</p>
        </li>
    </ul>
</div>

<div style="background-color: var(--bg-main); padding: 24px; border-radius: var(--border-radius); border: 1px dashed var(--border-color);">
    <h3 style="margin-top: 0;">🧠 Atividade Final da Aula (Prática no Computador)</h3>
    <p><strong>📝 Mão na massa - O Desafio da Organização:</strong></p>
    <ol style="margin-bottom: 0;">
        <li>Na sua Área de Trabalho, crie uma pasta principal chamada "Organização Pessoal".</li>
        <li>Entre nela e crie três subpastas: "Finanças", "Estudos" e "Lazer".</li>
        <li>Entre na pasta "Finanças" e crie duas subpastas: "Contas Pagas" e "Contas a Pagar".</li>
        <li>Crie um arquivo de Bloco de Notas vazio com o nome "Conta de Luz". Usando o mouse, arraste esse arquivo para dentro da subpasta "Contas a Pagar".</li>
    </ol>
</div>`
                },
                {
                    id: "2-3",
                    title: "Aula 03: Personalização do desktop e atalhos",
                    duration: "Leitura (20 min)",
                    videoUrl: "https://www.youtube.com/embed/o1FiPSv60aY",
                    content: `<h2>📘 Apostila – Módulo 2 | Aula 3</h2>
<h3>Tema: Personalização do Desktop e Atalhos</h3>
<p>Imagine chegar no seu escritório e poder escolher a cor das paredes, o quadro que fica de frente para você e onde cada ferramenta de trabalho deve ficar. No Windows, você pode fazer exatamente isso! Hoje vamos aprender a deixar o computador com a sua "cara" e a criar atalhos para que você não perca tempo procurando seus programas favoritos.</p>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🎨 Parte 1 – A Estética (Papel de Parede e Cores)</h3>
<p>A Área de Trabalho (Desktop) é o seu ambiente principal. Trabalhar olhando para uma imagem que você gosta ou com cores confortáveis ajuda na produtividade.</p>
<p><strong>1. Trocando o Papel de Parede (Tela de Fundo):</strong></p>
<ol>
    <li>Vá para a Área de Trabalho (feche ou minimize todas as janelas).</li>
    <li>Clique com o Botão Direito do mouse em um espaço vazio.</li>
    <li>Escolha <strong>Personalizar</strong>.</li>
    <li>Na tela de fundo, você pode escolher uma "Imagem" (e clicar em Procurar para usar uma foto sua) ou uma "Cor Sólida" (ótimo para evitar distrações no escritório).</li>
</ol>
<p><strong>2. O Modo Escuro (Descansando os olhos):</strong> Se você passa 8 horas por dia na frente do PC, a tela muito branca pode cansar a visão.</p>
<ul>
    <li>Ainda na tela de Personalização, clique em <strong>Cores</strong> no menu lateral.</li>
    <li>Mude a opção "Escolher a cor" de Claro para <strong>Escuro</strong>. As janelas e menus ficarão com um fundo preto ou cinza escuro, muito mais confortável para ler textos longos!</li>
</ul>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🔗 Parte 2 – O Poder dos Atalhos (A Setinha Azul)</h3>
<p>Se você usa muito um arquivo (como uma planilha de clientes) que está guardado lá no fundo da gaveta (numa subpasta), não precisa abrir 5 pastas diferentes todos os dias para chegar nele. Você cria um Atalho.</p>
<ul>
    <li><strong>O que é um Atalho?</strong> É como um "teletransporte". O arquivo original continua guardado no lugar certo e seguro, mas você cria um botão na Área de Trabalho que leva você direto para ele. Todo atalho tem um desenho de uma pequena setinha azul no canto do ícone.</li>
    <li><strong>Como criar um atalho na Área de Trabalho:</strong>
        <ol style="margin-top: 8px;">
            <li>Encontre o arquivo, pasta ou programa original.</li>
            <li>Clique sobre ele com o Botão Direito.</li>
            <li>Vá em <strong>Enviar para</strong> e clique em <strong>Área de Trabalho (criar atalho)</strong>. Pronto!</li>
        </ol>
    </li>
</ul>
<div style="background-color: var(--bg-hover); padding: 16px; border-radius: var(--border-radius); border-left: 4px solid #ef4444; margin-top: 16px;">
    <p style="margin-bottom: 0;"><strong>🚨 Regra de Ouro:</strong> Apagar um atalho (jogar na Lixeira) NÃO apaga o arquivo original. Você está apenas jogando fora o botão de acesso.</p>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>📌 Parte 3 – Fixando na Barra de Tarefas</h3>
<p>A Área de Trabalho é boa, mas se você estiver com o Word aberto em tela cheia, não conseguirá ver seus atalhos. A forma mais profissional de acessar seus programas favoritos é "fixá-los" na Barra de Tarefas (a barra inferior da tela).</p>
<ol>
    <li>Abra o Menu Iniciar e procure o programa que você mais usa (Ex: Calculadora ou Google Chrome).</li>
    <li>Clique sobre ele com o Botão Direito.</li>
    <li>Escolha <strong>Fixar na barra de tarefas</strong>.</li>
    <li>O ícone ficará preso lá embaixo para sempre. Você pode até clicar nele e arrastar para os lados para organizar a ordem dos botões!</li>
</ol>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<div style="background-color: var(--bg-hover); padding: 24px; border-radius: var(--border-radius); border: 1px solid var(--accent-color); margin-bottom: 24px;">
    <h3 style="margin-top: 0;">🛠️ Guia Rápido: Resolução de Problemas no Dia a Dia</h3>
    <ul>
        <li><strong>Meus ícones da Área de Trabalho sumiram todos de uma vez!</strong>
            <p style="margin-bottom: 16px;"><em>A solução:</em> Alguém ocultou os ícones (às vezes esbarrando no mouse). Clique com o botão direito em um espaço vazio da Área de Trabalho > Exibir > e marque a opção Mostrar ícones da área de trabalho.</p>
        </li>
        <li><strong>Coloquei uma foto minha de Papel de Parede, mas ela ficou embaçada e cortada.</strong>
            <p style="margin-bottom: 16px;"><em>A solução:</em> A foto é muito pequena para o tamanho da sua tela. Na tela de Personalização (onde você escolheu a foto), procure a opção "Escolher um ajuste" e mude de "Preencher" para Ajustar ou Centralizar.</p>
        </li>
        <li><strong>A Barra de Tarefas foi parar no lado direito ou no topo da tela!</strong>
            <p style="margin-bottom: 0;"><em>A solução:</em> Clique com o botão direito sobre a Barra de Tarefas e desmarque a opção "Bloquear a barra de tarefas". Agora, clique nela, segure o botão do mouse apertado e arraste-a de volta para baixo. Depois, bloqueie novamente.</p>
        </li>
    </ul>
</div>

<div style="background-color: var(--bg-main); padding: 24px; border-radius: var(--border-radius); border: 1px dashed var(--border-color);">
    <h3 style="margin-top: 0;">🧠 Atividade Final da Aula (Prática no Computador)</h3>
    <p><strong>📝 Mão na massa:</strong></p>
    <ol style="margin-bottom: 0;">
        <li>Altere o Papel de Parede do seu computador para uma imagem diferente da atual e mude o esquema de Cores para o "Modo Escuro".</li>
        <li>Crie uma pasta chamada "Projetos" nos seus Meus Documentos. Em seguida, crie um Atalho dessa pasta na sua Área de Trabalho.</li>
        <li>Encontre o programa Bloco de Notas no Menu Iniciar e fixe-o na sua Barra de Tarefas.</li>
        <li>Feche todos os programas e exclua o atalho que você criou na Área de Trabalho (jogando-o na lixeira). Verifique se a pasta original "Projetos" sumiu dos Meus Documentos (Spoiler: não sumiu!).</li>
    </ol>
</div>`
                },
                {
                    id: "2-4",
                    title: "Aula 04: Armazenamento Móvel (Uso Seguro de Pen Drives)",
                    duration: "Leitura (20 min)",
                    videoUrl: "https://www.youtube.com/embed/o1FiPSv60aY",
                    content: `<h2>📘 Apostila – Módulo 2 | Aula 4</h2>
<h3>Tema: Armazenamento Móvel (Uso Seguro de Pen Drives e HDs Externos)</h3>
<p>Até agora, aprendemos a organizar os arquivos dentro do nosso próprio computador. Mas e quando precisamos levar um documento importante para a gráfica, entregar um currículo em outro local ou simplesmente fazer um backup (cópia de segurança) das nossas fotos? Para isso, usamos o <strong>Armazenamento Móvel</strong>.</p>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>💾 Parte 1 – O que são Pen Drives e HDs Externos?</h3>
<p>Ambos servem para a mesma coisa: guardar arquivos fora do computador. A diferença está no tamanho físico e na capacidade.</p>
<ul>
    <li><strong>Pen Drive:</strong> É pequeno, leve e cabe no bolso. Usa memória "Flash" (como a do celular). É ideal para transportar arquivos do dia a dia, como textos, planilhas e algumas fotos.</li>
    <li><strong>HD Externo:</strong> É literalmente um disco rígido (como o que existe dentro do computador) colocado em uma caixinha com um cabo USB. Ele é maior e tem uma capacidade gigantesca. É ideal para fazer o backup de todo o seu computador ou guardar milhares de vídeos pesados.</li>
</ul>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🔌 Parte 2 – Como Conectar e Encontrar o Pen Drive</h3>
<p>Quando você espeta um Pen Drive ou HD Externo na porta USB do computador, o Windows reconhece o aparelho automaticamente.</p>
<p><strong>Como acessar o que tem lá dentro:</strong></p>
<ol>
    <li>Conecte o aparelho na porta USB.</li>
    <li>Abra o <strong>Explorador de Arquivos</strong> (a pastinha amarela que fica na Barra de Tarefas).</li>
    <li>No menu lateral esquerdo, clique em <strong>Este Computador</strong>.</li>
    <li>Procure na tela principal a seção "Unidades e Dispositivos". O seu Disco Local (C:) é o computador. O seu Pen Drive aparecerá ao lado dele, geralmente com o nome da marca (Ex: Kingston, SanDisk) e uma letra nova, como (E:) ou (F:).</li>
    <li>Dê um clique duplo para entrar nele, como se fosse uma pasta normal!</li>
</ol>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🚚 Parte 3 – Copiando Arquivos (O Perigo dos Atalhos)</h3>
<p>Para colocar um arquivo dentro do Pen Drive, usamos as regras que aprendemos na Aula 1 (Copiar e Colar).</p>
<p>Você pode selecionar os arquivos no seu computador, apertar <kbd>Ctrl</kbd> + <kbd>C</kbd>, abrir a janela do Pen Drive e apertar <kbd>Ctrl</kbd> + <kbd>V</kbd>. Ou pode usar a função rápida:</p>
<ul>
    <li><strong>Enviar para:</strong> Clique com o botão direito no arquivo > vá em <strong>Enviar para</strong> > clique no nome do seu Pen Drive.</li>
</ul>
<div style="background-color: var(--bg-hover); padding: 16px; border-radius: var(--border-radius); border-left: 4px solid #ef4444; margin-top: 16px;">
    <p style="margin-bottom: 0;"><strong>🚨 O Erro Mais Comum do Iniciante (Cuidado com o Atalho!):</strong> Nunca arraste um arquivo para o Pen Drive segurando o atalho da Área de Trabalho (aqueles ícones com uma setinha azul no canto). Se você fizer isso, estará copiando apenas o "caminho" e não o arquivo real. Quando você chegar em outro computador, o arquivo não vai abrir. Copie sempre o documento original!</p>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🛑 Parte 4 – Remoção Segura (Como não perder tudo)</h3>
<p>Este é o ponto mais importante da aula! NUNCA puxe o Pen Drive ou HD Externo do computador enquanto ele estiver em uso. O Windows pode estar gravando dados invisíveis nele. Se você puxar de uma vez, pode "queimar" o dispositivo ou corromper (estragar) os arquivos.</p>
<p><strong>O Jeito Certo de Tirar o Pen Drive (Ejetar):</strong></p>
<ol>
    <li>Feche todos os arquivos ou fotos que você abriu diretamente do Pen Drive.</li>
    <li>Vá até a <strong>Área de Notificação</strong> (no canto inferior direito, perto do relógio).</li>
    <li>Procure o ícone de um Pen Drive pequenininho (se não estiver vendo, clique na setinha apontada para cima para mostrar os ícones ocultos).</li>
    <li>Clique nesse ícone e escolha <strong>"Ejetar [Nome do Pen Drive]"</strong>.</li>
    <li>Aguarde a mensagem na tela: <em>"O hardware pode ser removido com segurança"</em>. Agora sim, você pode puxar o cabo!</li>
</ol>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<div style="background-color: var(--bg-hover); padding: 24px; border-radius: var(--border-radius); border: 1px solid var(--accent-color); margin-bottom: 24px;">
    <h3 style="margin-top: 0;">🛠️ Guia Rápido: Resolução de Problemas no Dia a Dia</h3>
    <ul>
        <li><strong>Coloquei o Pen Drive e apareceu uma mensagem: "É necessário formatar o disco antes de usá-lo". O que eu faço?</strong>
            <p style="margin-bottom: 16px;"><em>A solução:</em> NÃO CLIQUE EM FORMATAR! Formatar significa APAGAR TUDO. Essa mensagem aparece quando o Pen Drive foi retirado incorretamente no passado e corrompeu. Tente ejetar, trocar de porta USB ou testar em outro computador.</p>
        </li>
        <li><strong>Tento ejetar o Pen Drive, mas o Windows diz: "O dispositivo está em uso".</strong>
            <p style="margin-bottom: 0;"><em>A solução:</em> Você esqueceu alguma janela, arquivo de texto ou foto aberta que pertence ao Pen Drive. Feche tudo. Se ainda assim não der, desligue o computador completamente e só então retire o Pen Drive.</p>
        </li>
    </ul>
</div>

<div style="background-color: var(--bg-main); padding: 24px; border-radius: var(--border-radius); border: 1px dashed var(--border-color);">
    <h3 style="margin-top: 0;">🧠 Atividade Final da Aula (Prática no Computador)</h3>
    <p><strong>📝 Mão na massa:</strong></p>
    <ol style="margin-bottom: 0;">
        <li>Conecte um Pen Drive na porta USB.</li>
        <li>Abra o "Este Computador" e descubra qual Letra (ex: E: ou F:) o Windows deu para ele.</li>
        <li>Crie um arquivo de Bloco de Notas na sua Área de Trabalho com o nome "Teste de Backup".</li>
        <li>Copie esse arquivo e Cole dentro do seu Pen Drive.</li>
        <li>Feche a janela e faça o processo de Remoção Segura (Ejetar) antes de desconectar fisicamente.</li>
    </ol>
</div>`
                },
                {
                    id: "2-5",
                    title: "Aula 05: Tipos de Arquivos e Extensões (PDF, JPG, DOCX)",
                    duration: "Leitura (20 min)",
                    videoUrl: "https://www.youtube.com/embed/o1FiPSv60aY",
                    content: `<h2>📘 Apostila – Módulo 2 | Aula 5</h2>
<h3>Tema: Tipos de Arquivos e Extensões (PDF, JPG, DOCX)</h3>
<p>Você já percebeu que alguns arquivos têm o desenho do Word, outros parecem uma foto e outros abrem direto no navegador de internet? Como o Windows sabe qual programa usar para abrir cada coisa? Ele descobre isso lendo o "sobrenome" do arquivo, que na informática nós chamamos de <strong>Extensão</strong>.</p>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🏷️ Parte 1 – O "Nome e o Sobrenome" do Arquivo</h3>
<p>Todo arquivo salvo no computador tem um nome (que você escolhe) e uma extensão (que o programa coloca automaticamente, separada por um ponto).</p>
<ul>
    <li><strong>Exemplo:</strong> <code>Curriculo.docx</code>
        <ul style="margin-top: 8px;">
            <li><strong>Nome:</strong> Curriculo (Você digitou).</li>
            <li><strong>Extensão:</strong> .docx (O Windows sabe que isso é um documento de texto).</li>
        </ul>
    </li>
</ul>
<p>Se o arquivo não tiver esse "sobrenome", o Windows fica confuso, mostra um ícone de uma folha em branco e pergunta: <em>"Como você deseja abrir este arquivo?"</em></p>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🗂️ Parte 2 – Os Principais Tipos de Arquivos do Dia a Dia</h3>
<p>No ambiente de escritório, você vai lidar basicamente com quatro grandes famílias de arquivos. Conhecer a extensão deles é fundamental:</p>
<p><strong>1. Arquivos de Texto e Documentos:</strong></p>
<ul>
    <li><code>.docx</code> : É o padrão do Microsoft Word. Usado para textos, relatórios e currículos editáveis.</li>
    <li><code>.txt</code> : É o texto puro, criado pelo Bloco de Notas. Não aceita cores nem imagens, só letras.</li>
    <li><code>.xlsx</code> : É o formato do Microsoft Excel. Usado para planilhas financeiras e tabelas.</li>
</ul>
<p><strong>2. O Rei dos Documentos: O formato .PDF</strong></p>
<ul>
    <li><code>.pdf</code> (Portable Document Format): É o formato universal. A grande mágica do PDF é que ele "congela" o documento. Se você fizer um currículo no Word e enviar para uma empresa em formato .docx, a formatação pode bagunçar no computador deles. Se você salvar como .pdf, o currículo abrirá perfeitamente em qualquer PC ou celular do mundo, sem sair do lugar.</li>
</ul>
<div style="background-color: var(--bg-hover); padding: 16px; border-radius: var(--border-radius); border-left: 4px solid var(--accent-color); margin-top: 16px; margin-bottom: 16px;">
    <p style="margin-bottom: 0;"><strong>💡 Regra de ouro:</strong> Currículos e contratos sempre se enviam em PDF!</p>
</div>
<p><strong>3. Arquivos de Imagem (Fotos e Gráficos):</strong></p>
<ul>
    <li><code>.jpg</code> ou <code>.jpeg</code> : É o formato de foto mais famoso do mundo. Quase todas as fotos do seu celular e da internet estão nesse formato.</li>
    <li><code>.png</code> : É uma imagem com mais qualidade e que suporta "fundo transparente" (muito usado em logotipos de empresas).</li>
</ul>
<p><strong>4. Arquivos de Áudio e Vídeo:</strong></p>
<ul>
    <li><code>.mp3</code> : Formato padrão de música e áudio.</li>
    <li><code>.mp4</code> : Formato padrão de vídeo. É o que usamos no YouTube e nas câmeras dos celulares.</li>
</ul>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<div style="background-color: var(--bg-hover); padding: 24px; border-radius: var(--border-radius); border: 1px solid #ef4444; margin-bottom: 24px;">
    <h3 style="margin-top: 0; color: #ef4444;">⚠️ Parte 3 – Extensões Perigosas (Cuidado com os Vírus!)</h3>
    <p>Como o Windows obedece às extensões, pessoas mal-intencionadas criam arquivos perigosos.</p>
    <ul>
        <li><code>.exe</code> (Executável): É o formato usado para instalar programas. <strong>Atenção:</strong> Se você receber um e-mail dizendo "Veja suas fotos da festa" e o arquivo terminar em <em>foto.exe</em>, não clique! Uma foto nunca será .exe. Isso é um vírus tentando ser instalado no seu computador.</li>
    </ul>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<div style="background-color: var(--bg-hover); padding: 24px; border-radius: var(--border-radius); border: 1px solid var(--accent-color); margin-bottom: 24px;">
    <h3 style="margin-top: 0;">🛠️ Guia Rápido: Resolução de Problemas no Dia a Dia</h3>
    <ul>
        <li><strong>Fui renomear um arquivo, apaguei o finalzinho dele sem querer e agora o ícone ficou branco e não abre!</strong>
            <p style="margin-bottom: 16px;"><em>A solução:</em> Você apagou a extensão! Basta clicar com o botão direito, escolher Renomear e digitar o ponto e a extensão correta no final novamente (ex: adicionar o .jpg se for uma foto). O ícone voltará ao normal.</p>
        </li>
        <li><strong>Baixei um documento e ele não abre de jeito nenhum. Meu Windows está quebrado?</strong>
            <p style="margin-bottom: 0;"><em>A solução:</em> Provavelmente não. Se você baixou um arquivo .pdf mas não tem nenhum leitor de PDF (ou um navegador de internet atualizado) instalado, o Windows não saberá como ler a informação. Você precisa instalar o programa certo para aquele "sobrenome".</p>
        </li>
    </ul>
</div>

<div style="background-color: var(--bg-main); padding: 24px; border-radius: var(--border-radius); border: 1px dashed var(--border-color);">
    <h3 style="margin-top: 0;">🧠 Atividade Final da Aula (Prática no Computador)</h3>
    <p><strong>📝 Mão na massa:</strong></p>
    <ol style="margin-bottom: 0;">
        <li>Abra o Word (ou o WordPad) e digite: "Meu nome é [Seu Nome] e este é um teste de extensões."</li>
        <li>Vá em Arquivo > Salvar Como. Salve na Área de Trabalho com o nome "Teste Word" (ele salvará como .docx ou .rtf).</li>
        <li>Agora, vá novamente em Salvar Como, mas mude a opção "Tipo" para PDF. Salve na Área de Trabalho com o nome "Teste PDF".</li>
        <li>Feche o programa. Vá até a Área de Trabalho, abra os dois arquivos e veja a diferença de como o Windows trata cada um deles!</li>
    </ol>
</div>`
                },
                {
                    id: "2-6",
                    title: "Aula 06: Configurações básicas do Windows",
                    duration: "Leitura (20 min)",
                    videoUrl: "https://www.youtube.com/embed/o1FiPSv60aY",
                    content: `<h2>📘 Apostila – Módulo 2 | Aula 6</h2>
<h3>Tema: Personalização e Configurações Básicas do Windows</h3>
<p>Até agora, aprendemos a organizar nossos arquivos e entender os programas. Mas como fazemos para deixar o computador com a nossa cara? E se precisarmos conectar no Wi-Fi ou apagar um programa que não usamos mais? Hoje, vamos conhecer o "Painel de Controle" moderno do Windows.</p>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>⚙️ Parte 1 – O Menu de Configurações (A Engrenagem)</h3>
<p>No passado, tudo no Windows era ajustado pelo "Painel de Controle" clássico. Hoje, a Microsoft facilitou muito as coisas. Para ajustar qualquer coisa no seu computador, basta procurar pelo ícone da <strong>Engrenagem</strong>.</p>
<p><strong>Como acessar:</strong></p>
<ol>
    <li>Clique no <strong>Menu Iniciar</strong>.</li>
    <li>Clique no ícone de engrenagem chamado <strong>Configurações</strong>.</li>
    <li>Uma tela se abrirá com categorias bem simples: Sistema, Dispositivos, Rede, Personalização e Aplicativos.</li>
</ol>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🎨 Parte 2 – Personalizando o seu Ambiente</h3>
<p>A Área de Trabalho é sua mesa virtual, e você pode decorá-la como quiser.</p>
<p><strong>Como trocar o Papel de Parede (Fundo da Tela):</strong></p>
<ol>
    <li>Vá para a Área de Trabalho (feche ou minimize todas as janelas).</li>
    <li>Clique com o <strong>Botão Direito</strong> do mouse em um espaço vazio.</li>
    <li>Escolha a opção <strong>Personalizar</strong>.</li>
    <li>Na tela que se abrir, na seção "Tela de Fundo", você pode escolher "Imagem" e clicar em <strong>Procurar</strong> para escolher uma foto sua, ou selecionar as imagens bonitas que já vêm no Windows.</li>
</ol>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>📶 Parte 3 – Conectando-se à Internet (Wi-Fi e Cabo)</h3>
<p>No ambiente de trabalho ou em casa, saber conectar o computador à rede é essencial.</p>
<ul>
    <li><strong>Conexão por Cabo:</strong> Como vimos na aula de Hardware, se você conectar o cabo de rede (RJ-45) atrás do gabinete, o Windows reconhece a internet na hora. O ícone perto do relógio mudará para o desenho de um "computadorzinho com um cabo".</li>
    <li><strong>Conexão Wi-Fi (Sem fio):</strong> Se você usa notebook ou um PC com antena:
        <ol style="margin-top: 8px;">
            <li>Clique no ícone de "Globo" ou nas "Barrinhas de sinal" perto do relógio.</li>
            <li>Escolha o nome da rede (SSID) da sua empresa ou casa.</li>
            <li>Clique em <strong>Conectar</strong>, digite a senha com cuidado (atenção às letras maiúsculas) e pronto!</li>
        </ol>
    </li>
</ul>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🗑️ Parte 4 – Como Desinstalar Programas (O jeito certo!)</h3>
<div style="background-color: var(--bg-hover); padding: 16px; border-radius: var(--border-radius); border-left: 4px solid #ef4444; margin-bottom: 16px;">
    <p style="margin-bottom: 0;"><strong>🚨 Erro Clássico:</strong> Querer apagar um programa simplesmente jogando o ícone dele na Lixeira não apaga o programa, apenas exclui o atalho! O programa continuará roubando espaço no seu HD.</p>
</div>
<p><strong>O passo a passo correto:</strong></p>
<ol>
    <li>Abra o Menu Iniciar e clique em <strong>Configurações</strong> (a engrenagem).</li>
    <li>Clique na categoria <strong>Aplicativos</strong>.</li>
    <li>O Windows vai listar tudo o que está instalado. Role a lista, encontre o programa que deseja remover e dê um clique nele.</li>
    <li>Clique no botão <strong>Desinstalar</strong> e siga os passos na tela. O Windows removerá todas as raízes desse programa do seu computador de forma limpa e segura.</li>
</ol>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<div style="background-color: var(--bg-hover); padding: 24px; border-radius: var(--border-radius); border: 1px solid var(--accent-color); margin-bottom: 24px;">
    <h3 style="margin-top: 0;">🛠️ Guia Rápido: Resolução de Problemas no Dia a Dia</h3>
    <ul>
        <li><strong>O teclado está digitando errado (Aperto o "Ç" e sai o símbolo ";").</strong>
            <p style="margin-bottom: 16px;"><em>A solução:</em> O padrão do seu teclado foi alterado. Perto do relógio, procure as letras "POR" ou "ENG". Clique nelas e mude para Português (Brasil ABNT2). Isso fará as teclas voltarem a bater com as letras impressas no plástico.</p>
        </li>
        <li><strong>O som do computador sumiu.</strong>
            <p style="margin-bottom: 0;"><em>A solução:</em> Primeiro, olhe perto do relógio se o ícone do alto-falante não está com um "X" (Mudo). Depois, confira fisicamente se o cabo da caixa de som verde (P2) não se soltou do gabinete.</p>
        </li>
    </ul>
</div>

<div style="background-color: var(--bg-main); padding: 24px; border-radius: var(--border-radius); border: 1px dashed var(--border-color);">
    <h3 style="margin-top: 0;">🧠 Atividade Final da Aula (Prática no Computador)</h3>
    <p><strong>📝 Mão na massa:</strong></p>
    <ol style="margin-bottom: 0;">
        <li>Altere o Papel de Parede do seu computador para uma imagem que você goste (ou para a cor preta sólida).</li>
        <li>Desconecte o Wi-Fi do seu computador (se estiver no notebook) e conecte novamente digitando a senha.</li>
        <li>Abra as Configurações > Aplicativos, procure o programa "Calculadora" (Apenas olhe! Não clique em desinstalar, apenas faça o caminho para saber onde ele fica).</li>
    </ol>
</div>`
                },
                {
                    id: "2-7",
                    title: "Aula 07: Atualizações e segurança no sistema",
                    duration: "Leitura (20 min)",
                    videoUrl: "https://www.youtube.com/embed/o1FiPSv60aY",
                    content: `<h2>📘 Apostila – Módulo 2 | Aula 7</h2>
<h3>Tema: Atualizações e Segurança do Sistema</h3>
<p>Sabe aquela mensagem chata de "Atualizando o Windows, não desligue o computador" bem na hora em que você está com pressa? Muitas pessoas odeiam isso, mas hoje vamos entender por que essa é a ação mais importante para a saúde e a segurança da sua máquina.</p>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🔄 Parte 1 – Windows Update (O Mecânico do PC)</h3>
<p>Imagine que o Windows é uma casa recém-construída. Com o tempo, os engenheiros descobrem que uma fechadura veio com defeito ou que o telhado pode vazar. As <strong>Atualizações</strong> são os "consertos" que a Microsoft envia pela internet para reforçar a sua casa.</p>
<p>A ferramenta que faz isso se chama <strong>Windows Update</strong>.</p>
<ul>
    <li><strong>Por que atualizar?</strong> Além de trazer novos recursos e mudar o visual, as atualizações fecham "buracos" de segurança que os hackers descobrem. Um computador desatualizado é um alvo fácil para vírus.</li>
    <li><strong>Como verificar se o seu PC está atualizado:</strong>
        <ol style="margin-top: 8px;">
            <li>Clique no Menu Iniciar e depois em <strong>Configurações</strong> (Engrenagem).</li>
            <li>Vá na seção <strong>Atualização e Segurança</strong> (ou Windows Update).</li>
            <li>Clique no botão <strong>Verificar se há atualizações</strong>. Se houver alguma pendente, o Windows vai baixar e instalar sozinho.</li>
        </ol>
    </li>
</ul>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🛡️ Parte 2 – Antivírus e Windows Defender (O Segurança da Porta)</h3>
<p>Antigamente, quando você comprava um computador, a primeira coisa a fazer era pagar por um antivírus pesado (como Avast, AVG ou Norton). Hoje as coisas mudaram!</p>
<p>O Windows 10 e o Windows 11 já vêm com um antivírus excelente, gratuito e embutido no sistema: o <strong>Segurança do Windows</strong> (Windows Defender).</p>
<ul>
    <li>Ele funciona de forma invisível. Se você baixar um arquivo perigoso da internet, ele bloqueia automaticamente e manda uma notificação no canto da tela.</li>
    <li><strong>Como fazer uma verificação manual (Procurar vírus):</strong>
        <ol style="margin-top: 8px;">
            <li>Vá no Menu Iniciar e digite <strong>Segurança do Windows</strong>.</li>
            <li>Clique em <strong>Proteção contra vírus e ameaças</strong>.</li>
            <li>Clique no botão <strong>Verificação Rápida</strong>. O sistema vai varrer o computador procurando invasores e apagar o que achar de errado.</li>
        </ol>
    </li>
</ul>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<div style="background-color: var(--bg-hover); padding: 24px; border-radius: var(--border-radius); border-left: 4px solid #f59e0b; margin-bottom: 24px;">
    <h3 style="margin-top: 0; color: #f59e0b;">⚠️ Parte 3 – Permissões de Administrador (A Tela Escura)</h3>
    <p>Você já foi instalar um programa e, de repente, a tela inteira escureceu e apareceu uma caixa perguntando: <em>"Deseja permitir que este aplicativo faça alterações no seu dispositivo?"</em></p>
    <p>Isso se chama <strong>Controle de Conta de Usuário (UAC)</strong>. É a última linha de defesa do Windows.</p>
    <ul>
        <li>O computador está dizendo: "Olha, tem um programa querendo mexer profundamente no sistema. Foi você quem pediu?"</li>
        <li>Se você estiver instalando um programa que você baixou (ex: Google Chrome, Zoom), clique em <strong>Sim</strong>.</li>
        <li><strong>ALERTA:</strong> Se você estiver apenas navegando na internet e essa tela aparecer "do nada", clique em <strong>Não</strong> imediatamente! Pode ser um vírus tentando entrar sem ser convidado.</li>
    </ul>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<div style="background-color: var(--bg-hover); padding: 24px; border-radius: var(--border-radius); border: 1px solid var(--accent-color); margin-bottom: 24px;">
    <h3 style="margin-top: 0;">🛠️ Guia Rápido: Resolução de Problemas no Dia a Dia</h3>
    <ul>
        <li><strong>Fui desligar o computador para ir embora e ele começou a atualizar e demorar muito.</strong>
            <p style="margin-bottom: 16px;"><em>A solução:</em> Paciência é a única solução segura. Nunca tire o computador da tomada durante esse processo. O Windows está trocando arquivos vitais. Se você desligar à força, o sistema corrompe e o computador pode não ligar no dia seguinte.</p>
        </li>
        <li><strong>Tentei baixar um programa para o trabalho, mas o Windows Defender bloqueou dizendo que é vírus.</strong>
            <p style="margin-bottom: 16px;"><em>A solução:</em> Confie no Windows. Muitas vezes programas "piratas" ou baixados de sites suspeitos vêm com vírus escondidos. O bloqueio é para a sua segurança.</p>
        </li>
        <li><strong>Meu computador ficou extremamente lento de repente!</strong>
            <p style="margin-bottom: 0;"><em>A solução:</em> Vá no Windows Update e veja se ele está baixando uma atualização grande em segundo plano. Se estiver, deixe ele terminar e reinicie a máquina. Ela voltará a ficar rápida.</p>
        </li>
    </ul>
</div>

<div style="background-color: var(--bg-main); padding: 24px; border-radius: var(--border-radius); border: 1px dashed var(--border-color);">
    <h3 style="margin-top: 0;">🧠 Atividade Final da Aula (Prática no Computador)</h3>
    <p><strong>📝 Mão na massa:</strong></p>
    <ol style="margin-bottom: 0;">
        <li>Abra o Menu Iniciar, pesquise por "Windows Update" e veja se o computador que você está usando agora está atualizado ou se precisa baixar algo.</li>
        <li>Abra a "Segurança do Windows" e faça uma Verificação Rápida. Aguarde terminar e anote no caderno se alguma ameaça foi encontrada.</li>
        <li>Debata com seu colega: Você já perdeu algum arquivo por causa de vírus no pendrive? Como o Windows Defender poderia ter ajudado?</li>
    </ol>
</div>`
                },
                {
                    id: "2-8",
                    title: "Aula 08: Erros simples do sistema e soluções práticas",
                    duration: "Leitura (20 min)",
                    videoUrl: "https://www.youtube.com/embed/o1FiPSv60aY",
                    content: `<h2>📘 Apostila – Módulo 2 | Aula 8</h2>
<h3>Tema: Erros Simples do Sistema e Soluções Práticas</h3>
<p>Mesmo os computadores mais modernos e caros do mundo às vezes "se confundem". Um programa trava, o som some ou a tela congela. A primeira regra da informática para resolver erros é: <strong>Não entre em pânico!</strong> O computador é uma máquina e, na imensa maioria das vezes, você mesmo pode resolver o problema com alguns cliques.</p>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🛑 Parte 1 – O Programa Travou! (A Mágica do Ctrl+Alt+Del)</h3>
<p>Você está digitando um texto e, de repente, o Word congela. Você clica no "X" para fechar e nada acontece. A tela fica meio esbranquiçada e aparece a mensagem "Não respondendo".</p>
<p><strong>Como resolver (O Gerenciador de Tarefas):</strong></p>
<ol>
    <li>No teclado, aperte as três teclas juntas: <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Del</kbd> (Control, Alt e Delete).</li>
    <li>Uma tela azul (ou preta) aparecerá. Clique em <strong>Gerenciador de Tarefas</strong>.</li>
    <li>O Windows vai mostrar uma lista de tudo o que está aberto. Encontre o programa travado (ele terá a mensagem "Não respondendo" ao lado).</li>
    <li>Clique nele uma vez e depois clique no botão <strong>Finalizar Tarefa</strong> (no canto inferior direito). O Windows vai "matar" o programa à força e seu computador voltará a funcionar!</li>
</ol>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🔇 Parte 2 – O Som Sumiu (Onde está o erro?)</h3>
<p>Você entra em uma videochamada ou abre um vídeo no YouTube e não sai som nenhum, mesmo com o volume no máximo.</p>
<p><strong>Como resolver:</strong></p>
<ol>
    <li><strong>Verifique o básico:</strong> O cabo do fone ou da caixa de som está bem encaixado?</li>
    <li><strong>O Segredo do Windows:</strong> Às vezes o Windows envia o som para o lugar errado. Clique no ícone de alto-falante perto do relógio.</li>
    <li>Acima da barra de volume, você verá o nome do aparelho de som atual (Ex: Alto-falantes Realtek). Clique nessa setinha.</li>
    <li>O Windows mostrará outras opções. Mude para outra opção (como Fones de Ouvido ou Áudio do Monitor) e veja se o som volta.</li>
</ol>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🔄 Parte 3 – O Segredo do "Reiniciar" vs. "Desligar"</h3>
<p>Seu computador está estranho. A internet não conecta, o Menu Iniciar não abre ou a máquina está insuportavelmente lenta. O que você faz?</p>
<p>Muitas pessoas vão no botão Iniciar e escolhem Desligar. Depois ligam de novo. <strong>Isso está errado!</strong></p>
<p>Nos Windows mais modernos (10 e 11), a função "Desligar" não desliga o sistema completamente; ela apenas coloca o computador para "dormir profundamente" para ele ligar mais rápido no dia seguinte. Os pequenos erros continuam lá.</p>
<div style="background-color: var(--bg-hover); padding: 16px; border-radius: var(--border-radius); border-left: 4px solid var(--accent-color); margin-top: 16px; margin-bottom: 16px;">
    <p style="margin-bottom: 16px;"><strong>💡 A Solução Mestra:</strong> Vá no botão Iniciar, clique em Energia e escolha <strong>Reiniciar</strong>.</p>
    <p style="margin-bottom: 0;">O botão "Reiniciar" obriga o Windows a fechar tudo, limpar a Memória RAM completamente e começar do zero. Cerca de 80% dos problemas de lentidão e bugs estranhos se resolvem apenas Reiniciando a máquina!</p>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<div style="background-color: var(--bg-hover); padding: 24px; border-radius: var(--border-radius); border-left: 4px solid #3b82f6; margin-bottom: 24px;">
    <h3 style="margin-top: 0; color: #3b82f6;">😱 Parte 4 – A Assustadora "Tela Azul"</h3>
    <p>De repente, tudo para. A tela fica inteira azul com um texto branco gigante, um rosto triste :(, e o computador desliga sozinho. Essa é a famosa <strong>Tela Azul da Morte (BSOD)</strong>.</p>
    <ul>
        <li><strong>O que aconteceu:</strong> O Windows percebeu que um erro muito grave ia danificar as peças do computador. Para se proteger, ele "puxou o freio de mão" e parou tudo.</li>
        <li><strong>O que fazer:</strong> Apenas espere! Ele vai reiniciar sozinho. Se acontecer apenas uma vez, foi um pequeno "engasgo" do sistema. Porém, se a tela azul começar a aparecer todos os dias, tire uma foto da tela com o seu celular (especialmente das letras miúdas no final da tela) e chame um técnico. Essa foto dirá ao técnico exatamente qual peça está com defeito.</li>
    </ul>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<div style="background-color: var(--bg-hover); padding: 24px; border-radius: var(--border-radius); border: 1px solid var(--accent-color); margin-bottom: 24px;">
    <h3 style="margin-top: 0;">🛠️ Guia Rápido de Emergência</h3>
    <ul>
        <li><strong>O Mouse travou completamente e não mexe.</strong>
            <p style="margin-bottom: 16px;"><em>Solução:</em> Tire o cabo do mouse da entrada USB e coloque em outra entrada. Se não voltar, use o botão Power do gabinete (segure por 5 segundos) para forçar o desligamento.</p>
        </li>
        <li><strong>O Teclado parou de funcionar do nada.</strong>
            <p style="margin-bottom: 0;"><em>Solução:</em> Veja se você não esbarrou na tecla Num Lock (que apaga as luzes dos números) ou tire e coloque o cabo USB novamente.</p>
        </li>
    </ul>
</div>

<div style="background-color: var(--bg-main); padding: 24px; border-radius: var(--border-radius); border: 1px dashed var(--border-color);">
    <h3 style="margin-top: 0;">🧠 Atividade Final da Aula (Prática no Computador)</h3>
    <p><strong>📝 Mão na massa:</strong></p>
    <ol style="margin-bottom: 0;">
        <li>Abra um programa qualquer (ex: Calculadora). Em seguida, aperte <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Del</kbd>, abra o Gerenciador de Tarefas e "feche" a calculadora por lá.</li>
        <li>Clique no ícone de volume perto do relógio e verifique quais são as opções de saída de som que o seu computador tem instaladas.</li>
        <li>No caderno: Escreva com as suas palavras qual é a diferença entre "Desligar" e "Reiniciar" e quando você deve usar cada um.</li>
    </ol>
</div>`
                },
                {
                    id: "2-9",
                    title: "Aula 09: Instalação de programas básicos",
                    duration: "Leitura (20 min)",
                    videoUrl: "https://www.youtube.com/embed/o1FiPSv60aY",
                    content: `<h2>📘 Apostila – Módulo 2 | Aula 9</h2>
<h3>Tema: Instalação de Programas e Mensagens de Permissão</h3>
<p>Até agora, aprendemos a usar o que já vem no Windows. Mas e quando precisamos de uma ferramenta nova, como um navegador diferente (Chrome), um leitor de PDF (Adobe) ou um programa de reuniões (Zoom)? Nesta aula, você aprenderá o processo seguro de instalação e como entender os avisos que o Windows exibe.</p>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>📥 Parte 1 – Onde encontrar programas com segurança?</h3>
<p>O maior risco de pegar um vírus é baixar programas de sites errados. No dia a dia de uma empresa, você deve seguir estas regras:</p>
<ol>
    <li><strong>Sites Oficiais:</strong> Se quer o Chrome, baixe no site do Google. Se quer o Office, baixe no site da Microsoft.</li>
    <li><strong>Evite "Botões de Download" Falsos:</strong> Muitos sites de downloads gratuitos enchem a tela de botões falsos. O instalador real geralmente é um arquivo com a extensão <code>.exe</code> ou <code>.msi</code>.</li>
    <li><strong>Microsoft Store:</strong> O Windows tem uma "loja" oficial (parecida com a Play Store do celular) onde você pode baixar programas verificados e seguros.</li>
</ol>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🛠️ Parte 2 – O Processo de Instalação (Atenção às Telas)</h3>
<p>A maioria das instalações segue o padrão "Next, Next, Finish" (Próximo, Próximo, Concluir), mas é preciso <strong>ler antes de clicar</strong>.</p>
<p><strong>As armadilhas do "Próximo":</strong> Muitos programas gratuitos tentam instalar "brindes" indesejados (como barras de pesquisa estranhas ou antivírus de teste).</p>
<div style="background-color: var(--bg-hover); padding: 16px; border-radius: var(--border-radius); border-left: 4px solid var(--accent-color); margin-top: 16px;">
    <p style="margin-bottom: 0;"><strong>💡 Dica Profissional:</strong> Leia cada tela. Se vir um quadradinho marcado dizendo "Sim, eu aceito instalar o programa Extra X", desmarque antes de clicar em Próximo.</p>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<div style="background-color: var(--bg-hover); padding: 24px; border-radius: var(--border-radius); border-left: 4px solid #f59e0b; margin-bottom: 24px;">
    <h3 style="margin-top: 0; color: #f59e0b;">🛡️ Parte 3 – Mensagens de Permissão (O Controle de Conta de Usuário)</h3>
    <p>Durante a instalação, o Windows quase sempre escurece a tela e exibe uma caixa perguntando: <em>"Deseja permitir que este aplicativo faça alterações no seu dispositivo?"</em></p>
    <p>Isso é o <strong>UAC (User Account Control)</strong>. Ele é o segurança do seu computador.</p>
    <ul>
        <li><strong>Por que isso aparece?</strong> O Windows está te avisando que aquele programa vai mexer em pastas importantes do sistema.</li>
        <li><strong>Quando clicar em SIM:</strong> Somente se VOCÊ iniciou a instalação e confia no programa.</li>
        <li><strong>Quando clicar em NÃO:</strong> Se essa mensagem aparecer do nada enquanto você apenas navega na internet. Isso indica que um site mal-intencionado tentou instalar algo sem sua ordem.</li>
    </ul>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>📦 Parte 4 – Programas Básicos "Kit de Sobrevivência"</h3>
<p>Todo computador de escritório precisa ter estes itens instalados:</p>
<ul>
    <li><strong>Navegadores:</strong> Google Chrome ou Microsoft Edge.</li>
    <li><strong>Leitor de PDF:</strong> Adobe Acrobat Reader ou Foxit.</li>
    <li><strong>Comunicação:</strong> WhatsApp Desktop, Microsoft Teams ou Zoom.</li>
    <li><strong>Compactadores:</strong> WinRAR ou 7-Zip (para diminuir o tamanho de arquivos grandes).</li>
</ul>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<div style="background-color: var(--bg-hover); padding: 24px; border-radius: var(--border-radius); border: 1px solid var(--accent-color); margin-bottom: 24px;">
    <h3 style="margin-top: 0;">🛠️ Guia Rápido: Resolução de Problemas no Dia a Dia</h3>
    <ul>
        <li><strong>Tento instalar um programa, mas o Windows diz: "Somente o administrador pode fazer isso".</strong>
            <p style="margin-bottom: 16px;"><em>A solução:</em> Em muitas empresas, o usuário comum não tem permissão para instalar nada por segurança. Se o computador for seu, clique com o botão direito no instalador e escolha "Executar como Administrador".</p>
        </li>
        <li><strong>Instalei o programa, mas ele não aparece na Área de Trabalho.</strong>
            <p style="margin-bottom: 0;"><em>A solução:</em> Nem todo programa cria um ícone na tela automaticamente. Vá no Menu Iniciar, digite o nome do programa e, quando ele aparecer, arraste-o para a Área de Trabalho para criar seu próprio atalho.</p>
        </li>
    </ul>
</div>

<div style="background-color: var(--bg-main); padding: 24px; border-radius: var(--border-radius); border: 1px dashed var(--border-color);">
    <h3 style="margin-top: 0;">🧠 Atividade Final da Aula (Prática no Computador)</h3>
    <p><strong>📝 Mão na massa:</strong></p>
    <ol style="margin-bottom: 0;">
        <li>Abra o navegador e acesse o site oficial de um programa gratuito (ex: ninite.com ou adobe.com).</li>
        <li>Simule o início do download de um instalador (não precisa concluir se não tiver permissão no laboratório). Observe o nome do arquivo baixado e sua extensão (.exe).</li>
        <li>Debate em grupo: Por que é perigoso instalar programas de sites de "pirataria" ou "cracks"? O que pode acontecer com os dados da empresa?</li>
    </ol>
</div>`
                },
                {
                    id: "2-10",
                    title: "Aula 10: Apostila de Revisão Geral – Módulo 2",
                    duration: "Leitura (20 min)",
                    videoUrl: "https://www.youtube.com/embed/o1FiPSv60aY",
                    content: `<h2>📘 Apostila de Revisão Geral – Módulo 2</h2>
<h3>Tema: O Windows na Prática: Guia Definitivo de Sobrevivência no Escritório</h3>
<p><strong>Parabéns! Você chegou ao final do Módulo 2.</strong> Ao longo destas aulas, o computador deixou de ser uma "caixa misteriosa" e se tornou a sua principal ferramenta de trabalho. Nesta revisão, vamos conectar tudo o que aprendemos, mostrando como cada peça do Windows se encaixa no seu dia a dia profissional.</p>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>⚙️ Etapa 1: Preparando o seu Ambiente de Trabalho</h3>
<p><em>Aplicações práticas de Personalização, Configurações e Telas.</em></p>
<p>Antes de começar a trabalhar, um bom profissional organiza a sua mesa. No Windows, isso significa dominar as Configurações (a Engrenagem) e o antigo Painel de Controle.</p>
<ul>
    <li><strong>A Estética:</strong> Você aprendeu a usar o clique com o botão direito na Área de Trabalho para acessar a Personalização, mudando o papel de parede e ativando o "Modo Escuro" para não cansar os olhos.</li>
    <li><strong>Telas e Conexões:</strong> Se a tela girar sem querer, você já sabe o truque: <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Seta para Cima</kbd>. Se for fazer uma apresentação, o atalho <kbd>Windows</kbd> + <kbd>P</kbd> permite duplicar ou estender a imagem para um projetor. Além disso, pelo menu de Configurações, você conecta facilmente à rede Wi-Fi ou a um fone Bluetooth.</li>
    <li><strong>Acesso Rápido:</strong> Para não perder tempo procurando os programas que mais usa, você aprendeu a Fixar na Barra de Tarefas ou a criar um Atalho (aquele ícone com a setinha azul) direto na Área de Trabalho.</li>
</ul>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>📂 Etapa 2: A Vida dos Arquivos e Pastas</h3>
<p><em>Aplicações práticas de Hierarquia, Extensões e Pen Drives.</em></p>
<p>Com a "mesa" pronta, chega a hora de lidar com os documentos. Se você salvar tudo solto, o caos se instala.</p>
<ul>
    <li><strong>A Árvore de Diretórios:</strong> O Windows funciona como um gaveteiro. Você cria uma Pasta Principal (ex: Financeiro) e, dentro dela, as Subpastas (ex: 2025, 2026). Para mover arquivos entre elas, usamos a Seleção Múltipla (teclas <kbd>Ctrl</kbd> ou <kbd>Shift</kbd>) combinada com os comandos Recortar (<kbd>Ctrl</kbd>+<kbd>X</kbd>) e Colar (<kbd>Ctrl</kbd>+<kbd>V</kbd>).</li>
    <li><strong>Os Tipos de Arquivos (Extensões):</strong> O Windows reconhece os arquivos pelo "sobrenome".
        <ul>
            <li>Textos editáveis são <code>.docx</code> (Word).</li>
            <li>Imagens são <code>.jpg</code> ou <code>.png</code>.</li>
            <li><strong>A Regra de Ouro:</strong> Documentos oficiais, como o seu currículo, devem sempre ser salvos em <code>.PDF</code>, para que a formatação nunca se desconfigure ao ser enviada por e-mail.</li>
        </ul>
    </li>
    <li><strong>Armazenamento Móvel:</strong> Precisa levar esse PDF para uma gráfica? Espete o seu Pen Drive. Encontre-o no menu "Este Computador" e copie o arquivo (nunca o atalho!). Ao terminar, lembre-se da regra de segurança: clique no ícone perto do relógio e escolha <strong>Ejetar</strong> antes de puxar o dispositivo.</li>
</ul>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🛡️ Etapa 3: Ferramentas e Segurança</h3>
<p><em>Aplicações práticas de Instalação, Atualizações e Permissões.</em></p>
<p>Para que o seu trabalho flua, o computador precisa estar atualizado e com os programas certos instalados (como o Google Chrome ou um leitor de PDF).</p>
<ul>
    <li><strong>Instalação e Permissões:</strong> Ao baixar um programa (arquivo <code>.exe</code>), o Windows exibe a tela escura do Controle de Conta de Usuário (UAC), perguntando: "Deseja permitir alterações?". Você só deve clicar em <strong>Sim</strong> se tiver certeza de que baixou o arquivo de um site oficial.</li>
    <li><strong>O Antivírus Integrado:</strong> Você não precisa comprar antivírus caros. O Windows Defender faz a segurança silenciosa da sua máquina, bloqueando ameaças automaticamente e permitindo verificações manuais.</li>
    <li><strong>A Manutenção (Windows Update):</strong> Quando o computador pedir para não ser desligado durante uma atualização, <strong>obedeça!</strong> Essas atualizações reparam falhas de segurança e mantêm o sistema rápido e protegido contra hackers.</li>
</ul>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🚀 Etapa 4: Produtividade e Solução de Erros</h3>
<p><em>Aplicações práticas do Gerenciador de Tarefas e Atalhos de Teclado.</em></p>
<p>Mesmo a melhor máquina pode falhar. Um programa trava e o mouse vira uma "bolinha azul" girando infinitamente. O que fazer?</p>
<ul>
    <li><strong>O Programa Travou:</strong> Não puxe da tomada! Aperte as três teclas salvadoras <kbd>Ctrl</kbd> + <kbd>Alt</kbd> + <kbd>Del</kbd>, abra o Gerenciador de Tarefas, clique no programa que "Não está respondendo" e escolha Finalizar Tarefa.</li>
    <li><strong>Reiniciar vs. Desligar:</strong> Se o computador está muito lento ou com a internet falhando, a melhor solução não é desligar e ligar de novo. Vá no Menu Iniciar e escolha <strong>Reiniciar</strong>. Isso limpa a memória RAM e resolve 80% dos problemas comuns.</li>
    <li><strong>Comunicação de Erros (Print Screen):</strong> Se aparecer um erro estranho, não tente explicar com palavras. Use o atalho <kbd>Windows</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd> para recortar a imagem do erro na tela e enviar para a equipe de Suporte (TI).</li>
    <li><strong>Agilidade Máxima:</strong> Trabalhe mais rápido usando <kbd>Alt</kbd> + <kbd>Tab</kbd> para trocar de janelas sem usar o mouse, e <kbd>Windows</kbd> + <kbd>D</kbd> para esconder tudo e ir direto para a Área de Trabalho. E ao se levantar para o café, nunca deixe seus dados expostos: aperte <kbd>Windows</kbd> + <kbd>L</kbd> para bloquear a tela instantaneamente!</li>
</ul>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<div style="background-color: var(--bg-hover); padding: 24px; border-radius: var(--border-radius); border-left: 4px solid var(--accent-color); margin-bottom: 24px;">
    <h3 style="margin-top: 0; color: var(--accent-color);">🧠 Desafio Final Prático (O Teste do Escritório)</h3>
    <p><em>Professor, esta é a grande dinâmica de encerramento do módulo.</em></p>
    <p><strong>Cenário de Simulação:</strong> Você acabou de ser contratado como Assistente Administrativo e hoje é o seu primeiro dia. O seu chefe deu a seguinte lista de tarefas. Prove que você está pronto!</p>
    <ol>
        <li><strong>Ajuste a máquina:</strong> Troque o papel de parede para uma cor sólida e verifique nas configurações se o seu Processador e Memória RAM dão conta do trabalho (anote os dados).</li>
        <li><strong>Organize os arquivos:</strong> Na sua Área de Trabalho, crie uma pasta chamada "Documentos da Diretoria". Entre nela e crie duas subpastas: "Imagens" e "Relatórios".</li>
        <li><strong>Crie o conteúdo:</strong> Abra o Bloco de Notas, digite "Relatório de Vendas Concluído", salve o arquivo dentro da subpasta "Relatórios" com o nome <code>Vendas2026.txt</code>.</li>
        <li><strong>Agilidade:</strong> Sem usar o mouse para fechar as janelas, aperte <kbd>Windows</kbd> + <kbd>D</kbd> para voltar à Área de Trabalho.</li>
        <li><strong>Comunicação com o Suporte:</strong> Crie um arquivo qualquer e, de propósito, tente arrastá-lo para a lixeira, mas não solte. O sistema dará um erro ou um aviso. Use <kbd>Windows</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd> para tirar um "Print" dessa tela e cole dentro do programa Paint.</li>
        <li><strong>Segurança:</strong> O seu expediente acabou. Pressione <kbd>Windows</kbd> + <kbd>L</kbd> para bloquear a sua estação de trabalho com segurança antes de sair da sala.</li>
    </ol>
</div>

<div style="background-color: var(--bg-main); padding: 24px; border-radius: var(--border-radius); border: 1px dashed var(--border-color); text-align: center;">
    <h3 style="margin-top: 0;">🎉 Conclusão do Módulo 2</h3>
    <p>Se você conseguiu realizar os passos acima com confiança, parabéns! Você não é mais um usuário leigo. Você agora domina o Windows, sabe como organizar seus dados com segurança e entende a linguagem técnica para se comunicar com qualquer equipe de suporte.</p>
    <p style="margin-bottom: 0;">No próximo módulo, vamos conectar essa sua máquina organizada com o resto do mundo: bem-vindo ao <strong>Módulo 3 – Internet e Segurança Digital</strong>.</p>
</div>`
                },
                {
                    id: "fix-2",
                    title: "Atividade de Fixação: Módulo 2",
                    duration: "Prática (5 min)",
                    videoUrl: "https://www.youtube.com/embed/o1FiPSv60aY",
                    quiz: [
                        {
                            isFixacao: true,
                            question: "Onde ficam armazenados os arquivos que são apagados e ainda podem ser recuperados?",
                            options: ["Painel de Controle", "Lixeira", "Arquivos de Programas", "Área de Trabalho"],
                            correctAnswer: 1,
                            explanation: "A Lixeira retém arquivos excluídos para que possam ser restaurados se necessário."
                        }
                    ],
                    content: `<h2>🎯 Atividade de Fixação - Módulo 2</h2><p>Responda as questões acima para testar seus conhecimentos. (Não vale XP)</p>`
                }
            ]
        },
        {
            id: 3,
            title: "Módulo 3 – Internet e Segurança Digital (15h)",
            description: "Navegação segura, redes sociais, downloads e proteção contra ameaças digitais.",
            image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80",
            lessons: [
                {
                    id: "3-1",
                    title: "Aula 01: O que é a Internet, Navegadores e Buscadores",
                    duration: "Leitura (15 min)",
                    videoUrl: "https://www.youtube.com/embed/o1FiPSv60aY",
                    content: `<h2>📘 Apostila – Módulo 3 | Aula 1</h2>
<h3>Tema: O Mundo Conectado (Internet, Navegadores e Buscadores)</h3>

<div style="background-color: var(--bg-hover); padding: 24px; border-radius: var(--border-radius); border-left: 4px solid var(--accent-color); margin-bottom: 24px;">
    <h3 style="margin-top: 0; color: var(--accent-color);">🎯 Objetivo da Aula</h3>
    <p>Fazer com que o aluno compreenda a diferença fundamental entre:</p>
    <ul>
        <li>🔵 <strong>Internet</strong> (rede)</li>
        <li>🟢 <strong>Navegador</strong> (programa)</li>
        <li>🟡 <strong>Buscador</strong> (sistema de pesquisa)</li>
    </ul>
    <p style="margin-bottom: 0;">Eliminando a confusão comum de achar que “o Google é a Internet”.</p>
</div>

<div style="background-color: var(--bg-main); padding: 16px; border-radius: var(--border-radius); border: 1px dashed var(--border-color); text-align: center; margin-bottom: 32px;">
    <p style="font-size: 1.1em; font-weight: bold; margin: 0;">💡 Frase-chave da aula</p>
    <p style="font-size: 1.2em; color: var(--accent-color); margin: 8px 0 0 0;">“O Google NÃO é a internet. Ele é apenas um site dentro dela.”</p>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🔵 1. O que é a Internet? (A Infraestrutura)</h3>
<p>Muitas pessoas acham que a internet é uma "nuvem" invisível ou mágica, mas ela é muito física.</p>
<p>A Internet é a maior rede de computadores do mundo. Imagine milhões de computadores, desde o seu celular até supercomputadores de grandes empresas (chamados de <strong>Servidores</strong>), todos conectados por cabos físicos.</p>
<p>👉 <em>Sim, existem cabos gigantescos que cruzam o fundo dos oceanos para ligar o Brasil à Europa e aos Estados Unidos.</em></p>

<h4>🚗 Analogia da Rodovia</h4>
<p>Pense na Internet como o sistema de rodovias, ruas e estradas de uma cidade gigantesca. As rodovias estão lá, conectando todos os lugares, mas você não consegue viajar por elas sem um <strong>veículo</strong>.</p>

<h4>🌐 O Endereço (URL)</h4>
<p>Assim como cada casa em Manaus tem um endereço (Rua, Número, CEP), cada site na internet tem o seu endereço único, que chamamos de <strong>URL</strong>.</p>
<p>👉 Exemplo: <code>www.projetosrmc.com.br</code></p>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🟢 2. Os Navegadores de Internet (Os Veículos)</h3>
<p>Se a internet é a rodovia, o <strong>Navegador</strong> (ou Browser) é o seu carro.</p>
<p>É o programa instalado no seu computador ou celular que permite visualizar as páginas da web. Sem ele, você está “a pé” e não consegue acessar a rede.</p>

<h4>🌍 Principais Navegadores</h4>
<ul>
    <li><strong>Google Chrome</strong> → O mais popular, criado pelo Google</li>
    <li><strong>Microsoft Edge</strong> → Já vem instalado no Windows</li>
    <li><strong>Mozilla Firefox</strong> → Alternativa rápida e focada em privacidade</li>
    <li><strong>Safari</strong> → Padrão em dispositivos da Apple</li>
</ul>

<h4>🧩 Anatomia Básica do Navegador</h4>
<p><strong>📍 Barra de Endereços (Topo da tela)</strong><br>
É aqui que você digita o endereço exato do site quando já sabe para onde quer ir.<br>
👉 <em>Exemplo:</em> Digite <code>www.g1.com.br</code> e pressione <kbd>Enter</kbd>.<br>
✔️ Você vai direto ao site.</p>

<p><strong>🔙 Botões de Navegação</strong></p>
<ul>
    <li>⬅️ <strong>Voltar</strong> → Retorna para a página anterior</li>
    <li>🔄 <strong>Atualizar</strong> (<kbd>F5</kbd>) → Recarrega a página</li>
</ul>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🟡 3. Os Buscadores (O GPS da Internet)</h3>
<p>E quando você não sabe para onde ir?</p>
<p>Se o navegador é o carro, o <strong>Buscador</strong> é o GPS. Ele é um site especializado em encontrar outros sites.</p>

<h4>🔎 Exemplos de Buscadores</h4>
<ul>
    <li><strong>Google</strong> (o mais usado)</li>
    <li><strong>Bing</strong></li>
    <li><strong>Yahoo</strong></li>
</ul>

<h4>🤖 Como o Buscador Funciona</h4>
<p>O Google utiliza programas automáticos chamados robôs (ou bots), que analisam praticamente todas as páginas da internet 24 horas por dia. Quando você digita algo, ele busca no seu enorme banco de dados e mostra os resultados mais relevantes.</p>`
                },
                {
                    id: "3-2",
                    title: "Aula 02: Downloads e Instalação Segura de Arquivos",
                    duration: "Leitura (20 min)",
                    videoUrl: "https://www.youtube.com/embed/o1FiPSv60aY",
                    content: `<h2>📘 Apostila – Módulo 3 | Aula 2</h2>
<h3>Tema: Trazendo para o PC (Downloads e Instalação Segura)</h3>

<div style="background-color: var(--bg-hover); padding: 24px; border-radius: var(--border-radius); border-left: 4px solid var(--accent-color); margin-bottom: 24px;">
    <h3 style="margin-top: 0; color: var(--accent-color);">🎯 Objetivo da Aula</h3>
    <p>Ensinar o aluno a:</p>
    <ul>
        <li>Compreender o conceito de Download</li>
        <li>Saber onde os arquivos ficam no computador</li>
        <li>Realizar instalações de forma segura</li>
        <li>Evitar vírus, adwares e programas indesejados</li>
    </ul>
</div>

<div style="background-color: var(--bg-main); padding: 16px; border-radius: var(--border-radius); border: 1px dashed var(--border-color); text-align: center; margin-bottom: 32px;">
    <p style="font-size: 1.1em; font-weight: bold; margin: 0;">💡 Frase-chave da aula</p>
    <p style="font-size: 1.2em; color: var(--accent-color); margin: 8px 0 0 0;">"Nem todo botão de download é confiável. Segurança começa na escolha do arquivo."</p>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>📦 1. O que é um Download? (A Encomenda)</h3>
<p>Quando você acessa um site, você está apenas “olhando a vitrine”. Mas quando decide trazer algo para o seu computador, você faz um <strong>Download</strong>.</p>

<h4>🚚 Analogia da Encomenda</h4>
<p>Fazer um download é como pedir um pacote:</p>
<ol>
    <li>Você solicita (clica no botão)</li>
    <li>A internet transporta</li>
    <li>O arquivo chega ao seu computador</li>
</ol>

<h4>📁 A Pasta Downloads (Muito Importante)</h4>
<p>Um dos erros mais comuns de iniciantes é:<br>
❌ Baixar um arquivo e não saber onde ele foi salvo<br>
✔️ No Windows, existe uma pasta padrão chamada <strong>Downloads</strong></p>

<p><strong>🖥️ Como acessar:</strong></p>
<ol>
    <li>Pressione <kbd>Windows</kbd> + <kbd>E</kbd></li>
    <li>Abra o <strong>Explorador de Arquivos</strong></li>
    <li>Clique na pasta <strong>Downloads</strong></li>
</ol>
<p>👉 <em>Tudo que vem da internet vai parar ali primeiro.</em></p>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🔐 2. Regra de Ouro: A Fonte do Arquivo</h3>
<p>Assim como você não aceita uma encomenda de um desconhecido… Você não deve baixar arquivos de qualquer site.</p>

<h4>🌐 Sites Oficiais vs. Sites de Terceiros</h4>
<p>✔️ <strong>Sempre prefira o site oficial</strong><br>
Exemplos:</p>
<ul>
    <li>Quer baixar um navegador → vá ao site oficial dele</li>
    <li>Quer baixar um aplicativo → vá ao site oficial</li>
</ul>

<div style="background-color: var(--bg-hover); padding: 16px; border-radius: var(--border-radius); border-left: 4px solid #ef4444; margin-top: 16px;">
    <h4 style="margin-top: 0; color: #ef4444;">⚠️ O Perigo dos “Agregadores”</h4>
    <p>Sites que prometem:</p>
    <ul>
        <li>“Baixar tudo em um só lugar”</li>
        <li>Programas pagos de graça (pirataria)</li>
    </ul>
    <p>👉 <strong>São extremamente perigosos!</strong> Eles podem:</p>
    <ul>
        <li>Alterar o arquivo original</li>
        <li>Inserir vírus</li>
        <li>Adicionar propagandas escondidas</li>
    </ul>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>⚙️ 3. Instalação Segura (Evite o Automático)</h3>
<p>Aqui acontece o maior erro dos iniciantes: Clicar direto em “Avançar → Avançar → Concluir”</p>

<h4>🧩 O Instalador (.exe)</h4>
<p>Arquivos com final <code>.exe</code> são executáveis. Eles são responsáveis por instalar programas. ⚠️ <strong>Exigem atenção total.</strong></p>

<h4>🎯 A Pegadinha das “Ofertas Opcionais”</h4>
<p>Durante a instalação, podem aparecer opções como:</p>
<ul>
    <li>“Instalar antivírus adicional”</li>
    <li>“Mudar página inicial do navegador”</li>
    <li>“Adicionar barra de ferramentas”</li>
</ul>
<p>👉 <em>Essas opções geralmente já vêm marcadas automaticamente!</em></p>

<div style="background-color: var(--bg-hover); padding: 16px; border-radius: var(--border-radius); border-left: 4px solid var(--accent-color); margin-top: 16px;">
    <h4 style="margin-top: 0;">🧠 Regra de Ouro da Instalação</h4>
    <p>✔️ Leia cada tela<br>
    ✔️ Desmarque o que não for necessário<br>
    ✔️ Instale apenas o que você realmente quer</p>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>📂 4. Tipos de Arquivos Mais Comuns</h3>
<p>Conhecer as extensões evita problemas:</p>
<ul>
    <li><code>.exe</code> → Programa (instalador) ⚠️ <em>Atenção</em></li>
    <li><code>.pdf</code> → Documento</li>
    <li><code>.jpg</code> / <code>.png</code> → Imagens</li>
    <li><code>.mp4</code> → Vídeos</li>
    <li><code>.zip</code> / <code>.rar</code> → Arquivos compactados</li>
</ul>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<div style="background-color: var(--bg-main); padding: 24px; border-radius: var(--border-radius); border: 1px dashed var(--border-color);">
    <h3 style="margin-top: 0;">🧪 Atividade Prática (Mão na Massa)</h3>
    <p>Agora vamos aplicar tudo na prática:</p>
    
    <p><strong>🔎 1. A Busca</strong></p>
    <ul>
        <li>Abra o navegador</li>
        <li>Pesquise pelo programa (ex: VLC Media Player ou leitor de PDF)</li>
    </ul>

    <p><strong>🧭 2. Identificar o Site Oficial</strong></p>
    <ul>
        <li>Ignore anúncios patrocinados</li>
        <li>Clique apenas no site oficial</li>
    </ul>

    <p><strong>⬇️ 3. Fazer o Download</strong></p>
    <ul>
        <li>Encontrar o botão correto ⚠️ <em>Cuidado com botões falsos</em></li>
    </ul>

    <p><strong>📁 4. Localizar o Arquivo</strong></p>
    <ul>
        <li>Vá até a pasta Downloads</li>
        <li>Identifique o arquivo <code>.exe</code></li>
    </ul>

    <p><strong>⚙️ 5. Instalação Consciente</strong></p>
    <ul>
        <li>Clique duas vezes no arquivo</li>
        <li>Leia cada tela com atenção</li>
    </ul>
    <p>👉 <em>Perguntas importantes:</em> O que essa tela está pedindo? Existe alguma opção marcada que não deveria?</p>

    <p><strong>✅ 6. Teste Final</strong></p>
    <ul>
        <li>Abra o programa instalado (pode ser pelo Menu Iniciar ou Área de Trabalho)</li>
        <li>✔️ Confirme que funcionou corretamente</li>
    </ul>
</div>`
                },
                {
                    id: "3-3",
                    title: "Aula 03: Criação, uso e organização de e-mails",
                    duration: "Leitura (20 min)",
                    videoUrl: "https://www.youtube.com/embed/o1FiPSv60aY",
                    content: `<h2>📘 Apostila – Módulo 3 | Aula 3</h2>
<h3>Tema: A Identidade Digital (E-mail)</h3>

<div style="background-color: var(--bg-hover); padding: 24px; border-radius: var(--border-radius); border-left: 4px solid var(--accent-color); margin-bottom: 24px;">
    <h3 style="margin-top: 0; color: var(--accent-color);">🎯 Objetivo da Aula</h3>
    <p>Fazer o aluno compreender o e-mail como:</p>
    <ul>
        <li>Sua identidade digital</li>
        <li>Um meio de comunicação formal</li>
        <li>Uma ferramenta essencial para o dia a dia</li>
    </ul>
    <p>Além disso, ensinar:</p>
    <ul>
        <li>Criação de e-mail</li>
        <li>Envio correto de mensagens</li>
        <li>Organização da caixa de entrada</li>
    </ul>
</div>

<div style="background-color: var(--bg-main); padding: 16px; border-radius: var(--border-radius); border: 1px dashed var(--border-color); text-align: center; margin-bottom: 32px;">
    <p style="font-size: 1.1em; font-weight: bold; margin: 0;">💡 Frase-chave da aula</p>
    <p style="font-size: 1.2em; color: var(--accent-color); margin: 8px 0 0 0;">"Seu e-mail é o seu RG na internet. Sem ele, você não existe no mundo digital."</p>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🪪 1. O que é o E-mail? (O RG Digital)</h3>
<p>E-mail significa Electronic Mail (Correio Eletrônico). Ele surgiu antes mesmo da internet como conhecemos hoje.</p>

<h4>📬 Analogia da Caixa de Correio</h4>
<p>Assim como o carteiro precisa do seu endereço para entregar uma carta… A internet precisa do seu e-mail para entregar:</p>
<ul>
    <li>Mensagens</li>
    <li>Boletos</li>
    <li>Links de recuperação de senha</li>
</ul>

<h4>🌍 O Passaporte da Internet</h4>
<p>O e-mail é obrigatório para:</p>
<ul>
    <li>Criar contas em aplicativos</li>
    <li>Baixar apps no celular</li>
    <li>Acessar serviços online</li>
</ul>
<p>👉 <em>Sem e-mail, você praticamente não consegue usar a internet.</em></p>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🧩 2. Anatomia do E-mail</h3>
<p>Exemplo: 👉 <code>joao.silva@gmail.com</code></p>
<p>Vamos dividir:</p>

<ul>
    <li><strong>👤 Nome de Usuário (joao.silva)</strong>
        <ul>
            <li>Identifica a pessoa</li>
            <li>Deve ser único</li>
            <li>Pode ter números ou pontos</li>
        </ul>
    </li>
    <li><strong>@ Arroba</strong>
        <ul>
            <li>Significa “em” (do inglês <em>at</em>)</li>
        </ul>
    </li>
    <li><strong>🌐 Provedor (gmail.com)</strong>
        <ul>
            <li>É a empresa que hospeda o e-mail (Exemplos: Gmail, Outlook, Yahoo)</li>
        </ul>
    </li>
</ul>

<p>📖 <strong>Leitura Completa:</strong> <code>joao.silva@gmail.com</code> significa "João Silva no Gmail".</p>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>✉️ 3. Escrevendo um E-mail Profissional</h3>
<p>O e-mail é mais formal que aplicativos de mensagem.</p>

<h4>📝 Assunto (Subject)</h4>
<p>É o título da mensagem.</p>
<p>✔️ Deve ser claro e direto<br>
❌ Nunca escreva o texto inteiro aqui</p>
<p><em>Exemplo:</em> 👉 "Envio de Currículo – Vaga de Vendas"</p>

<h4>🧾 Corpo do E-mail</h4>
<p>Estrutura ideal:</p>
<ol>
    <li>Saudação</li>
    <li>Mensagem</li>
    <li>Despedida</li>
    <li>Nome</li>
</ol>

<div style="background-color: var(--bg-hover); padding: 16px; border-radius: var(--border-radius); border-left: 4px solid var(--border-color); margin-top: 16px;">
    <p style="margin-top: 0; font-weight: bold;">📌 Exemplo:</p>
    <p>Olá, tudo bem?<br>
    Estou enviando meu currículo para a vaga anunciada.<br>
    Atenciosamente,<br>
    Ricardo Matos Campos</p>
</div>

<h4>🧠 Para, CC e CCO</h4>
<ul>
    <li><strong>📥 Para (To):</strong> Destinatário principal</li>
    <li><strong>📄 CC (Com Cópia):</strong> Outras pessoas que precisam acompanhar</li>
    <li><strong>🕵️ CCO (Cópia Oculta):</strong> Modo oculto. Envia para várias pessoas e ninguém vê os outros destinatários. Ideal para preservar privacidade.</li>
</ul>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>📂 4. Organização e Spam</h3>

<ul>
    <li><strong>📥 Caixa de Entrada:</strong> Onde chegam os e-mails normais.</li>
    <li><strong>🚫 Spam (Lixo Eletrônico):</strong> Mensagens indesejadas ou suspeitas.
        <p>⚠️ <em>Importante: Às vezes e-mails importantes podem cair aqui. Verifique de vez em quando.</em></p>
    </li>
    <li><strong>🗂️ Pastas / Marcadores:</strong> Servem para organizar sua caixa de entrada (Ex: Contas, Trabalho, Curso). Evita bagunça e facilita encontrar mensagens.</li>
</ul>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<div style="background-color: var(--bg-main); padding: 24px; border-radius: var(--border-radius); border: 1px dashed var(--border-color);">
    <h3 style="margin-top: 0;">🧪 Atividade Prática (Mão na Massa)</h3>
    
    <p><strong>👤 1. Criação da Conta</strong></p>
    <ul>
        <li>Acesse Gmail ou Outlook</li>
        <li>Crie um e-mail passo a passo</li>
    </ul>

    <div style="background-color: var(--bg-hover); padding: 16px; border-radius: var(--border-radius); border-left: 4px solid #f59e0b; margin: 16px 0;">
        <p style="margin: 0; color: #f59e0b;"><strong>💡 Dica de Ouro:</strong> Anote seu e-mail e senha em local seguro. A maioria dos iniciantes esquece rapidamente.</p>
    </div>

    <p><strong>📱 Segurança</strong></p>
    <ul>
        <li>Cadastre um número de telefone real para recuperação de senha.</li>
    </ul>

    <p><strong>✉️ 2. Primeiro E-mail</strong></p>
    <ul>
        <li>Envie para o instrutor. Assunto: 👉 <em>Teste de Aula – [Seu Nome]</em></li>
    </ul>

    <p><strong>📎 3. Resposta com Anexo</strong></p>
    <ul>
        <li>O instrutor responde com um arquivo (PDF ou imagem)</li>
    </ul>

    <p><strong>📥 4. Baixar o Anexo</strong></p>
    <ul>
        <li>Abrir o e-mail</li>
        <li>Fazer o download</li>
    </ul>

    <p><strong>🗂️ 5. Organização</strong></p>
    <ul>
        <li>Criar uma pasta: 👉 <em>“Curso de Informática”</em></li>
        <li>E guardar o e-mail nela</li>
    </ul>
</div>`
                },
                {
                    id: "3-4",
                    title: "Aula 04: Segurança em e-mails (Phishing e Anexos)",
                    duration: "Leitura (20 min)",
                    videoUrl: "https://www.youtube.com/embed/o1FiPSv60aY",
                    content: `<h2>📘 Apostila – Módulo 3 | Aula 4</h2>
<h3>Tema: Armadilhas na Caixa de Entrada (Phishing e Segurança)</h3>

<div style="background-color: var(--bg-hover); padding: 24px; border-radius: var(--border-radius); border-left: 4px solid var(--accent-color); margin-bottom: 24px;">
    <h3 style="margin-top: 0; color: var(--accent-color);">🎯 Objetivo da Aula</h3>
    <p>Desenvolver o senso crítico do aluno para:</p>
    <ul>
        <li>Identificar e-mails falsos</li>
        <li>Entender o conceito de Phishing</li>
        <li>Verificar links com segurança</li>
        <li>Evitar abrir anexos perigosos</li>
    </ul>
</div>

<div style="background-color: var(--bg-main); padding: 16px; border-radius: var(--border-radius); border: 1px dashed var(--border-color); text-align: center; margin-bottom: 32px;">
    <p style="font-size: 1.1em; font-weight: bold; margin: 0;">💡 Frase-chave da aula</p>
    <p style="font-size: 1.2em; color: var(--accent-color); margin: 8px 0 0 0;">"Se o e-mail te faz agir com pressa, pare. Pode ser golpe."</p>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🎣 1. O que é Phishing? (A Pescaria Digital)</h3>
<p>A palavra Phishing vem do inglês <em>fishing</em>, que significa “pescar”.</p>

<h4>🎯 Analogia da Pescaria</h4>
<ul>
    <li>O criminoso = <strong>pescador</strong></li>
    <li>O e-mail falso = <strong>isca</strong></li>
    <li>O usuário desatento = <strong>peixe</strong></li>
</ul>
<p>👉 <em>O golpista envia milhares de mensagens esperando alguém “morder”.</em></p>

<div style="background-color: var(--bg-hover); padding: 16px; border-radius: var(--border-radius); border-left: 4px solid #ef4444; margin-top: 16px;">
    <h4 style="margin-top: 0; color: #ef4444;">⚠️ A Arma Principal: Emoção</h4>
    <p>Golpes usam:</p>
    <ul>
        <li><strong>Medo</strong> 😨 → “Sua conta será bloqueada”</li>
        <li><strong>Urgência</strong> ⏰ → “Pague em 2 horas”</li>
        <li><strong>Ganho fácil</strong> 🎁 → “Você ganhou um prêmio”</li>
    </ul>
    <p>👉 <em>Tudo para fazer você agir sem pensar.</em></p>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🕵️ 2. Como identificar um e-mail falso (Remetente)</h3>
<p>Erro comum: 👉 Confiar apenas no <strong>nome exibido</strong></p>

<h4>📧 Nome vs. E-mail Real</h4>
<p>Qualquer pessoa pode escrever: 👉 “Banco Itaú”</p>
<p>Mas o e-mail verdadeiro pode ser: ❌ <code>suporte_itau_2026@hotmail.com</code></p>

<div style="background-color: var(--bg-hover); padding: 16px; border-radius: var(--border-radius); border-left: 4px solid #10b981; margin-top: 16px;">
    <h4 style="margin-top: 0; color: #10b981;">✅ Regra de Ouro</h4>
    <p>Empresas reais usam <strong>domínio próprio</strong>:</p>
    <ul>
        <li>✔️ <code>@itau.com.br</code></li>
        <li>✔️ <code>@caixa.gov.br</code></li>
        <li>❌ <em>Nunca @gmail, @hotmail ou @yahoo</em></li>
    </ul>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🖱️ 3. Links Maliciosos (Regra do Mouse)</h3>
<p>Essa é uma das técnicas mais importantes da internet.</p>

<div style="background-color: var(--bg-hover); padding: 16px; border-radius: var(--border-radius); border-left: 4px solid #f59e0b; margin-top: 16px; margin-bottom: 16px;">
    <p style="margin-top: 0; margin-bottom: 0; color: #f59e0b;"><strong>🛑 Regra de Ouro:</strong> Nunca clique direto. Primeiro observe.</p>
</div>

<h4>👇 Como fazer</h4>
<ol>
    <li>Passe o mouse sobre o link</li>
    <li><strong>NÃO</strong> clique</li>
    <li>Observe o canto da tela</li>
</ol>

<p><strong>🚨 Exemplo:</strong><br>
Botão diz: 👉 “Acessar minha conta”<br>
Mas o link real no canto da tela é: 👉 <code>site-estranho.com/login</code><br>
❗ <strong>Isso é golpe</strong></p>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>📎 4. Anexos Suspeitos (Cavalo de Troia)</h3>
<p>Lembra da Aula 02? Aqui o perigo volta.</p>

<h4>🎁 Analogia</h4>
<p>Um anexo desconhecido é como um pacote misterioso na rua: <strong>Você não abre.</strong></p>

<h4>⚠️ Arquivos perigosos</h4>
<p>Nunca abrir, principalmente de desconhecidos:</p>
<ul>
    <li><code>.exe</code></li>
    <li><code>.zip</code></li>
    <li><code>.rar</code></li>
    <li><code>.scr</code></li>
</ul>

<h4>✅ Mais seguros (Mas ainda assim, com atenção)</h4>
<ul>
    <li><code>.pdf</code></li>
    <li><code>.jpg</code></li>
    <li><code>.png</code></li>
</ul>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<div style="background-color: var(--bg-main); padding: 24px; border-radius: var(--border-radius); border: 1px dashed var(--border-color);">
    <h3 style="margin-top: 0;">🧪 Atividade Prática: Detetive de E-mail</h3>
    
    <p><strong>🖥️ 1. Análise de Casos</strong></p>
    <ul>
        <li>O professor apresenta exemplos reais de golpes.</li>
    </ul>

    <p><strong>🎯 2. Jogo dos 7 Erros</strong></p>
    <p>Os alunos devem identificar:</p>
    <ul>
        <li>Erros de português</li>
        <li>E-mail falso</li>
        <li>Urgência exagerada</li>
        <li>Saudação genérica</li>
        <li>Links suspeitos</li>
    </ul>

    <p><strong>🧠 3. Treinando a Regra do Mouse</strong></p>
    <ul>
        <li>Abrir o e-mail criado na aula anterior</li>
        <li>Receber um link “disfarçado”</li>
        <li>Passar o mouse e analisar</li>
        <li>👉 <em>Descobrir para onde o link realmente leva</em></li>
    </ul>
</div>`
                },
                {
                    id: "3-5",
                    title: "Aula 05: Redes Sociais, uso consciente e privacidade",
                    duration: "Leitura (20 min)",
                    videoUrl: "https://www.youtube.com/embed/o1FiPSv60aY",
                    content: `<h2>📘 Apostila – Módulo 3 | Aula 5</h2>
<h3>Tema: A Praça Pública Digital (Redes Sociais e Privacidade)</h3>

<div style="background-color: var(--bg-hover); padding: 24px; border-radius: var(--border-radius); border-left: 4px solid var(--accent-color); margin-bottom: 24px;">
    <h3 style="margin-top: 0; color: var(--accent-color);">🎯 Objetivo da Aula</h3>
    <p>Quebrar a ilusão de que a internet é um ambiente privado. Fazer o aluno entender como as redes sociais lucram, os perigos da superexposição (<em>oversharing</em>) e como configurar o WhatsApp, o Instagram e o Facebook para não serem alvos fáceis de criminosos.</p>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>💰 1. A Regra de Ouro: "Se é de graça, o produto é você"</h3>
<p>Comece a aula com uma reflexão provocativa: 👉 <em>Como o Facebook, Instagram, TikTok e o WhatsApp ganham bilhões de dólares se você não paga nenhuma mensalidade para usá-los?</em></p>

<h4>O Modelo de Negócio</h4>
<p>As redes sociais são, na verdade, grandes empresas de publicidade. O que elas vendem é a sua atenção e os seus dados.</p>

<h4>O Algoritmo</h4>
<p>Tudo o que você faz na rede é monitorado por um robô (o algoritmo). Quanto tempo você passa olhando a foto de um carro, qual vídeo você curte, quem são seus familiares. O robô junta tudo isso para criar um "perfil de consumidor" e vender anúncios altamente direcionados.</p>

<h4>A Conclusão</h4>
<p>Saber disso não significa que devemos parar de usar as redes, mas sim que devemos ter consciência de que nada lá é totalmente privado.</p>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🛋️ 2. A Síndrome da Sala de Estar (A Falsa Privacidade)</h3>
<p>Muitas pessoas cometem o erro de pegar o celular enquanto estão sozinhas no conforto do sofá de casa e fazer uma postagem. Essa sensação de isolamento físico cria uma falsa sensação de privacidade digital.</p>

<h4>A Praça Pública</h4>
<p>Postar algo em uma rede social aberta é literalmente o equivalente a subir em um caixote no meio de uma praça lotada com um megafone e gritar aquela informação para milhares de desconhecidos.</p>

<div style="background-color: var(--bg-hover); padding: 16px; border-radius: var(--border-radius); border-left: 4px solid #f59e0b; margin-top: 16px;">
    <h4 style="margin-top: 0; color: #f59e0b;">A Memória de Elefante da Internet</h4>
    <p>👉 <strong>"Caiu na rede, é peixe"</strong></p>
    <p>Depois que uma foto, vídeo ou texto é publicado, você perde o controle sobre ele. Mesmo que você apague 1 minuto depois, alguém pode ter tirado um Print Screen (captura de tela).<br>
    👉 <em>Nunca poste algo que você não diria em voz alta em público.</em></p>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>⚠️ 3. Os Perigos da Superexposição (Oversharing)</h3>
<p>O "Oversharing" é o ato de compartilhar informações demais. É aqui que os criminosos coletam munição para aplicar golpes.</p>

<h4>O Check-in de Viagem (O Convite ao Ladrão)</h4>
<p>Um erro clássico é a ostentação em tempo real. Imagine que você vai tirar 15 dias de férias e viaja para o Rio de Janeiro.<br>
Postar: 👉 <em>"Partiu, volto em 15 dias!"</em><br>
É o mesmo que pendurar uma faixa na frente da sua casa dizendo que ela está vazia.</p>

<p>✔️ <strong>Dica de Segurança:</strong> Poste as fotos da viagem apenas depois que já tiver retornado para casa.</p>

<h4>A Rotina e os Uniformes</h4>
<p>Postar fotos diárias mostrando:</p>
<ul>
    <li>O trajeto para o trabalho</li>
    <li>O uniforme da empresa (com crachá)</li>
    <li>O uniforme da escola dos filhos</li>
</ul>
<p>👉 <em>Fornece a criminosos o horário e a localização exata da família.</em></p>

<h4>Munição para Senhas</h4>
<p>Muitos hackers não usam programas difíceis para adivinhar senhas. Eles olham o Instagram da vítima.<br>
Exemplo: 👉 <em>"Feliz aniversário de 2 anos, Rex!"</em><br>
O criminoso já sabe o nome do animal e uma data importante (informações que podem ser usadas como senha ou resposta de segurança).</p>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>📱 4. O Golpe do WhatsApp (Clonagem e Perfil Falso)</h3>
<p>Como estamos no Brasil, uma aula de redes sociais precisa obrigatoriamente falar do WhatsApp. Explique a diferença entre os dois golpes mais comuns:</p>

<h4>1. 🔁 Clonagem (Roubo do Número)</h4>
<p>O golpista:</p>
<ul>
    <li>Liga se passando por funcionário de empresa ou instituição</li>
    <li>Diz que enviou um código de 6 dígitos</li>
    <li>Pede para a pessoa informar</li>
</ul>
<p>👉 <em>Esse código é, na verdade, a autorização de instalação do WhatsApp. Ao informar, a pessoa perde o acesso ao próprio WhatsApp.</em></p>

<h4>2. 👤 Perfil Falso (A Nova Conta)</h4>
<p>O criminoso:</p>
<ul>
    <li>Pega uma foto pública da vítima</li>
    <li>Cria um WhatsApp com outro número</li>
    <li>Envia mensagens para familiares</li>
</ul>
<p><em>Exemplo:</em> 👉 “Mãe, troquei de número, anota o novo. Meu aplicativo do banco bloqueou, me faz um Pix urgente?”</p>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🧱 5. O Muro da Sua Casa (Configurações de Privacidade)</h3>
<p>Nós construímos muros ao redor de nossas casas para proteger nossa família. 👉 <em>Devemos fazer o mesmo nas redes sociais.</em></p>

<h4>Contas Privadas vs. Públicas</h4>
<p>Recomende fortemente que os alunos deixem seus perfis do Instagram e Facebook como privados (fechados). Assim, apenas pessoas autorizadas poderão ver as informações.</p>

<h4>Limpando Amigos Desconhecidos</h4>
<p>Não faz sentido ter 3.000 amigos no Facebook se você só conhece 100. 👉 <em>Pessoas desconhecidas não precisam acompanhar sua rotina.</em></p>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<div style="background-color: var(--bg-main); padding: 24px; border-radius: var(--border-radius); border: 1px dashed var(--border-color);">
    <h3 style="margin-top: 0;">🧪 Dinâmica Prática Sugerida (Mão na Massa)</h3>
    <p>Nesta aula, o laboratório prático é uma Auditoria de Privacidade nos próprios celulares dos alunos.</p>
    
    <p><strong>🔒 1. Blindando o WhatsApp</strong></p>
    <ul>
        <li>Peça para todos abrirem: 👉 <em>WhatsApp → Configurações → Privacidade</em></li>
        <li><strong>Ajuste:</strong> Foto do perfil → alterar de “Todos” para “Meus contatos”</li>
        <li><strong>Explicação:</strong> Isso impede que golpistas de fora da agenda roubem a foto para criar perfis falsos.</li>
    </ul>

    <p><strong>🔐 2. Trancando as Portas do Instagram/Facebook</strong></p>
    <ul>
        <li><strong>📸 Instagram:</strong> Acessar configurações e ativar a opção <em>Conta Privada</em>.</li>
        <li><strong>👥 Facebook:</strong> Ocultar lista de amigos.</li>
        <li><strong>Explicação:</strong> Golpistas usam essa lista para identificar familiares e aplicar golpes (ex: golpe do Pix).</li>
    </ul>

    <div style="background-color: var(--bg-hover); padding: 16px; border-radius: var(--border-radius); border-left: 4px solid var(--accent-color); margin-top: 16px;">
        <p style="margin: 0;"><strong>💬 Observação Final:</strong> Este conteúdo costuma gerar muitos debates em sala de aula, pois todo aluno conhece alguém que já caiu no golpe do WhatsApp ou expõe demais a própria vida na internet. Aproveite isso para estimular a participação e reflexão!</p>
    </div>
</div>`
                },
                {
                    id: "3-6",
                    title: "Aula 06: Senhas Fortes e Cofres de Senha",
                    duration: "Leitura (20 min)",
                    videoUrl: "https://www.youtube.com/embed/o1FiPSv60aY",
                    content: `<h2>📘 Apostila – Módulo 3 | Aula 6</h2>
<h3>Tema: As Chaves do Seu Castelo (Senhas Fortes e Cofres de Senha)</h3>

<div style="background-color: var(--bg-hover); padding: 24px; border-radius: var(--border-radius); border-left: 4px solid var(--accent-color); margin-bottom: 24px;">
    <h3 style="margin-top: 0; color: var(--accent-color);">🎯 Objetivo da Aula</h3>
    <p>Ensinar a importância de criar senhas fortes e únicas para cada serviço, abandonar os velhos hábitos (como usar datas de nascimento ou a palavra "senha123") e introduzir o conceito de gerenciadores de senhas (Cofres).</p>
</div>

<div style="background-color: var(--bg-main); padding: 16px; border-radius: var(--border-radius); border: 1px dashed var(--border-color); text-align: center; margin-bottom: 32px;">
    <p style="font-size: 1.1em; font-weight: bold; margin: 0;">💡 Frase-chave da aula</p>
    <p style="font-size: 1.2em; color: var(--accent-color); margin: 8px 0 0 0;">"Sua senha é como a sua escova de dentes: não empreste a ninguém e troque se cair no chão."</p>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🔐 1. O Problema das Senhas Fracas</h3>
<p>Na era digital, a sua senha é a única coisa que impede um criminoso de acessar o seu e-mail (seu RG digital), ler suas mensagens íntimas e roubar o seu dinheiro.</p>

<div style="background-color: var(--bg-hover); padding: 16px; border-radius: var(--border-radius); border-left: 4px solid #ef4444; margin-top: 16px;">
    <h4 style="margin-top: 0; color: #ef4444;">❌ Os Erros Mais Comuns</h4>
    <ul>
        <li>Usar o nome do cachorro, filho ou cônjuge (fáceis de achar no Instagram).</li>
        <li>Datas de nascimento.</li>
        <li>Sequências de teclado: <code>123456</code>, <code>qwerty</code>, <code>asdfgh</code>.</li>
        <li><strong>O pior de todos:</strong> Usar a mesma senha para tudo. Se um site vazar a sua senha, os hackers testarão essa mesma senha em todos os outros sites.</li>
    </ul>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>💪 2. A Anatomia de uma Senha Forte</h3>
<p>Uma senha forte não precisa ser impossível de lembrar, mas deve ser longa e variada. A matemática joga a favor: <strong>tamanho é mais importante que complexidade extrema.</strong></p>

<h4>A Regra do 12+</h4>
<p>Sua senha deve ter no mínimo 12 caracteres, misturando:</p>
<ul>
    <li>Letras Maiúsculas</li>
    <li>Letras Minúsculas</li>
    <li>Números</li>
    <li>Símbolos (<code>@</code>, <code>#</code>, <code>$</code>, <code>!</code>, <code>%</code>)</li>
</ul>

<h4>🧠 Dica de Ouro: Frase-Senha (Passphrase)</h4>
<p>Em vez de tentar lembrar <code>Xy!4pQ9@</code>, crie uma frase que faça sentido para você, mas que seja impossível para os outros adivinharem.</p>
<p><em>Exemplo de Frase-Senha Forte:</em><br>
👉 <code>GostoDeCafeComPao@2026!</code></p>
<ul>
    <li>Fácil de decorar.</li>
    <li>Muito longa (mais de 20 caracteres).</li>
    <li>Praticamente inquebrável para os robôs dos hackers.</li>
</ul>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🧰 3. O Cofre de Senhas (Gerenciadores)</h3>
<p>Se devemos ter uma senha única para cada site (Facebook, E-mail, Banco, Netflix, Amazon), como vamos lembrar de todas elas?</p>
<p>A resposta não é um caderninho, e sim um <strong>Gerenciador de Senhas</strong>.</p>

<h4>O que é um Gerenciador?</h4>
<p>É como um cofre-forte digital. Ele guarda todas as suas senhas de forma criptografada. Você só precisa decorar <strong>uma única senha mestre</strong> para abrir o cofre. O próprio programa cria e preenche senhas fortíssimas para os outros sites automaticamente.</p>

<h4>Bons Gerenciadores (Seguros e Gratuitos)</h4>
<ul>
    <li><strong>Bitwarden</strong> (Muito recomendado, gratuito)</li>
    <li><strong>1Password</strong> (Excelente, pago)</li>
    <li><strong>Google Password Manager</strong> (Integrado ao Google Chrome/Conta Google)</li>
</ul>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<div style="background-color: var(--bg-main); padding: 24px; border-radius: var(--border-radius); border: 1px dashed var(--border-color);">
    <h3 style="margin-top: 0;">🧪 Atividade Prática (Mão na Massa)</h3>
    
    <p><strong>📝 1. Testando a Força da Senha</strong></p>
    <ul>
        <li>O instrutor acessará um site como <em>howsecureismypassword.net</em> (ou similar) na tela.</li>
        <li>O professor mostrará quanto tempo um computador demora para quebrar "123456" (instantâneo) versus a frase-senha "GostoDeCafeComPao@2026!" (milênios).</li>
    </ul>

    <p><strong>💡 2. Criando uma Frase-Senha</strong></p>
    <ul>
        <li>Cada aluno deve pensar (sem falar em voz alta) em uma frase que marcou a sua vida, título de música ou ditado popular.</li>
        <li>Adaptar essa frase colocando algumas letras maiúsculas, um número no final e um caractere especial.</li>
    </ul>

    <p><strong>🔐 3. Configurando o Cofre do Navegador</strong></p>
    <ul>
        <li>Abra o navegador (Google Chrome).</li>
        <li>Vá nas configurações e procure por "Gerenciador de Senhas" ou "Senhas".</li>
        <li>Veja como o próprio navegador pode guardar suas senhas de forma segura, exigindo a senha do computador (ou digital no celular) para visualizá-las.</li>
    </ul>
</div>`
                },
                {
                    id: "3-7",
                    title: "Aula 07: Autenticação em 2 Fatores (2FA) e Antivírus",
                    duration: "Leitura (20 min)",
                    videoUrl: "https://www.youtube.com/embed/o1FiPSv60aY",
                    content: `<h2>📘 Apostila – Módulo 3 | Aula 7</h2>
<h3>Tema: A Tranca Dupla (2FA) e o Segurança do PC (Antivírus)</h3>

<div style="background-color: var(--bg-hover); padding: 24px; border-radius: var(--border-radius); border-left: 4px solid var(--accent-color); margin-bottom: 24px;">
    <h3 style="margin-top: 0; color: var(--accent-color);">🎯 Objetivo da Aula</h3>
    <p>Apresentar a Autenticação em Duas Etapas (2FA) como a ferramenta mais vital de segurança na internet atual e desmistificar a função e os limites de um programa antivírus.</p>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🚪 1. O que é Autenticação em Dois Fatores (2FA)?</h3>
<p>Mesmo com uma senha forte, existe o risco de você cair em um golpe de Phishing e entregar sua senha para o hacker. E agora? O 2FA é a sua salvação.</p>

<h4>Analogia da Porta e do Cadeado</h4>
<p>Ter apenas uma senha é como ter a chave da porta. Se roubarem a chave, o ladrão entra.<br>
O <strong>2FA (Two-Factor Authentication)</strong> é como adicionar um cadeado na porta que só você tem a senha. Mesmo que o ladrão tenha a chave principal, ele não consegue entrar sem o código extra.</p>

<div style="background-color: var(--bg-hover); padding: 16px; border-radius: var(--border-radius); border-left: 4px solid #10b981; margin-top: 16px;">
    <h4 style="margin-top: 0; color: #10b981;">Como Funciona na Prática?</h4>
    <p>Para entrar na sua conta, o sistema exige:</p>
    <ol>
        <li><strong>Algo que você sabe:</strong> Sua Senha.</li>
        <li><strong>Algo que você tem:</strong> Um código numérico que chega no seu celular.</li>
    </ol>
    <p>👉 <em>Como o hacker da Rússia não tem o seu celular em mãos, ele não consegue acessar sua conta, mesmo sabendo a senha!</em></p>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>📱 2. Os Tipos de 2FA</h3>
<p>Nem todas as "Trancas Duplas" são iguais.</p>

<ul>
    <li><strong>SMS (Mensagem de Texto):</strong> O código chega por SMS. É melhor que nada, mas é o mais fraco, pois o seu chip de celular pode ser clonado (SIM Swap).</li>
    <li><strong>Aplicativo Autenticador:</strong> É o mais seguro. Você instala um aplicativo como <em>Google Authenticator</em> ou <em>Microsoft Authenticator</em>. Ele gera códigos que mudam a cada 30 segundos offline.</li>
</ul>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🛡️ 3. O Antivírus (O Guarda do Computador)</h3>
<p>Por muito tempo, acreditou-se que ter um antivírus instalado significava estar 100% seguro. Hoje não é mais assim.</p>

<h4>O Windows Defender</h4>
<p>A boa notícia: Se você usa o Windows 10 ou 11, você já tem um excelente antivírus nativo e gratuito, o <strong>Windows Defender</strong> (ou Segurança do Windows). Para o uso doméstico e de pequenos escritórios, ele é mais do que suficiente.</p>

<div style="background-color: var(--bg-hover); padding: 16px; border-radius: var(--border-radius); border-left: 4px solid #ef4444; margin-top: 16px;">
    <h4 style="margin-top: 0; color: #ef4444;">⚠️ O Antivírus Não Faz Milagres</h4>
    <p>O antivírus age como um guarda de shopping.</p>
    <ul>
        <li>Ele barra ameaças conhecidas e arquivos suspeitos (ex: vírus de pen drive).</li>
        <li><strong>Mas se você (o dono) disser ao guarda:</strong> "Deixe esse criminoso entrar, ele é meu amigo" (ou seja, clicar em "Ignorar aviso e instalar mesmo assim"), o antivírus não vai conseguir te proteger.</li>
    </ul>
    <p>👉 <strong>O melhor antivírus é o usuário bem treinado.</strong></p>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<div style="background-color: var(--bg-main); padding: 24px; border-radius: var(--border-radius); border: 1px dashed var(--border-color);">
    <h3 style="margin-top: 0;">🧪 Atividade Prática (Mão na Massa)</h3>
    
    <p><strong>🔐 1. Ativando o 2FA no WhatsApp</strong></p>
    <ul>
        <li>Pegue o celular. Abra o WhatsApp.</li>
        <li>Vá em <em>Configurações → Conta → Confirmação em Duas Etapas</em>.</li>
        <li>Ative a opção criando uma senha (PIN) de 6 dígitos que você nunca esquecerá.</li>
        <li><strong>Importância:</strong> Isso impede definitivamente a clonagem da sua conta!</li>
    </ul>

    <p><strong>🛡️ 2. Checando o Windows Defender</strong></p>
    <ul>
        <li>No computador, vá no Menu Iniciar e digite <em>"Segurança do Windows"</em>.</li>
        <li>Abra o aplicativo e verifique a seção "Proteção contra vírus e ameaças".</li>
        <li>Certifique-se de que os escudos estão todos com um ✅ verde.</li>
        <li>Faça uma "Verificação Rápida" para ver como o programa varre o sistema.</li>
    </ul>
</div>`
                },
                {
                    id: "3-8",
                    title: "Aula 08: Cuidados no uso de redes públicas (Wi-Fi)",
                    duration: "Leitura (15 min)",
                    videoUrl: "https://www.youtube.com/embed/o1FiPSv60aY",
                    content: `<h2>📘 Apostila – Módulo 3 | Aula 8</h2>
<h3>Tema: A Rede Sem Fio Aberta (Riscos do Wi-Fi Público)</h3>

<div style="background-color: var(--bg-hover); padding: 24px; border-radius: var(--border-radius); border-left: 4px solid var(--accent-color); margin-bottom: 24px;">
    <h3 style="margin-top: 0; color: var(--accent-color);">🎯 Objetivo da Aula</h3>
    <p>Alertar sobre os perigos ocultos em redes Wi-Fi gratuitas de shoppings, aeroportos e cafés, ensinando boas práticas de navegação segura fora de casa.</p>
</div>

<div style="background-color: var(--bg-main); padding: 16px; border-radius: var(--border-radius); border: 1px dashed var(--border-color); text-align: center; margin-bottom: 32px;">
    <p style="font-size: 1.1em; font-weight: bold; margin: 0;">💡 Frase-chave da aula</p>
    <p style="font-size: 1.2em; color: var(--accent-color); margin: 8px 0 0 0;">"Conectar-se a um Wi-Fi sem senha é como conversar sobre seus segredos em um alto-falante."</p>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>📡 1. O Perigo da "Rede Grátis"</h3>
<p>Todos nós adoramos economizar o pacote de dados do celular, mas acessar redes Wi-Fi públicas sem senha (ou com senha compartilhada na parede do café) tem um custo de privacidade enorme.</p>

<h4>Analogia do Espião</h4>
<p>Em uma rede privada (na sua casa), seus dados trafegam em um tubo fechado.<br>
Em uma rede pública, seus dados estão voando pelo ar para qualquer computador conectado àquela mesma rede interceptar.</p>
<p>Um hacker sentado no mesmo café com um notebook pode usar programas para capturar o que você está enviando, desde e-mails não criptografados até senhas digitadas sem proteção.</p>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🎭 2. O Golpe do Falso Wi-Fi (Evil Twin)</h3>
<p>O golpe mais sofisticado e comum em aeroportos e praças é a "Rede Gêmea do Mal".</p>

<ul>
    <li>Você vai a uma cafeteria chamada <strong>Café Central</strong>.</li>
    <li>O golpista cria uma rede Wi-Fi no notebook dele e coloca o nome de: <code>Wi-Fi_Cafe_Central_Gratis</code>.</li>
    <li>Você se conecta achando que é do estabelecimento.</li>
    <li>A internet funciona, <strong>mas tudo o que você acessa passa pelo computador do golpista primeiro.</strong> Ele registra suas senhas e copia seus dados.</li>
</ul>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🛡️ 3. Regras de Sobrevivência em Wi-Fi Público</h3>

<div style="background-color: var(--bg-hover); padding: 16px; border-radius: var(--border-radius); border-left: 4px solid #10b981; margin-top: 16px;">
    <h4 style="margin-top: 0; color: #10b981;">O que NUNCA fazer em Wi-Fi público:</h4>
    <ul>
        <li><strong>❌ Acessar o aplicativo do Banco:</strong> Jamais veja saldo, pague contas ou faça Pix em Wi-Fi de shopping ou aeroporto. Desligue o Wi-Fi e use o seu 4G/5G.</li>
        <li><strong>❌ Fazer compras com Cartão de Crédito:</strong> Não insira dados de cartão em lojas virtuais.</li>
        <li><strong>❌ Acessar sistemas da sua empresa:</strong> Dados confidenciais do trabalho não devem passar por redes abertas.</li>
    </ul>
    
    <h4 style="margin-top: 16px; color: #10b981;">O que PODE fazer em Wi-Fi público:</h4>
    <ul>
        <li>✔️ Ler notícias (UOL, G1).</li>
        <li>✔️ Assistir vídeos no YouTube.</li>
        <li>✔️ Pesquisar endereços no Google Maps.</li>
        <li>👉 <em>Basicamente, qualquer coisa que não exija senha ou envolva dinheiro.</em></li>
    </ul>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🔒 4. VPN: O Túnel de Proteção</h3>
<p>Para profissionais que viajam muito e precisam usar redes de hotel e aeroporto para trabalhar, a solução técnica é usar uma <strong>VPN (Rede Privada Virtual)</strong>.</p>
<p>A VPN cria um "túnel blindado" dentro do Wi-Fi público. Mesmo que o hacker esteja na mesma rede, ele verá apenas dados embaralhados e incompreensíveis. (Serviços como NordVPN, ExpressVPN e ProtonVPN).</p>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<div style="background-color: var(--bg-main); padding: 24px; border-radius: var(--border-radius); border: 1px dashed var(--border-color);">
    <h3 style="margin-top: 0;">🧪 Atividade Prática (Mão na Massa)</h3>
    
    <p><strong>🌐 1. Identificando o cadeado (HTTPS)</strong></p>
    <ul>
        <li>Abra o navegador e acesse sites conhecidos (Google, site do seu banco).</li>
        <li>Mostre o cadeado 🔒 que fica ao lado do endereço (URL).</li>
        <li><strong>Explicação:</strong> Esse cadeado significa que a comunicação entre você e o site está criptografada. Em Wi-Fi público, acessar sites SEM esse cadeado é certeza de que seus dados estão expostos.</li>
    </ul>

    <p><strong>📱 2. Configurando o Celular</strong></p>
    <ul>
        <li>Vá nas configurações de Wi-Fi do celular do aluno.</li>
        <li>Desative a opção <em>"Conectar automaticamente a redes abertas"</em> ou <em>"Solicitar conexão"</em>.</li>
        <li>Assim, o celular não se conecta a redes de shopping sozinho enquanto está no bolso do aluno.</li>
    </ul>
</div>`
                },
                {
                    id: "3-9",
                    title: "Aula 09: Ética, Netiqueta e Cidadania Digital",
                    duration: "Leitura (20 min)",
                    videoUrl: "https://www.youtube.com/embed/o1FiPSv60aY",
                    content: `<h2>📘 Apostila – Módulo 3 | Aula 9</h2>
<h3>Tema: Cidadania Digital (Sendo um Profissional na Web)</h3>

<div style="background-color: var(--bg-hover); padding: 24px; border-radius: var(--border-radius); border-left: 4px solid var(--accent-color); margin-bottom: 24px;">
    <h3 style="margin-top: 0; color: var(--accent-color);">🎯 Objetivo da Aula</h3>
    <p>Ensinar as regras de boa convivência na internet (Netiqueta), os impactos profissionais do comportamento digital, a checagem de Fake News e os cuidados em reuniões online.</p>
</div>

<div style="background-color: var(--bg-main); padding: 16px; border-radius: var(--border-radius); border: 1px dashed var(--border-color); text-align: center; margin-bottom: 32px;">
    <p style="font-size: 1.1em; font-weight: bold; margin: 0;">💡 Frase-chave da aula</p>
    <p style="font-size: 1.2em; color: var(--accent-color); margin: 8px 0 0 0;">"A tela do computador não é um escudo. Você é responsável por tudo que digita e compartilha."</p>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🤝 1. O que é Netiqueta?</h3>
<p>Netiqueta é a mistura das palavras <em>Internet</em> e <em>Etiqueta</em>. São as regras não escritas de educação, respeito e bom senso no mundo digital.</p>

<div style="background-color: var(--bg-hover); padding: 16px; border-radius: var(--border-radius); border-left: 4px solid #f59e0b; margin-top: 16px;">
    <h4 style="margin-top: 0; color: #f59e0b;">Regras de Ouro da Netiqueta no Trabalho</h4>
    <ul>
        <li><strong>NÃO ESCREVA TUDO EM MAIÚSCULAS:</strong> Na internet, o uso de Caixa Alta (Caps Lock) equivale a GRITAR. Guarde para destacar apenas uma ou duas palavras importantes.</li>
        <li><strong>Respeite os horários:</strong> O WhatsApp facilitou a comunicação, mas mandar mensagens de trabalho às 22h de sexta-feira demonstra falta de profissionalismo e respeito ao descanso alheio.</li>
        <li><strong>Áudios longos:</strong> No ambiente corporativo, prefira o texto. Se o áudio for inevitável, pergunte antes: <em>"Posso te mandar um áudio rápido sobre esse projeto?"</em>.</li>
    </ul>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🕵️♂️ 2. O Impacto da Postura Digital no Emprego</h3>
<p>As empresas modernas fazem uma varredura nas redes sociais dos candidatos antes de contratá-los.</p>

<ul>
    <li>Reclamações agressivas sobre chefes e empregos anteriores.</li>
    <li>Comentários ofensivos e preconceituosos.</li>
    <li>Superexposição em festas ou uso de linguagem inadequada.</li>
</ul>
<p>👉 <em>Muitos candidatos brilhantes no currículo são reprovados na "entrevista digital" (a análise do Instagram e Facebook pelo RH).</em></p>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>📰 3. O Perigo das Fake News (Notícias Falsas)</h3>
<p>Um bom profissional confere os fatos antes de encaminhar mensagens alarmistas em grupos.</p>

<h4>Como Identificar uma Fake News</h4>
<ol>
    <li><strong>A Urgência e o Apelo Emocional:</strong> Textos com muitos emojis (🚨😱‼️) e pedindo para "repassar urgente para todos os contatos" quase sempre são falsos.</li>
    <li><strong>Verifique a Fonte:</strong> Quem publicou? É um portal de notícias conhecido ou um blog suspeito?</li>
    <li><strong>Pesquise no Google:</strong> Se a notícia diz "O governo aprovou lei que cancela o Carnaval", copie o título e jogue no Google. Se não aparecer nos grandes jornais (G1, UOL, CNN), é mentira.</li>
</ol>
<p>👉 <strong>Compartilhar Fake News, mesmo sem intenção, mancha a sua credibilidade profissional.</strong></p>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>💻 4. Etiqueta em Reuniões Online (Zoom, Teams, Meet)</h3>
<p>O trabalho remoto e as reuniões por vídeo vieram para ficar.</p>

<ul>
    <li><strong>Microfone mudo:</strong> Ao entrar na reunião, deixe o microfone no <em>Mute</em> (Mudo). Só ative quando for falar. Isso evita ruídos de cachorro, trânsito e teclado atrapalhando quem está falando.</li>
    <li><strong>A Câmera e o Fundo:</strong> Se for abrir a câmera, verifique o que aparece atrás de você. Uma parede lisa e um ambiente iluminado passam mais profissionalismo que uma cama desarrumada.</li>
    <li><strong>Vestimenta:</strong> Vista-se como se estivesse indo presencialmente para o escritório (pelo menos da cintura para cima!).</li>
</ul>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<div style="background-color: var(--bg-main); padding: 24px; border-radius: var(--border-radius); border: 1px dashed var(--border-color);">
    <h3 style="margin-top: 0;">🧪 Atividade Prática (Mão na Massa)</h3>
    
    <p><strong>🕵️ 1. O Detector de Mentiras</strong></p>
    <ul>
        <li>O instrutor projeta 3 manchetes (duas reais e uma absurda).</li>
        <li>Os alunos devem usar o navegador para pesquisar e dizer qual é a Fake News, encontrando a fonte de desmentido (sites como <em>Boatos.org</em> ou <em>Fato ou Fake</em>).</li>
    </ul>

    <p><strong>📝 2. Reescrevendo o E-mail</strong></p>
    <ul>
        <li>O instrutor apresenta um e-mail agressivo e em letras maiúsculas: <em>"PRECISO DO RELATÓRIO AGORA! VOCÊS SEMPRE ATRASAM!"</em></li>
        <li>Os alunos devem reescrever a mesma cobrança de forma firme, porém educada e seguindo a Netiqueta corporativa.</li>
    </ul>
</div>`
                },
                {
                    id: "fix-3",
                    title: "Atividade de Fixação: Módulo 3",
                    duration: "Prática (5 min)",
                    videoUrl: "https://www.youtube.com/embed/o1FiPSv60aY",
                    quiz: [
                        {
                            isFixacao: true,
                            question: "O que é Phishing?",
                            options: ["Um antivírus gratuito", "Uma técnica para pescar senhas e dados bancários", "Um sistema de busca na internet", "Um formato de e-mail"],
                            correctAnswer: 1,
                            explanation: "Phishing é uma técnica de engenharia social (golpe) usada para enganar as pessoas e roubar informações confidenciais."
                        }
                    ],
                    content: `<h2>🎯 Atividade de Fixação - Módulo 3</h2><p>Responda as questões acima para testar seus conhecimentos. (Não vale XP)</p>`
                }
            ]
        },
        {
            id: 4,
            title: "Módulo 4 – Pacote Office & Alternativas (20h)",
            description: "Criação e formatação de textos, planilhas e apresentações profissionais.",
            image: "https://images.unsplash.com/photo-1555529733-0e670560f4e1?w=600&q=80",
            lessons: [
                {
                    id: "4-1",
                    title: "Aula 01: Introdução ao Pacote Office e LibreOffice",
                    duration: "Leitura (15 min)",
                    videoUrl: "https://www.youtube.com/embed/o1FiPSv60aY",
                    content: `<h2>📘 Apostila – Módulo 4 | Aula 1</h2>
<h3>Tema: O Escritório Virtual (Office vs. LibreOffice)</h3>

<div style="background-color: var(--bg-hover); padding: 24px; border-radius: var(--border-radius); border-left: 4px solid var(--accent-color); margin-bottom: 24px;">
    <h3 style="margin-top: 0; color: var(--accent-color);">🎯 Objetivo da Aula</h3>
    <p>Apresentar a suíte de aplicativos de escritório, diferenciando os programas da Microsoft (pagos) das alternativas livres e gratuitas (LibreOffice, Google Docs).</p>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🏢 1. O que é um "Pacote Office"?</h3>
<p>Antigamente, um escritório precisava de uma máquina de escrever, um livro-caixa de contabilidade e um retroprojetor. Hoje, tudo isso virou software.</p>
<ul>
    <li>📝 <strong>Textos (Máquina de escrever):</strong> Word, Writer, Google Docs.</li>
    <li>📊 <strong>Planilhas (Livro-caixa):</strong> Excel, Calc, Google Sheets.</li>
    <li>📽️ <strong>Apresentações (Retroprojetor):</strong> PowerPoint, Impress, Google Slides.</li>
</ul>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>💰 2. Microsoft Office vs. Software Livre</h3>
<p>O <strong>Microsoft Office</strong> é o padrão da indústria. A maioria das empresas usa. Porém, ele é pago (requer assinatura do Microsoft 365).</p>
<p>O <strong>LibreOffice</strong> é um software livre. Ele faz 95% do que o Office faz, mas é totalmente gratuito. Muitas prefeituras e órgãos públicos usam o LibreOffice para economizar verba.</p>

<div style="background-color: var(--bg-main); padding: 24px; border-radius: var(--border-radius); border: 1px dashed var(--border-color);">
    <h3 style="margin-top: 0;">🧪 Dica de Sobrevivência</h3>
    <p>Se você sabe usar o Word, você sabe usar o Writer. Os botões podem estar em lugares um pouco diferentes, mas a lógica (Negrito, Itálico, Salvar) é exatamente a mesma!</p>
</div>`
                },
                {
                    id: "4-2",
                    title: "Aula 02: Microsoft Word – criação e edição de textos",
                    duration: "Leitura (20 min)",
                    videoUrl: "https://www.youtube.com/embed/o1FiPSv60aY",
                    content: `<h2>📘 Apostila – Módulo 4 | Aula 2</h2>
<h3>Tema: Dominando o Word (A Máquina de Escrever Moderna)</h3>

<div style="background-color: var(--bg-hover); padding: 24px; border-radius: var(--border-radius); border-left: 4px solid var(--accent-color); margin-bottom: 24px;">
    <h3 style="margin-top: 0; color: var(--accent-color);">🎯 Objetivo da Aula</h3>
    <p>Ensinar as funções básicas do Microsoft Word, desde a criação de um documento em branco até as ferramentas essenciais de edição de texto.</p>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>📝 1. A Interface Básica</h3>
<p>Ao abrir o Word, você encontra a <strong>Faixa de Opções (Ribbon)</strong> no topo. Ela é dividida em abas (Página Inicial, Inserir, Layout).</p>
<ul>
    <li>A aba <strong>Página Inicial</strong> é onde você passará 80% do seu tempo.</li>
</ul>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>⌨️ 2. Regras de Digitação (O Fim da Máquina de Escrever)</h3>
<p>Muitas pessoas usam o Word de forma errada porque tentam imitar a máquina de escrever mecânica:</p>

<div style="background-color: var(--bg-hover); padding: 16px; border-radius: var(--border-radius); border-left: 4px solid #ef4444; margin-top: 16px;">
    <h4 style="margin-top: 0; color: #ef4444;">❌ Os Piores Erros no Word</h4>
    <ul>
        <li>Apertar <code>Enter</code> no final de cada linha. (O Word quebra a linha sozinho, aperte <code>Enter</code> apenas para criar um novo parágrafo!).</li>
        <li>Apertar <code>Espaço</code> 20 vezes para centralizar um título. (Use o botão de Centralizar!).</li>
    </ul>
</div>

<div style="background-color: var(--bg-main); padding: 24px; border-radius: var(--border-radius); border: 1px dashed var(--border-color); margin-top: 32px;">
    <h3 style="margin-top: 0;">🧪 Atividade Prática (Mão na Massa)</h3>
    <p>Vamos digitar um pequeno ofício corporativo. Sem se preocupar com a beleza (formatação) ainda, apenas digite o texto de forma corrida.</p>
</div>`
                },
                {
                    id: "4-3",
                    title: "Aula 03: Formatação de documentos",
                    duration: "Leitura (20 min)",
                    videoUrl: "https://www.youtube.com/embed/o1FiPSv60aY",
                    content: `<h2>📘 Apostila – Módulo 4 | Aula 3</h2>
<h3>Tema: Deixando o Texto Profissional (Formatação)</h3>

<div style="background-color: var(--bg-hover); padding: 24px; border-radius: var(--border-radius); border-left: 4px solid var(--accent-color); margin-bottom: 24px;">
    <h3 style="margin-top: 0; color: var(--accent-color);">🎯 Objetivo da Aula</h3>
    <p>Aprender a usar as ferramentas de formatação para dar um aspecto visual organizado e profissional aos documentos criados na aula anterior.</p>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🎨 1. A Trindade da Formatação (N, I, S)</h3>
<p>Selecione uma palavra (dê um clique duplo nela) e use:</p>
<ul>
    <li><strong>N (Negrito):</strong> <kbd>Ctrl</kbd> + <kbd>N</kbd> (Para destacar o que é mais importante).</li>
    <li><em>I (Itálico):</em> <kbd>Ctrl</kbd> + <kbd>I</kbd> (Para palavras estrangeiras ou citações).</li>
    <li><u>S (Sublinhado):</u> <kbd>Ctrl</kbd> + <kbd>S</kbd> (Use com moderação).</li>
</ul>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>📏 2. Alinhamento de Texto</h3>
<p>Na aba Página Inicial, procure os 4 botões de alinhamento com desenhinhos de linhas:</p>
<ul>
    <li><strong>Alinhar à Esquerda:</strong> O padrão para textos longos.</li>
    <li><strong>Centralizar:</strong> Usado apenas para títulos ou capas.</li>
    <li><strong>Alinhar à Direita:</strong> Usado para colocar a Data/Local no topo de ofícios.</li>
    <li><strong>Justificar:</strong> Deixa as bordas retinhas dos dois lados (como em livros e jornais). <em>Dá um ar muito profissional!</em></li>
</ul>

<div style="background-color: var(--bg-main); padding: 24px; border-radius: var(--border-radius); border: 1px dashed var(--border-color); margin-top: 32px;">
    <h3 style="margin-top: 0;">🧪 Atividade Prática (Mão na Massa)</h3>
    <p>Abra o ofício que digitamos na Aula 2.</p>
    <ul>
        <li>Coloque o título em Negrito, tamanho 14, e Centralizado.</li>
        <li>Justifique todos os parágrafos do texto.</li>
        <li>Coloque o nome da empresa em Itálico.</li>
    </ul>
</div>`
                },
                {
                    id: "4-4",
                    title: "Aula 04: Criação de tabelas e listas",
                    duration: "Leitura (15 min)",
                    videoUrl: "https://www.youtube.com/embed/o1FiPSv60aY",
                    content: `<h2>📘 Apostila – Módulo 4 | Aula 4</h2>
<h3>Tema: Organizando Informações (Tabelas e Listas)</h3>

<div style="background-color: var(--bg-hover); padding: 24px; border-radius: var(--border-radius); border-left: 4px solid var(--accent-color); margin-bottom: 24px;">
    <h3 style="margin-top: 0; color: var(--accent-color);">🎯 Objetivo da Aula</h3>
    <p>Aprender a estruturar dados dentro do Word, criando listas com marcadores e desenhando tabelas simples sem precisar ir para o Excel.</p>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>📋 1. Listas (Marcadores e Numeração)</h3>
<p>Não digite "1.", "2.", "3." manualmente! O Word faz isso por você de forma inteligente.</p>
<ul>
    <li><strong>Marcadores (Bolinhas):</strong> Use quando a ordem não importa (ex: Lista de compras).</li>
    <li><strong>Numeração (1, 2, 3):</strong> Use quando a ordem for um passo a passo (ex: Receita de bolo).</li>
</ul>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>📊 2. Inserindo Tabelas</h3>
<p>Se você precisa organizar horários, escalas ou preços no Word, a melhor forma é a Tabela.</p>
<ul>
    <li>Vá na aba <strong>Inserir</strong> → <strong>Tabela</strong>.</li>
    <li>Passe o mouse pelos quadradinhos para escolher quantas Colunas (vertical) e Linhas (horizontal) você precisa.</li>
    <li>Para adicionar mais linhas no final, basta apertar a tecla <kbd>Tab</kbd> estando na última célula.</li>
</ul>

<div style="background-color: var(--bg-main); padding: 24px; border-radius: var(--border-radius); border: 1px dashed var(--border-color); margin-top: 32px;">
    <h3 style="margin-top: 0;">🧪 Atividade Prática (Mão na Massa)</h3>
    <p>Crie uma tabela de 3 colunas e 4 linhas com o cabeçalho:</p>
    <ul>
        <li><strong>Nome do Funcionário | Cargo | Horário</strong></li>
    </ul>
    <p>Preencha os dados e aplique um sombreamento (cor de fundo) na primeira linha para destacar o cabeçalho.</p>
</div>`
                },
                {
                    id: "4-5",
                    title: "Aula 05: Inserção de imagens e elementos gráficos",
                    duration: "Leitura (15 min)",
                    videoUrl: "https://www.youtube.com/embed/o1FiPSv60aY",
                    content: `<h2>📘 Apostila – Módulo 4 | Aula 5</h2>
<h3>Tema: O Visual do Documento (Imagens e Gráficos)</h3>

<div style="background-color: var(--bg-hover); padding: 24px; border-radius: var(--border-radius); border-left: 4px solid var(--accent-color); margin-bottom: 24px;">
    <h3 style="margin-top: 0; color: var(--accent-color);">🎯 Objetivo da Aula</h3>
    <p>Como enriquecer relatórios e documentos inserindo logotipos de empresas, fotos e ajustando o comportamento dessas imagens no meio do texto.</p>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🖼️ 1. Como Inserir uma Imagem</h3>
<p>Vá na aba <strong>Inserir</strong> → <strong>Imagens</strong>. Você pode escolher uma foto que já está salva no seu computador.</p>

<div style="background-color: var(--bg-hover); padding: 16px; border-radius: var(--border-radius); border-left: 4px solid #ef4444; margin-top: 16px;">
    <h4 style="margin-top: 0; color: #ef4444;">❌ O Erro da Proporção (Cara Amassada)</h4>
    <p>Nunca diminua ou aumente uma imagem puxando pelos meios (lados ou topo e base). Isso distorce a foto e deixa o documento amador.<br>
    👉 <strong>Sempre redimensione puxando pelas QUINAS (cantos)!</strong></p>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🐕 2. A Quebra de Texto (O Segredo das Imagens)</h3>
<p>Você inseriu a imagem e ela bagunçou todo o seu texto? O segredo para resolver isso é a "Quebra de Texto Automática" (aquele ícone de um arco-íris com um cachorrinho que aparece ao lado da foto).</p>
<ul>
    <li><strong>Quadrado:</strong> O texto "abraça" a imagem de forma retangular. Excelente para artigos e currículos.</li>
    <li><strong>Atrás do Texto:</strong> A imagem vira um fundo (marca d'água).</li>
    <li><strong>Em Frente ao Texto:</strong> A imagem flutua livremente, cobrindo as palavras (útil para mover livremente logotipos para o topo da página).</li>
</ul>`
                },
                {
                    id: "4-6",
                    title: "Aula 06: Microsoft Excel – planilhas básicas",
                    duration: "Leitura (25 min)",
                    videoUrl: "https://www.youtube.com/embed/o1FiPSv60aY",
                    content: `<h2>📘 Apostila – Módulo 4 | Aula 6</h2>
<h3>Tema: Bem-vindo ao Excel (O Terror do Escritório desmistificado)</h3>

<div style="background-color: var(--bg-hover); padding: 24px; border-radius: var(--border-radius); border-left: 4px solid var(--accent-color); margin-bottom: 24px;">
    <h3 style="margin-top: 0; color: var(--accent-color);">🎯 Objetivo da Aula</h3>
    <p>Entender a lógica básica das planilhas (linhas, colunas e células) e perder o medo do Excel, aprendendo a inserir e formatar dados.</p>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🟩 1. O Jogo de Batalha Naval</h3>
<p>A tela do Excel parece assustadora com aquele mar de quadradinhos. Mas pense nisso como um grande jogo de Batalha Naval.</p>
<ul>
    <li><strong>Colunas:</strong> São representadas por Letras (A, B, C...) 🡓.</li>
    <li><strong>Linhas:</strong> São representadas por Números (1, 2, 3...) 🡒.</li>
    <li><strong>Célula:</strong> É o cruzamento! O quadradinho <strong>B3</strong> está na Coluna B, Linha 3.</li>
</ul>
<p>Cada célula é como uma mini-calculadora independente.</p>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>📏 2. Ajustando o Tamanho e Formatando</h3>
<p>Digitou um nome longo e ele "passou por cima" da outra célula? Não entre em pânico!</p>
<ul>
    <li>Leve o mouse entre a letra A e a letra B (no cabeçalho das colunas). O cursor vai mudar.</li>
    <li>Dê um clique duplo rápido, e a coluna se autoajustará ao tamanho do texto mágico!</li>
</ul>

<div style="background-color: var(--bg-main); padding: 24px; border-radius: var(--border-radius); border: 1px dashed var(--border-color); margin-top: 32px;">
    <h3 style="margin-top: 0;">🧪 Atividade Prática (Mão na Massa)</h3>
    <p>Vamos criar o rascunho de um Livro Caixa pessoal:</p>
    <ul>
        <li>Célula A1: Digite "Data"</li>
        <li>Célula B1: Digite "Descrição"</li>
        <li>Célula C1: Digite "Valor"</li>
        <li>Pinte essas três células de Azul (Balde de Tinta) e coloque a letra em Branco e Negrito.</li>
        <li>Formate a coluna C inteira clicando no botão de <strong>Moeda ($)</strong>, para que os números virem Reais (R$).</li>
    </ul>
</div>`
                },
                {
                    id: "4-7",
                    title: "Aula 07: Fórmulas simples e gráficos",
                    duration: "Leitura (30 min)",
                    videoUrl: "https://www.youtube.com/embed/o1FiPSv60aY",
                    content: `<h2>📘 Apostila – Módulo 4 | Aula 7</h2>
<h3>Tema: A Mágica Matemática (Fórmulas no Excel)</h3>

<div style="background-color: var(--bg-hover); padding: 24px; border-radius: var(--border-radius); border-left: 4px solid var(--accent-color); margin-bottom: 24px;">
    <h3 style="margin-top: 0; color: var(--accent-color);">🎯 Objetivo da Aula</h3>
    <p>Ensinar o Excel a trabalhar por você, automatizando cálculos com fórmulas básicas (Soma, Subtração, Média) e criando um gráfico simples.</p>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🧮 1. A Regra de Ouro (O Sinal de Igual =)</h3>
<p>Para o Excel, existe uma diferença gigante entre Texto e Cálculo.</p>
<ul>
    <li>Se você digitar <code>10+10</code> na célula e apertar Enter, o Excel vai achar que é só um texto.</li>
    <li><strong>Regra:</strong> TODA fórmula ou matemática obrigatoriamente começa com o sinal de igual <code>=</code>.</li>
    <li>Se você digitar <code>=10+10</code>, o Excel entende a ordem, faz o cálculo e exibe <code>20</code>.</li>
</ul>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🔗 2. Somando Células (A verdadeira força do Excel)</h3>
<p>Em vez de somar os números, nós somamos os "endereços" das células. Assim, se o valor mudar amanhã, o total se atualiza sozinho!</p>
<ul>
    <li>Digite <code>50</code> na A1. Digite <code>20</code> na A2.</li>
    <li>Na A3, digite: <code>=A1+A2</code></li>
    <li>Se você mudar o 50 para 100, o total vira 120 instantaneamente.</li>
</ul>

<h4>A Função SOMA</h4>
<p>Para somar 30 itens de uma vez, não digite <code>=A1+A2+A3...</code><br>
Use o botão <strong>AutoSoma (Σ)</strong> ou digite <code>=SOMA(A1:A30)</code>.</p>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<div style="background-color: var(--bg-main); padding: 24px; border-radius: var(--border-radius); border: 1px dashed var(--border-color); margin-top: 32px;">
    <h3 style="margin-top: 0;">🧪 Atividade Prática (Mão na Massa)</h3>
    <p><strong>Despesas Domésticas e Gráfico de Pizza:</strong></p>
    <ul>
        <li>Liste contas (Luz, Água, Internet) na Coluna A.</li>
        <li>Coloque os valores na Coluna B.</li>
        <li>Faça a SOMA no final da coluna B.</li>
        <li>Selecione todos os nomes e valores, vá em <em>Inserir → Gráficos Recomendados</em>, e crie um Gráfico de Pizza para ver para onde o seu dinheiro está indo!</li>
    </ul>
</div>`
                },
                {
                    id: "4-8",
                    title: "Aula 08: Microsoft PowerPoint – criação de slides",
                    duration: "Leitura (20 min)",
                    videoUrl: "https://www.youtube.com/embed/o1FiPSv60aY",
                    content: `<h2>📘 Apostila – Módulo 4 | Aula 8</h2>
<h3>Tema: O Show Visual (Fundamentos do PowerPoint)</h3>

<div style="background-color: var(--bg-hover); padding: 24px; border-radius: var(--border-radius); border-left: 4px solid var(--accent-color); margin-bottom: 24px;">
    <h3 style="margin-top: 0; color: var(--accent-color);">🎯 Objetivo da Aula</h3>
    <p>Criar uma apresentação de slides do zero, focando na organização visual, textos curtos e uso de layouts.</p>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>📽️ 1. A Regra do Menos é Mais</h3>
<p>O maior erro no PowerPoint é transformar o slide em um documento do Word.</p>
<div style="background-color: var(--bg-hover); padding: 16px; border-radius: var(--border-radius); border-left: 4px solid #ef4444; margin-top: 16px;">
    <h4 style="margin-top: 0; color: #ef4444;">❌ Pare de ler os slides!</h4>
    <p>Se você colocar um texto gigante na tela, as pessoas vão ler mais rápido do que você fala, e vão parar de prestar atenção em você.<br>
    👉 <strong>O slide é um apoio visual para o público, não uma "cola" para o palestrante. Use tópicos (títulos e poucas palavras).</strong></p>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>📐 2. Trabalhando com Caixas de Texto</h3>
<p>Diferente do Word, você não pode simplesmente começar a digitar no fundo branco. O PowerPoint trabalha com caixas delimitadas.</p>
<ul>
    <li>Sempre use as "Caixas de Texto" para mover blocos de palavras livremente pela tela.</li>
    <li>Use a aba <strong>Inserir → Novo Slide</strong> para adicionar a próxima página. Experimente os diferentes <em>Layouts</em> (ex: Título e Conteúdo, Duas Partes).</li>
</ul>`
                },
                {
                    id: "4-9",
                    title: "Aula 09: Modelos de apresentações",
                    duration: "Leitura (15 min)",
                    videoUrl: "https://www.youtube.com/embed/o1FiPSv60aY",
                    content: `<h2>📘 Apostila – Módulo 4 | Aula 9</h2>
<h3>Tema: Beleza sem Esforço (Temas e Design)</h3>

<div style="background-color: var(--bg-hover); padding: 24px; border-radius: var(--border-radius); border-left: 4px solid var(--accent-color); margin-bottom: 24px;">
    <h3 style="margin-top: 0; color: var(--accent-color);">🎯 Objetivo da Aula</h3>
    <p>Aplicar temas pré-construídos para deixar a apresentação esteticamente moderna com apenas um clique e explorar ferramentas online como o Canva.</p>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🎨 1. Os Temas Nativos do PowerPoint</h3>
<p>Sua apresentação está com aquele fundo branco hospitalar chato?</p>
<ul>
    <li>Vá na aba <strong>Design</strong>.</li>
    <li>Lá, você verá vários pequenos quadros. São Temas!</li>
    <li>Ao clicar em um deles, o PowerPoint automaticamente muda as cores de fundo, o tipo de letra e a posição dos elementos de TODOS os slides da sua apresentação de uma vez só, garantindo um padrão estético.</li>
</ul>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>✨ 2. O Ideias de Design (Inteligência Artificial)</h3>
<p>Nas versões mais novas do Office 365, se você inserir uma foto em um slide, o botão <strong>Ideias de Design</strong> (na aba Página Inicial) fará mágica: o programa analisará a foto e criará sugestões de layout ultra profissionais para você escolher. É a maneira mais fácil de parecer um designer profissional!</p>

<div style="background-color: var(--bg-main); padding: 24px; border-radius: var(--border-radius); border: 1px dashed var(--border-color); margin-top: 32px;">
    <h3 style="margin-top: 0;">🧪 Dica Extra (Concorrente Moderno)</h3>
    <p>Vale a pena citar aos alunos o <strong>Canva.com</strong>. É uma plataforma online, gratuita, que já vem com milhares de modelos de apresentações muito mais modernas do que as que vêm padrão no PowerPoint. Excelente alternativa para trabalhos escolares e reuniões de agências criativas.</p>
</div>`
                },
                {
                    id: "4-10",
                    title: "Aula 10: LibreOffice como alternativa gratuita",
                    duration: "Leitura (15 min)",
                    videoUrl: "https://www.youtube.com/embed/o1FiPSv60aY",
                    content: `<h2>📘 Apostila – Módulo 4 | Aula 10</h2>
<h3>Tema: O Software Livre (A Vida Além da Microsoft)</h3>

<div style="background-color: var(--bg-hover); padding: 24px; border-radius: var(--border-radius); border-left: 4px solid var(--accent-color); margin-bottom: 24px;">
    <h3 style="margin-top: 0; color: var(--accent-color);">🎯 Objetivo da Aula</h3>
    <p>Resumir e reforçar que as habilidades adquiridas no Módulo 4 servem para qualquer programa de escritório, demonstrando a compatibilidade entre o Office e o LibreOffice.</p>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🐧 1. Por que usar o LibreOffice?</h3>
<p>Nem toda empresa ou casa pode pagar a assinatura anual do Microsoft Office. O erro comum é instalar versões piratas, que trazem vírus terríveis para o computador.</p>
<p>A solução correta, ética e segura é baixar o <strong>LibreOffice</strong> (totalmente gratuito e de código aberto).</p>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🔄 2. Compatibilidade (Salvando para o Chefe)</h3>
<p>O seu chefe tem Word, mas você tem LibreOffice Writer em casa. Se você enviar o seu arquivo nativo (<code>.odt</code>), talvez o PC dele estranhe.</p>

<div style="background-color: var(--bg-hover); padding: 16px; border-radius: var(--border-radius); border-left: 4px solid #10b981; margin-top: 16px;">
    <h4 style="margin-top: 0; color: #10b981;">O Truque de Ouro:</h4>
    <ul>
        <li>Ao terminar o seu trabalho no LibreOffice, vá em <em>Arquivo → Salvar Como...</em></li>
        <li>Mude o tipo do arquivo para <strong>Documento do Microsoft Word (.docx)</strong> ou Planilha do Excel (<code>.xlsx</code>).</li>
        <li>Pronto! Você produziu de graça e enviou no formato pago. Todo mundo consegue abrir e trabalhar junto!</li>
    </ul>
    <p>👉 <em>Lembre-se: Para enviar orçamentos para clientes ou currículos, SEMPRE salve como PDF, assim a formatação nunca bagunça!</em></p>
</div>`
                },
                {
                    id: "fix-4",
                    title: "Atividade de Fixação: Módulo 4",
                    duration: "Prática (5 min)",
                    videoUrl: "https://www.youtube.com/embed/o1FiPSv60aY",
                    quiz: [
                        {
                            isFixacao: true,
                            question: "Qual o melhor formato para enviar um currículo ou documento final que não deve ser alterado?",
                            options: [".docx", ".xlsx", ".pdf", ".txt"],
                            correctAnswer: 2,
                            explanation: "O formato .pdf garante que a formatação do documento não seja alterada ao ser aberta em outros computadores ou celulares."
                        }
                    ],
                    content: `<h2>🎯 Atividade de Fixação - Módulo 4</h2><p>Responda as questões acima para testar seus conhecimentos. (Não vale XP)</p>`
                }
            ]
        },
        {
            id: 5,
            title: "Módulo 5 – Organização e Manutenção (10h)",
            description: "Organização do ambiente digital, cuidados de hardware e manutenção preventiva.",
            image: "https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=600&q=80",
            lessons: [
                {
                    id: "5-1",
                    title: "Aula 01: Organização do ambiente computacional (5S)",
                    duration: "Leitura (15 min)",
                    videoUrl: "https://www.youtube.com/embed/o1FiPSv60aY",
                    content: `<h2>📘 Apostila – Módulo 5 | Aula 1</h2>
<h3>Tema: O Método 5S no Computador</h3>

<div style="background-color: var(--bg-hover); padding: 24px; border-radius: var(--border-radius); border-left: 4px solid var(--accent-color); margin-bottom: 24px;">
    <h3 style="margin-top: 0; color: var(--accent-color);">🎯 Objetivo da Aula</h3>
    <p>Aplicar a filosofia japonesa do 5S (Utilização, Ordenação, Limpeza, Padronização e Disciplina) para transformar um PC bagunçado em uma máquina de alta produtividade.</p>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🧹 1. O que é o 5S Digital?</h3>
<p>Se a sua mesa física está cheia de papéis velhos, você não consegue trabalhar. No computador é igual!</p>
<ul>
    <li><strong>Seiri (Utilização):</strong> Apagar programas que você não usa há mais de 1 ano.</li>
    <li><strong>Seiton (Ordenação):</strong> Criar pastas lógicas (ex: <code>Documentos 2026 / Boletos</code>).</li>
    <li><strong>Seiso (Limpeza):</strong> Esvaziar a lixeira e a pasta de Downloads toda sexta-feira.</li>
    <li><strong>Seiketsu (Padronização):</strong> Nomear os arquivos de forma igual (ex: <code>Relatorio_Vendas_Jan.pdf</code>).</li>
    <li><strong>Shitsuke (Disciplina):</strong> Não salvar arquivos "só por um segundo" na Área de Trabalho.</li>
</ul>`
                },
                {
                    id: "5-2",
                    title: "Aula 02: Organização de arquivos digitais",
                    duration: "Leitura (20 min)",
                    videoUrl: "https://www.youtube.com/embed/o1FiPSv60aY",
                    content: `<h2>📘 Apostila – Módulo 5 | Aula 2</h2>
<h3>Tema: A Arte de Encontrar as Coisas</h3>

<div style="background-color: var(--bg-hover); padding: 24px; border-radius: var(--border-radius); border-left: 4px solid var(--accent-color); margin-bottom: 24px;">
    <h3 style="margin-top: 0; color: var(--accent-color);">🎯 Objetivo da Aula</h3>
    <p>Criar uma árvore de pastas inteligente e aprender regras de nomenclatura (nomes de arquivo) para nunca mais perder um documento importante.</p>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>📂 1. A Regra das 3 Pastas Mágicas</h3>
<p>Todo mundo deveria ter a sua pasta de Documentos dividida assim:</p>
<ol>
    <li><strong>01_Pessoal:</strong> Fotos da família, receitas, contas de luz da casa.</li>
    <li><strong>02_Trabalho:</strong> Tudo que for relacionado à empresa, clientes e relatórios.</li>
    <li><strong>03_Estudos:</strong> Apostilas, certificados e trabalhos de faculdade.</li>
</ol>
<p>👉 <em>Dica: Colocar o número antes (01, 02) força o Windows a deixar as pastas exatamente na ordem que você quer.</em></p>

<div style="background-color: var(--bg-hover); padding: 16px; border-radius: var(--border-radius); border-left: 4px solid #ef4444; margin-top: 16px;">
    <h4 style="margin-top: 0; color: #ef4444;">❌ Como NÃO nomear um arquivo</h4>
    <p><code>documento.docx</code>, <code>sem titulo.pdf</code>, <code>novo arquivo final de verdade (2).docx</code>.</p>
    <p>✔️ <strong>O Jeito Correto:</strong> <code>Contrato_Locacao_Maria_2026_Final.pdf</code>.</p>
</div>`
                },
                {
                    id: "5-3",
                    title: "Aula 03: Uso correto de pen drives, HDs externos e nuvem",
                    duration: "Leitura (15 min)",
                    videoUrl: "https://www.youtube.com/embed/o1FiPSv60aY",
                    content: `<h2>📘 Apostila – Módulo 5 | Aula 3</h2>
<h3>Tema: Pen drive x Nuvem (Onde guardar meus dados?)</h3>

<div style="background-color: var(--bg-hover); padding: 24px; border-radius: var(--border-radius); border-left: 4px solid var(--accent-color); margin-bottom: 24px;">
    <h3 style="margin-top: 0; color: var(--accent-color);">🎯 Objetivo da Aula</h3>
    <p>Explicar por que os Pen Drives estão morrendo e ensinar como fazer a transição definitiva para o Armazenamento em Nuvem (Cloud).</p>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>💾 1. O Perigo do Pen Drive</h3>
<p>Pen drives quebram, são esquecidos no bolso da calça e, principalmente, <strong>são os maiores transmissores de vírus do mundo</strong>. Eles só devem ser usados para mover um arquivo grande de um PC para o outro de forma rápida, NUNCA para guardar a única cópia do seu TCC.</p>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>☁️ 2. A Magia da Nuvem</h3>
<p>A "Nuvem" não é algo mágico voando no céu. São apenas computadores gigantes (servidores) superprotegidos da Google, Microsoft ou Apple, que guardam os seus arquivos via internet.</p>
<ul>
    <li>Seu computador queimou? Sem problema, seus arquivos estão na nuvem!</li>
    <li>Esqueceu o notebook? Acesse os arquivos do seu celular!</li>
    <li><strong>Melhores opções gratuitas:</strong> Google Drive (15 GB) e Microsoft OneDrive (5 GB).</li>
</ul>`
                },
                {
                    id: "5-4",
                    title: "Aula 04: Cuidados com hardware: limpeza e conservação",
                    duration: "Leitura (15 min)",
                    videoUrl: "https://www.youtube.com/embed/o1FiPSv60aY",
                    content: `<h2>📘 Apostila – Módulo 5 | Aula 4</h2>
<h3>Tema: Vida Longa ao PC (Hardware)</h3>

<div style="background-color: var(--bg-hover); padding: 24px; border-radius: var(--border-radius); border-left: 4px solid var(--accent-color); margin-bottom: 24px;">
    <h3 style="margin-top: 0; color: var(--accent-color);">🎯 Objetivo da Aula</h3>
    <p>Desmistificar a limpeza física do computador. Aprender o que se pode e o que não se pode passar na tela e nos componentes eletrônicos.</p>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🧴 1. Limpando a Tela</h3>
<div style="background-color: var(--bg-hover); padding: 16px; border-radius: var(--border-radius); border-left: 4px solid #ef4444; margin-bottom: 16px;">
    <h4 style="margin-top: 0; color: #ef4444;">❌ NUNCA USE VEJA OU ÁLCOOL COMUM!</h4>
    <p>Produtos de limpeza doméstica derretem a película de proteção do monitor, deixando manchas brancas permanentes.</p>
</div>
<p>✔️ <strong>O correto:</strong> Um pano de microfibra (tipo os de limpar óculos) levemente umedecido com água ou Álcool Isopropílico (que não contém água na composição).</p>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>💻 2. Notebook no Colo (A Morte por Asfixia)</h3>
<p>Notebooks puxam ar frio por baixo e soltam ar quente pelos lados. Ao usar o notebook no colo, ou em cima da cama (lençol), você tampa a entrada de ar. Ele vai superaquecer e desligar sozinho para não pegar fogo.</p>
<p>👉 <em>Use sempre em superfícies rígidas (mesa) ou compre um suporte.</em></p>`
                },
                {
                    id: "5-5",
                    title: "Aula 05: Manutenção preventiva de computadores",
                    duration: "Leitura (15 min)",
                    videoUrl: "https://www.youtube.com/embed/o1FiPSv60aY",
                    content: `<h2>📘 Apostila – Módulo 5 | Aula 5</h2>
<h3>Tema: O "Check-up" do Windows</h3>

<div style="background-color: var(--bg-hover); padding: 24px; border-radius: var(--border-radius); border-left: 4px solid var(--accent-color); margin-bottom: 24px;">
    <h3 style="margin-top: 0; color: var(--accent-color);">🎯 Objetivo da Aula</h3>
    <p>Mostrar ferramentas simples que vêm no próprio Windows para manter o PC rápido, como a Limpeza de Disco e os cuidados com o acúmulo de cache.</p>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🗑️ 1. A Limpeza de Disco</h3>
<p>A cada atualização, o Windows deixa "restos" de arquivos para trás que pesam no sistema. O próprio Windows tem um faxineiro embutido.</p>
<ul>
    <li>Vá no Menu Iniciar e digite: <strong>Limpeza de Disco</strong>.</li>
    <li>O Windows calculará o espaço que pode liberar (geralmente alguns Gigabytes de lixo).</li>
    <li>Marque as caixas de "Arquivos Temporários" e clique em OK. Seu PC agradecerá!</li>
</ul>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🚗 2. HD cheio é Computador Lento</h3>
<p>Imagine um carro com porta-malas lotado. Ele fica pesado e gasta mais gasolina. O Windows funciona igual. Se o seu disco local (C:) ficar com a barra vermelha (quase sem espaço), o PC vai começar a travar. Tente manter pelo menos 15% de espaço livre sempre.</p>`
                },
                {
                    id: "5-6",
                    title: "Aula 06: Diagnóstico de problemas simples",
                    duration: "Leitura (15 min)",
                    videoUrl: "https://www.youtube.com/embed/o1FiPSv60aY",
                    content: `<h2>📘 Apostila – Módulo 5 | Aula 6</h2>
<h3>Tema: O Computador Não Liga! E agora?</h3>

<div style="background-color: var(--bg-hover); padding: 24px; border-radius: var(--border-radius); border-left: 4px solid var(--accent-color); margin-bottom: 24px;">
    <h3 style="margin-top: 0; color: var(--accent-color);">🎯 Objetivo da Aula</h3>
    <p>Evitar que o aluno chame um técnico e pague R$150 por um problema bobo, ensinando o "Guia Básico de Sobrevivência do TI".</p>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🔌 1. A Regra do Cabo</h3>
<p>Pode parecer brincadeira, mas 50% dos chamados de "O PC queimou" se resolvem verificando os cabos. Antes do pânico:</p>
<ol>
    <li>O cabo de energia está BEM encaixado atrás do PC?</li>
    <li>O filtro de linha (régua) está com a luz vermelha acesa?</li>
    <li>O botão atrás da fonte do PC (uma chave pequena I/O) está na posição "I"?</li>
</ol>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🔇 2. Estou Sem Som</h3>
<p>Antes de achar que a placa de som queimou:</p>
<ul>
    <li>Clique no ícone de alto-falante perto do relógio do Windows.</li>
    <li>Veja se o volume não está no Mudo (com um "X").</li>
    <li>Se você usa fone Bluetooth, verifique se a bateria dele não acabou.</li>
</ul>`
                },
                {
                    id: "5-7",
                    title: "Aula 07: Resolução de falhas comuns sem causar danos",
                    duration: "Leitura (15 min)",
                    videoUrl: "https://www.youtube.com/embed/o1FiPSv60aY",
                    content: `<h2>📘 Apostila – Módulo 5 | Aula 7</h2>
<h3>Tema: A Mágica do Reiniciar (O Botão Sagrado)</h3>

<div style="background-color: var(--bg-hover); padding: 24px; border-radius: var(--border-radius); border-left: 4px solid var(--accent-color); margin-bottom: 24px;">
    <h3 style="margin-top: 0; color: var(--accent-color);">🎯 Objetivo da Aula</h3>
    <p>Consolidar a primeira regra de ouro da informática e saber a hora de pedir ajuda profissional.</p>
</div>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🔄 1. "Já tentou desligar e ligar de novo?"</h3>
<p>Esta não é apenas uma piada de técnicos de TI. É ciência!</p>
<p>Os computadores acumulam erros minúsculos na memória RAM durante o uso (um programa que não fechou direito, um pico de energia). <strong>Reiniciar o computador zera essa memória e apaga todos os pequenos erros temporários.</strong> Resolvendo misteriosamente 80% dos problemas de lentidão ou Wi-Fi falhando.</p>

<hr style="border-color: var(--border-color); margin: 32px 0;">

<h3>🛑 2. Quando Chamar o Técnico?</h3>
<p>Não tente dar uma de herói se não souber o que está fazendo.</p>
<ul>
    <li>Se a tela está dando "Tela Azul da Morte" toda hora.</li>
    <li>Se o computador está fazendo barulhos estranhos (estalos, apitos).</li>
    <li>Se sente cheiro de queimado. <strong>Tire da tomada imediatamente!</strong></li>
</ul>`
                },
                {
                    id: "fix-5",
                    title: "Atividade de Fixação: Módulo 5",
                    duration: "Prática (5 min)",
                    videoUrl: "https://www.youtube.com/embed/o1FiPSv60aY",
                    quiz: [
                        {
                            isFixacao: true,
                            question: "O que é recomendado para limpar a tela do monitor?",
                            options: ["Álcool em gel", "Água e sabão", "Pano de microfibra seco ou levemente umedecido", "Desinfetante"],
                            correctAnswer: 2,
                            explanation: "Produtos químicos e álcool podem danificar a película protetora da tela."
                        }
                    ],
                    content: `<h2>🎯 Atividade de Fixação - Módulo 5</h2><p>Responda as questões acima para testar seus conhecimentos. (Não vale XP)</p>`
                }
            ]
        }
    ]
};