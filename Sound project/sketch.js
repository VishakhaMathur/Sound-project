              
const numOfParticles = 4000;          // number of particles present at a time on the screen
let range;                         // this is the noisescale
let colors = [];                  // this is the array to store color of each and every particle
let arrayOfParticles = [];        // stores every particle



// variable for sound
var music1;
var music2;
var music3;
var music4;
var music5;
var music6;
var music9;
var music7;
var music8;
var music10;
var music11;
var music12;
var music13;



// preload all the soundtracks
function preload(){
  music1 = loadSound("assets/crime_background.mp3");
  music2 = loadSound("assets/piano.mp3");
  music3 = loadSound("assets/main.mp3");
  music4 = loadSound("assets/embrace.mp3");
  music5 = loadSound("assets/bright_positive.mp3");
  music6 = loadSound("assets/day_tripper.wav");
  music9 = loadSound("assets/migfus.mp3");
  music7 = loadSound("assets/sitar.wav");
  music8 = loadSound("assets/tabla.wav");
  music10 = loadSound("assets/drum_kick.wav");
  music11 = loadSound("assets/plastic_bag_drum.wav");
  music12 = loadSound("assets/shoot.wav");
  music13 = loadSound("assets/paintball.wav");
  music14 = loadSound("assets/stars.wav");
  
}

function setup() {
  // create the canvas using the full browser window
  createCanvas(windowWidth, windowHeight);
  music1.loop();
  // draw a border to help you see the size
  
  // Note the use of width and height here, you will probably use this a lot 
  // in your sketch.
 rect(0, 0, width, height);
// run a for loop to make the bubbles move and display
 
 for (let j = 0; j < numOfParticles; j++) {
  arrayOfParticles.push(createVector(random(width), random(height)));
  colors.push(color(random(255), random(255), random(255)));
}
stroke(255);
 clear();
}

function draw() {
  // your cool abstract sonic artwork code goes in this draw function

background(0, 10);
for (let j = 0; j < numOfParticles; j++) {
    let particle = arrayOfParticles[j];

    stroke(colors[j]);
    point(particle.x, particle.y);
    range = 0.01/2;    // original range

    // // changing range on pressing the following the keys
    if(keyCode === ENTER) {        
      range = 0.05;
    }

    else if(keyCode === SHIFT) {
      range = 0.02;
    }
    else if(keyCode === BACKSPACE) {
      range = 0.01/2;
    }

    // setting the noiseValue using coordinates of particles, range, and framecount
    let noiseValue = noise(particle.x * range, particle.y * range, frameCount * range * range);
    let mapping = TAU * noiseValue;
    particle.x += cos(mapping);            
    particle.y += sin(mapping);
    
    // changing the flow of the particles by pressing the following keys

    if (keyCode === LEFT_ARROW) {
      
      particle.x += 2*cos(mapping);
      particle.y += 2*sin(mapping);

    }
    if (keyCode === UP_ARROW) {
    
      particle.x += 3.5*cos(mapping);
      particle.y += 3.5*sin(mapping);
    }

    if (keyCode === RIGHT_ARROW) {
     
      particle.x += 5*cos(mapping);
      particle.y += 5*sin(mapping);

    }

    if (keyCode === DOWN_ARROW) {
    
      particle.x += cos(mapping);
      particle.y += sin(mapping);

    }

    if(!display(particle)) {
      particle.x = random(width);
      particle.y = random(height);
    }
  }



}







// This changes the direction of the flow of the particles on clicking anywhere on the canvas
function mouseReleased() {
  noiseSeed(millis());
 // a different sound appears when you click in different area
  if (mouseX < 675 && mouseY < 350) {
    music2.play();
    music2.setVolume(5);
  }

  if (mouseX > 675 && mouseY > 350) {
    music8.play();
    music8.setVolume(50);
  }

  if (mouseX > 675 && mouseY < 350) {
   music10.play();
   music10.setVolume(50);

}
if (mouseX < 675 && mouseY > 350) {
    music11.play();
    music11.setVolume(15);

  }

  
}


// changes when pressing keys
function keyPressed() {
 // when ENTER is pressed
  if(keyCode === ENTER) {
    music1.stop(); 
    music4.stop(); 
    music5.stop(); 
    music6.stop();
    music9.loop();      
  }

  // when SHIFT is pressed
  if (keyCode === SHIFT) {
    music1.stop();   
    music3.stop();
    music5.stop();
    music6.stop();
    music9.stop();
    music4.loop();
    
  }

  // when BACKSPACE is pressed
  if(keyCode === BACKSPACE) {
    music3.stop();
    music4.stop();
    music5.stop();
    music6.stop();
    music9.stop();
    music1.loop();
    
  }
  
  // changing the flow of the particles by pressing the following keys
  if (keyCode === LEFT_ARROW) {
    music1.stop();
    music2.stop();
    music3.stop();
    music4.stop();
    music5.stop();
    music9.stop();
    music6.loop();
    }


// when we press up arrow key
  if (keyCode === UP_ARROW) {
    music1.stop();
    music2.stop();
    music3.stop();
    music4.stop();
    music6.stop();
    music5.stop();
    music9.loop();
}

// when we press right arrow key
  if (keyCode === RIGHT_ARROW) {
    music1.stop();
    music2.stop();
    music3.stop();
    music4.stop();
    music9.stop();
    music6.stop();
    music5.loop();
    music5.setVolume(0.4);
   }

// when we press down arrow key
  if (keyCode === DOWN_ARROW) {
    music2.stop();
    music3.stop();
    music4.stop();
    music5.stop();
    music6.stop();
    music9.stop();
    music1.loop();
}



// changing colors on pressing keys 1-9, getting the default one at 0.
if (key === '1') {
  for (let i = 0; i < numOfParticles; i++) {
    colors[i] = color(random(255, 0, 0), random(0, 255, 0), random(0, 0, 255));
  }
 
}

if (key === '2') {
  for (let i = 0; i < numOfParticles; i++) {
    colors[i] = color(random(100, 0, 120), random(0, 200, 147), random(175, 20, 0));
  }
 
}

if (key === '3') {
  for (let i = 0; i < numOfParticles; i++) {
    colors[i] = color(random(255, 120, 145), random(140, 255, 74), random(42, 87, 255));
  }
 
}

if (key === '4') {
  for (let i = 0; i < numOfParticles; i++) {
    colors[i] = color(random(255, 80, 75), random(200, 255, 0), random(210, 83, 255));
  }
  
}

if (key === '5') {
  for (let i = 0; i < numOfParticles; i++) {
    colors[i] = color(random(10, 175, 36), random(255, 255, 0), random(70, 145, 255));
  }
 
}

if (key === '6') {
  for (let i = 0; i < numOfParticles; i++) {
    colors[i] = color(random(85, 94, 74), random(15, 255, 25), random(38, 42, 255));
  }
 
}

if (key === '7') {
  for (let i = 0; i < numOfParticles; i++) {
    colors[i] = color(random(17, 123, 185), random(0, 255, 135), random(162, 0, 255));
  }
 
}

if (key === '8') {
  for (let i = 0; i < numOfParticles; i++) {
    colors[i] = color(random(200, 89, 74), random(79, 190, 56), random(111, 222, 0));
  }

}

if (key === '9') {
  for (let i = 0; i < numOfParticles; i++) {
    colors[i] = color(random(200, 5, 10), random(272, 63, 74), random(233, 88, 44));
  }
 
}

if (key === '0') {
  for (let i = 0; i < numOfParticles; i++) {
    colors[i] = color(random(255), random(255), random(255));
  }
  
}
}



// This shows the entire artwork on screen
function display(current) {
  return current.x >= 0 && current.x <= width && current.y >= 0 && current.y <= height;
}


// color of the particles within the 45px radius is changes when mouse is dragged
function mouseDragged() {
  music14.play();
  for (let j = 0; j < numOfParticles; j++) {
    let particle = arrayOfParticles[j];
    let distance = dist(particle.x, particle.y, mouseX, mouseY);
    if (distance < 45) { 
      colors[j] = color(random(255), random(200), random(100)); 
    }
  }
}

// when you hit the spacebar, what's currently on the canvas will be saved (as a
// "thumbnail.png" file) to your downloads folder
function keyTyped() {
  if (key === " ") {
    saveCanvas("thumbnail.png");
  }
}
