const express = require('express');
const cors = require('cors');
/* const dataMovies = require('./data/movies.json'); */
const dataUsers = require('./data/users.json');
const Database = require('better-sqlite3');

// create and config server
const server = express();
server.use(cors());
server.use(express.json());
server.set('view engine', 'ejs');
const db = new Database('./src/db/database.db', { verbose: console.log});

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// Endpoint
server.get('/movies', (req, res) => {
 /*  const response = {
      success: true,
      movies: dataMovies
  };
  res.json(response);
 */

  const query = db.prepare('SELECT * FROM movies');
  const movies = query.all();

 
  const response = {
    success: true,
    movies: movies
};
res.json(response);

});

server.post('/users', (req, res) => {
  const response = {
      success: true,
      users: dataUsers
  };
  res.json(response);
});

server.get('/movie/:movieId', (req, res) => {
  const query = db.prepare('SELECT * FROM movies WHERE id = ?');
  const idmovie = query.get(req.params.movieId);
 
  res.render('movie', idmovie);
});

server.post('/sign-up',(req, res) => {
  const querySet = db.prepare('SELECT * FROM users WHERE email = ? AND password = ?');
  const foundUser = querySet.get(req.body.email, req.body.password);
  console.log(foundUser);
  let response = {};
  console.log(foundUser);
  if ( foundUser === undefined ){
    const queryAdd = db.prepare('INSERT INTO users (email, password) VALUES (?, ?)');
    const result = queryAdd.run(req.body.email, req.body.password);
 console.log(result)
    response = {
      "success": true,
      "userId": result.lastInsertRowid
    }
    console.log('usuario añadido');
   
  }
  else{
    console.log('usuario existente');
    response = {
      "success": false,
      "errorMessage": "Usuaria ya existente"
    }
    
  }
  res.json(response);
 
});

// Servidores estáticos
const staticServerPath = './src/public-react'; 
server.use(express.static(staticServerPath));

const staticServerImage = './src/public-movies-images'; 
server.use(express.static(staticServerImage));

const staticServerStyles = './src/public-styles'; 
server.use(express.static(staticServerStyles));
