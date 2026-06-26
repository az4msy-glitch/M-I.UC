/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const inputEl = document.getElementById('input') 
let lengthEl = document.getElementById('length') 
let volumeEl = document.getElementById('volume')
let massEl = document.getElementById('mass')

function conversion() {
    let val = inputEl.value; 

    // Length
    const meterToFeet = val * 3.281; 
    const feetToMeter = val / 3.281; 
    
    // Volume
    const literToGallon = val * 0.264; 
    const gallonToLiter = val / 0.264; 
    
    // Mass
    const kilogramToPound = val * 2.204; 
    const poundToKilogram = val / 2.204;

    lengthEl.textContent = `${val} meters = ${meterToFeet.toFixed(3)} feet | ${val} feet = ${feetToMeter.toFixed(3)} meters`
    volumeEl.textContent = `${val} liters = ${literToGallon.toFixed(3)} gallons | ${val} gallons = ${gallonToLiter.toFixed(3)} liters`
    massEl.textContent = `${val} kilos = ${kilogramToPound.toFixed(3)} pounds | ${val} pounds = ${poundToKilogram.toFixed(3)} kilos`
}
