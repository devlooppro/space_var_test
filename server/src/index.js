const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const mysql      = require('mysql');


const config = require("./config/config");
const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());
app.listen(process.env.PORT || config.port, () =>
  console.log(`Server start on port ${config.port} ...`)
);

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : config.dbUser,
  password : config.dbPassword,
  database : config.dbName
});

connection.connect();

app.get("/posts", (req, res) => {

	connection.query('SELECT * FROM posts ORDER BY created_at DESC',
    function(err, rows) {
    res.json(rows);
  });

});

app.post('/posts', function(req, res) {

if(req.body.name && req.body.text) {

  const {name, text} = req.body;

  const query = connection.query('INSERT INTO posts SET ?', {name, text}, function (error, results, fields) {
    if (error) throw error;

    res.json( {id: results.insertId, name, text} );
  });

  }
});

//connection.end();
