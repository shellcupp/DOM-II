// Your code goes here
const h1 = document.querySelector('h1');
h1.addEventListener('mouseenter', () => {
h1.style.color ='yellow'
h1.style.fontWeight ='bold'
h1.style.textDecoration='underline'
});

const navlinks = document.querySelectorAll('.nav-link');
navlinks.forEach( navlinks => {
    navlinks.addEventListener('click', () => { navlinks.style.color ='yellow'
})
 });

 const navbackground = document.querySelector('.main-navigation');

 navbackground.addEventListener('mouseenter', () => {
     navbackground.style.backgroundColor = 'black'
 })
 navbackground.addEventListener('mouseleave', () =>{
     navbackground.style.backgroundColor = 'gray'
 });

 const buspic = document.querySelector('.intro img');
 buspic.addEventListener('dblclick', () => {
    buspic.src = 'img\bus.jpg'
    buspic.alt ='new bus'
 });