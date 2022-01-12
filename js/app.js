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