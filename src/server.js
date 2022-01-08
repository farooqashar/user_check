var express  = require('express');
var cors = require('cors')

var app = express();   

app.use(cors());

app.listen(3000, () => {
  console.log('Server running on port 3000!');
}
);

app.get('/', (req,res) =>  {
    res.send("Backend is running!")
});

app.get('/check', (req, res) => {

  if (JSON.parse(req.query.json).email == "sampleemail@email.com" && JSON.parse(req.query.json).password == "password") {
    res.send('{"status":"success"}');
  } else {
    res.send('{"status":"invalid"}');
  }

});
