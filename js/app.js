let menu = document.querySelector('#menu-hamb');
let header = document.querySelector('header');

menu.onclick=()=>{
  menu.classList.toggle('fa-times');
  header.classList.toggle('active');
}
window.onscroll=()=>{
  menu.classList.remove('fa-times');
  header.classList.remove('active');
}

const dayNight = document.querySelector('.dark-mode');
dayNight.addEventListener('click', () =>{
  dayNight.querySelector('i').classList.toggle('fa-sun');
  dayNight.querySelector('i').classList.toggle('fa-moon');
  document.body.classList.toggle('dark');
})
window.addEventListener('load', () => {
  if(document.body.classList.contains('dark')){
    dayNight.querySelector('i').classList.add('fa-sun');
  }
  else{
    dayNight.querySelector('i').classList.add('fa-moon');
  }
})

const navHome = document.getElementById('nav-home')
const navAbout = document.getElementById('nav-about')
const navPortfolio = document.getElementById('nav-portfolio')
const navContact = document.getElementById('nav-contact')

const active1=()=>{
  navHome.classList.add('active')
  navAbout.classList.remove('active')
  navPortfolio.classList.remove('active')
  navContact.classList.remove('active')
}
const active2=()=>{
  navHome.classList.remove('active')
  navAbout.classList.add('active')
  navPortfolio.classList.remove('active')
  navContact.classList.remove('active')
}
const active3=()=>{
  navHome.classList.remove('active')
  navAbout.classList.remove('active')
  navPortfolio.classList.add('active')
  navContact.classList.remove('active')
}
const active4=()=>{
  navHome.classList.remove('active')
  navAbout.classList.remove('active')
  navPortfolio.classList.remove('active')
  navContact.classList.add('active')
}