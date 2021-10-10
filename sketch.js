var player,ground,titleImg;
var imageTitle;
var playButton;
var playerImg;
var breadImg,carrotImg,appleImg,milkImg,meatImg,donutImg;
var playImg;

var music,deathSound;

var win=0;

var restart,restartImg;

var START=0;
var PLAY=1;
var INFORMATION=2;
var END=3;
var GOAL1=4;
var GOAL2=5;
var QUIZ=6;
var NOTIFQUIZ=7


var infoBack,backImg;
var whereBack=0;

var gameState=START;

var menu;
var breadEaten=0;
var vegsEaten=0;
var milkDrank=0;
var meatEaten=0;
var donutEaten=0;

var breadG,vegsG,milkG,meatG,donutG;

var bg,gImg;

var infoButton,infoImg;

var foodPyramid,pyrImg;

var winSound,eatSound;
var touchScreen;

var mouseP;

var playSize=0.12,infoSize=0.12;

var notif1,notif1Img,notif1show=0,notif1effect=-80;
var notif2,notif2Img,notif2show=0,notif2effect=-80;

var stage2=0;

var infoTitle,infoTitleImg;
var gameOver,gameOverImg;

var winTitle, winImg;

var opt1,opt1Img,opt2,opt2Img,opt3,opt3Img,opt4,opt4Img;

var quizNotif,quizNotifImg,quizNotifY=0.6,quizNotifShow=0;

var quizTitle,quizTitleImg;

var ques=1,ans=2;

var quizCorrect,quizIncorrect,quizCorrectImg,quizIncorrectImg;
var quizCorrectY=-300,quizCorrectShow=0,quizIncorrectY=-300,quizIncorrectShow=0;

var score=0;

//var visibility=255;

function preload(){
    titleImg=loadImage("hungerlogo.png");
    playerImg=loadImage("player.png");
    breadImg=loadImage("bread.png");
    carrotImg=loadImage("carrot.png");
    appleImg=loadImage("apple1.png");
    milkImg=loadImage("milk.png");
    meatImg=loadImage("meat.png");
    donutImg=loadImage("donut.png");
    playImg=loadImage("start.png");
    bg=loadImage("bgHunger.png");
    gImg=loadImage("ground.png");
    restartImg=loadImage("restart.png");
    infoImg=loadImage("infobuttonthing.png");
    pyrImg=loadImage("foodpyramid.jpg");
    deathSound=loadSound("death.wav");
    music=loadSound("music.mp3");
    backImg=loadImage("back.png");
    winSound=loadSound("win.mp3");
    eatSound=loadSound("eat.wav");
    notif1Img=loadImage("notif1.png");
    notif2Img=loadImage("notif2.png");
    infoTitleImg=loadImage("infoTitle.png");
    gameOverImg=loadImage("gameOverTitle.png");
    winImg=loadImage("youWin.png");
    //optquiz
    opt1Img=loadImage("opt1.png");
    opt2Img=loadImage("opt2.png");
    opt3Img=loadImage("opt3.png");
    opt4Img=loadImage("opt4.png");

//         //////||||\\\\\\
//        //////||||||\\\\\\
//       //////||||||||\\\\\\
//       ||||||||||||||||||||
//       ||||||||/ \|||||||||
//       ||||||||| ||||||||||

    quizNotifImg=loadImage("quizNotif.png");
    quizTitleImg=loadImage("quizTitle.png");

    quizCorrectImg=loadImage("quizCorNotif.png");
    quizIncorrectImg=loadImage("quizIncNotif.png");
}

function setup(){
    engine=Matter.Engine.create();
    world=engine.world;

    createCanvas(displayWidth,displayHeight-150)
    player=createSprite(200,displayHeight-300,40,50);
    player.addImage(playerImg);
    player.scale=0.24;
    //player.debug=true;

    touchScreen=createSprite(displayWidth/2,displayHeight/2,displayWidth,displayHeight);
    touchScreen.visible=false;

    ground=createSprite(displayWidth,displayHeight-120,displayWidth*5,240);
    ground.velocityX=-10;
    ground.addImage(gImg);
    ground.scale=1.2;
    //ground.shapeColor="rgb(131,203,83)";
    //ground.debug=true;
    ground.setCollider("rectangle",0,0,displayWidth*5,230);

    playButton=createSprite((displayWidth/2)-5,(displayHeight/2)+16);
    //playButton.debug=true;
    playButton.scale=0.12;
    playButton.addImage(playImg);

    restart=createSprite(displayWidth/2-5,displayHeight/2+40);
    restart.addImage(restartImg);
    restart.scale=0.37;
    restart.visible=false;

    infoButton=createSprite((displayWidth/2)-5,displayHeight/2+100);
    infoButton.addImage(infoImg);
    infoButton.scale=0.12;

    menu=new Menu();

    breadG=new Group();
    poisonG=new Group();
    vegsG=new Group();
    milkG=new Group();
    meatG=new Group();
    donutG=new Group();

    foodPyramid=createSprite((displayWidth/2)-300,displayHeight/2-80);
    foodPyramid.addImage(pyrImg);
    foodPyramid.scale=0.3;
    foodPyramid.visible=false;

    infoBack=createSprite(85,70);
    infoBack.addImage(backImg);
    infoBack.scale=0.45;
    infoBack.visible=false;

    mouseP=createSprite(mouseX,mouseY,0.1,0.1);

    notif1=createSprite(displayWidth/2,-200);
    notif1.addImage(notif1Img);
    notif1.scale=0.55;

    notif2=createSprite(displayWidth/2,-215);
    notif2.addImage(notif2Img);
    notif2.scale=0.55;

    infoTitle=createSprite(displayWidth/2,120);
    infoTitle.addImage(infoTitleImg);
    infoTitle.scale=0.45;
    infoTitle.visible=false;

    gameOver=createSprite(displayWidth/2+10,displayHeight/2-110);
    gameOver.addImage(gameOverImg);
    gameOver.scale=0.45;
    gameOver.visible=false;

    winTitle=createSprite(displayWidth/2+10,displayHeight/2-150);
    winTitle.addImage(winImg);
    winTitle.scale=0.45;
    winTitle.visible=false;

    opt1=createSprite(displayWidth/12,displayHeight/2-90);
    opt1.addImage(opt1Img);
    opt1.scale=0.3;

    opt2=createSprite(displayWidth/12+150,displayHeight/2-90);
    opt2.addImage(opt2Img);
    opt2.scale=0.3;

    opt3=createSprite(displayWidth/12+300,displayHeight/2-90);
    opt3.addImage(opt3Img);
    opt3.scale=0.3;
    
    opt4=createSprite(displayWidth/12+450,displayHeight/2-90);
    opt4.addImage(opt4Img);
    opt4.scale=0.3;

    opt1.visible=false;
    opt2.visible=false;
    opt3.visible=false;
    opt4.visible=false;

    //opt1.debug=true;
    //opt2.debug=true;
    //opt3.debug=true;
    //opt4.debug=true;

    opt1.setCollider("rectangle",30,-60,300,280);
    opt2.setCollider("rectangle",30,-60,300,280);
    opt3.setCollider("rectangle",30,-60,300,280);
    opt4.setCollider("rectangle",30,-60,300,280);

    quizNotif=createSprite(displayWidth/2,-200);
    quizNotif.addImage(quizNotifImg);
    quizNotif.scale=0.6;
    //quizNotif.visible=false;

    quizTitle=createSprite(displayWidth/2-540,displayHeight/2-260);
    quizTitle.addImage(quizTitleImg);
    quizTitle.scale=0.4;
    quizTitle.visible=false;

    quizCorrect=createSprite(displayWidth/2,-300);
    quizCorrect.addImage(quizCorrectImg);
    quizCorrect.scale=0.6;
    //quizCorrect.debug=true;
    quizCorrect.setCollider("rectangle",-15,82,360,135);
    quizCorrect.visible=false;

    quizIncorrect=createSprite(displayWidth/2,-300);
    quizIncorrect.addImage(quizIncorrectImg);
    quizIncorrect.scale=0.6;
    //quizIncorrect.debug=true;
    quizIncorrect.setCollider("rectangle",-15,82,360,135);
    quizIncorrect.visible=false;
    
}

function draw(){

    Matter.Engine.update(engine);

    background(bg);

    mouseP.x=mouseX;
    mouseP.y=mouseY;

    if(gameState===START){
        menu.display();

        fill("black");
        textSize(20);
        //text("© Copyright 2021 Raditya",displayWidth/2-120,displayHeight/2+220);
        text("Thanks to Google, freesound, silvermansound, and pixilart for images, sounds, etc.",displayWidth/2-350,displayHeight/2+205);
        text("RECOMMENDED ON PC DEVICES",displayWidth/2-165,displayHeight/2+240);
        text("Game by: Raditya M.",displayWidth/2-90,displayHeight/2+275);

        player.visible=false;
        ground.visible=false;

        playButton.visible=true;
        infoButton.visible=true;

        imageTitle.visible=true;

        infoButton.y=displayHeight/2+100;

        if(mouseP.isTouching(playButton)){
            playSize=playSize+((0.15-playSize)/4.5);
            playButton.scale=playSize;
        }else{
            playSize=playSize+((0.12-playSize)/4.5);
            playButton.scale=playSize;
        }

        if(mouseP.isTouching(infoButton)){
            infoSize=infoSize+((0.15-infoSize)/4.5);
            infoButton.scale=infoSize;
        }else{
            infoSize=infoSize+((0.12-infoSize)/4.5);
            infoButton.scale=infoSize;
        }

        if(mousePressedOver(playButton)||(touches.length>0&&mouseP.isTouching(playButton))){
            music.play();
            gameState=GOAL1;
            player.y=displayHeight-300;
        }

        if(mousePressedOver(infoButton)||(touches.length>0&&mouseP.isTouching(infoButton))){
            whereBack=0;
            gameState=INFORMATION;
        }
        
    }

    if(gameState===GOAL1){

        stage2=0;

        ground.visible=false;

        player.y=displayHeight-300;

        notif1.visible=true;

        imageTitle.visible=false;
        playButton.visible=false;
        infoButton.visible=false;
        notif1show=0;
        
        if(((notif1.y===displayHeight-450)===false)&&notif1show===0){
            notif1effect=notif1effect+(((displayHeight-450)-notif1effect)/4.5);
            notif1.y=notif1effect;
        }

        if(Math.round(notif1.y)===displayHeight-450&&(touches.length>0||mousePressedOver(touchScreen))){
            touches = [];
            notif1show=1;
            gameState=PLAY;
        }

    }
    
    if(gameState===PLAY){

        if(stage2===0){

            if(notif1show===1){
                notif1effect=notif1effect+(((-200)-notif1effect)/4.5);
                notif1.y=notif1effect;
            }
    
            //gravity code
    
            //if(notif1.y===105){
            //    notif1show=1;
            //    notif1effect=notif1effect+((-80-notif1effect)/5);
            //    notif1.y=notif1effect;
            //}
    
    
            if(breadEaten===4&&vegsEaten===3){
                gameState=GOAL2;
            }

        }else if(stage2===1){

            if(notif2show===1){
                notif2effect=notif2effect+(((-215)-notif2effect)/4.5);
                notif2.y=notif2effect;
            }

            spawnMilk();
            spawnMeat();
            spawnDonut();

            if(milkG.isTouching(player)){
                milkDrank++;
                milkG[0].destroy();
                eatSound.play();
            }

            if(meatG.isTouching(player)){
                meatEaten++;
                meatG[0].destroy();
                eatSound.play();
            }

            if(donutG.isTouching(player)){
                donutEaten++;
                donutG[0].destroy();
                eatSound.play();
            }

            textSize(25);
            strokeWeight(1);

            if(milkDrank<3){            
                stroke("black");
                fill("black");
                text("Milk Drank: "+milkDrank,80,180);

            }else{
                stroke("red");
                fill("red");
                text("Milk Drank: "+milkDrank,80,180);
            
            }

            if(meatEaten<2){
                stroke("black");
                fill("black");
                text("Meat Eaten: "+meatEaten,80,220);

            }else{
                stroke("red");
                fill("red");
                text("Meat Eaten: "+meatEaten,80,220);
            
            }

            if(donutEaten<1){            
                stroke("black");
                fill("black");
                text("Donut Eaten: "+donutEaten,80,260);

            }else{
                stroke("red");
                fill("red");
                text("Donut Eaten: "+donutEaten,80,260);
            
            }
        }

        textSize(25);
        strokeWeight(1);

        if((keyDown("SPACE")||touches.length>0||mousePressedOver(touchScreen))&&player.y>displayHeight-300){
            player.velocityY=-30;
            touches = [];
        }

        imageTitle.visible=false;
        playButton.visible=false;
        infoButton.visible=false;

        player.visible=true;
        ground.visible=true;

        player.velocityY=player.velocityY+2;

        player.collide(ground);

        if(ground.x<0){
            ground.x=displayWidth/2;
        }

        if((breadEaten===4||breadEaten===5)&&(vegsEaten===3||vegsEaten===4)&&(milkDrank===3||milkDrank===4)&&(meatEaten===2||meatEaten===3)&&(donutEaten===1||donutEaten===2)){
            //win=1;
            //music.stop();
            //winSound.play();
            //gameState=END;
            gameState=NOTIFQUIZ;
            //gameState=NOTIFQUIZ;
            //gameState=NOTIFQUIZ;
        }
        
        if(breadEaten>4||vegsEaten>3||milkDrank>3||meatEaten>2||donutEaten>1){
            win=0;
            music.stop();
            deathSound.play();
            gameState=END;
        }

        spawnBread();
        spawnVegs();

        if(breadG.isTouching(player)){
            breadEaten++;
            breadG[0].destroy();
            eatSound.play();
        }

        if(vegsG.isTouching(player)){
            vegsEaten++;
            vegsG[0].destroy();
            eatSound.play();
        }

        if(breadEaten<4){  
            stroke("black");
            fill("black");
            text("Bread Eaten: "+breadEaten,80,100);

        }else{
            stroke("red");
            fill("red");
            text("Bread Eaten: "+breadEaten,80,100);
  
        }

        if(vegsEaten<3){            
            stroke("black");
            fill("black");
            text("Carrots/Apples Eaten: "+vegsEaten,80,140);

        }else{
            stroke("red");
            fill("red");
            text("Carrots/Apples Eaten: "+vegsEaten,80,140);
  
        }
    }

    if(gameState===GOAL2){

        player.y=displayHeight-300;

        notif2.visible=true;

        breadG.destroyEach();
        vegsG.destroyEach();

        imageTitle.visible=false;
        playButton.visible=false;
        infoButton.visible=false;
        ground.visible=false;
        player.visible=false;

        notif2show=0;
        
        if(((notif2.y===displayHeight-450)===false)&&notif2show===0){
            notif2effect=notif2effect+(((displayHeight-450)-notif2effect)/4.5);
            notif2.y=notif2effect;
        }

        if(Math.round(notif2.y)===displayHeight-450&&(touches.length>0||mousePressedOver(touchScreen))){
            notif2show=1;
            stage2=1;
            gameState=PLAY;
        }
        

    }

    if(gameState===NOTIFQUIZ){
        //displayHeight/2-30

        quizNotif.visible=true;

        breadEaten=0;
        vegsEaten=0;
        milkDrank=0;
        meatEaten=0;
        donutEaten=0;

        breadG.destroyEach();
        vegsG.destroyEach();
        milkG.destroyEach();
        meatG.destroyEach();
        donutG.destroyEach();

        player.visible=false;
        ground.visible=false;

        if(((quizNotif.y===displayHeight/2-30===false)&&quizNotifShow===0)){
            quizNotifY=quizNotifY+(((displayHeight/2-30)-quizNotifY)/4.5);
            quizNotif.y=quizNotifY;
        }

        if(Math.round(quizNotif.y)===displayHeight/2-30&&(touches.length>0||mousePressedOver(touchScreen))){
            quizNotifShow=1;
            gameState=QUIZ;
        }

        
    }

    if(gameState===QUIZ){
        opt1.visible=true;
        opt2.visible=true;
        opt3.visible=true;
        opt4.visible=true;

        if(quizNotifShow===1){
            quizNotifY=quizNotifY+(((-200)-quizNotifY)/4.5);
            quizNotif.y=quizNotifY;
        }

        quizTitle.visible=true;

        if(ques===1){

            if((ans===0||ans===1)===false){
                textSize(30);
                stroke('black');
                strokeWeight(1);
                fill('black');
                text("Question 1: How many servings of milk should you drink a day?",displayWidth/2-710,displayHeight/2-200);
            }


            if(((mousePressedOver(opt1)||touches.length>0)&&mouseP.isTouching(opt1))||(mousePressedOver(opt2)||touches.length>0)&&mouseP.isTouching(opt2)||(mousePressedOver(opt4)||touches.length>0)&&mouseP.isTouching(opt4)){
                ans=0;
                touches = [];
            }

            if((mousePressedOver(opt3)||touches.length>0)&&mouseP.isTouching(opt3)){
                ans=1;
                touches = [];
            }

            if(ans===0){
                //textSize(30);
                //stroke('red');
                //strokeWeight(1);
                //fill('red');
                //text("Incorrect",displayWidth/2-710,opt1.y+75);


                //displayHeight/2-60

                opt1.visible=false;
                opt2.visible=false;
                opt3.visible=false;
                opt4.visible=false;

                opt1.y=-100;
                opt2.y=-100;
                opt3.y=-100;
                opt4.y=-100;

                quizTitle.visible=false;
        
                //textSize(30);
                //stroke('green');
                //strokeWeight(1);
                //fill('green');
                //text("Correct!",displayWidth/2-710,opt1.y+75);
                //push();
                //quizCorrect.y=displayHeight/2-60;
                quizIncorrect.visible=true;
                //visibility=visibility-3;
                //tint(255,visibility);
                //pop();
                if((((quizIncorrect.y===displayHeight/2-60)===false)&&quizIncorrectShow===0)){
                    quizIncorrectY=quizIncorrectY+(((displayHeight/2-60)-quizIncorrectY)/4.5);
                    quizIncorrect.y=quizIncorrectY;
                }
        
                if(Math.round(quizIncorrect.y)===displayHeight/2-60&&(touches.length>0||mousePressedOver(touchScreen))){
                    quizIncorrectShow=1;
                    //gameState=QUIZ;
                }

                if(mouseP.isTouching(quizIncorrect)&&mousePressedOver(quizIncorrect)){
                    ans=2;
                    opt1.visible=true;
                    opt2.visible=true;
                    opt3.visible=true;
                    opt4.visible=true;
                    quizTitle.visible=true;
                    quizIncorrectShow=0;
                    quizIncorrect.visible=false;
                    quizIncorrect.y=-300;
                    quizIncorrectY=-300;
                    opt1.y=displayHeight/2-90;
                    opt2.y=displayHeight/2-90;
                    opt3.y=displayHeight/2-90;
                    opt4.y=displayHeight/2-90;
                    ques=2;
                    //score=score+1;

                }
                
            }

            if(ans===1){

                opt1.visible=false;
                opt2.visible=false;
                opt3.visible=false;
                opt4.visible=false;

                opt1.y=-100;
                opt2.y=-100;
                opt3.y=-100;
                opt4.y=-100;

                quizTitle.visible=false;
        
                //textSize(30);
                //stroke('green');
                //strokeWeight(1);
                //fill('green');
                //text("Correct!",displayWidth/2-710,opt1.y+75);
                //push();
                //quizCorrect.y=displayHeight/2-60;
                quizCorrect.visible=true;
                //visibility=visibility-3;
                //tint(255,visibility);
                //pop();
                if((((quizCorrect.y===displayHeight/2-60)===false)&&quizCorrectShow===0)){
                    quizCorrectY=quizCorrectY+(((displayHeight/2-60)-quizCorrectY)/4.5);
                    quizCorrect.y=quizCorrectY;
                }
        
                if(Math.round(quizCorrect.y)===displayHeight/2-60&&(touches.length>0||mousePressedOver(touchScreen))){
                    quizCorrectShow=1;
                    //gameState=QUIZ;
                }

                if(mouseP.isTouching(quizCorrect)&&mousePressedOver(quizCorrect)){
                    ans=2;
                    opt1.visible=true;
                    opt2.visible=true;
                    opt3.visible=true;
                    opt4.visible=true;
                    quizTitle.visible=true;
                    quizCorrectShow=0;
                    quizCorrect.visible=false;
                    quizCorrect.y=-300;
                    quizCorrectY=-300;
                    opt1.y=displayHeight/2-90;
                    opt2.y=displayHeight/2-90;
                    opt3.y=displayHeight/2-90;
                    opt4.y=displayHeight/2-90;
                    ques=2;
                    score=score+1;

                }
            }

        }

        //QUES 2

        if(ques===2){

            if((ans===0||ans===1)===false){
                textSize(30);
                stroke('black');
                strokeWeight(1);
                fill('black');
                text("Question 2: How many bread servings should you consume daily?",displayWidth/2-710,displayHeight/2-200);
            }


            if(((mousePressedOver(opt1)||touches.length>0)&&mouseP.isTouching(opt1))||(mousePressedOver(opt2)||touches.length>0)&&mouseP.isTouching(opt2)||(mousePressedOver(opt3)||touches.length>0)&&mouseP.isTouching(opt3)){
                ans=0;
                touches = [];
            }

            if((mousePressedOver(opt4)||touches.length>0)&&mouseP.isTouching(opt4)){
                ans=1;
                touches = [];
            }

            if(ans===0){
                //textSize(30);
                //stroke('red');
                //strokeWeight(1);
                //fill('red');
                //text("Incorrect",displayWidth/2-710,opt1.y+75);


                //displayHeight/2-60

                opt1.visible=false;
                opt2.visible=false;
                opt3.visible=false;
                opt4.visible=false;

                opt1.y=-100;
                opt2.y=-100;
                opt3.y=-100;
                opt4.y=-100;

                quizTitle.visible=false;
        
                //textSize(30);
                //stroke('green');
                //strokeWeight(1);
                //fill('green');
                //text("Correct!",displayWidth/2-710,opt1.y+75);
                //push();
                //quizCorrect.y=displayHeight/2-60;
                quizIncorrect.visible=true;
                //visibility=visibility-3;
                //tint(255,visibility);
                //pop();
                if((((quizIncorrect.y===displayHeight/2-60)===false)&&quizIncorrectShow===0)){
                    quizIncorrectY=quizIncorrectY+(((displayHeight/2-60)-quizIncorrectY)/4.5);
                    quizIncorrect.y=quizIncorrectY;
                }
        
                if(Math.round(quizIncorrect.y)===displayHeight/2-60&&(touches.length>0||mousePressedOver(touchScreen))){
                    quizIncorrectShow=1;
                    //gameState=QUIZ;
                }

                if(mouseP.isTouching(quizIncorrect)&&mousePressedOver(quizIncorrect)){
                    ans=2;
                    opt1.visible=true;
                    opt2.visible=true;
                    opt3.visible=true;
                    opt4.visible=true;
                    quizTitle.visible=true;
                    quizIncorrectShow=0;
                    quizIncorrect.visible=false;
                    quizIncorrect.y=-300;
                    quizIncorrectY=-300;
                    opt1.y=displayHeight/2-90;
                    opt2.y=displayHeight/2-90;
                    opt3.y=displayHeight/2-90;
                    opt4.y=displayHeight/2-90;
                    ques=3;
                    //score=score+1;

                }
                
            }

            if(ans===1){

                opt1.visible=false;
                opt2.visible=false;
                opt3.visible=false;
                opt4.visible=false;

                opt1.y=-100;
                opt2.y=-100;
                opt3.y=-100;
                opt4.y=-100;

                quizTitle.visible=false;

                quizCorrect.visible=true;

                if((((quizCorrect.y===displayHeight/2-60)===false)&&quizCorrectShow===0)){
                    quizCorrectY=quizCorrectY+(((displayHeight/2-60)-quizCorrectY)/4.5);
                    quizCorrect.y=quizCorrectY;
                }
        
                if(Math.round(quizCorrect.y)===displayHeight/2-60&&(touches.length>0||mousePressedOver(touchScreen))){
                    quizCorrectShow=1;
                    //gameState=QUIZ;
                }

                if(mouseP.isTouching(quizCorrect)&&mousePressedOver(quizCorrect)){
                    ques=3;
                    ans=2;
                    opt1.visible=true;
                    opt2.visible=true;
                    opt3.visible=true;
                    opt4.visible=true;
                    opt1.y=displayHeight/2-90;
                    opt2.y=displayHeight/2-90;
                    opt3.y=displayHeight/2-90;
                    opt4.y=displayHeight/2-90;
                    quizTitle.visible=true;
                    quizCorrectShow=0;
                    quizCorrect.visible=false;
                    quizCorrect.y=-300;
                    quizCorrectY=-300;
                    score=score+1;
                }
            }

        }

        //QUES 3

        if(ques===3){

            if((ans===0||ans===1)===false){
                textSize(30);
                stroke('black');
                strokeWeight(1);
                fill('black');
                text("Question 3: How many donuts can you eat daily?",displayWidth/2-710,displayHeight/2-200);
            }


            if(((mousePressedOver(opt4)||touches.length>0)&&mouseP.isTouching(opt4))||(mousePressedOver(opt2)||touches.length>0)&&mouseP.isTouching(opt2)||(mousePressedOver(opt3)||touches.length>0)&&mouseP.isTouching(opt3)){
                ans=0;
                touches = [];
            }

            if((mousePressedOver(opt1)||touches.length>0)&&mouseP.isTouching(opt1)){
                ans=1;
                touches = [];
            }

            if(ans===0){
                //textSize(30);
                //stroke('red');
                //strokeWeight(1);
                //fill('red');
                //text("Incorrect",displayWidth/2-710,opt1.y+75);


                //displayHeight/2-60

                opt1.visible=false;
                opt2.visible=false;
                opt3.visible=false;
                opt4.visible=false;

                opt1.y=-100;
                opt2.y=-100;
                opt3.y=-100;
                opt4.y=-100;

                quizTitle.visible=false;
        
                //textSize(30);
                //stroke('green');
                //strokeWeight(1);
                //fill('green');
                //text("Correct!",displayWidth/2-710,opt1.y+75);
                //push();
                //quizCorrect.y=displayHeight/2-60;
                quizIncorrect.visible=true;
                //visibility=visibility-3;
                //tint(255,visibility);
                //pop();
                if((((quizIncorrect.y===displayHeight/2-60)===false)&&quizIncorrectShow===0)){
                    quizIncorrectY=quizIncorrectY+(((displayHeight/2-60)-quizIncorrectY)/4.5);
                    quizIncorrect.y=quizIncorrectY;
                }
        
                if(Math.round(quizIncorrect.y)===displayHeight/2-60&&(touches.length>0||mousePressedOver(touchScreen))){
                    quizIncorrectShow=1;
                    //gameState=QUIZ;
                }

                if(mouseP.isTouching(quizIncorrect)&&mousePressedOver(quizIncorrect)){
                    ans=2;
                    opt1.visible=true;
                    opt2.visible=true;
                    opt3.visible=true;
                    opt4.visible=true;
                    quizTitle.visible=true;
                    quizIncorrectShow=0;
                    quizIncorrect.visible=false;
                    quizIncorrect.y=-300;
                    quizIncorrectY=-300;
                    opt1.y=displayHeight/2-90;
                    opt2.y=displayHeight/2-90;
                    opt3.y=displayHeight/2-90;
                    opt4.y=displayHeight/2-90;
                    ques=4;
                    //score=score+1;

                }
                
            }

            if(ans===1){

                opt1.visible=false;
                opt2.visible=false;
                opt3.visible=false;
                opt4.visible=false;
                opt1.y=-100;
                opt2.y=-100;
                opt3.y=-100;
                opt4.y=-100;
                quizTitle.visible=false;

                quizCorrect.visible=true;

                if((((quizCorrect.y===displayHeight/2-60)===false)&&quizCorrectShow===0)){
                    quizCorrectY=quizCorrectY+(((displayHeight/2-60)-quizCorrectY)/4.5);
                    quizCorrect.y=quizCorrectY;
                }
        
                if(Math.round(quizCorrect.y)===displayHeight/2-60&&(touches.length>0||mousePressedOver(touchScreen))){
                    quizCorrectShow=1;
                    //gameState=QUIZ;
                }

                if(mouseP.isTouching(quizCorrect)&&mousePressedOver(quizCorrect)){
                    ques=4;
                    ans=2;
                    opt1.visible=true;
                    opt2.visible=true;
                    opt3.visible=true;
                    opt4.visible=true;
                    opt1.y=displayHeight/2-90;
                    opt2.y=displayHeight/2-90;
                    opt3.y=displayHeight/2-90;
                    opt4.y=displayHeight/2-90;
                    quizTitle.visible=true;
                    quizCorrectShow=0;
                    quizCorrect.visible=false;
                    quizCorrect.y=-300;
                    quizCorrectY=-300;
                    score=score+1;
                }
            }

        }

        //QUES 4

        if(ques===4){

            if((ans===0||ans===1)===false){
                textSize(30);
                stroke('black');
                strokeWeight(1);
                fill('black');
                text("Question 4: How many carrots/apples should you eat per day?",displayWidth/2-710,displayHeight/2-200);
            }


            if(((mousePressedOver(opt4)||touches.length>0)&&mouseP.isTouching(opt4))||(mousePressedOver(opt2)||touches.length>0)&&mouseP.isTouching(opt2)||(mousePressedOver(opt1)||touches.length>0)&&mouseP.isTouching(opt1)){
                ans=0;
                touches = [];
            }

            if((mousePressedOver(opt3)||touches.length>0)&&mouseP.isTouching(opt3)){
                ans=1;
                touches = [];
            }

            if(ans===0){
                //textSize(30);
                //stroke('red');
                //strokeWeight(1);
                //fill('red');
                //text("Incorrect",displayWidth/2-710,opt1.y+75);


                //displayHeight/2-60

                opt1.visible=false;
                opt2.visible=false;
                opt3.visible=false;
                opt4.visible=false;

                opt1.y=-100;
                opt2.y=-100;
                opt3.y=-100;
                opt4.y=-100;

                quizTitle.visible=false;
        
                //textSize(30);
                //stroke('green');
                //strokeWeight(1);
                //fill('green');
                //text("Correct!",displayWidth/2-710,opt1.y+75);
                //push();
                //quizCorrect.y=displayHeight/2-60;
                quizIncorrect.visible=true;
                //visibility=visibility-3;
                //tint(255,visibility);
                //pop();
                if((((quizIncorrect.y===displayHeight/2-60)===false)&&quizIncorrectShow===0)){
                    quizIncorrectY=quizIncorrectY+(((displayHeight/2-60)-quizIncorrectY)/4.5);
                    quizIncorrect.y=quizIncorrectY;
                }
        
                if(Math.round(quizIncorrect.y)===displayHeight/2-60&&(touches.length>0||mousePressedOver(touchScreen))){
                    quizIncorrectShow=1;
                    //gameState=QUIZ;
                }

                if(mouseP.isTouching(quizIncorrect)&&mousePressedOver(quizIncorrect)){
                    ans=2;
                    opt1.visible=true;
                    opt2.visible=true;
                    opt3.visible=true;
                    opt4.visible=true;
                    quizTitle.visible=true;
                    quizIncorrectShow=0;
                    quizIncorrect.visible=false;
                    quizIncorrect.y=-300;
                    quizIncorrectY=-300;
                    opt1.y=displayHeight/2-90;
                    opt2.y=displayHeight/2-90;
                    opt3.y=displayHeight/2-90;
                    opt4.y=displayHeight/2-90;
                    ques=5;
                    //score=score+1;

                }
                
            }

            if(ans===1){

                opt1.visible=false;
                opt2.visible=false;
                opt3.visible=false;
                opt4.visible=false;
                opt1.y=-100;
                opt2.y=-100;
                opt3.y=-100;
                opt4.y=-100;
                quizTitle.visible=false;

                quizCorrect.visible=true;

                if((((quizCorrect.y===displayHeight/2-60)===false)&&quizCorrectShow===0)){
                    quizCorrectY=quizCorrectY+(((displayHeight/2-60)-quizCorrectY)/4.5);
                    quizCorrect.y=quizCorrectY;
                }
        
                if(Math.round(quizCorrect.y)===displayHeight/2-60&&(touches.length>0||mousePressedOver(touchScreen))){
                    quizCorrectShow=1;
                    //gameState=QUIZ;
                }

                if(mouseP.isTouching(quizCorrect)&&mousePressedOver(quizCorrect)){
                    ques=5;
                    ans=2;
                    opt1.visible=true;
                    opt2.visible=true;
                    opt3.visible=true;
                    opt4.visible=true;
                    opt1.y=displayHeight/2-90;
                    opt2.y=displayHeight/2-90;
                    opt3.y=displayHeight/2-90;
                    opt4.y=displayHeight/2-90;
                    quizTitle.visible=true;
                    quizCorrectShow=0;
                    quizCorrect.visible=false;
                    quizCorrect.y=-300;
                    quizCorrectY=-300;
                    score=score+1;
                }
            }

        }

        //QUES 5

        if(ques===5){

            if((ans===0||ans===1)===false){
                textSize(30);
                stroke('black');
                strokeWeight(1);
                fill('black');
                text("Question 5: How much small servings meat should you consume every day?",displayWidth/2-710,displayHeight/2-200);
            }


            if(((mousePressedOver(opt4)||touches.length>0)&&mouseP.isTouching(opt4))||(mousePressedOver(opt3)||touches.length>0)&&mouseP.isTouching(opt3)||(mousePressedOver(opt1)||touches.length>0)&&mouseP.isTouching(opt1)){

                //score=score+1;
                opt1.visible=false;
                opt2.visible=false;
                opt3.visible=false;
                opt4.visible=false;
                opt1.y=-100;
                opt2.y=-100;
                opt3.y=-100;
                opt4.y=-100;
                quizTitle.visible=false;
                //ans=1;
                music.stop();
                //touches = [];
                //ans=0;
                if(score===0||score===1||score===2){
                    win=2;
                    deathSound.play();
                    gameState=END;
                }else{
                    win=1;
                    gameState=END;
                    winSound.play();
                }
                touches = [];
            }

            if((mousePressedOver(opt2)||touches.length>0)&&mouseP.isTouching(opt2)){
                //win=1;
                //gameState=END;
                score=score+1;
                opt1.visible=false;
                opt2.visible=false;
                opt3.visible=false;
                opt4.visible=false;
                opt1.y=-100;
                opt2.y=-100;
                opt3.y=-100;
                opt4.y=-100;
                quizTitle.visible=false;
                //ans=1;
                if(score===0||score===1||score===2){
                    win=2;
                    deathSound.play();
                    gameState=END;
                }else{
                    win=1;
                    gameState=END;
                    winSound.play();
                }
                touches = [];
            }

            if(ans===0){
                //textSize(30);
                //stroke('red');
                //strokeWeight(1);
                //fill('red');
                //text("Incorrect",displayWidth/2-710,opt1.y+75);


                //displayHeight/2-60
                
                opt1.visible=false;
                opt2.visible=false;
                opt3.visible=false;
                opt4.visible=false;

                opt1.y=-100;
                opt2.y=-100;
                opt3.y=-100;
                opt4.y=-100;

                quizTitle.visible=false;
        
                //textSize(30);
                //stroke('green');
                //strokeWeight(1);
                //fill('green');
                //text("Correct!",displayWidth/2-710,opt1.y+75);
                //push();
                //quizCorrect.y=displayHeight/2-60;
                quizIncorrect.visible=true;
                //visibility=visibility-3;
                //tint(255,visibility);
                //pop();
                if((((quizIncorrect.y===displayHeight/2-60)===false)&&quizIncorrectShow===0)){
                    quizIncorrectY=quizIncorrectY+(((displayHeight/2-60)-quizIncorrectY)/4.5);
                    quizIncorrect.y=quizIncorrectY;
                }
        
                if(Math.round(quizIncorrect.y)===displayHeight/2-60&&(touches.length>0||mousePressedOver(touchScreen))){
                    quizIncorrectShow=1;
                    //gameState=QUIZ;
                }

                if(mouseP.isTouching(quizIncorrect)&&mousePressedOver(quizIncorrect)){
                    //ans=2;
                    //opt1.visible=true;
                    //opt2.visible=true;
                    //opt3.visible=true;
                    //opt4.visible=true;
                    //quizTitle.visible=true;
                    //quizIncorrectShow=0;
                    //quizIncorrect.visible=false;
                    //quizIncorrect.y=-300;
                    //quizIncorrectY=-300;
                    //opt1.y=displayHeight/2-90;
                    //opt2.y=displayHeight/2-90;
                    //opt3.y=displayHeight/2-90;
                    //opt4.y=displayHeight/2-90;
                    //ques=2;
                    //score=score+1;

                }
            }

            if(ans===1){

                opt1.visible=false;
                opt2.visible=false;
                opt3.visible=false;
                opt4.visible=false;
                opt1.y=-100;
                opt2.y=-100;
                opt3.y=-100;
                opt4.y=-100;
                quizTitle.visible=false;

                quizCorrect.visible=true;

                if((((quizCorrect.y===displayHeight/2-60)===false)&&quizCorrectShow===0)){
                    quizCorrectY=quizCorrectY+(((displayHeight/2-60)-quizCorrectY)/4.5);
                    quizCorrect.y=quizCorrectY;
                }
        
                if(Math.round(quizCorrect.y)===displayHeight/2-60&&(touches.length>0||mousePressedOver(touchScreen))){
                    quizCorrectShow=1;
                    //gameState=QUIZ;
                }

                if(mouseP.isTouching(quizCorrect)&&mousePressedOver(quizCorrect)){
                    //ques=5;
                    //ans=2;
                    //opt1.visible=true;
                    //opt2.visible=true;
                    //opt3.visible=true;
                    //opt4.visible=true;
                    //opt1.y=displayHeight/2-90;
                    //opt2.y=displayHeight/2-90;
                    //opt3.y=displayHeight/2-90;
                    //opt4.y=displayHeight/2-90;
                    //quizTitle.visible=true;
                    //quizCorrectShow=0;
                    //quizCorrect.visible=false;
                    //quizCorrect.y=-300;
                    //quizCorrectY=-300;
                    win=1;
                    gameState=END;
                    quizCorrect.visible=false;
                    score=score+1;
                }
            }

        }
    }

    if(gameState===END&&win===0){

        breadEaten=0;
        vegsEaten=0;
        milkDrank=0;
        meatEaten=0;
        donutEaten=0;

        breadG.destroyEach();
        vegsG.destroyEach();
        milkG.destroyEach();
        meatG.destroyEach();
        donutG.destroyEach();

        player.visible=false;

        restart.visible=true;

        infoButton.visible=true;
        infoButton.y=displayHeight/2+140;

        if(ground.x<0){
            ground.x=displayWidth/2;
        }

        textSize(80);
        fill("red");
        strokeWeight(1);
        stroke("red");
        //text("GAME OVER",(displayWidth/2)-250,displayHeight/2-100);
        gameOver.visible=true;
        textSize(30);
        fill("black");
        text("You need to eat a balanced diet to stay healthy!",(displayWidth/2)-300,displayHeight/2-50);

        if(mousePressedOver(restart)||(touches.length>0&&mouseP.isTouching(restart))){
            gameState=GOAL1;
            restart.visible=false;
            player.y=displayHeight-200;
            music.play();
            deathSound.stop();
            gameOver.visible=false;
        }

        if(mousePressedOver(infoButton)||(touches.length>0&&mouseP.isTouching(infoButton))){
            whereBack=1;
            gameState=INFORMATION;
            gameOver.visible=false;
        }
    }

    if(gameState===END&&win===1){
        music.stop();
        breadG.destroyEach();
        vegsG.destroyEach();
        milkG.destroyEach();
        meatG.destroyEach();
        donutG.destroyEach();

        player.visible=false;

        restart.visible=true;

        infoButton.visible=true;
        infoButton.y=displayHeight/2+140;

        if(ground.x<0){
            ground.x=displayWidth/2;
        }

        textSize(80);
        fill("green");
        strokeWeight(1);
        stroke("green");
        //text("YOU WIN!",(displayWidth/2)-210,displayHeight/2-100);
        winTitle.visible=true;
        textSize(30);
        fill("black");
        strokeWeight(1);
        stroke("black");
        text("Congratulations, you passed the quiz and won the game! Score: "+score+"/5",(displayWidth/2)-450,displayHeight/2-50);

        if(mousePressedOver(restart)||(touches.length>0&&mouseP.isTouching(restart))){
            gameState=GOAL1;
            winSound.stop();
            music.play();
            breadEaten=0;
            vegsEaten=0;
            milkDrank=0;
            meatEaten=0;
            donutEaten=0;
            restart.visible=false;
            player.y=displayHeight-200;
            winTitle.visible=false;
        }

        if(mousePressedOver(infoButton)||(touches.length>0&&mouseP.isTouching(infoButton))){
            whereBack=2;
            gameState=INFORMATION;
            winTitle.visible=false;
        }

    }

    if(gameState===END&&win===2){

        breadEaten=0;
        vegsEaten=0;
        milkDrank=0;
        meatEaten=0;
        donutEaten=0;

        breadG.destroyEach();
        vegsG.destroyEach();
        milkG.destroyEach();
        meatG.destroyEach();
        donutG.destroyEach();

        player.visible=false;

        restart.visible=true;

        infoButton.visible=true;
        infoButton.y=displayHeight/2+140;

        if(ground.x<0){
            ground.x=displayWidth/2;
        }

        textSize(80);
        fill("red");
        strokeWeight(1);
        stroke("red");
        //text("GAME OVER",(displayWidth/2)-250,displayHeight/2-100);
        gameOver.visible=true;
        textSize(30);
        fill("black");
        text("You won the game but failed the quiz. Score: "+score+"/5",(displayWidth/2)-300,displayHeight/2-50);

        if(mousePressedOver(restart)||(touches.length>0&&mouseP.isTouching(restart))){
            gameState=GOAL1;
            restart.visible=false;
            player.y=displayHeight-200;
            music.play();
            deathSound.stop();
            gameOver.visible=false;
        }

        if(mousePressedOver(infoButton)||(touches.length>0&&mouseP.isTouching(infoButton))){
            whereBack=1;
            gameState=INFORMATION;
            gameOver.visible=false;
        }
    }

    if(gameState===INFORMATION){
        playButton.visible=false;
        imageTitle.visible=false;

        ground.visible=false;
        restart.visible=false;
        infoButton.visible=false;
        foodPyramid.visible=true;

        if(ground.x<0){
            ground.x=displayWidth/2;
        }

        textSize(30);
        fill("black");

        stroke("black");
        strokeWeight(0.5);
    
        text("Eat a food until the food's text turns to the color of red. Once it turns red, avoid that food.",displayWidth/2-720,displayHeight/2+200);
        text("Remember: A balanced diet makes a healthy body!                  Press Space or Tap/Click to jump in the game.",displayWidth/2-720,displayHeight/2+240);
        text("(Make sure to score at least 3 points at the quiz to win)",displayWidth/2-720,displayHeight/2+280);

        text("To maintain a perfect daily diet:",displayWidth/2+25,displayHeight/2-260);
        
        image(donutImg,displayWidth/2-30,displayHeight/2-300,150,150);
        text("Eat only 1 donut",displayWidth/2+90,displayHeight/2-210);

        image(meatImg,displayWidth/2+13,displayHeight/2-195,70,70);
        text("Consume 2 small servings of meat",displayWidth/2+90,displayHeight/2-155);

        image(milkImg,displayWidth/2-30,displayHeight/2-180,150,150);
        text("Drink 3 servings of milk",displayWidth/2+90,displayHeight/2-95);

        image(carrotImg,displayWidth/2-20,displayHeight/2-125,150,160);
        image(appleImg,displayWidth/2-25,displayHeight/2-90,150,160);
        text("Eat 3 apples/carrots",displayWidth/2+90,displayHeight/2-13);

        image(breadImg,displayWidth/2-30,displayHeight/2-5,150,140);
        text("Consume 4 servings of bread",displayWidth/2+90,displayHeight/2+72);

        textSize(90);
        stroke("black");
        strokeWeight(4);

        infoTitle.visible=true;
        //text("Information",displayWidth/2-230,100);

        infoBack.visible=true;

        if((mousePressedOver(infoBack)||(touches.length>0&&mouseP.isTouching(infoBack)))&&whereBack===0){
            gameState=START;
            foodPyramid.visible=false;
            infoBack.visible=false;
            infoTitle.visible=false;
        }else if((mousePressedOver(infoBack)||(touches.length>0&&mouseP.isTouching(infoBack)))&&whereBack===1){
            win=0;
            gameState=END;
            foodPyramid.visible=false;
            infoBack.visible=false;
            ground.visible=true;
            restart.visible=true;
            infoTitle.visible=false;
        }else if((mousePressedOver(infoBack)||(touches.length>0&&mouseP.isTouching(infoBack)))&&whereBack===2){
            win=1;
            gameState=END;
            foodPyramid.visible=false;
            infoBack.visible=false;
            ground.visible=true;
            restart.visible=true;
            infoTitle.visible=false;
        }
    }

    drawSprites();



    ground.depth=player.depth;
    ground.depth=ground.depth-10;

}

function spawnBread(){
    if(frameCount%60===0){
        bread=createSprite(displayWidth,Math.round(random(displayHeight-465,displayHeight-300)));
        bread.velocityX=-15;
        bread.scale=2;
        //bread.shapeColor="yellow";
        bread.addImage(breadImg);
        breadG.add(bread);
        bread.lifetime=120;
        //bread.debug=true;
        bread.setCollider("rectangle",4,-2,25,20);
    }
}

function spawnVegs(){
    if(frameCount%300===0){
        vegs=createSprite(displayWidth,Math.round(random(displayHeight-500,displayHeight-300)));
        vegs.velocityX=-10;
        vegs.scale=2.2;
        if(Math.round(random(1,2))===1){
            vegs.addImage(carrotImg);            
        }else{
            vegs.addImage(appleImg);
        }
        //vegs.shapeColor="lightgreen";
        vegsG.add(vegs);
        vegs.lifetime=200;
        //vegs.debug=true;
        vegs.setCollider("circle",-3,3,10);
    }
}

function spawnMilk(){
    if(frameCount%150===0){
        milk=createSprite(displayWidth,Math.round(random(displayHeight-500,displayHeight-300)));
        milk.addImage(milkImg);
        milk.velocityX=-9;
        milk.scale=1.7;
        milkG.add(milk);
        milk.lifetime=200;
        //milk.debug=true;
        milk.setCollider("circle",2,0,17);
    }
}

function spawnMeat(){
    if(frameCount%200===0){
        meat=createSprite(displayWidth,Math.round(random(displayHeight-500,displayHeight-300)));
        meat.addImage(meatImg);
        meat.velocityX=-9;
        meat.scale=0.9;
        meatG.add(meat);
        meat.lifetime=200;
        //meat.debug=true;
        meat.setCollider("rectangle",0,-1,60,35);
    }
}

function spawnDonut(){
    if(frameCount%80===0){
        donut=createSprite(displayWidth,Math.round(random(displayHeight-500,displayHeight-300)));
        donut.addImage(donutImg);
        donut.velocityX=-9;
        donut.scale=1.7;
        donutG.add(donut);
        donut.lifetime=200;
        //donut.debug=true;
        donut.setCollider("rectangle",2,2,14,10);
    }
}