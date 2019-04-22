// -- Javascript Library for Particles in the background----------------------
particlesJS("particles-js", {"particles":{"number":{"value":160,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},"opacity":{"value":1,"random":true,"anim":{"enable":true,"speed":1,"opacity_min":0,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":4,"size_min":0.3,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":true,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":600}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"grab"},"onclick":{"enable":true,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":0.2590442884781959}},"bubble":{"distance":250,"size":0,"duration":2,"opacity":0,"speed":3},"repulse":{"distance":400,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0); stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; stats.domElement.style.top = '0px'; document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles'); update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } requestAnimationFrame(update); }; requestAnimationFrame(update);
//-- ending library-------

// soundtrack in the background
var sound = document.getElementById('ost');
//var sound = new Audio('http://66.90.93.122/ost/assassin-s-creed-iv-black-flag/rtnmwgja/02.%20Pyrates%20Beware.mp3');

window.onload = function() {
  sound.play();
  sound.currentTime = 0;
  sound.loop = true;
  sound.volume = 0.6;
  if (!ost) return;
}

//Setting Speech system Defaults
        responsiveVoice.setDefaultVoice("US English Male");
        // Setting Variables
        let countdown;// storing setInterval in this function to be able to stop it at zero.
        const showTimer = document.querySelector('.display__time-left');
		const starting = document.querySelector('.display__start-time');
        const endTime = document.querySelector('.display__end-time');
        let buttons = document.querySelectorAll('[data-time]');
        let sec = document.getElementById('sec');
		let stopTimer = document.getElementById('stop');

   ////////////////////////////////////////
  //      Programming the countdown     //
 //          and the time left         //
////////////////////////////////////////
// Resetting Counter for displaying 00:00 and programming the stop button
var a = 0;
var displayValue = document.getElementById('coloring');

var updateValue = function () {
    displayValue.innerHTML = a;
};

var reset = function () {
  timestop();
    a = `00:00`;
    updateValue();
  responsiveVoice.cancel();
};


function timestop(){
  clearInterval(countdown);
}
stopTimer.addEventListener('click',reset);


        function timer(seconds) {
            // clear any other timers
            clearInterval(countdown);
            //constants
            const now = Date.now();
            const then = now + seconds * 1000;
            displayTimeLeft(seconds);
            displayEndTime(then);
            //setting animation in one second and storing it in a variable (countdown)
            //to be able to clearInterval after it reaches zero
 			countdown = setInterval(() => {
                const secondsLeft = Math.round((then - Date.now())/1000);
                //Checking when to stop the function
   
                if (secondsLeft < 0) {
                    clearInterval(countdown);
                    return;
                }
                //installing beeb sound
                if (secondsLeft < 11) {
                    sec.play();
                }
                // changing colors once reaching 10 seconds (needs fixing!)
                if (secondsLeft <= 11){                        
                    colors();
                    }
                    function colors(){
                        var colors = ['red', 'yellow'];
                        var colorIndex = Math.floor((colors.length) * Math.random());
                        document.getElementById('coloring').style.color = colors[Math.round(colorIndex)];
                    }
                
                
                //Displaying timer
                displayTimeLeft(secondsLeft);
            }, 1000);
        }
        
        //display function in the page
        function displayTimeLeft(seconds) {
            const minutes = Math.floor(seconds / 60);
            const remainingSecs = seconds % 60;
            const display = `${minutes < 10 ? 0 : ''}${minutes}:${remainingSecs < 10 ? 0 : ''}${remainingSecs}`
            showTimer.textContent = display;
            document.title = display;
          
          //***************** UPDATED ************************************************
          // voice alarm for each minute
          if(remainingSecs == 0 && minutes != 0){
            responsiveVoice.speak(`${minutes} minutes remaining | till break ends`);
          } else if (minutes == 0 && remainingSecs == 0) {

			  responsiveVoice.speak(`Your Break Has Finished. Hurry up before you get fired! Thank you for using our services`);
          } else if (minutes == 0 && remainingSecs < 11) {
			
			  responsiveVoice.speak(`${remainingSecs}`);	  
		  }
		//***************** Update Complete ***************************************
			
         /* (the previous update) for voice alarm for the last ten seconds 
		
          if (minutes == 0){
            switch(remainingSecs){
              case 10:
                responsiveVoice.speak('10');
              break;
              case 9:
                responsiveVoice.speak('9');
              break;
              case 8:
                responsiveVoice.speak('8');
              break;
              case 7:
                responsiveVoice.speak('7');
              break;
              case 6:
                responsiveVoice.speak('6');
              break;
              case 5:
                responsiveVoice.speak('5');
              break;
              case 4:
                responsiveVoice.speak('4');
              break;
              case 3:
                responsiveVoice.speak('3');
              break;
              case 2:
                responsiveVoice.speak('2');
              break;
              case 1:
                responsiveVoice.speak('1');
            }
          }
			*/				
				
        } // ******** Ending voice alarm for each minute ********  
// ******** Ending voice alarm for each minute ********  

		        
        function displayEndTime(timestamp) {
            const end = new Date(timestamp);
            const hour = end.getHours();
            const CorrHours = hour > 12 ? (hour - 12) : hour;
            const minutes = end.getMinutes();
            
            endTime.textContent = `Break ends at ${CorrHours < 10 ? 0 : ''}${CorrHours}:${minutes < 10 ? 0 : ''}${minutes}`
        }
        


        function startTimer(){
            var sound = document.getElementById("audio");
            sound.play();
            const seconds = parseInt(this.dataset.time);
            timer(seconds);
        }
        
        buttons.forEach(button => button.addEventListener(('click'), startTimer));
        
        document.customForm.addEventListener('submit', function(e){
            e.preventDefault();
            const mins = this.minutes.value;
            timer(mins * 60);
			starting.textContent = `${mins}` + " minute break";
            this.reset();
        });
