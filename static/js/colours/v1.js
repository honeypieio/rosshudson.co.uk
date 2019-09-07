var hueOptions = [];
var satOptions = [];
var lumOptions = [];

for(i=0;i<360;i++){
	if(i >= 0 && i < 79){
		hueOptions.push(i);
		hueOptions.push(i);
		hueOptions.push(i);
	}
	
	if(i >= 79 && i <= 160){
		hueOptions.push(i);	
	}

	if(i > 161){
		hueOptions.push(i);
		hueOptions.push(i);
		hueOptions.push(i);
	}
	
	if(i > 49 && i < 86) {
		satOptions.push(i);
	}

	if(i > 59 && i < 79){
		lumOptions.push(i)
		lumOptions.push(i)
	}

	if(i >=80 && i < 96){
		lumOptions.push(i)
	}
}

function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}


function generateColour(){
	hueOptions = shuffle(hueOptions);
	var h = hueOptions[Math.floor(Math.random() * hueOptions.length)];

	satOptions = shuffle(satOptions);
	var s = satOptions[Math.floor(Math.random() * satOptions.length)];

	lumOptions = shuffle(lumOptions);
	var l = lumOptions[Math.floor(Math.random() * lumOptions.length)];

	return { 
			h:h,
			s:s,
			l:l
		}
}

function generateAngle(){
	return Math.floor(Math.random()*180) + 1
}

function fade(currentColour1, targetColour1, currentColour2, targetColour2, currentAngle, newAngle, delay){

	updateDisplay(currentAngle, "hsl(" + currentColour1["h"] + ", " + currentColour1["s"] + "%," + currentColour1["l"] + "%)", "hsl(" + currentColour2["h"] + ", " + currentColour2["s"] + "%," + currentColour2["l"] + "%)")

	var loop = function(){

		if(currentColour1["h"] == targetColour1["h"]){
			if(currentColour1["s"] == targetColour1["s"]){
				if(currentColour1["l"] == targetColour1["l"]){
					if(currentColour2["h"] == targetColour2["h"]){
						if(currentColour2["s"] == targetColour2["s"]){
							if(currentColour2["l"] == targetColour2["l"]){
								if(currentAngle == newAngle){
									clearInterval(intervalId)
									fade(targetColour1, generateColour(), targetColour2, generateColour(), newAngle, generateAngle(), delay)
								} else if(currentAngle > newAngle){
									currentAngle = currentAngle - 1;
								} else {
									currentAngle = currentAngle + 1;
								}
							} else if(currentColour2["l"] > targetColour2["l"]){
								currentColour2["l"] = currentColour2["l"] - 1;
							// Going up
							} else {
								currentColour2["l"] = currentColour2["l"] + 1;		
							}
							if(currentAngle > newAngle){
								currentAngle = currentAngle - 1;
							} else if (currentAngle < newAngle) {
								currentAngle = currentAngle + 1;
							}
						} else if(currentColour2["s"] > targetColour2["s"]){
							currentColour2["s"] = currentColour2["s"] - 1;
						// Going up
						} else {
							currentColour2["s"] = currentColour2["s"] + 1;			
						}

						if(currentAngle > newAngle){
							currentAngle = currentAngle - 1;
						} else if (currentAngle < newAngle) {
							currentAngle = currentAngle + 1;
						}
					} else if(currentColour2["h"] > targetColour2["h"]){
						currentColour2["h"] = currentColour2["h"] - 1;
					// Going up
					} else {
						currentColour2["h"] += +1;			
					}

					if(currentAngle > newAngle){
						currentAngle = currentAngle - 1;
					} else if (currentAngle < newAngle) {
						currentAngle = currentAngle + 1;
					}		
				
				// Going down
				} else if(currentColour1["l"] > targetColour1["l"]){
					currentColour1["l"] = currentColour1["l"] - 1;
				// Going up
				} else {
					currentColour1["l"] = currentColour1["l"] + 1;		
				}
				if(currentAngle > newAngle){
					currentAngle = currentAngle - 1;
				} else if (currentAngle < newAngle) {
					currentAngle = currentAngle + 1;
				}
			// Going down
			} else if(currentColour1["s"] > targetColour1["s"]){
				currentColour1["s"] = currentColour1["s"] - 1;
			// Going up
			} else {
				currentColour1["s"] = currentColour1["s"] + 1;			
			}
			if(currentAngle > newAngle){
				currentAngle = currentAngle - 1;
			} else if (currentAngle < newAngle) {
				currentAngle = currentAngle + 1;
			}

		// Going down
		} else if(currentColour1["h"] > targetColour1["h"]){
			currentColour1["h"] = currentColour1["h"] - 1;
		// Going up
		} else if(currentColour1["h"] < targetColour1["h"]) {
			currentColour1["h"] += +1;			
		}

		if(currentAngle > newAngle){
			currentAngle = currentAngle - 1;
		} else if (currentAngle < newAngle) {
			currentAngle = currentAngle + 1;
		}

		updateDisplay(currentAngle, "hsl(" + currentColour1["h"] + ", " + currentColour1["s"] + "%," + currentColour1["l"] + "%)", "hsl(" + currentColour2["h"] + ", " + currentColour2["s"] + "%," + currentColour2["l"] + "%)")
	}

	intervalId = setInterval(loop, delay);
	
	
}

function updateDisplay(angle, colour1, colour2){
	document.getElementById("colours").style.background = "linear-gradient(" + angle + "deg, " + colour1 + ", " + colour2 + ")"
	document.body.setAttribute('style', "background: linear-gradient(" + angle + "deg, " + colour1 + ", " + colour2 + ") !important");
}


function init(delay){
	fade(generateColour(), generateColour(), generateColour(), generateColour(), generateAngle(), generateAngle(), delay)
}