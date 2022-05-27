const axios = require('axios');

getData = async(param)=>{
  await axios.get(param)
  .then(response => {
    console.log(response.data.results)
  })
}


module.exports = getData