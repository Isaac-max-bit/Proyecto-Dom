// const toppings = document.getElementsByClassName('topping')
// console.log(toppings[3]);

// const misToppings = document.getElementsByTagName('li');
// console.log(misToppings);

// const toppingsFondoMarron = document.getElementsByClassName('fondo-marron');
// console.log(toppingsFondoMarron);

// const aceitunas = document.querySelector('.topping');
// console.log(typeof aceitunas);

// const primerToppingNaranja = document.querySelector('ul li.fondo-naranja');
// console.log(primerToppingNaranja);

// const primerToppingNoMarron = document.querySelector('ul li:not(.fondo-marron)');
// console.log(primerToppingNoMarron);

// const toppingsNaranja = document.querySelectorAll('.topping.fondo-naranja');
// console.log(toppingsNaranja);

// const contenedor = document.getElementById('contenedor');
// console.log(contenedor);


// const contenedor = document.getElementById('contenedor');
// console.log(contenedor.innerHTML);

// const contenedor = document.getElementById('contenedor');
// console.log(typeof contenedor.innerHTML);

// const titulo = document.getElementById('titulo');
// console.log(titulo);

// const titulo = document.getElementById('titulo');
// console.log(typeof titulo);

// const titulo = document.getElementById('titulo');
// console.log( typeof titulo.innerText);

// const titulo = document.getElementById('titulo');
// console.log(titulo.tagName);

// const titulo = document.getElementById('titulo');
// console.log(titulo);

// const titulo = document.getElementById('tit');
// console.log(titulo);

// const primerTopping = document.querySelector('.topping');
// console.log(primerTopping);

// const primerTopping = document.querySelector('.topping');
// console.log(primerTopping.style);

// const primerTopping = document.querySelector('.topping');
// console.log(primerTopping.style);


// primerTopping.style.backgroundColor = 'blue';
// primerTopping.style.color = '#6dff00';
// primerTopping.style.textTransform = 'uppercase';

// const listaDeToppings = document.getElementById('lista-toppings');

// console.log('> innerText');
// console.log(listaDeToppings.innerText);

// console.log('> textContent');
// console.log(listaDeToppings.textContent);

// console.log('> innerHTML');
// console.log(listaDeToppings.innerHTML);

// const titulo = document.getElementById('titulo');

// titulo.innerText = 'Mis Toppings Favoritos';

// const enlaces = document.getElementsByTagName('a');

// console.log(enlaces[0].getAttribute('href'));
// console.log(enlaces[0].removeAttribute('href'));
// console.log(enlaces[0].setAttribute('href', 'https://www.freecodecamp.org'));


// const primerTopping = document.querySelector('.topping');

// primerTopping.classList.add('texto-verde');

// console.log(primerTopping.classList);


// const primerTopping = document.querySelector('.topping');

// primerTopping.classList.remove('topping');

// console.log(primerTopping.classList);

// const listaDeToppings = document.getElementById('lista-toppings');

// const toppingNuevo = document.createElement('li');
// toppingNuevo.classList.add('topping', 'fondo-marron');
// toppingNuevo.innerText = 'Queso Extra';

// listaDeToppings.appendChild(toppingNuevo)

// // listaDeToppings.append('Hola Mundo')

// const toppingAdd = document.createElement('li');
// toppingAdd.classList.add('topping', 'fondo-naranja');
// toppingAdd.innerText = 'Napolitana';

// listaDeToppings.appendChild(toppingAdd)

// const listaDeToppings = document.getElementById('lista-toppings');

// console.log(listaDeToppings);


// const albahaca = document.getElementById('albahaca');
// function mostrarClic(e) {
//     console.log(e.target.innerText);
// }

// albahaca.addEventListener('click', mostrarClic);

const toppings = document.getElementsByClassName('topping');



for (const topping of toppings) {
    topping.addEventListener('click', (e) => {
        console.log(e.target.innerText);
    });
}





