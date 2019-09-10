var spot={
  x:0,
  y:0
};
var color={
  r:0,
  g:0,
  b:0
};
 var spaceship;
 var aliens = 8;
var xPositions = [];
var yPositions = [];
var rectSize = [];
var rectSpeed = [];
var rectColor = [];

function setup() {
    createCanvas(500, 500);
    alert(" Welcome to Space Cadet! The Alien King has sent his minions after you! Use your mouse to dodge his minions! Avoid collision at all costs!");
frameRate(60);
  textSize(30);
  textAlign(CENTER);
    
    
    for(var i=0; i<aliens; i++){
        xPositions[i] = random(0, width);
        yPositions[i] =  0;
        rectSize[i] = random(20,100);
        rectSpeed[i] = random(8, 10);
        rectColor[i] = color(
        random(0,255),
        random(0,255),
        random(0,255)
        );
        
        
    }
    
    var index = floor(random(0, rectColor.length));
    rectColor[index] = color ("white;")
}

  



function draw() {
    
    
   // change background color as mouse moves
    var wPercent;
    wPercent = mouseX / width;
    
    var hPercent;
    hPercent = mouseY / height;
    
    var b;
    
    b = wPercent * 255;
    
    var r;
    
    r = hPercent * 255;
    
    background (r, 127, b); 
    // random spots in the background. Use your imagination, lets's pretend they are stars in the galaxy
    spot.x=random(0,width);
  spot.y=random(0,height);
  color.r=random(0,255);
  color.g=random(0,255);
  color.b=random(0,255);
  fill(color.r,color.g,color.b,200);
 
  ellipse(spot.x,spot.y,10,10);
    fill('black');
    ellipse(mouseX, mouseY, 40, 40);// spaceship
    line(mouseX, mouseY, pmouseX, pmouseY); // trail 
    
    text(frameCount, width / 2, height / 2);
    for (var i =0; i < aliens; i++){
        
        fill (rectColor[i]);
        randomRects(xPositions[i], yPositions[i], rectSize[i]);
        
        yPositions[i] += rectSpeed[i];
         if (yPositions[i] > height + rectSize[i]/2){
             yPositions[i] =  -rectSize [i]/2;
             xPositions[i] = random(0,height);
         }
    }
}
    function randomRects(x, y, rectWidth){
        var rectHeight = rectWidth/2;
        
        rect(x,y, rectWidth,rectHeight);
        
        if(mouseX  > x  && mouseX < x + rectWidth && mouseY > y && mouseY < y + rectHeight){
            background('fff');
            textSize(20);
            text(frameCount + ''+ ' is  your score!' + ' ' + 'GAME OVER', width/2, height/2)
            noLoop();
        }
    }
    
    
    
    
   
