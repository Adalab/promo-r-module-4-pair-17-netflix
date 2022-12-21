const express = require('express');
const cors = require('cors');
const dataMovies = require('./data/movies.json');
const dataUsers = require('./data/users.json');

// create and config server
const server = express();
server.use(cors());
server.use(express.json());

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// Endpoint
server.get('/movies', (req, res) => {
  const response = {
      success: true,
      movies: dataMovies
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
const staticServerPath = './src/public-react'; 
server.use(express.static(staticServerPath));
const staticServerImage = './src/public-movies-images'; 
server.use(express.static(staticServerImage));