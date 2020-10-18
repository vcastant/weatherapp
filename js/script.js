

//const and variables

const key = '24d755206e23b42123679a3b9c44358f';
//`https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid={key}`

let weatherData, userInput;

// cached element references
const $city = $('#city');
const $temp = $('#temp');
const $feels = $('#feels');
const $weather = $('#weather');
const $input = $('input[type="text"]');

//event listners
$('form').on('submit', handleGetData);
//functions

function handleGetData (event) {
    event.preventDefault();

    if($input.val() === "") return;

    userInput = $input.val();

    $input.val(""); 

    $.ajax({
       url: 'https://api.openweathermap.org/data/2.5/weather?q=' + userInput + '&appid=24d755206e23b42123679a3b9c44358f'
     }).then(function(data) {

        weatherData = data;
        render();

     }, function (error) {
        console.log('Error: ',error)
});
}

function render() {
    $city.html(weatherData.name);
    $temp.html(weatherData.main.temp).append('C');
    $feels.html(weatherData.main.feels_like).append('C');
    $weather.html(weatherData.weather[0].description);
}