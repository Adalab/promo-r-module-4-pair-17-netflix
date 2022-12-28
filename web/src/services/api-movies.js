// login

const getMoviesFromApi = ({gender}) => {
  // CAMBIA ESTE FETCH PARA QUE APUNTE A UN ENDPOINT DE TU SERVIDOR, PIENSA SI DEBE SER GET O POST, PIENSA QUÉ DATOS DEBES ENVIAR, ETC
  return fetch(`//localhost:4000/movies?gender=${gender}`)
    .then(response => response.json())
    .then((data) => {
      // Aquí retormamos lo que nos vaya a devolver el servidor 
      return data;
    });
};

const objToExport = {
  getMoviesFromApi: getMoviesFromApi
};

export default objToExport;
