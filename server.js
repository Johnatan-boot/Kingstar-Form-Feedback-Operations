const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public')); // se seu html estiver na pasta public

const arquivoJSON = path.join(__dirname, 'feedbacks.json');

app.post('/salvar-feedback', (req, res) => {
    const novoFeedback = {
        id: Date.now(),
        data: new Date().toLocaleString(),
        ...req.body
    };

    let dados = [];

    if (fs.existsSync(arquivoJSON)) {
        const conteudo = fs.readFileSync(arquivoJSON, 'utf8');
        dados = JSON.parse(conteudo);
    }

    dados.push(novoFeedback);

    fs.writeFileSync(arquivoJSON, JSON.stringify(dados, null, 2));

    res.json({ mensagem: "Feedback salvo com sucesso!" });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});