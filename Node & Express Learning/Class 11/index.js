const express = require('express')
const app = express()

app.use(function (req, res,next) {
    console.log('Hello World');
    next();
  });

app.get('/', function (req, res) {
  res.send('Hello World')
});
app.get('/profile', function (req, res) {
    res.send('Profile Page')
  });
  app.get('/dashboard', function (req, res, next) {
    return next(new Error("Something Went Wrong"))
  });
  app.use((err,req,res,next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  })

app.listen(3000)