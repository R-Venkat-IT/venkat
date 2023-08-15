let button = document.querySelector(".line"),
  links = document.querySelector(".nav_links");
let menu=document.getElementById('menu');
menu.addEventListener("click", () => {
  links.classList.toggle("disp");
  menu.classList.toggle('bx-x')
  
});
let icon = document.getElementById("theme-icon");

icon.addEventListener('click',()=>{
 
  document.body.classList.toggle("light");
  icon.classList.toggle('bxs-sun'); 
  // icon.classList.toggle('bxs-moon')
})
  
  
  
window.onscroll=()=>{
  links.classList.remove("disp");
  menu.classList.remove('bx-x');
}
/*=============scroll========== */
ScrollReveal({ 
  reset:false,
  distance:'80px',
  duration:2000,
  delay:200

});
ScrollReveal().reveal('.heading,.wrapper,.about-text,.skill li,.box-1,.box-3,.contact-left', {origin:'top'});
ScrollReveal().reveal('.image,.profile-cont,.box-2,.project-cont,.contact-right', {origin:'bottom'});

const type= new Typed('.multi-text',{
  strings:['Web Developer','Designer','Freelancer'],
  typeSpeed:150,
  backSpeed:100,
  backDelay:1000,
  loop:true
})




