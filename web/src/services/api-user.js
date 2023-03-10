// login

const sendLoginToApi = (data) => {
	console.log("Se están enviando datos al login:", data);
	// Esta función recibe por parámetros el email y la contraseña de la usuaria. 
	const bodyParams = data;
  console.log(bodyParams);
	return fetch("http://localhost:4000/login", {
		// estos datos ahora se envían por body params. 
		method: "POST",
		body: JSON.stringify(bodyParams),
		headers: {
			"Content-Type": "application/json",
		},
	})
		.then((response) => response.json())
		.then((data) => {
			return data;
		});

};

// signup

// Con esta función estamos registrando a nuevas usuarias en nuestra base de datos.
const sendSingUpToApi = (data) => {
	console.log("Se están enviando datos al signup:", data);
	const bodyParams = data;
	return fetch("http://localhost:4000/sign-up", {
   
	method: "POST",
	body: JSON.stringify(bodyParams),
	headers: {
		"Content-Type": "application/json",
	},
	})
		.then((response) => response.json())
		.then((data) => {
		return data;
		});
};

// profile

const sendProfileToApi = (userId, data) => {
	console.log("Se están enviando datos al profile:", userId, data);
	// CAMBIA ESTE FETCH PARA QUE APUNTE A UN ENDPOINT DE TU SERVIDOR, PIENSA SI DEBE SER GET O POST, PIENSA QUÉ DATOS DEBES ENVIAR, ETC
	return fetch(
		"//beta.adalab.es/curso-intensivo-fullstack-recursos/apis/netflix-v1/empty.json"
	);
};

const getProfileFromApi = (userId) => {
	console.log("Se están pidiendo datos del profile del usuario:", userId);
	// CAMBIA ESTE FETCH PARA QUE APUNTE A UN ENDPOINT DE TU SERVIDOR, PIENSA SI DEBE SER GET O POST, PIENSA QUÉ DATOS DEBES ENVIAR, ETC
	return fetch(
		"//beta.adalab.es/curso-intensivo-fullstack-recursos/apis/netflix-v1/empty.json"
	)
		.then((response) => response.json())
		.then(() => {
			// CAMBIA EL CONTENIDO DE ESTE THEN PARA GESTIONAR LA RESPUESTA DEL SERVIDOR Y RETORNAR AL COMPONENTE APP LO QUE NECESITA
			return {
				success: true,
				name: "Maricarmen",
				email: "mari@mail.com",
				password: "1234567",
			};
		});
};

// user movies

const getUserMoviesFromApi = (userId) => {
	console.log(
		"Se están pidiendo datos de las películas de la usuaria:",
		userId
	);
	// CAMBIA ESTE FETCH PARA QUE APUNTE A UN ENDPOINT DE TU SERVIDOR, PIENSA SI DEBE SER GET O POST, PIENSA QUÉ DATOS DEBES ENVIAR, ETC
	return fetch(
		"http://localhost:4000/user/movies", {headers: {'user-id': userId}}
	)
	.then(response => response.json())
	.then(data => {
	   return data;
	});
};

const objToExport = {
	sendLoginToApi: sendLoginToApi,
	sendSingUpToApi: sendSingUpToApi,
	sendProfileToApi: sendProfileToApi,
	getProfileFromApi: getProfileFromApi,
	getUserMoviesFromApi: getUserMoviesFromApi,
};

export default objToExport;
