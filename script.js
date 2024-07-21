document.addEventListener('DOMContentLoaded', () => {
    const cars = [
        { brand: 'Toyota', model: 'Corolla', year: 2020 },
        { brand: 'Honda', model: 'Civic', year: 2019 },
        { brand: 'Ford', model: 'Mustang', year: 2018 }
    ];

    const carList = document.getElementById('car-list');

    cars.forEach(car => {
        const listItem = document.createElement('li');
        listItem.textContent = `${car.brand} ${car.model} (${car.year})`;
        carList.appendChild(listItem);
    });
});
