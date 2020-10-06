module.exports = app => {

    app.get('/unipe', (req, res) => {
      res.send('GET Controller UNIPE')
    })
  
    app.post('/unipe', (req, res) => {
      console.log(req.body);
      res.send('POST Controller UNIPE')
    })
  
  }