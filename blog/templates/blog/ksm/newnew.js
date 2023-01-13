const btnL = document.querySelector(".btn-left")
const btnR = document.querySelector(".btn-right")
const img = document.querySelector(".img-container")
btnL.addEventListener('click',Lcount);
btnR.addEventListener('click',Rcount);

let c = 0;
function Lcount() {
    if(c===4){
        c=0;
    }
    else{
        c++;
    }
    img.style.background = `url("./img/contBcg-${c}.jpeg")`;
    console.log(`${c}.jpeg`)
    console.log(c)
    if(c>=4) {
        c = -1;
    }
}

function Rcount() {
    if(c===0){
        c=4;
    }else if(c<0){
        c=3;
    }
    else{
        c--;
    }
    img.style.background = `url("./img/contBcg-${c}.jpeg")`;
    console.log(`${c}.jpeg`)
    console.log(c)
    
};


let moveToTop = function () {
    document.body.scrollIntoView({ behavior: "smooth" });
  };