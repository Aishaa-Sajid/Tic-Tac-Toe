let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset");
let newBtn=document.querySelector(".newgame");
let winContainer=document.querySelector(".win-container");
let msg=document.querySelector("#msg");

//  2D array
let winnPattern=[
    [0,1,2],
    [0,4,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
let count=0;
let turnO=true;

let pos1=0;
let pos2=0;
let pos3=0;

const reset= () =>{
    boxes.innerText=" ";
    turnO=true;
    enableboxes();
    winContainer.classList.add("hide");
}

boxes.forEach((box)=>{
  box.addEventListener("click",(e)=>{
   console.log("button was clicked");
    if(turnO){
        box.innerText="O";
        box.style.color="#14213d";
        turnO=false;
      }
      else{
        box.innerText="X";
        box.style.color="#ae2012";
        turnO=true;
    
      }
      box.disabled=true;
      checkWinner();
  });
});
  
const showWinner=(winner)=>{
    msg.innerText=`Congratulations, ${winner} is the winner🎉🎀`;
    winContainer.classList.remove("hide");
    boxdisabled();
}


const checkWinner = () => {  
    count++;
    // console.log(count);
   for(let pattern of winnPattern){
    // console.log(pattern[0],pattern[1],pattern[2]);
    // console.log(boxes[pattern[0]],boxes[pattern[1]],boxes[pattern[2]]);
    
     pos1= boxes[pattern[0]].innerText;
     pos2= boxes[pattern[1]].innerText;
     pos3= boxes[pattern[2]].innerText;

    if(pos1 != "" && pos2 != "" && pos3 != ""){
     if(pos1 === pos2 && pos2 === pos3){
        console.log("winner",pos1);
        showWinner(pos1);
     }
     else{
        counter(count);
     }
      
   
}}};


const boxdisabled= () =>{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableboxes= () =>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
   
};

resetBtn.addEventListener("click",(e)=>{
    reset();
    boxes.disabled=false;
});

const counter=()=>
{
    if(count===9){
        if(pos1 != pos2 || pos2 != pos3){
            console.log("reset the game");
            msg.innerText=`Draw again `;
            winContainer.classList.remove(`hide`);
        }
    }
};
newBtn.addEventListener("click",reset);
resetBtn.addEventListener("click",reset);