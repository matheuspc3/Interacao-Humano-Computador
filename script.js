let n1 = "";
let n2 = "";
let operator = "";
let res = "";

function addNumber(number) {
  if (res !== "" && operator === "") {
    erase();
  }

  if (operator === "") {
    document.getElementById("display").innerHTML += number;
    n1 += number;
  } else if (operator !== "" && n2 === "") {
    document.getElementById("display").innerHTML = "";
    document.getElementById("display").innerHTML = number;
    n2 = number;
  } else {
    document.getElementById("display").innerHTML += number;
    n2 += number;
  }
}

function erase() {
  n1 = "";
  n2 = "";
  operator = "";
  res = "";

  document.getElementById("display").innerHTML = "";
}

function addOperator(operatorSelected) {
  if (n1 !== "") {
    if(operator === "raiz") {
      operator = operatorSelected;
      calculate();
    } else {
      operator = operatorSelected;
    }
  }
}

function calculate(event) {
  event.preventDefault();

  if(operator === "raiz") {
    res = Math.sqrt(parseFloat(n1));
    document.getElementById("display").innerHTML = "" + res.toFixed(2);
    n1 = "" + res;
    operator = "";
  }

  if (n1 !== "" && n2 !== "" && operator !== "") {
    switch (operator) {
      case "+":
        res = parseFloat(n1) + parseFloat(n2);
        break;

      case "-":
        res = parseFloat(n1) - parseFloat(n2);
        break;

      case "*":
        res = parseFloat(n1) * parseFloat(n2);
        break;

      case "/":
        res = parseFloat(n1) / parseFloat(n2);
        if(n2 == "0" && n1 !== "0") {
          document.getElementById("display").innerHTML = "não é possível dividir por zero";
        } else if(n2 == "0" && n1 == "0") {
          document.getElementById("display").innerHTML = "resultado indefinido";
        } 
        break;

      case "^": 
        res = parseFloat(n1) ** parseFloat(n2);
        break;
    }  

    if(document.getElementById("display").innerHTML == "não é possível dividir por zero" || document.getElementById("display").innerHTML == "resultado indefinido") {
      n1 = "";
      n2 = "";
      operator = "";
    } else {
      document.getElementById("display").innerHTML = "" + parseFloat(res).toFixed(2);
      n1 = "" + res;
      n2 = "";
      operator = "";
    }
  }
}

//alterações da semana 

function increaseDecimal() {
  if (res !== "") {
    res = parseFloat(res) + 0.1;
    document.getElementById("display").innerHTML = parseFloat(res).toFixed(2);
  }
}

function decreaseDecimal() {
  if (res !== "") {
    res = parseFloat(res) - 0.1;
    document.getElementById("display").innerHTML = parseFloat(res).toFixed(2);
  }
}

function formatCurrency() {
  
  document.getElementById("display").innerHTML= "R$ " + parseFloat(res).toFixed(2); 
}

function formatPorcentage(){
  document.getElementById("display").innerHTML= parseFloat(res).toFixed(2)+"%"; 
}

