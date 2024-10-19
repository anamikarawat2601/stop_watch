const start=document.getElementById('startBtn');
const pause=document.getElementById('pauseBtn');
const reset=document.getElementById('resetBtn');
const display=document.getElementById('display');
let hour=0;
let min=0;
let sec=0;
let task;
function displaytime(){
    display.textContent = `${String(hour).padStart(2, '0')}:${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;
}
async function ready(){
task=setInterval(() => {
    sec++;
    if(sec>=60){
        min++;
        sec=0;
    }
    if(min>=60){
        hour++;
        min=0;
        sec=0;

    }
    displaytime();
   
  }, 10);
}

start.addEventListener('click',ready)
pause.addEventListener('click',()=>{
    clearInterval(task);
})
reset.addEventListener('click',()=>{
    hour=0;
    min=0;
    sec=0;
    ready();
 
});
