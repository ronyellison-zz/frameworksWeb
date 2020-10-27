const mysql = require('mysql');
const environment = "development";
const config = require("../config/config.js")[environment];

const con = mysql.createConnection({
    host: config.database.host,
    user: config.database.user,
    password: config.database.password,
    database: config.database.database
});
//iniciando conexão com o banco
con.connect((err) => {
    if(err) {
        console.log('Erro ao conectar!', err)
        return
    }
    console.log('Conexão realizada!')
})

const agendamento = {nome:'Ronyellison', email: 'ronyjp@gmail.com', ativo:0 }
// /*inserindo*/
// con.query('INSERT INTO agendamento SET ? ', agendamento, (err,rows) => {
//     if(err) throw err
//     console.log("Registro salvo com sucesso");
// })

// /*selecionar, listar */
// con.query('select * from agendamento', (err,rows) => {
//     if(err) throw err
//     res.render('registros.ejs', { data: results })
//     console.log('Agendamentos', rows, '\n\n')
// })

// /*atualizar */
// con.query('UPDATE agendamento SET nome = ?, email = ? where ID = ? ', ['Teste','ronyjp@gmail.com','1'], (err,rows) => {
//     if(err) throw err
//     console.log("Registro Atualizado com sucesso");
// })

// /*deletar*/
// con.query('DELETE FROM agendamento where ID = ? ', ['2'], (err,resultado) => {
//     if(err) throw err
//     console.log(`Foram excluida(s) ${resultado.affectedRows} linha(s)`);

// })



con.query('select * from agendamento', (err,rows) => {
    if(err) throw err

    rows.forEach(row => {
        console.log(`${row.nome} - ${row.email}`);
    })
})

//finalizar conexão com o banco
con.end((err) => {
    if(err) {
        console.log('Erro ao finalizar conexão', err)
        return
    }
    console.log('Conexão encerrada!')
})