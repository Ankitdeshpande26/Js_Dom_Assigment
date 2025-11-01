function fun() {
  const inputBox = document.getElementById("inputBox");
  const head = document.getElementById("head");
  

  if (inputBox.value.trim() !== "") {
  head.innerText = inputBox.value;
} else {
  console.log("Input box is empty");
}
}
// For box-1
let clicked = false;
const box = document.getElementById("box-1");
   
function onclickf(){

    if(!clicked){
        box.style.backgroundColor="red";
        console.log("clicked");
        clicked =true;
    }else{
        box.style.backgroundColor="white";
        clicked = false;
    }
}
box.onclick = onclickf;
// For box-2
let clicked2 = false;
const box2 = document.getElementById("box-2");
function onclickf2(){
    if(!clicked2){
      box2.style.backgroundColor="blue";
      console.log("clicked");
      clicked2 =true;
    }else{
      box2.style.backgroundColor="white";
      clicked2 = false;
    }
}box2.onclick = onclickf2;

// For box-3
 let clicked3 = false;
const box3 = document.getElementById("box-3");
function onclickf3(){
    if(!clicked3){
      box3.style.backgroundColor="green";
       console.log("clicked");
       clicked3 =true;
     }else{
     box3.style.backgroundColor="white";
       clicked3 = false;
     }} box3.onclick = onclickf3;
// For box-4
let clicked4 = false;
const box4 = document.getElementById("box-4");
function onclickf4(){
    if(!clicked4){
      box4.style.backgroundColor="yellow";
      console.log("clicked");
      clicked4 =true;
    }else{
      box4.style.backgroundColor="white";
      clicked4 = false;
    }
} box4.onclick = onclickf4;