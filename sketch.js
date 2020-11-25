var Engine = Matter.Engine
  var World = Matter.World
  var Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var division =[];
var score =0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 100) {
     division.push(new Division(k, 650, 10, 300));
   }
   


    for (var j = 50; j <=width; j=j+70) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 60; j <=width-10; j=j+70) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 50; j <=width; j=j+70) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 60; j <=width-10; j=j+70) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
 //text("Score : "+score,20,30);
  Engine.update(engine);
  ground.display();
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%40===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   for (var k = 0; k < division.length; k++) {
     
     division[k].display();
   }
}