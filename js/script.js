var second_hand = document.getElementsByClassName("second_hand");
var minute_hand = document.getElementsByClassName("minute_hand");
var hour_hand = document.getElementsByClassName("hour_hand");
function setDate(){

	var date = new Date();
	var seconds = date.getSeconds();
	var sec_deg = ((seconds/60) * 360) + 90;
	second_hand[0].style.transform  = "rotate("+sec_deg+"deg)";	


	var minnutes = date.getMinutes();
	var min_deg = ((minnutes/60) * 360) + 90;
	minute_hand[0].style.transform  = "rotate("+min_deg+"deg)";	

	var hours = date.getHours();
	var hour_deg = ((hours/12) * 360) + 90;
	hour_hand[0].style.transform  = "rotate("+hour_deg+"deg)";	


}

setInterval(setDate,1000)