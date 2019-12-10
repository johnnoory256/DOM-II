// Your code goes here

const logoHeadingEl = document.querySelector(".logo-heading");
const navEl = document.querySelector("nav");
const navElItems = document.querySelectorAll(".nav-link");
const wheelEl = document.querySelector('body');
const bodyEl = document.querySelector("body");
const imageEl = document.querySelector(".bus-img");
const imgElItems = document.querySelector(".img-content")
const destEl = document.querySelectorAll(".destination");



//1 mouseover EventListener on logo..//
  logoHeadingEl.addEventListener("mouseover", _=> {
    logoHeadingEl.classList.add("hvr-grow");
});

// 2 Mouse-Out 
navEl.addEventListener("mouseout", _ => {
  navElItems[0].classList.toggle("hvr-grow")
});

//3 Mouse-down
navEl.addEventListener("mousedown", _=> {
  navElItems[1].classList.toggle("hvr-grow");
})


//4 Mouse-Wheel
const random = (number => {
  return Math.floor(Math.random() * (number+1));

}); 
  
  const callRand = _ => {
  const rndCol = `rgb(${random(255)}  ${random(255)}  ${random(255)})`;
  document.body.style.backgroundColor = rndCol; 
}


// 5 Onload 
const loadPage = _ => {
  alert("Hello Welcome Page is loaded")
}
let count = 0;
  const scrollCount = _=> {
  document.getElementById("demo").innerHTML = count ++;
}

window.onload = loadPage;
bodyEl.addEventListener("wheel", callRand);
bodyEl.addEventListener("wheel", scrollCount);

//6 double to resize fun bus image //

imageEl.addEventListener('dblclick', function() {
  imageEl.classList.toggle("large")
  console.log("ehllo")
})

 //7 preventDefault() on anchor....//

 navEl.addEventListener("click", event=> {
   event.preventDefault();
 });

// 8 mouseenter event.../
