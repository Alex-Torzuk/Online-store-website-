const infoBtns = document.querySelectorAll('.info-dot')
const infoHints = document.querySelectorAll('.info-hint')

// Клик по кнопкам с подсказками

for(let btn of infoBtns){
    
    btn.addEventListener('click', showHint)
}

function showHint(e){
    e.stopPropagation()
    for(let hint of infoHints){
        hint.classList.add('none')
    }
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

  // Tabs

  const tabsBtn = document.querySelectorAll('[data-tab]')
  const tabsProducts = document.querySelectorAll('[data-tab-value]')
  console.log(tabsProducts)

  for(let btn of tabsBtn){
    console.log(btn)

    btn.addEventListener('click', function() {

        //Убираем активные кнопки у всех кнопок

        for(let btn of tabsBtn){
            btn.classList.remove('tab-controls__btn--active')
        }

        //Добавляем активный клфсс к текущей кнопке

        this.classList.add('tab-controls__btn--active')

        //Получаем категории товаров которые нужно оставить

        console.log(this.dataset.tab)

        //Отобразить нужные товары and Скрыть все товары
        for(let product of tabsProducts){

            // Проверка на отображение всех товаров

            if(this.dataset.tab === 'all'){
                product.classList.remove('none')
            }else{
                if(product.dataset.tabValue === this.dataset.tab){
                    product.classList.remove('none')
                } else{
                    product.classList.add('none')
                }
            }

            

            
        }
        //update swaer
        swiper.update()


    })
  }

  const mobileNavOpenBtn = document.querySelector('#open-mobile-nav-btn')
  const mobileNavCloseBtn = document.querySelector('#close-mobile-nav-btn')
  const mobileNav = document.querySelector('#mobile-nav')
  mobileNavOpenBtn.onclick = function(){
    mobileNav.classList.add('mobile-nav-wrapper--open')
  }

  mobileNavCloseBtn.onclick = function(){
    mobileNav.classList.remove('mobile-nav-wrapper--open')
  }
  