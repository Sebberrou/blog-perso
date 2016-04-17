document.addEventListener("DOMContentLoaded", function(event) { 
var tweetState=false;
var tweetBtn=document.getElementsByClassName("aside--twitter--btn").item(0);
var tweetTimeline=document.getElementsByClassName("aside--tweets").item(0);
console.log(tweetBtn);
console.log(tweetTimeline);


function showTimeline(state){
  if(!state){
    tweetTimeline.style.display="block";
    console.log('show');
      !function(d,s,id){
        var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
        if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
        return true;
  }
  else{
    tweetTimeline.style.display="none";
    return false;
  }

  
}
tweetBtn.addEventListener("click",function(){

  tweetState = showTimeline(tweetState);
})

});