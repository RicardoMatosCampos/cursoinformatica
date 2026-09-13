# 💻 Plataforma de Cursos de Informática (Informática Pro)

![Status](https://img.shields.io/badge/Status-Online-success?style=for-the-badge)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)

Plataforma web estática desenvolvida para estruturação e exibição modular de conteúdos educacionais de tecnologia. O projeto encontra-se na fase de MVP, focado atualmente no **módulo básico**, com arquitetura já preparada para expansão e recebimento de módulos avançados. Utiliza integração contínua (CI/CD) para atualizações automáticas em produção.

🌐 **Acesse o projeto online:** [seu-dominio.com.br](https://seu-dominio.com.br)

---

## 🚀 Tecnologias e Infraestrutura Utilizadas

Este projeto vai além do código frontend, englobando também a configuração de infraestrutura web, versionamento e soluções serverless:

- **Frontend:** HTML5, CSS e JavaScript (ES6+).
- **Integração de Mídia:** YouTube Embed (Iframe) direto nas páginas, com CSS responsivo (proporção 16:9), garantindo carregamento rápido e sem dependência de APIs externas complexas.
- **Captação de Dados (Serverless):** Netlify Forms com submissão assíncrona via JavaScript (AJAX/Fetch API), eliminando a necessidade de um servidor backend dedicado ou banco de dados.
- **Hospedagem & CI/CD:** Netlify (Deploy Contínuo via Git).
- **Infraestrutura Web:** Gerenciamento de zonas DNS no Registro.br e certificado SSL (HTTPS).
- **Versionamento:** Git e GitHub.

---

## 📌 Funcionalidades

- **Módulos Segmentados:** Divisão fluida do conteúdo de aprendizagem.
- **Formulários Dinâmicos em Site Estático:** Sistema de captação de depoimentos e suporte (FAQ) integrado nativamente ao painel do Netlify. O envio dos dados é tratado via AJAX, garantindo feedback imediato ao usuário (alertas de sucesso/erro) sem recarregar a página (Single Page Application feel).
- **Deploy Automatizado:** Qualquer alteração enviada para a branch `main` reflete automaticamente no ambiente de produção.
- **Alta Disponibilidade:** Arquitetura estática garantindo carregamento rápido e sem instabilidades operacionais.

---

## 📂 Estrutura de Diretórios

```text
cursoinformatica/
├── public/                 # Recursos estáticos, assets, imagens e CSS (landing.css)
├── curso-basico.html       # Grade e aulas do módulo básico (Online)
├── curso-avancado.html     # Grade do módulo avançado (Em desenvolvimento)
└── index.html              # Página inicial, roteamento e formulários integrados
