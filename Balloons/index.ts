
let imgArray = new Array();
imgArray[0] = new Image();
imgArray[0].src = 'https://maxw.com/b1.png';
imgArray[1] = new Image();
imgArray[1].src = 'https://banner2.cleanpng.com/20171127/8aa/single-purple-balloon-png-clipart-image-5a1bb8366e6b73.5546543515117660704523.jpg';
imgArray[2] = new Image();
imgArray[2].src = 'https://www.nicepng.com/png/detail/174-1748931_transparent-background-green-balloon-transparent.png';
imgArray[3] = new Image();
imgArray[3].src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmvMGjS3k5vUDLL-Vcad8-Mn43vew_8BDdZA&usqp=CAU';

let ckilck = document.querySelector("#start") as HTMLElement //Start button
ckilck?.addEventListener("click", myMove) //Event Listenner on Saart button
let id = 0;
let score=0, count=-1;
let scoreBoard = document.querySelector(".score")!
let countBoard = document.querySelector(".miss")!
scoreBoard.textContent = 'Score: ' + 0
countBoard.textContent = 'Miss: ' + 0
// test






function myMove() {
    ckilck.style.visibility="hidden"
    countBoard.textContent = 'Miss: '+count;
    scoreBoard.textContent = 'Score: ' + score
    
    let htmlSize = document.querySelector("html")!
let currentLeft = htmlSize.offsetWidth
console.log("size" + currentLeft);
let yZir = Math.floor(Math.random()*  ((-currentLeft/2) -(currentLeft/2)) + (currentLeft/2))


    // let yZir = Math.floor((Math.random()* (-700 - (720))+700))
    count++;
    countBoard.textContent = 'Miss: '+count;
    let elem1 = document.querySelector(".balloon1")!
    let elem = elem1.appendChild(imgArray[0])
    
    let pos = -460;

    elem.addEventListener('click',ClickedIt);
  
    clearInterval(id);
    id = setInterval(frame,);

   function frame() {
    let yHight = (document.querySelector("html")!.offsetHeight) 
    console.log("window hight is "+ yHight);
    
    
    
    if (pos == yHight) {
          console.log(pos + " = "+ yHight);
        console.log("if pos active");
        
            // clearInterval(id);
            myMove()
    } 
    else {
        console.log(yZir);
        pos++; 
        elem.style.left = yZir + 'px' 
        elem.style.buttom = -100 + 'px'; 
        elem.style.top = -pos + 'px'; 
    }

        if(count==5){
            let audio = new Audio("./mixkit-sad-game-over-trombone-471.wav");
            audio.play();
            countBoard.textContent = 'Miss: '+ count;
            count = -1
            score = 0
            setTimeout(function(){
                ckilck.style.visibility="visible"
                alert('GAME OVER!');
            },500)
            clearInterval(id);
           }
        }
    }

function ClickedIt(){
    let audio = new Audio("./mixkit-ballon-blows-up-3071.wav");
    audio.play();
       score++;
       count--
       scoreBoard.textContent = 'Score: ' + score
       clearInterval(id);
    myMove()
    }
    
    let audioMain = document.querySelector("#myAudio") as HTMLAudioElement
    function playAudio(){        
        audioMain.play();
    }
    function pauseAudio() {        
        audioMain.pause()
    }
