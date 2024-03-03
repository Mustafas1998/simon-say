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

function game(){
    on = false;
    if(flash == turn){
        clearInterval(intervalID);
        computer_turn = false;
        on = true;
    }
}   if (computer_turn){
    clearCOLOR();
    setTimeout(() => {
        if(order[flash] == 1) one();
        if(order[flash] == 2) two();
        if(order[flash] == 3) three();
        if(order[flash] == 4) four();
        flash++;
    }, 200);
}

function one(){
    if (sound){
        const test = new Audio("url");
        test.play()
    }
    sound = true;
    green.style.backgroundColor = 'lightgreen';
}
function two(){
    if (sound){
        const test = new Audio("url");
        test.play()
    }
    sound = true;
    red.style.backgroundColor = 'tomato';
}
function three(){
    if (sound){
        const test = new Audio("url");
        test.play()
    }
    sound = true;
    yellow.style.backgroundColor = 'yellow';
}
function four(){
    if (sound){
        const test = new Audio("url");
        test.play()
    }
    sound = true;
    blue.style.backgroundColor = 'lightskyblue';
}

function clearCOLOR(){
    green.style.backgroundColor = 'darkgreen';
    red.style.backgroundColor = 'darkred';
    yellow.style.backgroundColor = 'goldenrod';
    blue.style.backgroundColor = 'darkblue';
}
function flashCOLOR(){
    green.style.backgroundColor = 'lightgreen';
    red.style.backgroundColor = 'tomato';
    yellow.style.backgroundColor = 'yello';
    blue.style.backgroundColor = 'lighskyblue';
}

green.addEventListener('click', function() {
    if (on){
        player_order.push(1)
        check();
        one();
        if(!win){
            setTimeout(() =>{
                clearCOLOR();
            }, 300);
        }
    }
})

red.addEventListener('click', function(){
    if (on){
        player_order.push(2)
        check();
        two();
        if(!win){
            setTimeout(() =>{
                clearCOLOR();
            }, 300);
        }
    }
})
yellow.addEventListener('click',function(){
    if (on){
        player_order.push(3)
        check();
        three();
        if(!win){
            setTimeout(() =>{
                clearCOLOR();
            }, 300);
        }
    }
})

blue.addEventListener('click',function(){
    if (on){
        player_order.push(4)
        check();
        four();
        if(!win){
            setTimeout(() =>{
                clearCOLOR();
            }, 300);
        }
    }
})

function check(){
    if(player_order[player_order-1] !== order[player_order.length -1 ]) 
    good=false;

    if(player_order.length == 12 && good){
        wingame();
    }
    if(good==false){
        flashCOLOR();
        play.innerHTML = "NO!"
        setTimeout(()=>{
            play.innerHTML = turn;
            clearCOLOR();
        }, 800);
        sound =false;
    }

    if (turn == player_order.length && good && !win){
        turn++;
        player_order=[];
        computer_turn=true
        flash = 0;
        play.innerHTML =turn;
        intervalID = setInterval(gameTurn,800);
    }
}

function flashCOLOR(){

}

function wingame(){
    flashCOLOR();
    play.innerHTML = "win!"
    on=false;
    win=true;

}





