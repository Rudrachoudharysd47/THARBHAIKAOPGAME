 //VARIABLES HERE
 var bgopImg
 var bg
 var standImg , stand ,sitattack , jumpattack , standattack
 var play = false
 var x= 0
 var boss2hand , boss2handImg
 var y = 0
 var life = 0
 var blackheart 
 var bosshaeart
 var ourlife = 0
 //PRELOAD FUNCTION
 function preload() {
 bgopImg = loadAnimation("./bgimages/bg1.png","./bgimages/bg2.png","./bgimages/bg3.png","./bgimages/bg4.png")
 standImg = loadAnimation("./boss1/stand.png","./boss1/stand1.png","./boss1/stand2.png","./boss1/stand4.png")
 standattack = loadAnimation("./boss1/standattack.png","./boss1/standattack1.png","./boss1/standattack2.png","./boss1/standattack3.png",
 "./boss1/standattack4.png","./boss1/standattack5.png","./boss1/standattack6.png","./boss1/standattack7.png","./boss1/standattack8.png",
 "./boss1/standattack9.png","./boss1/standattack10.png","./boss1/standattack11.png","./boss1/standattck12.png")
 sitattack = loadAnimation("./boss1/sitattack.png","./boss1/sitattack1.png","./boss1/sitattack2.png","./boss1/sitattack3.png","./boss1/sitattack5.png",
 "./boss1/sitattack6.png","./boss1/sitattck7.png")
 jumpattack = loadAnimation("./boss1/jumpattack.png","./boss1/jumpattack1.png","./boss1/jumpattack2.png","./boss1/jumpattack3.png",
 "./boss1/jumpattack4.png","./boss1/jumpattack5.png","./boss1/jumpattack6.png","./boss1/jumpattack7.png","./boss1/jumpattack8.png",
 "./boss1/jumpattack9.png","./boss1/jumpattack10.png","./boss1/jumpattack11.png","./boss1/jumpattack12.png","./boss1/jumpattack13.png",
 "./boss1/jumpattack14.png","./boss1/jumpattack15.png","./boss1/jumpattack16.png",)
 cloudImg = loadImage("opdust.png")
 jumpattack.playing = true
 sitattack.playing = true 
 standattack.playing = true
 boss2Img = loadAnimation("./boss2/boss2.png","./boss2leg/boss2leg1.png")
 playerlifeImg = loadImage("boss2life.png")
 playerhalflife = loadImage("boss2half.png")
 boss2handImg = loadAnimation("./boss2/boss2.png","./boss2/boss21.png","./boss2/boss22.png","./boss2/boss23.png","./boss2/boss24.png",
 "./boss2/boss24.png","./boss2/boss25.png")
 boss2legImg = loadAnimation("./boss2leg/boss2leg1.png","./boss2leg/boss2leg2.png","./boss2leg/boss2leg3.png",
 "./boss2leg/boss2leg4.png","./boss2leg/boss2leg5.png","./boss2leg/boss2leg6.png",)
 boss2handImg.playing = true 
 boss2legImg.playing = true
 boss2megaop = loadAnimation("./boss2mega/boss2mega1.png","./boss2mega/boss2mega2.png","./boss2mega/boss2mega3.png",
 "./boss2mega/boss2mega4.png","./boss2mega/boss2mega5.png","./boss2mega/boss2mega6.png","./boss2mega/boss2mega7.png",
 "./boss2mega/boss2mega8.png","./boss2mega/boss2mega9.png","./boss2mega/boss2mega10.png","./boss2mega/boss2mega11.png",
 "./boss2mega/boss2mega12.png","./boss2mega/boss2mega13.png","./boss2mega/boss2mega14.png","./boss2mega/boss2mega15.png",
 "./boss2mega/boss2mega16.png","./boss2mega/boss2mega17.png","./boss2mega/boss2mega18.png",)
  blackheart = loadImage("kala_dil-removebg-preview.png")
   bgsound = loadSound("apnabg.mp3")
}
  //SETUP FUNCTION
  function setup() {
  createCanvas(windowWidth,windowHeight);
  //BACKGROUNDADDER
  bg =  createSprite(width/2,height/2);
  bg.addAnimation("bg",bgopImg)
  bg.scale = 2
  //BOSSADDER
  boss = createSprite(width/6,height/2)
  boss.addAnimation("stand",standImg)
  boss.addAnimation("attack",standattack)
  boss.addAnimation("sitattack",sitattack)
  boss.addAnimation("jumpattack",jumpattack)
  boss.scale = 0.8
  standImg.framedelay = 66
  standattack.framedelay = 66
  jumpattack.framedelay = 66
  sitattack.framedelay = 66
  //GROUNDADDER
  ground = createSprite(width/2, height - 75 , width , 20)
  ground.visible = false 
  boss.setCollider("rectangle",-30,+50,250,250)
  frameRate(60)
  //BOSS2ADDER
  boss2 = createSprite(width/1.5,height/1.4)
  boss2.addAnimation("attackstand",boss2Img)
  boss2.addAnimation("handattack",boss2handImg)
  boss2.addAnimation("legattack",boss2legImg)
  boss2.addAnimation("megaattack",boss2megaop)
  boss2.framedelay = 200
  boss2.scale = 1.8
  boss2.setCollider("rectangle",+20,+0,100,100)
  //PLAYERLIFEADDER
  playerlife = createSprite(width/2.6 +200,height/6.9)
  playerlife.addImage("lifebar",playerlifeImg)
  playerlife.addImage("halflife",playerhalflife)
  playerlife.addImage("blanklife",blackheart)
  playerlife.scale = 0.5
  clouds = []
  cloudGroup = new Group()
  // BOSSHEARTADDER
  bosshaeart = createSprite(width/2 -140,height/7)
  bosshaeart.addImage("bosslife",playerlifeImg)
  bosshaeart.addImage("bosshalflife",playerhalflife)
  bosshaeart.addImage("bossdead",blackheart)
  bosshaeart.scale = 0.5
  //SMALBLOCKADDER
  smallblock = createSprite(boss.x,boss.y)
  smallblock.scale = 0.7
  smallblock.visible = false
  smallblock.debug = false
  } 
  //DRAW FUNCTION
  function draw() {
  background(0); 
  if (bgsound.isPlaying()!=true) {
    bgsound.play()
  }
  bgsound.setVolume(0.08)
  boss.velocityY = boss.velocityY + 0.5
  boss.collide(ground)
  boss2.velocityY = boss2.velocityY + 0.5
  boss2.collide(ground)
  drawSprites();
  fill("red")
  text("Enemyhealth",745,150)
  text("yourhealth",580,150)
  
  //ENTERBUTTON
  if (keyDown("enter")&&x<10) {
  boss.changeAnimation("attack")
  x=1
  boss2.changeAnimation("handattack")&&y<10
  y = 1
  }
  if(x>=10){
  boss.changeAnimation("stand")
  x=0
  }
  if(x>=1){
  x++
  }
  if (y>=10) {
  boss2.changeAnimation("attackstand")
  }
  if (y>=1) {
  y++
  }
  //SPACEBUTTON
  if (keyDown("space")&&x<10) {
  boss.changeAnimation("sitattack")
  console.log("hellow")
  boss2.changeAnimation("legattack")&&y<10
  x=1
  y=1
 
  
  }
  //SHIFTBUTTON
  if (keyDown("shift")&&x<10) {
  boss.changeAnimation("jumpattack")
  boss2.changeAnimation("megaattack")&&y<10
  x=1
  y=1
  if (frameCount% 100 == 0) {
    craetecloud()
  }
  }
  
  this.handleplayercomputerlife()

  if (keyDown(RIGHT_ARROW)) {
  boss.velocityX = 2
  }
  if (keyDown(LEFT_ARROW)) {
  boss.velocityX = -2
  }
   if (boss.isTouching(boss2)) {
     boss.velocityX = -2
    
   }
   //COUNTDOWNNUMBERS
  
  
  smallblock.x = boss.x + 50
  smallblock.y = boss.y
  }
  //HANDLEPLAYERCOMPUTERLIFE FUNCTION
  function handleplayercomputerlife() {
  if (cloudGroup.isTouching(boss2)) {
    if (life == 0 ) {
      cloudGroup.destroyEach()
      playerlife.changeAnimation("halflife")
      playerlife.scale = 0.2
      life = 1
    }
 else if (life == 1) {
   playerlife.changeAnimation("blanklife")
   gamewon()
 }
 
  }
   if (keyDown("space")&&boss.isTouching(boss2)) {
    if (life == 0) {
     playerlife.changeAnimation("halflife")
     playerlife.scale = 0.2
    }
    else if (life == 1) {
      playerlife.changeAnimation("blanklife")
      gamewon()
    }
   }
   
   
   if (keyDown("enter")&&boss2.isTouching(smallblock)){
    console.log("collision")
   boss.x = 600
    if (ourlife == 0) {
      bosshaeart.changeImage("bosshalflife")
      ourlife = 1
      bosshaeart.scale = 0.2
    }
    else if (ourlife == 1) {
      bosshaeart.changeImage("bossdead")
      this.gameOver()
    }
  }
  if (keyDown("space")&&boss2.isTouching(smallblock)){
    console.log("collision")
   boss.x = 600
    if (ourlife == 0) {
      bosshaeart.changeImage("bosshalflife")
      ourlife = 1
      bosshaeart.scale = 0.2
    }
    else if (ourlife == 1) {
      bosshaeart.changeImage("bossdead")
      this.gameOver()
    }
  }
  if (keyDown("shift")&&boss2.isTouching(smallblock)){
    console.log("collision")
   boss.x = 600
    if (ourlife == 0) {
      bosshaeart.changeImage("bosshalflife")
      ourlife = 1
      bosshaeart.scale = 0.2
    }
    else if (ourlife == 1) {
      bosshaeart.changeImage("bossdead")
      this.gameOver()
    }
  }
   }
   // CRAETECLOUDS FUNCTION 
  function craetecloud() {
  cloud  = createSprite(302,446,20,20)
  cloud.addImage("cloud",cloudImg)
  cloud.scale = 0.3
  cloudGroup.add(cloud)
  cloud.velocityX = 3
  clouds.push(cloud)
  this.velocityX = boss.velocityX
  this.velocityY = boss.velocityY
  }
 function gamewon() {
  swal({
    title: `Game Won`,
    text: "OHH WOW YOU WON!!",
    
    imageSize: "100x100",
    confirmButtonText: "Thanks For Playing"
  },
  function(isConfirm) {
    if (isConfirm) {
      location.reload();
    }
  }
  );
 }
 function gameOver() {
  swal({
    title: `Game Over`,
    text: "OH NO YOU LOSE -_-",
    
    imageSize: "100x100",
    confirmButtonText: "RETRY"
  },
  function(isConfirm) {
    if (isConfirm) {
      location.reload();
    }
  }
  );
 }