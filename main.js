
function getBMI() {
    const heightCM = document.getElementById('inputHeight').value;
    const weight = document.getElementById('inputWeight').value

    if (heightCM != "" && weight != "") {
        heightM = heightCM / 100;
        const bmi = Math.round((weight / (heightM * heightM)) * 10) / 10;
        console.log(`${bmi}`);

        result.innerHTML = `
        <h3>Your BMI is :</h3>
        <h2>${bmi}</h2>
        <img class="resImage" src="./Media/body-mass-index-scale-infographics-of-underweight-and-normal-weight-vector.jpg" alt="">
    `
    } else { alert("Please enter both values") }
}

function clearValue(){
    document.getElementById('inputHeight').value=""
    document.getElementById('inputWeight').value=""
    document.getElementById('result').innerHTML=""
}
