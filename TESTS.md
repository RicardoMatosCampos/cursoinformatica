# 🧪 Plano de Validação e Testes (QA)

**Projeto:** Plataforma de Cursos de Informática
**Ambiente de Produção:** Netlify

Este documento centraliza as rotinas de testes manuais e de homologação aplicadas ao projeto para garantir estabilidade, usabilidade e a correta exibição dos conteúdos (vídeos, formulários e navegação).

---

## 📱 1. Testes de Interface e Responsividade (UI/UX)
Garantir que a plataforma seja acessível em qualquer dispositivo.

| Cenário de Teste | Critério de Aceite | Status |
| :--- | :--- | :---: |
| **Resolução Desktop (1920x1080)** | O layout não deve apresentar quebras de linha irregulares e os vídeos devem ter tamanho legível. | ✅ Passou |
| **Resolução Mobile (360x800)** | Textos legíveis sem zoom horizontal. Iframes do YouTube ajustados proporcionalmente (16:9). | ✅ Passou |
| **Menu e Navegação** | Links entre a página inicial (`index.html`) e o módulo básico (`curso-basico.html`) funcionam sem erro 404. | ✅ Passou |

---

## 🎥 2. Testes de Integração de Mídia
Verificar a estabilidade do player de vídeo nativo (Iframe).

| Cenário de Teste | Critério de Aceite | Status |
| :--- | :--- | :---: |
| **Carregamento do Iframe** | Vídeos do YouTube renderizam corretamente ao acessar a página. | ✅ Passou |
| **Botão de Fullscreen** | O atributo `allowfullscreen` permite maximizar o vídeo. | ✅ Passou |
| **Bloqueio de Conteúdo** | Não há erros de "Vídeo indisponível" devido a restrições de domínio nas configurações do canal do YouTube. | ✅ Passou |

---

## 📝 3. Testes de Captação de Dados (Formulários e AJAX)
Validação da submissão de dúvidas e depoimentos sem recarregamento da página.

| Cenário de Teste | Critério de Aceite | Status |
| :--- | :--- | :---: |
| **Submissão via Fetch API** | Ao enviar o formulário, a página não recarrega. | ✅ Passou |
| **Prevenção de Duplo Envio** | O botão exibe "Enviando..." e fica desabilitado durante a requisição. | ✅ Passou |
| **Feedback ao Usuário** | Exibição do alerta de sucesso e limpeza automática dos campos. | ✅ Passou |
| **Recepção no Netlify** | Os dados enviados chegam corretamente à aba "Forms" do painel. | ✅ Passou |

---

## 🌍 4. Testes de Compatibilidade (Cross-Browser)
Validação do funcionamento nos principais navegadores do mercado.

- [x] **Google Chrome** (Windows/Android) - Renderização 100%
- [x] **Mozilla Firefox** (Windows) - Renderização 100%
- [x] **Microsoft Edge** (Windows) - Renderização 100%
- [x] **Safari** (iOS/Mac) - Renderização 100%

---

## ⚙️ 5. Testes de Infraestrutura e Deploy (CI/CD)
Garantir que a publicação ocorra sem falhas ou indisponibilidade de serviço.

| Cenário de Teste | Critério de Aceite | Status |
| :--- | :--- | :---: |
| **Deploy Contínuo (Netlify)** | Commits na branch `main` ativam o deploy automático e a nova versão entra em produção rapidamente. | ✅ Passou |
| **Certificado SSL/TLS** | Acesso ao site via `https://` apresenta cadeado de segurança, sem alertas de certificado inválido. | ✅ Passou |

---

## 🎫 6. Fluxo de Tratamento de Incidentes e Suporte
Rotina padronizada de atendimento rápido para corrigir falhas de rede ou software, evitando impactos no acesso dos alunos. Utilizando a aba de *Issues* do GitHub para abrir tickets de problemas no sistema:

1. **Abertura do Ticket (Issue):** Registro claro do problema (ex: vídeo fora do ar, erro no envio de formulário, falha de rede/link).
2. **Triagem de Prioridade:** Avaliação imediata do impacto. (Prioridade 1: Impacta o andamento do curso / Prioridade 2: Ajustes visuais ou suporte a dúvidas menores).
3. **Análise e Correção:** Intervenção rápida no código local e commit da solução na branch `main`.
4. **Validação e Encerramento:** Confirmação da correção no ambiente de produção e fechamento do ticket.