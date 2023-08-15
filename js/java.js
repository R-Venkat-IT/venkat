let button = document.querySelector(".line"),
  links = document.querySelector(".nav_links");
let menu = document.getElementById("menu");
let xicon=document.getElementById('xicon');
let read=document.querySelector('.read');
let readmore=document.querySelector('.readmore')
// menu button
menu.addEventListener("click", () => {
  links.classList.toggle("disp");
  menu.classList.toggle("bx-x");
});
//   Read more button
let icon = document.getElementById("theme-icon");
read.addEventListener('click',()=>{
  readmore.classList.add("readdisp");
})
xicon.addEventListener('click',()=>{
  readmore.classList.remove("readdisp");
})
// dark & light theme
icon.addEventListener("click", () => {
  document.body.classList.toggle("light");

  icon.classList.toggle("bxs-sun");
  // icon.classList.toggle('bxs-moon')
});

window.onscroll = () => {
  links.classList.remove("disp");
  menu.classList.remove("bx-x");
  readmore.classList.remove("readdisp");
};
/*=============scroll========== */
ScrollReveal({
  reset: false,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(
  ".heading,.wrapper,.about-text,.skill li,.box-1,.box-3,.contact-left",
  { origin: "top" }
);
ScrollReveal().reveal(
  ".image,.profile-cont,.box-2,.project-cont,.contact-right",
  { origin: "bottom" }
);

const type = new Typed(".multi-text", {
  strings: ["Web Developer", "Designer", "Freelancer"],
  typeSpeed: 150,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});
window.addEventListener('scroll',reveal);

function reveal(){
  var backtop=document.getElementById("backtopdiv");
 
 var reveals=document.querySelectorAll('.reveal');
 
 if(window.pageYOffset>100){
  backtop.classList.add("topactive")

 }
 else{
  backtop.classList.remove("topactive")
 }
 for(var i=0;i<reveals.length;i++){
   var windowheight=window.innerHeight;
   var revealtop=reveals[i].getBoundingClientRect().top;
   var revealpoint=100;
   if(revealtop < windowheight - revealpoint){
     reveals[i].classList.add('dis');
   }
   else{
     reveals[i].classList.remove('dis');
   };

 }
}