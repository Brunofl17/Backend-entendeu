import "reflect-metadata";
import { createConnection } from "typeorm";
import { Question } from "./../src/entity/Question"
import { Room } from "./../src/entity/Room"
import { Answer } from "./../src/entity/Answer"

// express e consgin 
const app = require('express')()
const consign = require('consign')

createConnection().then(async connection => {
    // Consign ter acesso ao vbanco
    app.db = {
        connection,
        Question,
        Answer,
        Room
    }

    //Para o consign ter acesso aos arquivos
    consign()
        .then('/config/middlewares.js')
        .then('/api/validation.js')
        .then('/api')
        .then('/config/routes.js')
        .into(app)

    // iniciar o server
    app.listen(3003, _ =>{
        console.log('Backend running!')
    })
}).catch(error => console.log(error));