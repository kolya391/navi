document.getElementById('carForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const carBrand = document.getElementById('carBrand').value;
    const carModel = document.getElementById('carModel').value;
    const carYear = document.getElementById('carYear').value;
    const fuelPrice = document.getElementById('fuelPrice').value;

    // Здесь можно добавить логику для получения среднего расхода топлива по марке, модели и году выпуска
    // Например, можно использовать API для получения данных о расходе топлива
    const fuelConsumption = 10; // Пример среднего расхода топлива (л/100км)

    // Передача данных на страницу навигатора
    localStorage.setItem('fuelConsumption', fuelConsumption);
    localStorage.setItem('fuelPrice', fuelPrice);

    // Перенаправление на страницу навигатора
    window.location.href = 'navigator.html';
});