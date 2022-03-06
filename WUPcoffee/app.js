const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', function(){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

const modal = document.getElementById('email-modal');
const openBtn = document.querySelector('.main-btn');
const closeBtn = document.querySelector('.close-btn');

openBtn.addEventListener('click', ()=>{
    modal.style.display = 'block';

});

closeBtn.addEventListener('click', ()=>{
    modal.style.display = 'none';
});

window.addEventListener('click', (e)=> {
    if(e.target === modal){
        modal.style.display = 'none';
    }
});
function soundClick() {
    var audio = new Audio(); // Создаём новый элемент Audio
    audio.src = 'Emotional Damage.mp3'; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
  };