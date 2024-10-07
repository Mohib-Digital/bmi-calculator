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
  

  const msg = document.getElementById('msg');

  // BMI Conditions
  if (bmi < 18.5){
     msg.textContent = "Underweight"
  }
  else if(bmi >= 18.5 && bmi < 24.9){
    msg.textContent = "Normal weight";
  }
  else if(bmi >= 25 && bmi < 29){
    msg.textContent = "Overweight";
  }
  else if(bmi >= 30){
    msg.textContent = "Obesity";
  }


    // resetButton functionality
    const resetBtn = document.getElementById('resetBtn');
    resetBtn.addEventListener('click', () => {
      heightInput.value = '';
      weightInput.value = '';
      result.textContent = 'Total BMI : ';
      msg.textContent = '';
    });
    
})