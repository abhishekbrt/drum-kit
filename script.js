// console.log('hello ');
window.addEventListener('keydown', function(e){
   const audio=document.querySelector(`audio[data-key="${e.keyCode}"]`);
   const key=document.querySelector(`.keys[data-key="${e.keyCode}"]`);
  console.log(key);

   if(!audio){
    return;
   }
   key.classList.remove("playing");
   audio.currentTime=0;
   audio.play();
   key.classList.add("playing");
});

const keys=document.querySelectorAll('.keys');
keys.forEach(keys => keys.addEventListener('transitionend',removeTransition));

function removeTransition(e){
    console.log(e);
    if(e.propertyName !== 'transform'){
        return;
    }
    this.classList.remove('playing');
}
