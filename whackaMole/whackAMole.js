// dom selector | reference
var count=0;

var h1= document.querySelector('h1');
var startmole= document.querySelector('#mole');
var startdirt= document.querySelector('#dirt');
var strbtn= document.querySelector('#start');
var points=document.querySelectorAll(".points")
var dirt=document.querySelectorAll(".dirt")
var mole=document.querySelectorAll(".mole")
var mud2 = document.getElementsByClassName("dirt");
var mole20 = document.getElementsByClassName("mole");




function start(){
    h1.style.visibility="hidden";
    startmole.style.visibility="hidden";
    startdirt.style.visibility="hidden";
    strbtn.style.visibility="hidden";
    for(var i=0;i<6;i++)
    {   
        mud2[i].style.visibility="visible";
    }
    for(var i=0;i<2;i++)
    {
        points[i].style.visibility="visible";
    }
    setInterval(rand,2000);
};

function rand(){
    var random = Math.floor(Math.random()*6)+1;
    var y=random;
    mole20[y].style.visibility="visible";
    mole20[y].onclick=currentPoints; 
    function hide()
    {
        mole20[y].style.visibility="hidden";
    }
    setTimeout(hide,1000)
}
function currentPoints(){
    ++count;
    points[1].textContent=count;
}