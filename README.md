# 01 Profile Card - 100daysofprojects

Profile Card es el primer proyecto de 100 por haber, construido con HTML, CSS y JavaScript. Este proyecto es parte del desafío #100daysofprojects promovido por [Frontend Club](https://www.facebook.com/frontendclubfb).

![Screenshot](https://cdn.hashnode.com/res/hashnode/image/upload/v1713758400857/a25a79d3-80bc-431e-ba1e-d467a333d667.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp)

### Tabla de contenidos

- [Descripcion](#descripcion)
  - [Capturas](#capturas)
  - [Enlaces](#enlaces)
- [Flujo de trabajo](#flujo-de-trabajo)
  - [Desarrollo](#desarrollo)
  - [Recursos](#recursos)
- [Agradecimientos](#agradecimientos)
- [Contacto](#contacto)

## Descripción

### Capturas

Agrega capturas de pantalla en móvil, tabletas y escritorio.

![Captura]()

### Enlaces

Agrega los enlaces de la solución del proyecto y el repositorio.

- [Proyecto](https://01-profile-card-frontendclub.netlify.app/)
- [Repositorio](https://github.com/PeterCalcina/01-day-profile-card.git)

## Flujo de trabajo

### Desarrollo

Primeramente se hizo la maquetación HTML con las clases necesarias para pasar a realizar el estilo respectivo con CSS, añadiendo pequeñas animaciones a los iconos y la descripción del **CARD**, se uso JS para rellenar la descripción letra por letra.

**Estructura del proyecto**

```txt
/
📂
├── 📂css/
│ ├── normalize.css
│ └── style.css
├── 📂images/
├── 📂js/
│ ├── main.js
└── index.html
└── README.md
```

**Tecnologías**

1. HTML Semántico
2. Estilos CSS
3. Animaciones CSS
4. Responsively App


**Fragmentos de codigo**

Etiquetas `meta` para el SEO.

```html
    <meta name="author" content="Peter Calcina">
    <meta name="description" content="Card de presentación">
    <title>Profile Card - Frontend Club</title>
```

Animaciones CSS.

```css
/* Animación para los iconos */

.card a i {
    transition: transform 0.5s;
}

.card a i:hover {
	transform: scale(1.2);
	filter: drop-shadow(0 0 5px rgba(255, 255, 255, 0.5));
	color: var(--ig-bg-color);
}
```

## Agradecimientos

- A mi madre que siempre fue el pilar fundamental para que sea la persona que soy, apoyandome en cada momento de mi vida.
- A mi padre (✞) que gracias a su arduo esfuerzo pude estudiar la carrera que me gusta y seguir formandome profesionalmente.
- A toda mi familia y amigos que siempre estan presente en mi vida.
- A la comunidad Frontend Club que siempre están apoyando con cualquier mínima cosa que surja y por esta gran iniciativa para acojer a los que queremos practicar nuestras habilidades en el desarrollo web día a día.

## Contacto

Agrega los medios de contacto para que cualquiera pueda encontrarte y hablar sobre tus siguientes grandes proyectos.

- [LinkedIn](https://www.linkedin.com/in/peter-c12)
- [Facebook](https://www.facebook.com/rodrigo.calcina.1)
- [GitHub](https://github.com/PeterCalcina)

---

> _La mejor manera de aprender a programar es practicando todos los días._ — **Frontend Club**