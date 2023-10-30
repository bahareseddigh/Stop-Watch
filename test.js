let showTimer = document.querySelector('.showtimer');
let startBtn = document.getElementById('start');
let stopBtn = document.getElementById('stop');
let resetBtn = document.getElementById('reset');
let number = document.getElementById('number');
let audio = document.querySelector('audio');
let totalTime , timer , cutDownState = 'off' , currentTime;

//========== start button
startBtn.addEventListener('click' ,()=>{
	if(number.value){
		if(cutDownState == 'on'){
			totalTime = Number(number.value) * 60;
		}
		else if(cutDownState == 'stop'){
			totalTime = currentTime
		}
		timer = setInterval(() => {
			if(totalTime > 0){
				totalTime--;
				showTimer.innerHTML = calculateTime(totalTime);
				audio.play();
			}
			else{
				clearInterval(timer);
			}
		}, 1000);	
		startBtn.disabled = true;

		
	}
	else{
		alert('Please Enter A Number!');
	}
    
})
//========== stop button
stopBtn.addEventListener('click' , () => {
	clearInterval(timer);
	currentTime = totalTime;
	cutDownState = 'stop';
	startBtn.disabled = false;
})

//========== reset button
resetBtn.addEventListener('click' , ()=>{
    number.value = '';
    showTimer.innerHTML = '00 : 00 : 00';
	currentTime = 0
	clearInterval(timer);
	startBtn.classList.toggle('pe-none');
	startBtn.disabled = false;
})

number.addEventListener('change' , ()=>{
    cutDownState = 'on';
})

function calculateTime(totalTime){

    let hours = Math.floor(totalTime / 3600) ;
    let minutus = Math.floor(totalTime % 3600 / 60);
    let seconds = totalTime % 3600 % 60;

    if(seconds < 10) seconds = '0' + seconds;
    if(minutus < 10) minutus = '0' + minutus;
    if(hours < 10) hours = '0' + hours;
    
    return `${hours} : ${minutus} : ${seconds}`;
}




