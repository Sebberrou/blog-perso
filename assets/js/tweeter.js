document.addEventListener("DOMContentLoaded", function(event) { 
var tweetState=false;
var tweetBtn=document.getElementsByClassName("aside--twitter--btn").item(0);
var tweetTimeline=document.getElementsByClassName("aside--tweets").item(0);


function showTimeline(){

  console.log("start",tweetState);
  if(!tweetState){
    tweetTimeline.classList ? tweetTimeline.classList.add("aside--tweets--show") : tweetTimeline.className+=' aside--tweets--show';
    document.addEventListener("click", showTimeline);
    tweetState = true;
    console.log("if",tweetState);
  }
  else{
    tweetTimeline.classList ? tweetTimeline.classList.remove("aside--tweets--show") : tweetTimeline.className = tweetTimeline.className.replace(' aside--tweets--show', '');
    document.removeEventListener("click", showTimeline );
    tweetState = false;
        console.log("else",tweetState);

  }  
}

tweetBtn.addEventListener("click",function(event){
  showTimeline();
  event.stopPropagation();
});
tweetTimeline.addEventListener("click",function(event){
  event.stopPropagation();
});
});