import { swipeLeft, swipeRight } from './utils.js'
// Element Selectors


const showcaseImages = document.querySelector('.showcase-image');

const menuIcon = document.querySelector('.menu-icon');
const mobileMenu = document.querySelector('.mobile-menu');

// Globals
let showcaseImageWidth;
window.onload = ()=>{
    showcaseImageWidth = showcaseImages?.querySelector('img')?.width;
}

window.onresize = ()=>{
    showcaseImageWidth = showcaseImages?.querySelector('img')?.width;
}

menuIcon.addEventListener('click',()=>{
    menuIcon.classList.toggle('opened');
    mobileMenu.classList.toggle('opened');
})

const footer = document.querySelector('.footer');
footer.innerHTML = 
    `${(new Date().getFullYear())}© All right reserved.
    <p>Made by <a href='https://trilodi.com'>Trilodi Team</a></p>`

// Showcase

const showCaseArrowLeftList = document.querySelectorAll('.showcase-left-arrow');
const showCaseArrowRightList = document.querySelectorAll('.showcase-right-arrow');

showCaseArrowLeftList.forEach(arrow=>{
    arrow.addEventListener('click',()=>{
        swipeLeft(showcaseImageWidth, arrow)
    })
})

showCaseArrowRightList.forEach(arrow=>{
    arrow.addEventListener('click',()=>{
        swipeRight(showcaseImageWidth, arrow)
    })
})

