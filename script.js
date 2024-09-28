let circle=document.querySelector("#circles")
let timer = document.querySelector("#timer")
let check = document.querySelector("#check")
let score = document.querySelector("#score")

let time2=60;
let score2=0;
let timeinterval=setInterval(function(){
   if(time2>=0){
      timer.innerHTML=time2;
      time2--;
   }
}
,1000);

circle.addEventListener("click",function(e){
   if (e.target.innerHTML==check.innerHTML){
      checkhandler();
      scorehandler();
      circlehandler();
   }
})
function checkhandler(){
  check.innerHTML = Math.floor(Math.random()*10)
}

function scorehandler(){
   score2+=10;
   score.innerHTML=score2;
}

function circlehandler(){
   circle.innerHTML=''
 for(i=0;i<27;i++)
 {
    circle.innerHTML+=`<div id="box">${Math.floor(Math.random()*10)}</div>`
 }
}
circlehandler()
checkhandler()
//scorehandler()

