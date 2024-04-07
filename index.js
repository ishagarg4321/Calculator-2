"use strict"
//function buttons
const display = document.getElementById("display")
const clearBtn = document.querySelector(".clear-btn");
const changeBtn = document.querySelector(".change-btn");
const porcentageBtn = document.querySelector(".porcentage-btn");

//operator buttons
const divisorBtn = document.querySelector(".divisor-btn"); 
const multipleBtn = document.querySelector(".multiple-btn"); 
const substractionBtn = document.querySelector(".substraction-btn"); 
const additionBtn = document.querySelector(".addition-btn"); 
const equalBtn = document.querySelector(".equal-btn");

const commaBtn = document.querySelector(".comma-btn");


//checking that there is only one comma in each number
let commaBand = false;

clearBtn.addEventListener("click",()=>{
  display.value="";  
  commaBand = false;
}) 




porcentageBtn.addEventListener("click",()=>{
  let content = display.value;
  let size = content.length;
  let lastElement = content[size-1];
  if(comprobation() && lastElement !== "." && content !== "" && content !== "0") {
    display.value = content / 100;
  } 
})




divisorBtn.addEventListener("click",()=>{
  if(comprobation() && display.value != ""){ 
    display.value += "/";
    commaBand = false;
  }
})

multipleBtn.addEventListener("click",()=>{
  if(comprobation() && display.value != ""){
    display.value += "*";
    commaBand = false;
  } 
})

substractionBtn.addEventListener("click",()=>{
  if(comprobation()){
    display.value += "-";
    commaBand = false;
  }
})

additionBtn.addEventListener("click",()=>{
  if(comprobation() && display.value != ""){
    display.value += "+"; 
    commaBand = false;
  }
})

equalBtn.addEventListener("click",()=>{
  display.value = eval(display.value); 
})

commaBtn.addEventListener("click",()=>{
  let size = display.value.length;
  let lastElement = display.value[size-1];
  if(comprobation() && (lastElement !== ".") && !commaBand){
    if(display.value === "") display.value += "0"; 
    display.value += ".";
    commaBand = true; 
  }
})

function comprobation(){
  let content = display.value;
  let size = content.length;
  let lastElement = content[size-1];
  if(!((lastElement==="-") || (lastElement==="*") || (lastElement==="+") || (lastElement==="/"))) return true;
  return false;
} 