let inputEl = document.getElementById("input-el")
let inputL = document.getElementById("input-l")
let symbolEl = document.getElementById("symbol-el")
const solutionEl = document.getElementById("solution-el")
let add = document.getElementById("add")
let sub = document.getElementById("sub")
let mult = document.getElementById("mult")
let div = document.getElementById("div") 
const clear = document.getElementById("clear-el")


add.addEventListener("click", function(){
    symbolEl.textContent = " + "
    num1El = parseInt(inputEl.value)
    num2El = parseInt(inputL.value)
    sum = num1El + num2El
    solutionEl.textContent = "= " + sum
})
sub.addEventListener("click", function(){
    symbolEl.textContent = " - "
    num1El = parseInt(inputEl.value)
    num2El = parseInt(inputL.value)
    sum = num1El - num2El
    solutionEl.textContent = "= " + sum
})
mult.addEventListener("click", function(){
    symbolEl.textContent = " * "
    num1El = parseInt(inputEl.value)
    num2El = parseInt(inputL.value)
    sum = num1El * num2El
    solutionEl.textContent = "= " + sum
})
div.addEventListener("click", function(){
    symbolEl.textContent = " / "
    num1El = parseInt(inputEl.value)
    num2El = parseInt(inputL.value)
    sum = num1El / num2El
    solutionEl.textContent = "= " + sum
})

clear.addEventListener("click", function(){
    solutionEl.textContent = ""
})

