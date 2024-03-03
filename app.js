let rock=document.querySelector(".rock")
let paper=document.querySelector(".paper")
let scissors=document.querySelector(".scissors")
let uscore=document.querySelector(".u-score")
let cscore=document.querySelector(".c-score")
let swin=document.querySelector(".s-win")
let showWinner=document.querySelector(".show-winner")
let resetBtn=document.querySelector(".reset-btn");
let possibilities=["rock","paper","scissors"];

let i=0,j=0;
rock.addEventListener("click",()=>{
    let choose=possibilities[(Math.floor(Math.random() * possibilities.length))]
    if(choose=="rock"){
        swin.innerText="You Choose Rock, Computer Choose Rock, Draw!!"
        showWinner.style.backgroundColor="yellow";
        swin.style.color="black";
    }
    else if(choose=="paper"){
        cscore.innerText=j+1;
        swin.innerText="You Choose Rock, Computer Choose Paper, Computer Wins!!"
        showWinner.style.backgroundColor="red";
        swin.style.color="white";
        j++;
    }
    else{
        swin.innerText="You Choose Rock, Computer Choose Scissors, You Won!!"
        showWinner.style.backgroundColor="green";
        swin.style.color="white";
        uscore.innerText=i+1;
        i++;
    }
})

paper.addEventListener("click",()=>{
    let choose=possibilities[(Math.floor(Math.random() * possibilities.length))]
    if(choose=="rock"){
        swin.innerText="You Choose Paper, Computer Choose Rock, You Won!!"
        showWinner.style.backgroundColor="green";
        swin.style.color="white";
        uscore.innerText=i+1;
        i++;
    }
    else if(choose=="paper"){
        swin.innerText="You Choose Paper, Computer Choose Paper, Draw!!"
        showWinner.style.backgroundColor="yellow";
        swin.style.color="black";
    }
    else{
        swin.innerText="You Choose Paper, Computer Choose Scissors, Computer Won!!"
        showWinner.style.backgroundColor="red";
        swin.style.color="white";
        cscore.innerText=j+1;
        j++;
    }
})

scissors.addEventListener("click",()=>{
    let choose=possibilities[(Math.floor(Math.random() * possibilities.length))]
    if(choose=="rock"){
        swin.innerText="You Choose Scissors, Computer Choose Rock, Computer Won!!"
        showWinner.style.backgroundColor="red";
        swin.style.color="white";
        cscore.innerText=j+1;
        j++;
    }
    else if(choose=="paper"){
        swin.innerText="You Choose Scissors, Computer Choose Paper, You Won!!"
        showWinner.style.backgroundColor="green";
        swin.style.color="white";
        uscore.innerText=i+1;
        i++;
    }
    else{
        swin.innerText="You Choose Scissors, Computer Choose Scissors, Draw!!"
        showWinner.style.backgroundColor="yellow";
        swin.style.color="black";
    }
})

resetBtn.addEventListener("click",()=>{
    uscore.innerText="";
    cscore.innerText="";
    swin.innerText="Click Any Three Of Them To Start The Match!!";
    showWinner.style.backgroundColor="blue";
    swin.style.color="white";
})