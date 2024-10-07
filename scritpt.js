const heightInput = document.getElementById('heightInput');
const weightInput = document.getElementById('weightInput');
const calculateButton = document.getElementById('calculateButton');
const result = document.getElementById('result')


calculateButton.addEventListener('click', () => {
  const height = heightInput.value;
  const weight = weightInput.value;
  const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2) 
  const bmiTotal = `Total BMI: ${bmi}`;
  result.textContent = bmiTotal;
  

  

})