'use strict';
// Создание табов
window.addEventListener('DOMContentLoaded',() =>{
    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader');
    function hideTabContent(){
        tabsContent.forEach(item => {
            item.style.display = "none";
        });
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }
    function showTabContent(i = 0){
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('tabheader__item_active');
    }
    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if(target && target.classList.contains('tabheader__item')){
            tabs.forEach((item, i) =>{
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    //timer
    const timeEnd = '2023-02-19';
    function getTimeRemaining(endtime){
        const t = Date.parse(endtime) - Date.parse(new Date()),
              days = Math.floor(t / (1000 * 60 * 60 * 24)  ),
              hours = Math.floor(t / (1000 * 60 * 60) % 24),
              minutes = Math.floor((t / 1000 / 60) %60),
              seconds = Math.floor((t / 1000) % 60);
        return{
            'total':t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }
    function setClock(selector, endtime){
        const timer = document.querySelector(selector),
              days = document.querySelector('#days'),
              hours = document.querySelector('#hours'),
              minutes = document.querySelector('#minutes'),
              seconds = document.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);
        updateClock();
        function updateClock(){
            const t = getTimeRemaining(endtime);
            days.innerHTML = t.days;
            hours.innerHTML = t.hours;
            minutes.innerHTML = t.minutes;
            seconds.innerHTML = t.seconds;
            if(t.total <= 0){
                clearInterval(timeInterval);
            }
        }
    }
    setClock('timer', timeEnd);

//Модальное окно

const modalTrigger = document.querySelectorAll('[data-modal]'),
      modal = document.querySelector('.modal'),
      modalClose = document.querySelector('[data-close]');

      modalTrigger.forEach(btn =>{
        btn.addEventListener('click', ()=>{
            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';
        });
      });
    //   modalClose.addEventListener('click', ()=>{
    //         modal.classList.add('hide');
    //         modal.classList.remove('show');
    //         document.body.style.overflow = '';
    //   });

    //   modal.addEventListener('click', (e)=>{
    //       if(e.target === modal){
    //           modal.classList.add('hide');
    //               modal.classList.remove('show');
    //               document.body.style.overflow = '';
    //       }
    //   });

    //   document.addEventListener('keydown', (e)=>{
    //         if(e.code === 'Escape'){
    //             modal.classList.add('hide');
    //               modal.classList.remove('show');
    //               document.body.style.overflow = '';
    //         }
    //   });
    //Домашнее Задание (Lesson_33)
    function modalWindowClose(){
        modal.classList.add('hide');
        modal.classList.remove('show');
        document.body.style.overflow = '';
    }

    modalClose.addEventListener('click', modalWindowClose);

    modal.addEventListener('click', (e)=>{
              if(e.target === modal){
                modalWindowClose();
              }
    });

    document.addEventListener('keydown', (e)=>{
                 if(e.code === 'Escape'){
                    modalWindowClose();
                }
    });

//Lesson_36
//Slider
const slides = document.querySelectorAll('.offer__slide'),
      prev = document.querySelector('.offer__slider-prev'),
      next = document.querySelector('.offer__slider-next'),
      total = document.querySelector('#total'),
      current = document.querySelector('#current');
let slideIndex = 1;
showSlides(slideIndex);

if(slides.length < 10){
    total.textContent = `0${slides.length}`;
}else{
    total.textContent = slides.length;
}

function showSlides(n){
    if(n > slides.length) {
        slideIndex = 1;
    }
    if(n < 1){
        slideIndex = slides.length;
    }
    // slides.forEach(item => item.style.display = 'none');
    // slides[slideIndex - 1].style.display = 'block';

    //ДЗ_Lesson_36
    slides.forEach(item => item.classList.add('hide'));
    slides[slideIndex -1].classList.remove('hide');
    slides[slideIndex -1].classList.add('show');
    //ДЗ_Lesson_36
    
    if(slides.length < 10){
        current.textContent = `0${slideIndex}`;
    }else{
        current.textContent = slideIndex;
    }
}
function plusSlides(n){
    showSlides(slideIndex += n);
}
prev.addEventListener('click', () =>{ 
    plusSlides(-1);
});
next.addEventListener('click', () =>{ 
    plusSlides(1);
});

});



