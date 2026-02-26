📋 Sobre o Projeto

O Sistema de Inteligência Operacional Empresarial é uma aplicação web interna desenvolvida para coletar, armazenar e analisar feedbacks estratégicos de colaboradores sobre:

👤 Profissionais

⚙️ Processos

📦 Produtos (colchões, cama box, baú e derivados)

🚚 Logística

🏢 Operações empresariais

O objetivo é transformar feedback operacional em dados estratégicos acionáveis para melhoria contínua e tomada de decisão baseada em evidências.

🎯 Objetivos principais

Centralizar feedbacks operacionais

Identificar gargalos e falhas

Mapear ineficiências operacionais

Coletar sugestões de melhoria

Criar base de dados para análise com Power BI

Servir como fundação para sistema de inteligência empresarial

🧩 Funcionalidades atuais
✅ Coleta de dados via formulário inteligente

Identificação do colaborador

Departamento e cargo

Avaliação de processos

Identificação de problemas

Sugestões de melhoria

Nota de eficiência operacional

✅ Barra de progresso dinâmica

Atualização em tempo real

Reset automático após envio

Feedback visual ao usuário

✅ Sistema de notificações Toast

Notificação de sucesso

Notificação de erro

Interface profissional (Bootstrap)

✅ Persistência de dados em JSON

Os dados são armazenados em:

backend/data/feedback.json

Exemplo:

[
  {
    "id": 1,
    "nome": "João Silva",
    "departamento": "logistica",
    "cargo": "Analista",
    "tempoFuncao": "2 anos",
    "processo": "Separação e envio",
    "problemas": "Atrasos na expedição",
    "melhorias": "Automatizar controle",
    "nota": 7,
    "data": "2026-02-26T14:32:10.000Z"
  }
]
🏗️ Arquitetura do sistema
Frontend
│
├── HTML
├── CSS
├── JavaScript
└── Bootstrap UI

Backend
│
├── Node.js
├── Express
└── JSON Storage

Dados
│
└── feedback.json

Futuro
│
├── MySQL
├── Dashboard Analytics
└── IA preditiva
⚙️ Tecnologias utilizadas
Frontend

HTML5

CSS3

JavaScript

Bootstrap 5

Backend

Node.js

Express.js

Armazenamento

JSON (atual)

MySQL (planejado)

Integrações futuras

Power BI

Dashboard administrativo

Análise por IA

📂 Estrutura do projeto
project/
│
├── frontend/
│   ├── index.html
│   ├── css/
│   └── assets/
│
├── backend/
│   ├── server.js
│   └── data/
│       └── feedback.json
│
├── package.json
└── README.md
🚀 Como executar o projeto
1. Instalar dependências
npm install
2. Iniciar servidor
node server.js

ou

npm start
3. Acessar sistema
http://localhost:3000
📊 Fluxo de funcionamento
Usuário preenche formulário
        ↓
Frontend envia POST via fetch
        ↓
Express recebe requisição
        ↓
Dados salvos em feedback.json
        ↓
Toast confirma sucesso
        ↓
Dados disponíveis para análise
🔒 Segurança (planejado)

Autenticação de usuário

Controle de acesso por perfil

Registro de auditoria

Validação de dados

📈 Roadmap futuro
Fase 1 — Concluído

 Formulário funcional

 Salvamento em JSON

 Toast notifications

 Barra de progresso

Fase 2 — Em desenvolvimento

 Dashboard administrativo

 Visualização de feedbacks

 Filtros por setor

Fase 3 — Planejado

 Integração com MySQL

 Gráficos e KPIs

 Relatórios automáticos

Fase 4 — Inteligência Operacional

 Análise automática por IA

 Identificação de gargalos

 Sugestões automatizadas

 Score de eficiência operacional

🎯 Casos de uso

Auditoria operacional

Diagnóstico organizacional

Identificação de gargalos logísticos

Melhoria contínua

Base de dados para BI

👨‍💻 Autor

Johnatan Quenes
Desenvolvimento de Sistema de Inteligência Operacional Empresarial
