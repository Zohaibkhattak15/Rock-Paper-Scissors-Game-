let userScore = 0;
let compScore = 0;
const userScore_span = document.getElementById('user-score');
const compScore_span = document.getElementById('comp-score');
const msgDisp_p = document.getElementById('replace-me');
const r_choice_div= document.getElementById('r');
const p_choice_div= document.getElementById('p');
const s_choice_div= document.getElementById('s');


// this function is used to select the move by the computer
function computerChoice()
{
    const compArray= ['r' , 'p' , 's']; 
    const randomNum= Math.floor(Math.random() * 3);
    return compArray[randomNum];
}   

//

function win(){
    userScore++;
    userScore_span.innerHTML = userScore;
    var msgStr = "YOU WON ";
    msgDisp_p.innerHTML = msgStr;
    
    

}

function lose(){
    compScore++;
    compScore_span.innerHTML = compScore;
    var msgStr = "YOU LOOSE";
    msgDisp_p.innerHTML = msgStr;
}

function draw(){
    var msgStr = "MATCH DRAW";
    msgDisp_p.innerHTML = msgStr;
}




function game(userMove){
    const comp_move= computerChoice();
    
    
    
    switch(userMove + comp_move)
    {
        case "rp":
        case "pr":
        case "sp":
        win();
        break;

        case "rs":
        case "ps":
        case "sr":
        lose();
        break;

        case "rr":
        case "pp":
        case "ss":
        draw();
        break;
    }
}


function main() {

    r_choice_div.addEventListener('click' , function() {
        game("r");
      
    } )

    p_choice_div.addEventListener('click' , function() {
        game("p");
      
    } )

    s_choice_div.addEventListener('click' , function() {
        game("s");
    })

}

main();

