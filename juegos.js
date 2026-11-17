/*
  LISTA DE JUEGOS DE PROHIBIDO NO JUGAR
  -------------------------------------
  Para sumar un juego nuevo, copiá un bloque { ... } y pegalo AL FINAL de la lista.
  Los juegos aparecen en la home en este mismo orden (los nuevos quedan abajo).

  titulo  -> el nombre del juego
  bajada  -> la frase que va debajo del nombre
  url     -> dónde está el juego: "/nombre-del-repo/"
  imagen  -> el thumbnail, guardado en img/juegos/ (ideal 640x400 px).
             Si dejás imagen: "" se muestra una tarjeta de color con el nombre.
*/

const JUEGOS = [
  { titulo: "Chopstick Catch",         bajada: "¿Cuántas moscas puedes atrapar?",        url: "/chopstick-catch/",         imagen: "chopstick-catch.jpg" },
  { titulo: "MEM😉JITEST",             bajada: "El nivel Hard, es realmente Hard.",       url: "/memojitest/",              imagen: "memojitest.jpg" },
  { titulo: "Escape from the Libyans", bajada: "Acelera esquivando obstáculos.",         url: "/escape.from.the.libyans/", imagen: "escape.from.the.libyans.jpg" },
  { titulo: "Help the Cow",            bajada: "Ayuda a la vaca y sus vaquitas.",      url: "/help.the.cow/",            imagen: "help.the.cow.jpg" },
  { titulo: "Freezer.Craft",           bajada: "Crea lo que quieras con imanes.",        url: "/freezer-craft/",           imagen: "freezer-craft.jpg" },
  { titulo: "Pelusart",                bajada: "Arte con pelusa.",        url: "/pelusart/",                imagen: "pelusart.jpg" },
  { titulo: "Slinky Master",           bajada: "¡Cuantos menos intentos, mejor!",        url: "/slinky-master/",           imagen: "slinky-master.jpg" },
];
