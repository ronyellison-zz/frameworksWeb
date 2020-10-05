const express = require ('express');
const app = express();
const port = 3000;

app.get('/aula', (req,resp) => {
    resp.send('oi, aula express')
})

app.listen(port, () => {
    console.log('Aplicacação express porta' + port)
})