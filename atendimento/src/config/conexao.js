const mysql = require('mysql');
const environment = 'development';
const config = require("../config/config.js")[environment];

const con = mysql.createConnection({
    host: config.database.host, //host do banco de dados
    user: config.database.user, //usuario do banco de dados
    password: config.database.password, //senha do usuario
    database: config.database.database // a base de dados
});

con.connect((err) => {
    if (err){
        console.log('Erro ao conectar ...', err)
        return
    }
    console.log('conexao realizada!')
})

con.query('select * from agendamento', (err,rows) => {
    if (err) throw err
    console.log ('Agendamento', rows, '\n\n')
})

con.end((err) => {
    if (err) 
    console.log ('Erro ao finalizar conexão ...', err)
    return
})