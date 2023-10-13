// choices
const element1 = document.querySelector('#selectCustom1');
const choices1 = new Choices(element1);
const element2 = document.querySelector('#selectCustom2');
const choices2 = new Choices(element2);
const element3 = document.querySelector('#selectCustom3');
const choices3 = new Choices(element3);
const element4 = document.querySelector('#selectCustom4');
const choices4 = new Choices(element4);
const element5 = document.querySelector('#selectCustom5');
const choices5 = new Choices(element5);

// swiper

const swiper2 = new Swiper('.swiper2', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        535: {
            slidesPerView: 3,
        }
    }
});

// звезды
let star = document.querySelectorAll('.star')

for (let i = 0; i < star.length; i++) {

    star[i].addEventListener('click', function () {

        star[i].classList.toggle('staractive')
        console.log(star[i])
    })
}

// форма
let inpForm1 = document.querySelectorAll('.sectionfive__input')
let inpForm2 = document.querySelectorAll('.modal__input')
function inpForms (form) {
 for (let index = 0; index < form.length; index++) {
    form[index].addEventListener('change', function () {
        form[index].parentElement.children[0].classList.add('sectionfive__inputactive')
    })
}
}
inpForms (inpForm1)
inpForms (inpForm2)
// бургер меню

const boorg = document.querySelectorAll('.header__menu')[0]
const headerList = document.querySelectorAll('.header__list')[0]
const headerBtn = document.querySelectorAll('.header__btn')[0]
const headerContainer= document.querySelectorAll('.header__container')[0]


boorg.addEventListener('click', function () {
    headerList.classList.toggle('header__listactive')
    headerBtn.classList.toggle('header__btnctive')
    headerContainer.classList.toggle('header__containeractive')

})

// модалка
const modal = document.querySelectorAll('.modal')[0]
headerBtn.addEventListener('click', function() {
    modal.classList.add('modal__active')

})
const modalBtnclose = document.querySelectorAll('.modal__btnclose')[0]
modalBtnclose.addEventListener('click', function() {
    modal.classList.remove('modal__active')
})

