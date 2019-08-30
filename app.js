const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");
const argv = require("yargs").options({
  direccion: {
    alias: "d",
    desc: "Descripción de la ciudad para obtener el clima",
    demand: true
  }
}).argv;

// console.log(argv.direccion);

// lugar.getLugarLatLng(argv.direccion)
//                   .then( resp => {console.log(resp)});

// clima.getClima(-0.190000,-78.500000)
//                   .then( resp => console.log(resp))
//                   .catch( err => console.log(err))

const getInfo = async direccion => {
  try {
    const sitio = await lugar.getLugarLatLng(direccion);
    const temp = await clima.getClima(sitio.lat, sitio.lng);

    return `El clima de ${direccion} es de ${temp}`;
  } catch (e) {
    return `No se pudo determinar la temperatura de: ${direccion}`;
  }
};

getInfo(argv.direccion)
  .then(resp => console.log(resp))
  .catch(err => console.log(err));
