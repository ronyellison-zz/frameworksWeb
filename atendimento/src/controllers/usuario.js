module.exports = app => {

    app.get('/usuario', (req, res) => {
      res.send('Requisição GET')
    })
  
    app.post('/usuario', (req, res) => {
      console.log(req.body);
      res.send('post acesso usuario')
    })
  
    
  }