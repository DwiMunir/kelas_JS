let button = document.querySelector('#switch')
let lamps = document.querySelectorAll('.lamp')

console.log(lamps);

lamps.forEach(function(val, index) {
  // ini cluenya
})

button.addEventListener('click', switchLamp)

function switchLamp(){
  let number = document.querySelector('#numberLamp')
  let endClass = lamps[number.value - 1].classList

  if (endClass.contains('active')) {
    endClass.remove('active')
  }else{
    endClass.add('active')
  }  
}