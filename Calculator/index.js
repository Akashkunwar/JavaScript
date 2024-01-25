let num1;
let num2;

function input(){
    num1 = parseInt(document.getElementById('num1-el').value);
    num2 = parseInt(document.getElementById('num2-el').value);
}

function add(){
    input();
    let ans = num1+num2;
    document.getElementById("operation").textContent = "Sum : "+ ans;
}

function substract(){
    input();
    let ans = num1-num2;
    document.getElementById("operation").textContent = "Minus :"+ans;
}

function divide(){
    input();
    let ans = num1/num2;
    document.getElementById("operation").textContent = "Divistion : "+ans;
}

function multiply(){
    input();
    let ans = num1*num2;
    document.getElementById("operation").textContent = "Multiplication : "+ans;
}