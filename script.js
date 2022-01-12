// API link - Batman titles http://www.omdbapi.com/?s=batman&apikey=e69a6eb
// API link - movie details http://www.omdbapi.com/?i=insertSelectedimdbIDhere&apikey=e69a6eb

// Create a movie app that gives you movies related to batman and movie details.

// key = inputText 

const url1 = `http://www.omdbapi.com/?s=batman&apikey=e69a6eb`

fetch(url1)
.then((response) => response.json())
.then((data) => console.log(data));

const url2 = `http://www.omdbapi.com/?i=${key}&apikey=e69a6eb`


fetch(url2)
.then((response) => response.json())
.then((data) => console.log(data));

