'use strict'
const swiper = new Swiper('.swiper', {
 
  // Disable preloading of all images
  preloadImages: false,
  // Enable lazy loading
  lazy: true,
    loop: true,
    // AUTO PLAY
    autoplay: {
      delay: 7000,
      keyboardControl: true
  },
 
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
     
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.fa-circle-arrow-right',
      prevEl: '.fa-circle-arrow-left',
      
    },
  });

  var slider = tns({
    container: '.my-slider',
    items: 1,
    autoplay: true,
    controls: false,
    nextButton:true,
    touch: true,
    nav: false,
    mouseDrag: true,
    autoplayButtonOutput:false,
    responsive: {
      640: {
        edgePadding: 20,
        gutter: 20,
        items: 2
      },
      700: {
        gutter: 30,
      },
      800:{
        items: 3,
      },
      900: {
        items: 4
      }
    },
  });


  const operationBtnContainer = document.querySelector('.operation__btn__container')
  const tabs = document.querySelectorAll('.operation__btn')
  const operationContent= document.querySelectorAll('.operation__content')
  const navLinks = document.querySelector('.nav__links')
  const overlay = document.querySelector('.overlay')
  const openBtn = document.querySelector('.open__bugger')
  const closeBtn = document.querySelector('.close__btn')
  const links = document.querySelectorAll('.links, .account__links')
  const nav =document.querySelector('#nav')
  const logo = document.querySelector('.logo')
  const navContainer = document.querySelector('.nav__container')
  const allSections = document.querySelectorAll('section')
  const header = document.querySelector('.header')
  const aboutContent = document.querySelector('#about')
  const ctaBtn = document.querySelector('.CTA__btn')
  const copyright = document.querySelector('.copyright')
  const accountBtn = document.querySelector('.account__btn')
  const modalBox = document.querySelector('.modal__box')
  const modalClose = document.querySelector('.modal__close')
  const logoSpin = document.querySelector('.logo__spin')
//          NAV TOGGLE




const burgerIcon = () => {
    navLinks.classList.remove('hidden')
    openBtn.classList.add('hidden')
    overlay.classList.remove('hidden')
}
const closeIcon = () => {
    navLinks.classList.add('hidden')
    openBtn.classList.remove('hidden')
    overlay.classList.add('hidden')
}
const modalContent = () => {
  modalBox.classList.remove('modal__hidden')
  overlay.classList.remove('hidden')
}
const closeModalContent = () => {
  modalBox.classList.add('modal__hidden')
  overlay.classList.add('hidden')
  
}
openBtn.addEventListener('click', burgerIcon)

closeBtn.addEventListener('click', closeIcon)

overlay.addEventListener('click', closeIcon)

links.forEach(btn => btn.addEventListener('click', closeIcon))

accountBtn.addEventListener('click', modalContent)
modalClose.addEventListener('click', closeModalContent)


//     NAV TOGGLE END

//      NAV OPACITY EFFECT

// const handleHover = function (e) {
//   console.log(this);
//   if (e.target.classList.contains('.links')) {
//     const hoverLinks = e.target
//     const siblings = hoverLinks.closest('.nav__container').querySelectorAll('.links')
//     const logo = hoverLinks.closest('.nav__container').querySelector('.logo')
//     siblings.forEach(el => {
//       if (el !== hoverLinks)el.style.opacity = this
//     })
//     logo.style.opacity=this
//   }
  
// }

// nav.addEventListener('mouseover', handleHover.bind(0.1))
// nav.addEventListener('mouseout', handleHover.bind(1))




//        STICKY SCROLL


const navHeight = navContainer.getBoundingClientRect().height

const stickyNav = function (entries) {

  const [entry] = entries

  if (!entry.isIntersecting) navContainer.classList.add('nav__sticky')
  else navContainer.classList.remove('nav__sticky')
}
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
})
headerObserver.observe(header)


//       Call To Action Btn

const aboutHeight = ctaBtn.getBoundingClientRect().height

const actionBtn = function (entries) {
  
  const [entry] = entries
  console.log(entry);
  if (!entry.isIntersecting) ctaBtn.classList.add('CTA__sticky')
  else ctaBtn.classList.remove('CTA__sticky')
  
}

const aboutObserver = new IntersectionObserver(actionBtn, {
  root: null,
  threshold: 0,
  rootMargin: `-${aboutHeight}px`,
 
})
aboutObserver.observe(header)


// // ACTIVE BTN
navLinks.addEventListener('click',(e) =>{
  const activeClicked = e.target.closest('.links')
  //    GUARD CLAUSE
  if (!activeClicked) return
  links.forEach(c => c.classList.remove('active'))
  activeClicked.classList.add('active')
})


//      API
fetch('https://fakestoreapi.com/products').then((res) => {
  return res.json()
})
  .then((fullResponse) => {
    let response = ''
    fullResponse.slice(0, 10).map((values) => {
      response += `
      
      <div class='card__box '>
      
      <img src=${values.image} class="card__image" alt="">
      <div class="card__text">
      <h3 class='card__head__text'>${values.title.slice(0, 12)}</h3>
      <p class='card__description__text'>${values.description.slice(0, 17)}...</p>
      <p class='price'> $ ${values.price}</p>
      <a href='' class='btn buy__btn'>Buy</a>
      </div>  
  </div>
    `
  }
  )

    document.querySelector('.cards').innerHTML = response
})
fetch('https://fakestoreapi.com/products').then((res) => {
  return res.json()
})
  .then((fullResponse) => {
    let response = ''
    fullResponse.slice(0, 5).map((values) => {
      response += `
      
      <div class='card__box '>
      
      <img src=${values.image} class="card__image" alt="">
      <div class="card__text">
      <h3 class='card__head__text'>${values.title.slice(0, 18)}</h3>
      <p class='card__description__text'>${values.description.slice(0, 17)}...</p>
      <p class='price'> $ ${values.price}</p>
      <a href='' class='btn buy__btn'>Buy</a>
      </div>  
  </div>
    `
  }
  )

    document.querySelector('.cards1').innerHTML = response
})
//    API END


// FORM RESET
document.querySelector('form').addEventListener('click', (e) => {
  e.preventDefault()
})


//       Tabs

operationBtnContainer.addEventListener('click', (e) => {
  const clicked = e.target.closest('.operation__btn')

  //    GUARD CLAUSE

  if (!clicked) return
  tabs.forEach(c => c.classList.remove('content__active'))
  clicked.classList.add('.content__active')
  operationContent.forEach(t => t.classList.remove('content__active'))
  clicked.classList.add('content__active')
  
  console.log(clicked);
  document.querySelector(`.operation__content--${clicked.dataset.tab}`).classList.add('content__active')
})

//    SECTION REVEAL ON SCROLL

const revealSections = function (entries, observer){
  const [entry] = entries
  
  // Guard Cluase
  if (!entry.isIntersecting) return
  entry.target.classList.remove('section__hidden')
  observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(revealSections, {
  root: null,
  threshold:0.15,
})

allSections.forEach((section) => {
  sectionObserver.observe(section)
  section.classList.add('section__hidden')
})


//        Copyright
let newYear = new Date().getFullYear()
copyright.innerHTML = 'copyright &copy; ' + newYear

//    ON LOAD
document.addEventListener('DOMContentloaded', (e) => {
  e.logoSpin.classList.remove('hidden')
})