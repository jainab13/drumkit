let arrayOfDrums= document.querySelectorAll(".drum");

for(let i=0; i<arrayOfDrums.length;i++){
  arrayOfDrums[i].addEventListener("click", function(){
    let button=this.innerHTML;
    makeSound(button);
    buttonAnimation(button);
  })
  arrayOfDrums[i].addEventListener("keydown",function(event){
    makeSound(event.key);
    buttonAnimation(event.key);

  });
}
const makeSound=(key)=>{
  switch(key){
    case "a":
      let tom1= new Audio("music/a .mp3");
      tom1.play();
      break
    case "s":
      let tom2= new Audio("music/s.mp3");
      tom2.play();
      break 
    case "d":
      let tom3= new Audio("music/d.mp3");
      tom3.play();
      break 
    case "f":
      let tom4= new Audio("music/w.mp3");
      tom4.play();
      break
    case "j":
      let snare= new Audio("music/j.mp3");
      snare.play();
      break
    case "k":
      let kick= new Audio("music/k.mp3");
      kick.play();
      break
    case "l":
      let crash= new Audio("music/l.mp3");
      crash.play();
      break
    default:
      alert("wrong key pressed"); 
  }
}
const buttonAnimation = (key) => {
    let active = document.querySelector(`.${key}`);
    active.classList.add("pressed");
  
    setTimeout(() => {
      active.classList.remove("pressed");
    }, 100);
  };






