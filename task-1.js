// Write a function to convert temperature from Celsius to Fahrenheit.

// Fahrenheit = (Celsius * 1.8) + 32


function convertToFahrenheit(celsius) {
    const fahrenheit = (celsius * 1.8) + 32;
    return fahrenheit;
}

const celsiusToFahrenheit = convertToFahrenheit(34);
console.log(celsiusToFahrenheit);

