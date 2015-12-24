$(document).ready(function() {
var ranNum = function() {//function for random number for selecting a sequence from array
		return Math.floor(Math.random() * (lng));
	}

var arr = [	//array with different sequences
  "bacdabcddacaabdcabdc",
  "adcbbadbccbbadabbdab",
  "cbcadacabdbcdbcbbacd",
  "dbadbdcbcdbbcabdbcad",
  "cdbacdbaabcdaabcddba",
  "ccbaadcddabdbccaabdc"
];


var j = 0;//global variables
var red = $('#red');
var blue = $('#blue');
var green = $('#green');
var yellow = $('#yellow');
var input = '';
var squence = [];
var p2;
var p3;
var p4;
var p5;
var p6;
var err;
var rre;
var interval;
var counter =0;
var time = 2000;
var lng = arr.length;
var memory = arr[ranNum()];


var blueSound = document.createElement("audio");//Simon sounds for clicks
        blueSound.src="https://s3.amazonaws.com/freecodecamp/simonSound1.mp3";
        blueSound.volume=1;
        blueSound.autoPlay=false;
        blueSound.preLoad=true;
var redSound = document.createElement("audio");
	    redSound.src="https://s3.amazonaws.com/freecodecamp/simonSound2.mp3";
	    redSound.volume=1;
	    redSound.autoPlay=false;
	    redSound.preLoad=true;
var greenSound = document.createElement("audio");
        greenSound.src="https://s3.amazonaws.com/freecodecamp/simonSound3.mp3";
        greenSound.volume=1;
        greenSound.autoPlay=false;
        greenSound.preLoad=true;
var yellowSound = document.createElement("audio");
        yellowSound.src="https://s3.amazonaws.com/freecodecamp/simonSound4.mp3";
        yellowSound.volume=1;
        yellowSound.autoPlay=false;
        yellowSound.preLoad=true;
var wrongSound = document.createElement("audio");
        wrongSound.src="sound/sound1.mp3";
        wrongSound.volume=.5;
        wrongSound.autoPlay=false;
        wrongSound.preLoad=true;            



$(blue).mousedown(function() {//when button is clicked it will light up
	blueSound.play();
	
	$(blue).css('background-color', 'blue');
	squence += 'a';
console.log(input);
}).mouseup(function() {
	$(blue).css('background-color', '#000099');
});

$(red).mousedown(function() {
	redSound.play();
	$(red).css('background-color', 'red');
	squence += 'b';
console.log(input);
}).mouseup(function() {
	$(red).css('background-color', '#990000');
});

$(green).mousedown(function() {
	greenSound.play();
	$(green).css('background-color', '#00ff00');
	squence += 'c';
console.log(input);
}).mouseup(function() {
	$(green).css('background-color', 'green');
});

$(yellow).mousedown(function() {
	yellowSound.play(); 
	$(yellow).css('background-color', 'yellow');
	squence += 'd';
console.log(input);

}).mouseup(function() {
	$(yellow).css('background-color', '#cacc00');
});




function hitBlue() {//function for each color button to light up
	blueSound.play();
	
	
	$(blue).css('background-color', 'blue');
	setTimeout(function() {
    $(blue).css('background-color', '#000099');
	}, 500);
}
function hitRed() { 
	redSound.play();
	
	
	$(red).css('background-color', 'red');
	setTimeout(function() {
    $(red).css('background-color', '#990000');
	}, 500);
}
function hitGreen() {
	greenSound.play();
	
	
	$(green).css('background-color', '#00ff00');
	setTimeout(function() {
    $(green).css('background-color', 'green');
	}, 500);
}
function hitYellow() {
	yellowSound.play();
	
	
	$(yellow).css('background-color', 'yellow');
	setTimeout(function() {
    $(yellow).css('background-color', '#cacc00');
	}, 500);
}






$('#inner-div').click(function() {///on-off switch
	
	$('#inner-div').toggleClass('on');
	if($('#counter p').hasClass('counterLightoff')) {////if switch is off
		$('#counter p').removeClass('counterLightoff');
        $('#counter p').addClass('counterLighton');
        $('#start').removeClass('disableBtns');////remove disable off start button
        $('td').removeClass('disableBtns');//remove disable off all color button
        $('#strict').removeClass('disableBtns');//remove disable off strict button 
        memory = arr[ranNum()];//set a random sequence from arr
        restGame();
        console.log("on");
        console.log("squence: "+squence);
        console.log("counter: "+counter);
        console.log("j: "+j);
	} else {
		$('#counter p').removeClass('counterLighton');
        $('#counter p').addClass('counterLightoff');
        $('#start').addClass('disableBtns');////place disable on start button
        $('#strict').addClass('disableBtns');//place disable on strict button 
        $('td').addClass('disableBtns');//place disable on all color button
        restGame();
        console.log("off");
        console.log("squence: "+squence);
        console.log("counter: "+counter);
        console.log("j: "+j);
        
        
	}
    

});

function restGame() {//reset game when on-off button is switched off
	
	clearInterval(interval);//clears interval so sequence stops running
	counter=j;//sets counter = j so function g() will stop running

	$('#counter p').html('--');//changes counter display to two dashes

}
function pass() {//function to check if players input matches coumputer
	if(counter > 20) {//if game reaches end players gets message and games resets
			counter=20;
			$('#counter p').html(counter);
			alert("You Win Great Job!!");
			clearInterval(interval);
		    memory = arr[ranNum()];
		    squence='';
			counter=1;
			j=0;
			$('#counter p').html(counter);
			repeat();

	} else if(squence == memory.substr(0 ,counter)) {// if sequence of round is match player advances to next level

		updateTime();
		j=0;
		squence ='';
		level();
	}
}



function noMatch() {//if a wrong button is passed
	pass();

	err = setTimeout(function() {noMatch()}, 500);
		
	for(var i = 0; i < squence.length; i++) {
		if(squence[i] != memory.substr(i,1)) {
			wrongSound.play();
			clearTimeout(err);


			if($('#strict').hasClass('strict')) {//if strict button is clicked
				clearInterval(interval);
		    	rre = setTimeout(function() {repeat()}, 3000);
			    squence='';
				counter=1;
				j=0;
				$('#counter p').html(counter);
				repeat();
			}

			rre = setTimeout(function() {repeat()}, 3000);
			clearInterval(interval);
			j=0;
			
			

			
			
			
		
			

			if(squence[i] == 'a') {
				$(blue).addClass('wrong');
				
				setTimeout(function() {
					$(blue).removeClass('wrong');
				}, 1000);
				squence = '';
				
				console.log("Level: "+ i);
				console.log(squence[i]+" = "+memory[i]+" "+squence[i]+" is wrong!");
			} else if(squence[i] == 'b') {
				$(red).addClass('wrong');
				setTimeout(function() {
					$(red).removeClass('wrong');
				}, 1000);
				squence = '';
				
				console.log("Level: "+i);
				console.log(squence[i]+" = "+memory[i]+" "+squence[i]+" is wrong!");
			} else if(squence[i] == 'c') {
				$(green).addClass('wrong');
				setTimeout(function() {
					$(green).removeClass('wrong');
				}, 1000);
				squence = '';
				
				console.log("Level: "+i);
				console.log(squence[i]+" = "+memory[i]+" "+squence[i]+" is wrong!");
			} else if(squence[i] == 'd') {
				$(yellow).addClass('wrong');
				setTimeout(function() {
					$(yellow).removeClass('wrong');
				}, 1000);
				squence = '';
				
				console.log("Level: "+i);
				console.log(squence[i]+" = "+memory[i]+" "+squence[i]+" is wrong!");
			}
			
			
		}

		
	}
	
	
}


function f() {//looping through arr[i] sequence to play pattern
	if(memory[j] == "a") {
		hitBlue();
	} else if(memory[j] == "b") {
		hitRed();
	} else if(memory[j] == "c") {
		hitGreen();
	} else if(memory[j] == "d") {
		hitYellow();
	}
	
	
	updateTime();
    j++;
    
}

function updateTime() {//updates the time variable for speed when 5th,9th, and 13th levels are passed
	if(counter == 1) {
		time=2000;
	} else if(counter == 5) {
		time=1500;
	} else if(counter == 9) {
		time=1000;
	} else if(counter == 13) {
		time=500;
	}
}

function repeat() {//when player gets a wrong answer the sequence will be repeated
	clearTimeout(rre);
	updateTime();

	interval = setInterval(function() {
		if(j < counter) {
			f();
			updateTime();
			clearInterval(interval);
			repeat();
			console.log("time: "+time);
		
		}
	}, time);
	noMatch();
	
	
}

function g() {//looping through pattern
	if(j < counter) {
		f();
		updateTime();
		
		
	} 


}




function level() {//increases counter by one when player advances to next level
	counter++;
	$('#counter p').html(counter);	

}

$('#strict').click(function() {//enables and disables strict mode when strict is clicked
	if($('#strict').hasClass('strict')) {
		$('#strict').removeClass('strict');
		$('#dot').removeClass('lit');
	} else {
		$('#strict').addClass('strict');
		$('#dot').addClass('lit');
	}
});


$('#start').click(function() {//starts game at level one when start button is clicked

		    clearInterval(interval);
		    memory = arr[ranNum()];
		    squence='';
			counter=1;
			j=0;
			$('#counter p').html(counter);
			repeat();
			
  });
});