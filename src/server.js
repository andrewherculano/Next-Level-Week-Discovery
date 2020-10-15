//Import Dependencies
const express = require('express');
const path = require('path')
const pages = require('./pages')

//Iniciando express
const server = express()

//Utilizando arquivos estaticos
server
    .use(express.static('public'))

    //Configuração template engine
    .set('views', path.join(__dirname, "views"))
    .set('view engine', 'hbs')

//Criando rotas
server.get('/', pages.index)
server.get('/orphanages', pages.orphanages)
server.get('/orphanage', pages.orphanage)
server.get('/create-orphanage', pages.createOrphanage)

//Start servidos
server.listen(5500)