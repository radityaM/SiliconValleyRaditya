class Menu{
    constructor(){
        imageTitle=createSprite(displayWidth/2,(displayHeight/2)-200);
        imageTitle.addImage(titleImg);
        imageTitle.scale=1.15;
    }
    display(){
        background(bg);

    }
}