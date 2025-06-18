/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const convertBtn = document.getElementById("convertBtn");
const input = document.getElementById("unitInput");
const resultLength = document.getElementById("meterAndFeet");
const resultVolume = document.getElementById("litersAndGallons");
const resultMass = document.getElementById("kgAndPounds");

function convertUnit() {
  const value = parseFloat(input.value);
  if (isNaN(value)) {
    resultLength.textContent = "Please enter a valid number.";
    resultVolume.textContent = "Please enter a valid number.";
    resultMass.textContent = "Please enter a valid number.";
    return;
  }

  const numFeet = value * 3.281;
  const numMeter = value * 0.3048;
  resultLength.textContent = `${value} meters = ${numFeet.toFixed(
    3
  )} feet | ${value} feet = ${numMeter.toFixed(3)} meters`;

  const numLiters = value * 0.264;
  const numGallons = value * 3.78541;
  resultVolume.textContent = `${value} liters = ${numLiters.toFixed(
    3
  )} gallons | ${value} gallons = ${numGallons.toFixed(3)} liters`;

  const numKg = value * 2.204;
  const numPounds = value * 0.453592;
  resultMass.textContent = `${value} kilos = ${numKg.toFixed(
    3
  )} pounds | ${value} pounds = ${numPounds.toFixed(3)} kilos`;
}

convertBtn.addEventListener("click", convertUnit);
