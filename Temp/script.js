// Function to convert the temperature
function convertTemperature() {
  const temperatureInput = document.getElementById('temperature').value;
  const unit = document.getElementById('unit').value;
  const resultDisplay = document.getElementById('result');


  if (isNaN(temperatureInput) || temperatureInput === '') {
    resultDisplay.innerHTML = "Please enter a valid number.";
    return;
  }

  const temperature = parseFloat(temperatureInput);
  let convertedTemperature = "";
  let resultText = "";


  if (unit === 'Celsius') {

    const fahrenheit = (temperature * 9/5) + 32;
    const kelvin = temperature + 273.15;
    resultText = `
      Celsius to Fahrenheit : ${fahrenheit.toFixed(2)} °F<br>
      Celsius to Kelvin : ${kelvin.toFixed(2)} K
    `;
  } 
  else if (unit === 'Fahrenheit') {

    const celsius = (temperature - 32) * 5/9;
    const kelvin = (temperature - 32) * 5/9 + 273.15;
    resultText = `
      Fahrenheit to Celsius : ${celsius.toFixed(2)} °C<br>
      Fahrenheit to Kelvin : ${kelvin.toFixed(2)} K
    `;
  } 
  else if (unit === 'Kelvin') {

    const celsius = temperature - 273.15;
    const fahrenheit = (temperature - 273.15) * 9/5 + 32;
    resultText = `
      Kelvin to Celsius : ${celsius.toFixed(2)} °C<br>
      Kelvin to Fahrenheit : ${fahrenheit.toFixed(2)} °F
    `;
  }


  resultDisplay.innerHTML = resultText;
}


document.getElementById('convertButton').addEventListener('click', convertTemperature);
