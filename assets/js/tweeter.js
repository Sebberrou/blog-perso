document.addEventListener("DOMContentLoaded", function(event) { 
var tweetState=false;
var tweetBtn=document.getElementsByClassName("aside--twitter--btn").item(0);
var tweetTimeline=document.getElementsByClassName("aside--tweets").item(0);


function showTimeline(state){
  if(!state){
    tweetTimeline.classList ? tweetTimeline.classList.add("aside--tweets--show") : tweetTimeline.className+=' aside--tweets--show';
    return true;
  }
  else{
    tweetTimeline.classList ? tweetTimeline.classList.remove("aside--tweets--show") : tweetTimeline.className = tweetTimeline.className.replace(' aside--tweets--show', '');
    return false;
  }  
}
tweetBtn.addEventListener("click",function(){
  tweetState = showTimeline(tweetState);
})

});