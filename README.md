## Información sobre el proyecto

Este proyecto está realizado en Node (sin express)
<br>
Se utiliza axios para realizar las peticiones http

Axios maneja promesas, cuando se tiene promesas se puede usar las palabras reservadas Async y await 

Para usar await una función deber ser async (asincrona)

Al usar estas palabras reservadas se pasa de tener el siguiete código: 
```javascrypt

instance.get()
        .then( resp => {console.log(resp.data.Results[0]);})
        .catch( err => {console.log(err);});
```
a tener solo esto: 
```javascrypt
const resp = await instance.get();
```
luego se debe gestionar el error, que depender del API

Ver un ejemplo en: lugar/lugar.js

Las funciones async SIEMPRE retornan una promesa

### Https en axios 
Siempre enviar al comienzo https://

### El ASYNC y el AWAIT 
Para manejar los erroes dentro de asycns y awaist se utliza un try catch