let posX, posY
let colors = ['#50ABA1','#5097AB','#50AB83','#3B70AD'];
function setup() {
  createCanvas(600, 600);
  
  numWords = 10
  posX = 0
  posY = 0 
}
function draw(){
  background(colors[0]);
  strokeWeight(1);
  fill(colors[1]);
  
  mySignature();
  
  
  
  let x = 0; 
  while(x < width){
    circle(x,posY+200,200);
    x=x+10;
    
    if (mouseY>300){
      fill(colors[3]);
    } 
  }  
  
  rect(posX,posY+450,600,50);
}

function mySignature(){
  
  textSize(20);
  strokeWeight(4);
  stroke(colors[0]);
  fill('white');
  text('Pat Blaine',width-125,height-30);
}


