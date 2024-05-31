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
gsap.to(".price_heading" ,{
  y:-50,
  duration:1,
  opacity:1,
  scrollTrigger:".price_heading"
})
gsap.registerPlugin(ScrollTrigger);
gsap.to("#price_panning_wrapper_1" ,{
  opacity:1,
  y:-50,
  duration:1,
  delay:.1,
  scrollTrigger:"#price_panning_wrapper_1"
})
gsap.registerPlugin(ScrollTrigger);
gsap.to("#price_panning_wrapper_2" ,{
  opacity:1,
  y:-50,
  duration:1,
  delay:.3,
  scrollTrigger:"#price_panning_wrapper_2"
})
gsap.registerPlugin(ScrollTrigger);
gsap.to("#price_panning_wrapper_3" ,{
  opacity:1,
  y:-50,
  duration:1,
  delay:.5,
  scrollTrigger:"#price_panning_wrapper_3"
})

gsap.registerPlugin(ScrollTrigger);
gsap.to(".card_container_1_page" ,{
  opacity:1,
  y:-50,
  duration:1,
  scrollTrigger:".card_container_1_page"
})
gsap.registerPlugin(ScrollTrigger);
gsap.to(".card_container_2_page" ,{
  opacity:1,
  y:-50,
  duration:1,
  delay:.2,
  scrollTrigger:".card_container_2_page"
})
gsap.registerPlugin(ScrollTrigger);
gsap.to(".card_container_3_page" ,{
  opacity:1,
  y:-50,
  duration:1,
  delay:.4,
  scrollTrigger:".card_container_3_page"
})
gsap.registerPlugin(ScrollTrigger);
gsap.to(".card_container_4_page" ,{
  opacity:1,
  y:-50,
  duration:1,
  delay:.6,
  scrollTrigger:".card_container_4_page"
});
gsap.registerPlugin(ScrollTrigger);
gsap.to(".card_container_5_page" ,{
  opacity:1,
  y:-50,
  duration:1,
  delay:.1,
  scrollTrigger:".card_container_5_page"
});
gsap.registerPlugin(ScrollTrigger);
gsap.to(".card_container_6_page" ,{
  opacity:1,
  y:-50,
  duration:1,
  delay:.3,
  scrollTrigger:".card_container_6_page"
});
gsap.registerPlugin(ScrollTrigger);
gsap.to(".card_container_7_page" ,{
  opacity:1,
  y:-50,
  duration:1,
  delay:.5,
  scrollTrigger:".card_container_7_page"
});
gsap.registerPlugin(ScrollTrigger);
gsap.to(".card_container_8_page" ,{
  opacity:1,
  y:-50,
  duration:1,
  delay:.7,
  scrollTrigger:".card_container_8_page"
});