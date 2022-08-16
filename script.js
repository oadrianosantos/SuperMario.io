/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');


const jump = () => {
   mario.classList.add('jump');

    setTimeout( () => {
        mario.classList.remove('jump');
}, 500);

}

const loop = setInterval(() => {
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +getComputedStyle(mario).bottom.replace('px','');

    if (pipePosition <=70 && marioPosition <=75 && pipePosition>0    ) {
        pipe.style.animation = 'none'; 
        pipe.style.left = `${pipePosition}px`;
        mario.style.animation = 'none'; 
        mario.style.bottom = `${marioPosition}px`; 
        mario.src = './imagens/game-over.png';
        mario.style.width = '50px';
        mario.style.marginLeft = '40px';
        clearInterval(loop)


    }
}, 10);  

          
document.addEventListener('keydown', jump);


