let apiUrl = 'https://rickandmortyapi.com/api/character';

const getData = require("./getData")
// console.log(getData(apiUrl))

getData(apiUrl)
  .then(data => {
    console.log(data)
  })