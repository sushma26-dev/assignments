window.onload = function(){
	 var seconds=00;
	 var minutes=00;
	 var appendminutes=document.getElementById("minutes");
	 var appendsecond=document.getElementById("seconds");
	 var buttonstart=document.getElementById("start");
	 var buttonstop=document.getElementById("stop");
	 var buttonreset=document.getElementById("restart");
	 var intervals;
	 
	 buttonstart.onclick = function (){
		 clearInterval(intervals);
		 intervals = setInterval(startTimer,1000);
	 }
	 buttonstop.onclick = function (){
		 clearInterval(intervals);
	 }
	 buttonreset.onclick = function (){
		 clearInterval(intervals);
		 minutes="00";
		 appendminutes.innerHTML = minutes;
		 seconds="00";
		 appendsecond.innerHTML = seconds;
	 }
	 function startTimer(){
		 seconds++;
		 if(seconds<=9)
		 {
			 appendsecond.innerHTML = "0"+seconds;
		 }
		 if(seconds>9)
		 {
			 appendsecond.innerHTML = seconds;
		 }
		 if(seconds>60)
		 {
			 minutes++;
			 
			 appendminutes.innerHTML = "0"+minutes;
			 seconds =0;
			 appendsecond.innerHTML = seconds;
		 }
	}
}