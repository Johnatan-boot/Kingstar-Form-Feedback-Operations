# 🧠 Sistema de Inteligência Operacional Empresarial

Plataforma web interna para coleta, armazenamento e análise de feedbacks estratégicos sobre **profissionais, processos, logística e produtos**.

Este sistema é o embrião de uma solução completa de **Inteligência Operacional e Business Intelligence corporativo**.

---

# 📌 Visão Geral

O sistema permite que colaboradores registrem feedback estruturado sobre:

- Operações do setor
- Gargalos e falhas
- Ineficiências logísticas
- Problemas operacionais
- Sugestões de melhoria
- Avaliação de eficiência

Os dados são armazenados e podem ser utilizados posteriormente em ferramentas como:

- Excel
- Power BI
- Dashboards internos
- Sistemas de análise

---

# 🎯 Objetivo

Transformar conhecimento operacional dos colaboradores em:

- Dados estruturados
- Indicadores de eficiência
- Base para tomada de decisão
- Inteligência estratégica empresarial

---

# 🧩 Funcionalidades

## ✔ Formulário inteligente

Coleta informações como:

- Nome
- Departamento
- Cargo
- Tempo na função
- Avaliação de processos
- Problemas identificados
- Sugestões de melhoria
- Nota de eficiência

---

## ✔ Barra de progresso dinâmica

- Atualização em tempo real
- Baseada no preenchimento
- Reset automático após envio

---

## ✔ Sistema de notificações (Toast)

- Feedback visual de sucesso
- Feedback visual de erro
- Interface profissional

---

## ✔ Persistência em JSON

Os dados são armazenados em:
# 🧠 Sistema de Inteligência Operacional Empresarial

Plataforma web interna para coleta, armazenamento e análise de feedbacks estratégicos sobre **profissionais, processos, logística e produtos**.

Este sistema é o embrião de uma solução completa de **Inteligência Operacional e Business Intelligence corporativo**.

---

# 📌 Visão Geral

O sistema permite que colaboradores registrem feedback estruturado sobre:

- Operações do setor
- Gargalos e falhas
- Ineficiências logísticas
- Problemas operacionais
- Sugestões de melhoria
- Avaliação de eficiência

Os dados são armazenados e podem ser utilizados posteriormente em ferramentas como:

- Excel
- Power BI
- Dashboards internos
- Sistemas de análise

---

# 🎯 Objetivo

Transformar conhecimento operacional dos colaboradores em:

- Dados estruturados
- Indicadores de eficiência
- Base para tomada de decisão
- Inteligência estratégica empresarial

---

# 🧩 Funcionalidades

## ✔ Formulário inteligente

Coleta informações como:

- Nome
- Departamento
- Cargo
- Tempo na função
- Avaliação de processos
- Problemas identificados
- Sugestões de melhoria
- Nota de eficiência

---

## ✔ Barra de progresso dinâmica

- Atualização em tempo real
- Baseada no preenchimento
- Reset automático após envio

---

## ✔ Sistema de notificações (Toast)

- Feedback visual de sucesso
- Feedback visual de erro
- Interface profissional

---

## ✔ Persistência em JSON

Os dados são armazenados em:
backend/data/feedback.json


Exemplo:

```json
[
  {
    "id": 1,
    "nome": "João Silva",
    "departamento": "logistica",
    "cargo": "Analista",
    "tempoFuncao": "2 anos",
    "processo": "Separação e envio",
    "problemas": "Atrasos",
    "melhorias": "Automação",
    "nota": 8,
    "data": "2026-02-26T14:00:00.000Z"
  }
]
🏗 Arquitetura

Frontend
│
├── HTML
├── CSS
├── JavaScript
└── Bootstrap

Backend
│
├── Node.js
├── Express
└── JSON Storage

📁 Estrutura do Projeto

project/
│
├── frontend/
│   ├── index.html
│   ├── assets/
│   └── css/
│
├── backend/
│   ├── server.js
│   └── data/
│       └── feedback.json
│
├── package.json
└── README.md

⚙ Tecnologias Utilizadas
Frontend

HTML5

CSS3

JavaScript

Bootstrap 5

Backend

Node.js

Express

Armazenamento

JSON

🚀 Como Executar
1. Instalar dependências
npm install
2. Iniciar servidor
node server.js
3. Acessar no navegador
http://localhost:3000
🔄 Fluxo de funcionamento

Usuário preenche formulário
        ↓
Frontend envia requisição POST
        ↓
Backend recebe dados
        ↓
Dados salvos em feedback.json
        ↓
Sistema confirma envio

📊 Aplicações futuras

Dashboard administrativo

Integração com MySQL

Análise com Power BI

Geração de relatórios

Sistema de indicadores

Inteligência operacional com IA

🧠 Finalidade estratégica

Este sistema serve como base para:

Business Intelligence

Diagnóstico operacional

Melhoria contínua

Gestão baseada em dados

👨‍💻 Autor

Johnatan Quenes
Sistema de Inteligência Operacional Empresarial

🔒 Licença

Uso interno corporativo
