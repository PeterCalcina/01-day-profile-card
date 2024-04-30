let p_description = document.querySelector('.description');

let description = 'Hello World! Soy desarrollador web junior, me gusta aprender cosas nuevas y compartir mi conocimiento adquirido. Actualmente buscando empleo :c.';

//Cada 100ms se añade una letra al texto

let i = 0;

setInterval(() => {
  if (i < description.length) {
    p_description.innerHTML += description.charAt(i);
    i++;
  }
}, 20);

