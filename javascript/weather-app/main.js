document.getElementById('city-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var city = document.getElementById('city-input').value;
    fetch('http://api.weatherapi.com/v1/current.json?key=7af187eebcca40ccb93123745241804&q='+city+'&aqi=no')
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            document.querySelector('.temperature').textContent = 'Temperature: ' + data.current.temp_f + '°F';
            document.querySelector('.humidity').textContent = 'Humidity: ' + data.current.humidity + '%';
            document.querySelector('.wind').textContent = 'Wind: ' + data.current.wind_mph + ' mph';
            document.querySelector('.condition').textContent = 'Condition: ' + data.current.condition.text;
        })
        .catch(function(error) {
            console.error('Error:', error);
        });
});