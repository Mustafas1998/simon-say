let order = [];
let player_order = [];
let flash;
let turn;
let sound = true;
let on = false;
let win;
let intervalID;
let computer_turn;
let good;

const counter = document.querySelector("#high-score");
const level = document.querySelector("#level");
const green = document.querySelectorAll(".tile.green.inactive");
const red = document.querySelectorAll(".tile.red.inactive");
const blue = document.querySelectorAll(".tile.blue.inactive");
const yellow = document.querySelectorAll(".tile.yellow.inactive");
const play = document.querySelector("#play");

play.addEventListener('click', function(){
    if(on || win)
    {
        Play();
    }
})

function Play(){
    win = false;
    order = [];
    player_order = [];
    flash = 0;
    intervalID = 0;
    turn = 1;
    play.innerHTML = 1;
    good = true;
    for(var i = 0; i<12; i++){
        order.push(Math.floor(Math.random()*4)+1);
    }
    computer_turn = true;
    intervalID =setInterval(gameTurn, 800);
}


