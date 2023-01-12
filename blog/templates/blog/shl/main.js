

let canvas;
let ctx;
canvas=document.createElement('canvas');
ctx=canvas.getContext('2d');
canvas.width=400;
canvas.height=700;
document.body.appendChild(canvas);

let backgroundImage, spaceshipImage, bulletImage, enemyImage, gameoverImage;
let gameover=false
let score=0

let spaceshipX = canvas.width/2-25;
let spaceshipY = canvas.height-50;

let bulletList = []
function Bullet(){
    this.x=0;
    this.y=0;
    this.init=function(){
        this.x = spaceshipX+15;
        this.y = spaceshipY;
        this.alive=true

        bulletList.push(this);
    };
    this.update = function(){
        this.y-=7;
    };
    for(let i=0;i<enemyList.length;i++){
        if(this.y=0){this.alive=false}
    }
    this.checkHit=function(){
        for (let i=0;i<enemyList.length;i++){
            if(this.y <=enemyList[i].y && 
                this.x>=enemyList[i].x+3 && 
                this.x <=enemyList[i].x+45){
                score++;
                this.alive=false
                enemyList.splice(i,1);
            }
        }
    }
}

function generateRandomValue(min,max){
    let randomNum = Math.floor(Math.random()*(max-min+1))+min
    return randomNum
}

let enemyList=[]
function Enemy(){
    this.x=0;
    this.y=0;
    this.init=function(){
        this.y=0;
        this.x=generateRandomValue(0,canvas.width-48);
        enemyList.push(this);
    };
    this.update = function(){
        this.y+=3;

        if(this.y>canvas.height-48){
            gameover=true;
        }
    };
}

function createEnemy(){
    const interval = setInterval(function(){
        let e = new Enemy();
        e.init();
    },600);
}

function loadImage(){
    backgroundImage=new Image();
    backgroundImage.src='images/background.jpg';

    spaceshipImage=new Image();
    spaceshipImage.src='images/spaceship.png';

    bulletImage=new Image();
    bulletImage.src='images/bullet.png';

    enemyImage=new Image();
    enemyImage.src='images/enemy.png';

    gameoverImage=new Image();
    gameoverImage.src='images/gameover.png';
}

let keysDown={};
function setupKeyboardListner(){
    document.addEventListener('keydown',function(event){
        keysDown[event.keyCode] = true;
    });
    document.addEventListener('keyup',function(event){
        delete keysDown[event.keyCode];

        if(event.keyCode==32){
            createBullet();
        }
    });
}

function createBullet(){
    let b=new Bullet();
    b.init();
}

function update(){
    if(39 in keysDown){
        spaceshipX +=5;
    }
    if(37 in keysDown){
        spaceshipX -=5;
    }

    if(spaceshipX<=0){
        spaceshipX=0;
    }
    if(spaceshipX>=canvas.width-50){
        spaceshipX=canvas.width-50;
    }
    for(let i=0;i<bulletList.length;i++){
        if(bulletList[i].alive){
        bulletList[i].update();
        bulletList[i].checkHit();            
        }
    }
    for(let i=0;i<enemyList.length;i++){
        enemyList[i].update();
    }
}

function render(){
    ctx.drawImage(backgroundImage,0,0,canvas.width,canvas.height);
    ctx.drawImage(spaceshipImage,spaceshipX,spaceshipY);
    ctx.fillText(score,20,20);
    ctx.fillstyle='white';
    ctx.font='20px Arial';
    for(let i=0; i<bulletList.length; i++){
        if(bulletList[i].alive){
        ctx.drawImage(bulletImage,bulletList[i].x,bulletList[i].y);
        }
    }
    for(let i=0;i<enemyList.length;i++){
        ctx.drawImage(enemyImage,enemyList[i].x,enemyList[i].y);
    }
}

function main(){
    if (!gameover){
        update();
        render();
        requestAnimationFrame(main);        
    }else{
        ctx.drawImage(gameoverImage,10,100,380,380);
    }
}


loadImage();
setupKeyboardListner();
createEnemy();
main();