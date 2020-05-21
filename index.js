


var express = require('express');
var app = express();

// Primero una ruta simple
app.get('/', function (req, res) {
  var importando = require('./utils');

  var msj = "Que tal"
  let saludo = 'Hello World!';

  if (!saludo) {
    // Por n razones llenaremos el texto que enviaremos
    saludo = importando.textoRandom(msj.length);
  }

  res.send(saludo);
});

// Ahora una ruta con un poco de logica
app.get('/pokemones', function (req, res) {
  const request = require('request');
  const pokeruta = "http://pokeapi.co/api/v2/pokemon/ditto/";
  const axios = require('axios');

  var pokemones =null;
  var estaVariableSe_llena_si_es_que_trae_dataElServicio = false;
  axios.get(`${pokeruta}`)
    .then(response => {
    console.log("response", response.data)
          pokemones = response.data
if (pokemones) {
estaVariableSe_llena_si_es_que_trae_dataElServicio = true;
}
else {
estaVariableSe_llena_si_es_que_trae_dataElServicio = false
}

                  console.log("estaVariableSe_llena_si_es_que_trae_dataElServicio", estaVariableSe_llena_si_es_que_trae_dataElServicio)
                  if (estaVariableSe_llena_si_es_que_trae_dataElServicio) {
                    pokemones = pokemones.game_indices
                    pokemones.length = 2;res.send(pokemones);
                  } else {
                    res.send('el stock esta vacio');
                  }

    })
    .catch(error => {
      console.log(err);

      res.status(500).send('error')
    });

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

