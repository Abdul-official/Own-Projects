let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn =  document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");  

let turn0 = true;

const winPatterns = [
    [0 , 1 , 2],
    [0 , 3 , 6],
    [0 , 4 , 8],
    [1 , 4 , 7],
    [2 , 5 , 8],
    [2 , 4 , 6],
    [3 , 4 , 5],
    [6 , 7 , 8],
];


boxes.forEach((box) => {
  box.addEventListener("click",()=> {
        console.log('button was clicked')
    if(turn0){
         box.innerText = "0";
         turn0 = false;
    }else{
        box.innerText = "X";
        turn0 = true;
    }
    box.disabled = true;

    checkWinner();
  })
})

const resetGame = () => {
    let turn0 = true;
    enableBtn();
    msgContainer.classList.add('hide');
}
const disableBtn = () => {
    for(box of boxes){
        box.disabled = true;
    }
}
const enableBtn = () => {
    for(box of boxes){
        box.disabled = false;
        box.innerText = '';
    }
}
const showWinner = (winner) =>{
    msg.innerText = `congratulation you are my rival now ${winner}`
    msgContainer.classList.remove("hide");
    disableBtn();
}

const checkWinner = () => {
   for(let pattern of winPatterns){
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
  
    if(pos1val != "" && pos2val != "" && pos3val != ""){
        if(pos1val == pos2val && pos2val == pos3val){
            // console.log("you are the winner",pos1val)
            showWinner(pos1val); 
        }
    }

   }    
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);