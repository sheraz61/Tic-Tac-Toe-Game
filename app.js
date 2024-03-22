let boxes = document.querySelectorAll(".box");
let resetgamebtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msg_container");
let msg = document.querySelector(".msg");
let count = 0;
let turn0 = true;
const winpattrens = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
//Reset game
const resetgame = () => {
  turn0 = true;
  count = 0;
  enablebox();
  msgcontainer.classList.add("hide");
};
// onclick event count
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    count++;
    if (turn0) {
      box.innerText = "O";
      box.style.color = "#1B998B";
      turn0 = false;
    } else {
      box.innerText = "X";
      box.style.color = "#343749";
      turn0 = true;
    }
    box.disabled = true;
    checkwinner();
  });
});
//Disable boxes
const disablebox = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};
//Enable boxes
const enablebox = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};
//display winner
const showwinner = (winner) => {
  msg.innerText = `Congratulations Winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disablebox();
};
// Select winner
const checkwinner = () => {
  for (let pattern of winpattrens) {
    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;
    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showwinner(pos1val);
      }
      if (count === 9 && pos1val != pos2val && pos2val != pos3val) {
        nowinner();
      }
    }
  }
};
//for reset and new game
newgamebtn.addEventListener("click", resetgame);
resetgamebtn.addEventListener("click", resetgame);
//for game draw decision
const nowinner = () => {
  msg.innerText = `Game was Draw`;
  msgcontainer.classList.remove("hide");
};
