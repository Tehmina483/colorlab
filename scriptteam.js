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
gsap.to(".team_section_1" ,{
  opacity:1,
  y:-50,
  duration:1,
  scrollTrigger:".team_section_1"
})
gsap.registerPlugin(ScrollTrigger);
gsap.to(".team_section_2" ,{
  opacity:1,
  y:-50,
  duration:1,
  delay:.3,
  scrollTrigger:".team_section_2"
})
gsap.registerPlugin(ScrollTrigger);
gsap.to(".team_section_3" ,{
  opacity:1,
  y:-50,
  duration:1,
  delay:.5,
  scrollTrigger:".team_section_3"
})
gsap.registerPlugin(ScrollTrigger);
gsap.to(".team_section_4" ,{
  opacity:1,
  y:-50,
  duration:1,
  delay:.7,
  scrollTrigger:".team_section_4"
})
gsap.registerPlugin(ScrollTrigger);
gsap.to(".team_section_5" ,{
  opacity:1,
  y:-50,
  duration:1,
  scrollTrigger:".team_section_5"
})
gsap.registerPlugin(ScrollTrigger);
gsap.to(".team_section_6" ,{
  opacity:1,
  y:-50,
  duration:1,
  delay:.3,
  scrollTrigger:".team_section_6"
})
gsap.registerPlugin(ScrollTrigger);
gsap.to(".team_section_7" ,{
  opacity:1,
  y:-50,
  duration:1,
  delay:.5,
  scrollTrigger:".team_section_7"
})
gsap.registerPlugin(ScrollTrigger);
gsap.to(".team_section_8" ,{
  opacity:1,
  y:-50,
  duration:1,
  delay:.7,
  scrollTrigger:".team_section_8"
})