const widthValue = document.getElementById('cWidth')
const widthDisplay = document.getElementById('wDisplay')
const heightValue = document.getElementById('cHeight')
const heightDisplay = document.getElementById('hDisplay')

widthValue.addEventListener("input", function(){
    widthDisplay.innerHTML = widthValue.value + "px"
})

heightValue.addEventListener("input", function(){
    heightDisplay.innerHTML = heightValue.value + "px"
})