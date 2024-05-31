// Menu bar on click function to display the menu list
let menubtn = document.querySelector("#Menu_button");
let navbar_menulist = document.querySelector(".header_container_fluids");

menubtn.addEventListener("click",()=>{
    navbar_menulist.classList.toggle("show_menubar_list")
})

// sticky navbar scroll function

window.addEventListener("scroll",()=>{
 let header = document.querySelector("header");
 header.classList.toggle("header_sticky" , window.scrollY > 300)
})

// change menu color on change or href
const navlinks = document.querySelectorAll(".nav__link");
const windowPathName = window.location.pathname;
navlinks.forEach(navlink =>{
if(navlink.href.includes(windowPathName)){
navlink.classList.add("active_navbar_color");
}
})

gsap.registerPlugin(ScrollTrigger);
gsap.to(".footer_icon" ,{
  opacity:1,
  y:-50,
  duration:1,
  scrollTrigger:".footer_icon"
})
gsap.registerPlugin(ScrollTrigger);
gsap.to(".team_hero_section_starts" ,{
  opacity:1,
  y:-50,
  duration:1,
  scrollTrigger:".team_hero_section_starts"
})
gsap.registerPlugin(ScrollTrigger);
gsap.to(".projects_container_right_content" ,{
  opacity:1,
  y:-50,
  duration:1,
  scrollTrigger:".projects_container_right_content"
})
gsap.registerPlugin(ScrollTrigger);
gsap.to(".projects_container_right_content_2" ,{
  opacity:1,
  y:-50,
  duration:1,
  scrollTrigger:".projects_container_right_content_2"
})
gsap.registerPlugin(ScrollTrigger);
gsap.to(".project_container_content_3" ,{
  opacity:1,
  y:-50,
  duration:1,
  scrollTrigger:".project_container_content_3"
})
gsap.registerPlugin(ScrollTrigger);
gsap.to(".project_container_content_4" ,{
  opacity:1,
  y:-50,
  duration:1,
  scrollTrigger:".project_container_content_4"
})
gsap.registerPlugin(ScrollTrigger);
gsap.to(".project_container_content_5" ,{
  opacity:1,
  y:-50,
  duration:1,
  scrollTrigger:".project_container_content_5"
})
gsap.registerPlugin(ScrollTrigger);
gsap.to(".project_container_content_6" ,{
  opacity:1,
  y:-50,
  duration:1,
  scrollTrigger:".project_container_content_6"
})
gsap.registerPlugin(ScrollTrigger);
gsap.to(".project_container_content_7" ,{
  opacity:1,
  y:-50,
  duration:1,
  scrollTrigger:".project_container_content_7"
})
gsap.registerPlugin(ScrollTrigger);
gsap.to(".project_container_content_8" ,{
  opacity:1,
  y:-50,
  duration:1,
  scrollTrigger:".project_container_content_8"
})
gsap.registerPlugin(ScrollTrigger);
gsap.to(".project_container_content_9" ,{
  opacity:1,
  y:-50,
  duration:1,
  scrollTrigger:".project_container_content_9"
})