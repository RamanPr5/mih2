const cursor = document.querySelector('.cursor');
const holes = [...document.querySelectorAll('.hole')];
const scoreEl = document.querySelector('.score span');
let score = 0;

const sound = new Audio('./img/ahhhhhhh.mp3')

function run() {
    const i = Math.floor(Math.random() * holes.length);
    const hole = holes[i];
    let timer = null;

    const img = document.createElement('img');
    img.classList.add('mole');
    img.src = './img/mih.png'

    img.addEventListener('click', e => {
        sound.play();
        score ++;
        scoreEl.innerText = score;
        // img.src = './img/62953hammer_109346.png'
        clearTimeout(timer);
        setTimeout(() => {
            hole.removeChild(img)
            run()
        },1500)
    })

    timer = setTimeout(() => {
        hole.removeChild(img)
        run()
    },1500)

    hole.appendChild(img)
}

run()

window.addEventListener('mousemove', e => {
    cursor.style.top = e.pageY + 'px';
    cursor.style.left = e.pageX + 'px';
})

window.addEventListener('mousedown', e => {
    cursor.classList.add('active')
})

window.addEventListener('mouseup', e => {
    cursor.classList.remove('active')
})