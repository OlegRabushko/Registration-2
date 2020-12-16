let blocks = document.querySelectorAll('.block__mobile');
let block1 = document.querySelector('.authorization__block');
let block2 = document.querySelector('.serviceData__block');
let block3 = document.querySelector('.creditCard__block');
let decorLine1 = document.querySelector('.line__1');
let decorLine2 = document.querySelector('.line__2');
let decorCircle2 = document.querySelector('.circle__2');
let decorCircle3 = document.querySelector('.circle__3');
let nextBtn = document.querySelector('.next__button');
let continueBtn = document.querySelector('.continueButton__container');

let i = 0;
nextBtn.onclick = () => {
    i++
    if (i === 1) {
        block1.style.display = 'none';
        block2.style.display = 'block';
        decorLine1.style.backgroundColor = 'white';
        decorCircle2.style.backgroundColor = 'white';
    }
    if (i === 2) {
        block2.style.display = 'none';
        block3.style.display = 'block';
        nextBtn.style.display = 'none';
        continueBtn.style.display = 'block';
        continueBtn.style.display = 'block';
        decorLine2.style.backgroundColor = 'white';
        decorCircle3.style.backgroundColor = 'white';
    }
}
continueBtn.onclick = (e) => {
    e.preventDefault();
    alert('Выгрузка на сервер...')
}
