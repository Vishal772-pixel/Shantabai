document.querySelectorAll('.dish').forEach(dish => {
    dish.addEventListener('click', () => {
        alert(`You selected ${dish.querySelector('h3').innerText}`);
    });
});
