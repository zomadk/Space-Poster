var zoma, mw, aj, pira, space;
var borderBG, redrawBG;
var blankZ, blankA, blankP, blankM;
let borderCollider, smallBorder;
var spText;
var boldfont;
let fnt;
let ajblur;
let x = 0;
let y = 0;
let blurOn = false;

let maskImage;
let maskResult;
let i = 0;
let shape;
let fullbg;
let tintVal = 180;
let p = 10;
let hit = false;
let fadeOff = false;



var shift = {x: 50, y: 100}



function preload(){

    redrawBG = loadImage('../images/fullbg2.png') //front
}

function setup(){

    maskImage = createGraphics(borderBG.width, borderBG.height)
    maskResult = createImage(borderBG.width, borderBG.height)
    
    colorMode(RGB)
    mwBlurArray = [blurM1, blurM2, blurM3, blurM4, blurM5]
    new Canvas(1192, 1192);

    background(100)

    image(borderBG, 0, 0, 1192, 1192)

    
    
    imageMode(CORNER)
   
  
    
    

    /*spText = new Sprite()
    spText.text = "SPACE"
    spText.color = color(0, 0)
    spText.stroke = color(0, 0)
    spText.position = createVector(200, 1200)
    spText.debug = true;
    spText.width = 300
    spText.height = 150
    spText.textSize = 100
    textFont(boldfont)    */
  
    borderCollider = new Sprite([[57, 545], [66, 675], [120, 792], [233, 923], [421, 1012], [585, 1031],[739,981],[864, 897],[920, 836],[965, 784],[1013, 639],[1029, 506],[998, 365],[910, 227],[790, 122],[640, 62],[491, 57],[320, 104],[195, 195],[110, 317],[61, 435],[57, 537]]);
    borderCollider.collider = 'static';
    borderCollider.color = color(255,0)
    borderCollider.scale = 0.98
    borderCollider.position = createVector(195, 545)

    zoma = new Sprite()
    zoma.img = '../images/zoma-bl.png'
    zoma.position = createVector(964, 377)
    zoma.vel.x = 5;
    zoma.vel.y = 5;
    zoma.bounciness = 0.7;
    //zoma.width = 135;
    //zoma.height = 45;
    zoma.width = 160;
    zoma.height = 45;
    zoma.friction = 3;
    zoma.rotation;
   //zoma.debug = true;

    pira = new Sprite()
    pira.img = '../images/pira-bl.png'
    pira.position = createVector(414, 561)
    pira.vel.x = 5;
    pira.vel.y = -5;
    pira.bounciness = 0.7;
   //pira.width = 210;
    //pira.height = 55;
    pira.width = 250;
    pira.height = 60;
    pira.friction = 3;
    pira.rotationLock = false;
    //pira.debug = true;


    mw = new Sprite()
    mw.img = '../images/mw-bl.png'
    mw.vel.x = 5;
    mw.vel.y = 0;
    //mw.width = 390;
    //mw.height = 45;
    mw.width = 460;
    mw.height = 50;
    mw.bounciness = 1;
    mw.friction = 3;
    mw.position = createVector(600, 811)
   //mw.debug = true;

    imageMode(CENTER)
    aj = new Sprite()    
    //aj.height = 50;
    //aj.width = 1;
    //aj.addCollider(0, -60, 300, 45)
    //aj.addCollider(-50, 0, 195, 45)
    //aj.addCollider(-40, 60, 210, 45)
    aj.height = 50;
    aj.width = 1;
    aj.addCollider(0, -60, 350, 45)
    aj.addCollider(-58, 0, 235, 45)
    aj.addCollider(-50, 60, 250, 45)
    aj.img = '../images/aj-bl.png'
    aj.position = createVector(625, 280)
    aj.vel.x = -5;
    aj.vel.y = -5;
   // aj.debug = true;

    imageMode(CORNER)

}



function draw(){


    tint(255, tintVal)
    image(redrawBG, x, y, 1192, 1192)
    tint(255, 500)

    var s = millis();


    
    imageMode(CORNER)

if (mw.collided(pira) || mw.collided(aj)|| mw.collided(zoma)){
    hit = true;

} 
if (pira.collided(zoma) || pira.collided(aj)|| pira.collided(mw)){
    hit = true;
    pira.speed = 0.2
} 

if (aj.collided(zoma) || aj.collided(pira)|| aj.collided(mw)){
    hit = true;


}
if (zoma.collided(aj) || aj.collided(pira)|| aj.collided(mw)){

    
    hit = true;

}


if (hit == true){
    tintVal = 10;
    hit = false;
}
if(tintVal < 180){
    tintVal = tintVal + 1;
    fadeOff = false
}




    mw.speed = .4;
    zoma.speed = .4;
    aj.speed = .4
    pira.speed = .4

   
    

    mw.bounciness = 2;
    zoma.bounciness = 2;
    aj.bounciness = 2;
    pira.bounciness = 2;

    aj.friction = 1;
    zoma.friction = 1;
    mw.friction = 1;
    borderCollider.bounciness = 3;
    borderCollider.friction = 1


    if (mw.collides(borderCollider)){
            mw.img = '../images/mw-wl.png'     
    }
    if (zoma.collides(borderCollider)){
        zoma.img = '../images/zoma-wl.png'     
    }
    if (aj.collides(borderCollider)){
        aj.img = '../images/aj-wl.png'  
    }  
    if (pira.collides(borderCollider)){
        pira.img = '../images/pira-wl.png'
    }  



    if (floor(millis()) % 1000 >= 0 && floor(millis()) % 1000 <= 50) {
        mw.img = '../images/mw-bl.png'
        zoma.img = '../images/zoma-bl.png'
        aj.img = '../images/aj-bl.png'
        pira.img = '../images/pira-bl.png' 
        //space.img = '../images/space-b.png'    
   
    }



    //console.log(mw.rotation)
    if (mw.rotation <= -15){
        mw.rotation = -15
    }
    if (mw.rotation > 15){
        mw.rotation = 15
    }
    else{
        mw.rotation;
    }

    if (zoma.rotation < -15){
        zoma.rotation = -15
    }
    if (zoma.rotation > 15){
        zoma.rotation = 15
    }
    else{
        zoma.rotation
       
    }

    if (aj.rotation < -15){
        aj.rotation = -15
    }
    if (aj.rotation > 15){
        aj.rotation = 15
    }
    else{
        aj.rotation
    }
    

    if (pira.rotation < -15){
        pira.rotation = -15
    }
    if (pira.rotation > 15){
        pira.rotation = 15
    }
    else{
        pira.rotation
    }
    




}

function mouseClicked() {
    console.log(',[' + floor(mouseX) + ', ' + floor(mouseY) + ']')
    
}