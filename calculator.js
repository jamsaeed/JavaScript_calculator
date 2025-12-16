// select all numbers
const numbers = document.querySelectorAll(".nums")

//  select Arithmetic
const add = document.querySelector(".add")
const sub = document.querySelector(".sub")
const multiply = document.querySelector(".mul")
const divide = document.querySelector(".div")

// select decimal
const decimal = document.querySelector(".decimal")

// select equal
const equal = document.querySelector(".equal")

//select delete
// back space
const backSpace = document.querySelector("#back-space")
// All clear AC
const clearAll = document.querySelector('#clear')

// select display input
const display = document.querySelector(".display")
// select the second display
const secondDisplay = document.querySelector('.second-display')


for(let i = 0; i < numbers.length; i++ ){
 numbers[i].addEventListener('click',()=>{
  //console.log('clicked')
  if(display.value === "0"){
    display.value = numbers[i].textContent
  } else {
    display.value += numbers[i].textContent
  }
 } )
}

