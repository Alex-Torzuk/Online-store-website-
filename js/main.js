const infoBtns = document.querySelectorAll('.info-dot')
const infoHints = document.querySelectorAll('.info-hint')

// Клик по кнопкам с подсказками

for(let btn of infoBtns){
    
    btn.addEventListener('click', showHint)
}

function showHint(e){
    e.stopPropagation()
    this.parentNode.querySelector('.info-hint').classList.toggle('none')
}

//Закрываем подсказки при клике по всему документу

document.addEventListener('click', closeHints)

function closeHints(){
for(let hint of infoHints){
    hint.classList.add('none')
}
}

// Запрещаем всплытие события клика при клике на подсказку

for(let hint of infoHints){
    hint.addEventListener('click', (e)=>{
        e.stopPropagation()
    })
}

//Swiper slider

const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    freeMode: true,

    slidesPerView: 4,
    spaceBetween: 42,

    // breakpoints: {
    //     640: {
    //       slidesPerView: 2,
    //       spaceBetween: 20,
    //     },
    //     768: {
    //       slidesPerView: 4,
    //       spaceBetween: 40,
    //     },
    //     1024: {
    //       slidesPerView: 5,
    //       spaceBetween: 50,
    //     },
    //   },
  
  
    // Navigation arrows
    navigation: {
        prevEl: '#sliderPrev',
        nextEl: '#sliderNext',
    },
  
    
    
  });