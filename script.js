// get element by id and making variable for stop start and reset button
let stopWatch=document.getElementById('stop');
let startWatch=document.getElementById('start');
let resetWatch=document.getElementById('reset');

// for increment 
let hour=0;
let min=0;
let sec=0;
let count=0;

// Variable to control the timer state
let timer = false;

// click event for start timer
startWatch.addEventListener('click', function(){
timer=true; //active the timer 
StartTimer();
});

// click event for stop timer
stopWatch.addEventListener('click', function(){
    timer=false;  // Set the timer to inactive
    });
    
// click event for reset timer
resetWatch.addEventListener('click', function () {
        timer = false;
        hour = 0;
        min = 0;
        sec = 0;
        count = 0;
        document.getElementById('hr').innerHTML = "00";
        document.getElementById('min').innerHTML = "00";
        document.getElementById('sec').innerHTML = "00";
        document.getElementById('count').innerHTML = "00";
    });

    // startTimer function  for increment timer count, sec, min ,hour
function StartTimer(){
    
   
    if(timer){ // If the timer is active
         // if the count=100 then increment the value sec
        count++;
        if(count==100){
            sec++;
            count=0;
        }
        // if the sec=60 then increment the value min
        if(sec==60){
            min++;
            sec=0;
        }
        // if the min=60 then increment the value hour
        if(min==60){
            hour++;
            min=0;
            sec=0;
        }
        
        let hrString = hour;
        let minString = min;
        let secString = sec;
        let countString = count;
 
         // Convert time values to strings with leading zeros if necessary
        if (hour < 10) {
            hrString = "0" + hrString;
        }
 
        if (min < 10) {
            minString = "0" + minString;
        }
 
        if (sec < 10) {
            secString = "0" + secString;
        }
 
        if (count < 10) {
            countString = "0" + countString;
            }

        // Update the displayed time values
        document.getElementById('hr').innerHTML = hrString;
        document.getElementById('min').innerHTML = minString;
        document.getElementById('sec').innerHTML = secString;
        document.getElementById('count').innerHTML = countString;
         // Continue the timer by calling this function again after 10 milliseconds
        setTimeout(StartTimer, 10);
    }
    }
