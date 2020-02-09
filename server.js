const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

// inicia o app
const app = express();
app.use(express.json());

// acesso de todos os dominios
app.use(cors());

// inicia o db
mongoose.connect('mongodb://localhost:27017/nodeapi', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

// importa todos arquivos do diretorio
requireDir('./src/models');

// rotas
app.use('/api', require('./src/routes'));

app.listen(3000);