const axios = require('axios');
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/1/';

function getAllPoke() {
    

    let config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: BASE_URL,
        headers: {}
    };

    axios.request(config)
        .then((response) => {
            console.log(JSON.stringify(response.data));
            return JSON.stringify(response.data)
        })
        .catch((error) => {
            console.log(error);
            return false;
        });

}

module.exports = { getAllPoke }