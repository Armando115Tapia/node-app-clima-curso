const axios = require("axios");

const getLugarLatLng =  async (dir) => {

const encodedURL = encodeURI(dir);

const instance = axios.create({
  baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
  headers: {
    "x-rapidapi-key": "17a324ff62msh4f07a9c0eb1649bp11ea26jsn7c42f4263dd1"
  }
});

// instance.get()
//         .then( resp => {console.log(resp.data.Results[0]);})
//         .catch( err => {console.log(err);});

const resp = await instance.get();
// console.log(resp.data.Results.length == null);
if(resp.data.Results.length == 0){
    // Aqui se detiene el programa
    throw new Error(`No hay resultados para mostrar para ${dir}`);
}

const data = resp.data.Results[0];
const direccion = data.name;
const lat = data.lat;
const lng = data.lon;

        return {
            direccion,
            lat,
            lng
        }
}

module.exports = {
    getLugarLatLng
}