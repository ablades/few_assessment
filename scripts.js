const widthValue = document.getElementById('cWidth')
const widthDisplay = document.getElementById('wDisplay')
const heightValue = document.getElementById('cHeight')
const heightDisplay = document.getElementById('hDisplay')
const colorValue = document.getElementById('cValue')
const colorDisplay = document.getElementById('cDisplay')
const colorBox = document.getElementById('cBox')

document.addEventListener("DOMContentLoaded", function() {
    heightDisplay.innerHTML = heightValue.value + "px"
    widthDisplay.innerHTML = widthValue.value + "px"
    colorDisplay.innerHTML = colorValue.value
    colorBox.style.backgroundColor = colorValue.value
    colorBox.style.width = widthValue.value + "px"
    colorBox.style.height = heightValue.value + "px"
})

widthValue.addEventListener("input", function(){
    widthDisplay.innerHTML = widthValue.value + "px"
    colorBox.style.width = widthValue.value + "px"
})

heightValue.addEventListener("input", function(){
    heightDisplay.innerHTML = heightValue.value + "px"
    colorBox.style.height = heightValue.value + "px"
})

colorValue.addEventListener("input", function (){
    colorDisplay.innerHTML = colorValue.value
    colorBox.style.backgroundColor = colorValue.value
})