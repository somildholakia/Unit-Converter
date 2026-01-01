const input = document.getElementById("number-inp")
const convert_btn = document.getElementById("convert-btn")
const length_p = document.getElementById("length-p")
const volume_p = document.getElementById("volume-p")
const mass_p = document.getElementById("mass-p")

convert_btn.addEventListener("click", function(){
    let input_received = input.value 
    length_convert(input_received)
    Volume_convert(input_received)
    mass_convert(input_received)
})

function length_convert(inp){
    let meter = inp * 3.281
    let feet = inp / 3.281

    length_p.textContent = `
        ${inp} meters = ${meter.toFixed(3)} feet | ${inp} feet = ${feet.toFixed(3)} meters
    `
}

function Volume_convert(inp){
    let liter = inp / 0.264
    let gallon = inp * 0.264

    volume_p.textContent = `
        ${inp} liter = ${liter.toFixed(3)} gallon | ${inp} gallon = ${gallon.toFixed(3)} liter
    `
}

function mass_convert(inp){
    let kilogram = inp * 2.204
    let pound = inp / 2.204

    mass_p.textContent = `
        ${inp} kilogram = ${kilogram.toFixed(3)} pound | ${inp} pound = ${pound.toFixed(3)} kilogram
    `
}