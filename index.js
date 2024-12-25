var n=document.querySelectorAll("button").length;

for(var i=0;i<n;i++){
    document.querySelectorAll("button")[i].addEventListener("click",handclick);
   

}
function handclick(){
    //this.style.color="white";
  var push=this.innerHTML;
  makesound(push);
  buttonAnimation(push);

}

document.addEventListener("keypress",function(event){

 makesound(event.key);
 buttonAnimation(event.key);
});

function makesound(key){
    switch(key){
        case "w": 
            var audio= new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio= new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "s": 
            var audio= new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio= new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        case "j": 
            var audio= new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio= new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio= new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        default:console.log(push);
            break;

    }
}

function buttonAnimation(currentkey){

    var presentButton=document.querySelector("."+currentkey);
    presentButton.classList.add("pressed");
    setTimeout(function(){
        presentButton.classList.remove("pressed");
    },100);

    
  /*  var presentButton=document.getElementsByClassName("currentkey");      
    presentButton.classList.add("pressed");
   */
    
}