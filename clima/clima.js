const axios = require('axios');
const getClima = async (lat, lng) =>{

    const resp =  await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=6755a09c20107870e302e012c74569e9&units=metric`);
     // console.log(resp);
    return resp.data.main.temp;
}
module.exports ={
    getClima
}