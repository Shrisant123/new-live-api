console.log("This is modern javascript practice file");

let btn=document.getElementById('start').addEventListener('click',startTime);
var increaseTimeInterval;
var increaseMillInterval;
function startTime(){
	increaseTimeInterval=setInterval(increaseTime, 1000);
	increaseMillInterval=setInterval(increaseMilli, 1);

}

function increaseTime(){
	let getTime=document.getElementById('increaseTime');
	let val=Number(getTime.innerText);
	getTime.innerText=val+1;
}

function increaseMilli(){
	let milli=document.getElementById('increaseMilli');
	let milval=Number(milli.innerText);
	milli.innerText=milval+10;
	if(milval==1000){
		milli.innerText="0";
	}
}

let resetbtn=document.getElementById('reset').addEventListener('click', ()=>{
	// console.log("stop button clicked");
	// document.getElementById('increaseTime').innerText="0";
	// document.getElementById('increaseMilli').innerText="0";
	window.location.reload();
})

let stopbtn=document.getElementById('stop').addEventListener('click', stopTimer);

function stopTimer(){
	clearInterval(increaseTimeInterval);
	clearInterval(increaseMillInterval);
}