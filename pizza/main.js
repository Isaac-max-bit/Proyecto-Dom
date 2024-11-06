// Obtener todos los elementos de toppings
const toppings = document.getElementsByClassName('topping');
const pizzas = document.getElementsByClassName('pizza');

// Función para resaltar el topping seleccionado
function toggleTopping(event) {
    const topping = event.target;
    
    // Verificar si el topping ya está seleccionado
    if (topping.classList.contains('selected')) {
        topping.classList.remove('selected');
    } else {
        topping.classList.add('selected');
    }
}

// Asignar el evento de click a cada topping en la lista
for (let i = 0; i < toppings.length; i++) {
    toppings[i].addEventListener('click', toggleTopping);
}

// Función para mostrar los toppings seleccionados
function showSelectedToppings() {
    const selectedToppings = document.querySelectorAll('.topping.selected');
    const selectedToppingsList = [];
    
    selectedToppings.forEach(topping => {
        selectedToppingsList.push(topping.innerText);
    });

    // Mostrar los toppings seleccionados en consola (puedes mostrarlo en la página si lo prefieres)
    console.log("Toppings seleccionados: ", selectedToppingsList.join(", "));
}

// Al hacer clic en cualquier pizza, mostrar los toppings seleccionados
for (let i = 0; i < pizzas.length; i++) {
    pizzas[i].addEventListener('click', showSelectedToppings);
}
