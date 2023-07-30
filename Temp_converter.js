var Input_of_Celsius = document.querySelector('.celsius > input');
var Input_of_Fahrenheit = document.querySelector('.fahrenheit > input');
var btn = document.querySelector('.button button');

function roundNumber(number){
    return Math.round(number*100)/100;
}

Input_of_Celsius.addEventListener('input', function(){
    var Celsius_Temp = parseFloat(Input_of_Celsius.value);
    var Fahrenheit_Temp = (Celsius_Temp*(9/5)) + 32;

    Input_of_Fahrenheit.value = roundNumber(Fahrenheit_Temp);
});

Input_of_Fahrenheit.addEventListener('input', function(){
    var Fahrenheit_Temp = parseFloat(Input_of_Fahrenheit.value);
    var Celsius_Temp = (Fahrenheit_Temp - 32) * (5/9);

    Input_of_Celsius.value = roundNumber(Celsius_Temp);
});

btn.addEventListener('click', () => {
    Input_of_Celsius.value = "";
    Input_of_Fahrenheit.value = "";
});