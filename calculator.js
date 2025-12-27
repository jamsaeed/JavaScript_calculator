// global
//select all buttons
const buttons = document.querySelectorAll("button")

//select the sound
const btnClick = document.querySelector("#clickSound")
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
const clearAll = document.querySelector("#clear")

// select display input
const display = document.querySelector(".display")
// select the second display
const secondDisplay = document.querySelector(".second-display")

//create a memory for js 1+1...
let clickOperator = false

//handle sound

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    btnClick.currentTime = 0
    btnClick.play()
  })
})

//handle dark mode and light mode
const themeToggle = document.querySelector("#theme-toggle")

themeToggle.addEventListener("change", () => {
  if (themeToggle.checked) {
    document.body.classList.add("dark-mode")
  } else {
    document.body.classList.remove("dark-mode")
  }
})

// handle number display
for (let i = 0; i < numbers.length; i++) {
  numbers[i].addEventListener("click", () => {
    //handle calculator memory
    if (clickOperator) {
      display.value = numbers[i].textContent
      secondDisplay.textContent += numbers[i].textContent
      clickOperator = false
      return
    }
    if (display.value === "0" || secondDisplay.textContent === "0") {
      display.value = numbers[i].textContent
      secondDisplay.textContent = numbers[i].textContent
    } else {
      display.value += numbers[i].textContent
      secondDisplay.textContent += numbers[i].textContent
    }
  })
}

//handle decimal
decimal.addEventListener("click", () => {
  // if you want to add multiple decimals then go for this if not answer below
  // display.value += "."
  if (!display.value.includes(".")) {
    display.value += "."
    secondDisplay.textContent += "."
  }
})

let num1 = ""
let mathOperator = ""
let num2 = ""

// handle operator
add.addEventListener("click", () => {
  // avoids 2+++++++
  if (clickOperator && mathOperator !== "") {
    secondDisplay.textContent = secondDisplay.textContent.slice(0, -1) + "+"
    mathOperator = "+"
    return
  }
  //handle chain operation
  if (num1 !== "" && mathOperator !== "" && display.value !== "") {
    num2 = Number(display.value)
    let finalResult
    switch (mathOperator) {
      case "+":
        finalResult = num1 + num2
        break
      case "-":
        finalResult = num1 - num2
        break
      case "x":
        finalResult = num1 * num2
        break
      case "÷":
        if (num2 === 0) {
          return (display.value = "cannot divide by 0")
        }
        finalResult = num1 / num2
    }
    num1 = finalResult
    display.value = finalResult
  }
  num1 = Number(display.value)
  secondDisplay.textContent += "+"
  mathOperator = "+"
  display.value = "0"
  clickOperator = true
})

sub.addEventListener("click", () => {
//avoid multiple operator
  if (clickOperator && mathOperator !== "") {
    secondDisplay.textContent = secondDisplay.textContent.slice(0, -1) + "-"
    mathOperator = "-"
    return
  }
  //handle chain
  if (num1 !== "" && mathOperator !== "" && display.value !== "") {
    num2 = Number(display.value)
    let finalResult
    switch (mathOperator) {
      case "+":
        finalResult = num1 + num2
        break
      case "-":
        finalResult = num1 - num2
        break
      case "x":
        finalResult = num1 * num2
        break
      case "÷":
        if (num2 === 0) {
          return (display.value = "cannot divide by 0")
        }
        finalResult = num1 / num2
    }
    num1 = finalResult
    display.value = finalResult
  }

  num1 = Number(display.value)
  mathOperator = "-"
  secondDisplay.textContent += "-"
  display.value = "0"
  clickOperator = true
})

multiply.addEventListener("click", () => {
  //avoid multiple operator
  if (clickOperator && mathOperator !== "") {
    secondDisplay.textContent = secondDisplay.textContent.slice(0, -1) + "x"
    mathOperator = "x"
    return
  }
  if (num1 !== "" && mathOperator !== "" && display.value !== "") {
    num2 = Number(display.value)
    let finalResult
    switch (mathOperator) {
      case "+":
        finalResult = num1 + num2
        break
      case "-":
        finalResult = num1 - num2
        break
      case "x":
        finalResult = num1 * num2
        break
      case "÷":
        if (num2 === 0) {
          return (display.value = "cannot divide by 0")
        }
        finalResult = num1 / num2
    }
    num1 = finalResult
    display.value = finalResult
  }
  num1 = Number(display.value)
  mathOperator = "x"
  display.value = "0"
  secondDisplay.textContent += "x"
  clickOperator = true
})

divide.addEventListener("click", () => {
  //avoid multiple operator
  if (clickOperator && mathOperator !== "") {
    secondDisplay.textContent = secondDisplay.textContent.slice(0, -1) + "÷"
    mathOperator = "÷"
    return
  }
  if (num1 !== "" && mathOperator !== "" && display.value !== "") {
    num2 = Number(display.value)
    let finalResult
    switch (mathOperator) {
      case "+":
        finalResult = num1 + num2
        break
      case "-":
        finalResult = num1 - num2
        break
      case "x":
        finalResult = num1 * num2
        break
      case "÷":
        if (num2 === 0) {
          return (display.value = "cannot divide by 0")
        }
        finalResult = num1 / num2
    }
    num1 = finalResult
    display.value = finalResult
  }
  num1 = Number(display.value)
  secondDisplay.textContent += "÷"

  mathOperator = "÷"
  display.value = "0"
  clickOperator = true
})

equal.addEventListener("click", () => {
  if (num1 === "" || mathOperator === "" || display.value === "") {
    return
  }
  num2 = Number(display.value)
  let result

  switch (mathOperator) {
    case "+":
      result = num1 + num2
      break
    case "-":
      result = num1 - num2
      break
    case "x":
      result = num1 * num2
      break
    case "÷":
       if (num2 === 0) {
          return (display.value = "cannot divide by 0")
        }
      result = num1 / num2

      break
  }
  display.value = result
  secondDisplay.textContent += "=" + result

  // Reset state so you can start a fresh calculation
  num1 = ""
  num2 = ""
  mathOperator = ""
})

//handle clear all delete button
clearAll.addEventListener("click", () => {
  num1 = ""
  num2 = ""
  mathOperator = ""
  display.value = "0"
  secondDisplay.textContent = "0"
})

// handle backspace delete btn
backSpace.addEventListener("click", () => {
  display.value = display.value.slice(0, -1)
  secondDisplay.textContent = secondDisplay.textContent.slice(0, -1)
  if (display.value === "" && secondDisplay.textContent === "") {
    display.value = "0"
    secondDisplay.textContent = "0"
  }
})


//handle keyboard support
document.addEventListener("keydown", (event) => {
  if (event.key >= "0" && event.key <= "9") {
    if (clickOperator) {
      display.value = event.key
      secondDisplay.textContent += event.key
      clickOperator = false
      return
    }
    if (display.value === "0" && secondDisplay.textContent === "0") {
      display.value = event.key
      secondDisplay.textContent = event.key
    } else {
      display.value += event.key
      secondDisplay.textContent += event.key
    }
  }

  if (event.key === "+") {
    add.click()
  }
  if (event.key === "-") {
    sub.click()
  }
  if (event.key === "*") {
    multiply.click()
  }
  if (event.key === "/") {
    divide.click()
  }
  if (event.key === "=" || event.key === "Enter") {
    equal.click()
    event.preventDefault()
  }
  if (event.key === "Backspace") {
    backSpace.click()
  }
  if (event.key === "Escape" || event.key === "c") {
    clearAll.click()
  }
  if (event.key === ".") {
    decimal.click()
  }
})
