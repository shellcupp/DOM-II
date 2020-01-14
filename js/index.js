// Your code goes here
const body = document.querySelector('body');
body.addEventListener("keydown", () => {
  body.style.backgroundColor="teal";
  body.addEventListener("keydown", () => {
      body.style.backgroundColor="blue";
  })
});

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

 const Buspic = document.querySelector('.intro img');
 Buspic.addEventListener('mouseenter', () => {
   Buspic.style.transform = 'scale(1.3)'
 })
   Buspic.addEventListener('mouseleave', () => {
    Buspic.style.transform = 'scale(1)'
  });
 
  const h2s = document.querySelectorAll('h2');
  h2s.forEach( h2s => {
  h2s.addEventListener('mousemove', () => {
      h2s.style.color ='yellow'
      h2s.style.textDecoration = 'underline'
      h2s.style.fontSize = '3.5rem'
  })
});

const h4s = document.querySelectorAll('h4');
h4s.forEach( h4s => {
h4s.addEventListener('mousemove', () => {
    h4s.style.color ='yellow'
    h4s.style.textDecoration = 'underline'
})
});

const buttoncolor = document.querySelectorAll('.btn');
buttoncolor.forEach( buttoncolor => {
    buttoncolor.addEventListener('mouseover', () => {
        buttoncolor.style.color = 'yellow'
        buttoncolor.style.backgroundColor ='black'
    })
} )

const ps = document.querySelectorAll('p');
ps.forEach( ps => {
ps.addEventListener('click', () => {
    ps.style.color = 'yellow'
})
})

const newpic = document.querySelector('.img-content img')
newpic.addEventListener('click', () => {
    newpic.src="img/bus.jpg"
})

const newpic2 = document.querySelector('.content-destination img')
newpic2.addEventListener('click', () => {
    newpic2.src="img/BUS2.jpg"
})

const footerbg = document.querySelector('.footer');
footerbg.addEventListener('dblclick', (event) => {
    footerbg.style.color ='yellow'
    footerbg.style.backgroundColor='black'
    event.stopPropagation();
})

const down = document.querySelector('.text-content');
down.addEventListener('mousedown', () => {
    down.style.transform = 'scale(1.3)'
    down.addEventListener('mouseup', () => {
        down.style.transform = 'scale(1)'
    })
})

const stopLink = document.querySelectorAll(".nav-link");
stopLink.addEventListener("click", (event) => {
  event.preventDefault();
  console.log("stopped the links")
})

//1.click
//2.dblclick
//3.mousedown
//4.mouseup
//5.mouseenter
//6.mouseleave
//7.moveover
//8.mousemove
//9.keydown
//10.keyup
