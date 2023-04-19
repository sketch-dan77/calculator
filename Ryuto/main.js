var result = document.getElementById("result");
var ce = document.getElementById("CE");
var mp = document.getElementById("mp");
var percent = document.getElementById("percent");
var equal = document.getElementById("equal");

var numbers = document.querySelectorAll(".number");
var operations = document.querySelectorAll(".operation");

var firstNumber = "0"
var secondNumber = "0"
var operation = ""
var equalStatus = false

//firstNumber (+,-,*,/) secondNumber

for (var i = 0; i < numbers.length; i++) {
  var element = numbers[i];
  element.addEventListener("click", function (e) {
   if(equalStatus === true) {
      firstNumber = "0"
      equalStatus = false
   }
   //  console.log(e.target.dataset.value);
   if(operation === ""){
      firstNumber = firstNumber + e.target.dataset.value
      result.innerText = parseFloat(firstNumber)
   } else {
      secondNumber = secondNumber + e.target.dataset.value
      result.innerText = parseFloat(secondNumber)
   }
  })
}

for(var i = 0;i <operations.length; i++) {
   var element = operations[i]
   element.addEventListener("click",function(e){
      if(secondNumber!=="0"){
         calculation()
      }
      operation=e.target.dataset.value
   })
}


ce.addEventListener("click",function(){
   firstNumber = "0"
   operation = ""
   secondNumber ="0"
   result.innerText = "0"
})

mp.addEventListener("click",function(){
   if(operation === "") {
      firstNumber = (parseFloat(firstNumber) * -1).toString()
      result.innerText = parseFloat(firstNumber)
   }else{
      secondNumber = (parseFloat(secondNumber) * -1).toString()
      result.innerText = parseFloat(secondNumber)
   }
})

percent.addEventListener("click",function () {
   if (operation === "") {
      firstNumber = (parseFloat(firstNumber) * 0.01).toString ()
      result.innerText = parseFloat(firstNumber)
   } else {
      secondNumber = (parseFloat(secondNumber) * 0.01).toString ()
      result.innerText = parseFloat(secondNumber)
   }
})

equal.addEventListener("click",function () {
   if(secondNumber != "0") {
      equalStatus = true
      calculation()
   }
})

function calculation () {
   var rs = 0;
   switch (operation) {
    case "/":
         rs =parseFloat(firstNumber) / parseFloat(secondNumber)
      break;
      case "*":
         rs = parseFloat(firstNumber) * parseFloat(secondNumber)
      break;
      case "-":
         rs = parseFloat(firstNumber) - parseFloat(secondNumber)
      break;
      case "+":
         rs = parseFloat(firstNumber) + parseFloat(secondNumber)
      break;
    default:
      break;
   }
   firstNumber = rs.toString()
   secondNumber = "0"
   operation = ""
   result.innerText = parseFloat(firstNumber)
}