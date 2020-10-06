module.exports = app => {

    app.get('/unipe', (req, res) =>
      res.send('Controller UNIPE')
    )
  
    app.post('/unipe', (req, res) => {
      console.log(req.body);
      res.send('Controller UNIPE')
    }
  
    )
  
  }