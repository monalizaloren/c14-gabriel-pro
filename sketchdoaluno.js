var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;


//Crie as variáveis 'cloud', 'cloudsGroup', e 'cloudImage'
???
///Crie as variáveis 'obstaclesGroup', 'obstacle1' e obstacle2,3,4,5,6
???

//Crie uma variável chamada 'score' para guardar a pontuação


function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadAnimation("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  
  cloudImage = loadImage("cloud.png");
  
  obstacle1 = loadImage("obstacle1.png");
  obstacle2 = loadImage("obstacle2.png");
  //Complete o código para os obstáculos 3,4,5 e 6
  
}

function setup() {
  //Crie um canva com 600 de largura e 200 de altura
  createCanvas(?, ?);
  
  trex = createSprite(50,180,20,50);
  //Utilize o código 'addAnimation' para adicionar a animação de correr e colidir
  trex.???("running", trex_running);
  trex.???("collided" , trex_collided)
  //Defina o tamanho do dinossauro para 0.5
  ???
  
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  
  
  score = 0;
}

function draw() {
  background(180);
  //Coloque "Pontuação:" + score
  //Na linha abaixo para mostrar o texto'pontuação' e a vaiável score
  text(????, 500,50);
  score = score + Math.round(frameCount/60);
  
  //Adicione 'keyDown', pois ele significa pressiona
  if(???("space")&& trex.y >= 100) {
    trex.velocityY = -13;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  trex.collide(invisibleGround);
  
  //gere as nuvens
  spawnClouds();
  
  //gere obstáculos no solo
  spawnObstacles();
  
  drawSprites();
}

   



function spawnClouds() {
  //escreva o código aqui para gerar as nuvens
  if (frameCount % 60 === 0) {
    cloud = createSprite(600,100,40,10);
    cloud.y = Math.round(random(10,60));
    cloud.addImage(cloudImage);
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
     //atribuir vida útil à variável
    cloud.lifetime = 200;
    
    //ajustar a profundidade
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
  }
  
}
