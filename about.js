// Menu bar on click function to display the menu list
let menubtn = document.querySelector("#Menu_button");
let navbar_menulist = document.querySelector(".header_container_fluids");

menubtn.addEventListener("click",()=>{
    navbar_menulist.classList.toggle("show_menubar_list")
})

// sticky navbar scroll function

window.addEventListener("scroll",()=>{
 let header = document.querySelector("header");
 header.classList.toggle("header_sticky" , window.scrollY > 500)
})


// change menu color on change or href
const navlinks = document.querySelectorAll(".nav__link");
const windowPathName = window.location.pathname;
navlinks.forEach(navlink =>{
if(navlink.href.includes(windowPathName)){
navlink.classList.add("active_navbar_color");
}
})




// countor js starts 
let nums = document.querySelectorAll(".nums .num");
let section = document.querySelector(".progress_section");
let started = false; // Function Started? No

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 700) {
    if (!started) {
      nums.forEach((num) => startCount(num));
      started = true;
    }
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = 0;
  let increment = goal / 200; // Adjust the increment to control the speed

  let countInterval = setInterval(() => {
    count += increment;
    el.textContent = Math.ceil(count);

    if (Math.ceil(count) >= goal) {
      clearInterval(countInterval);
      el.textContent = goal; // Ensure it displays the goal value exactly
    }
  }, 10); // Adjust the interval time to control the speed
};















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
gsap.to(".archlab_about_section" ,{
  opacity:1,
  y:-30,
  duration:1,
  scrollTrigger:".archlab_about_section"
});
gsap.registerPlugin(ScrollTrigger);
gsap.to(".addto_quote_form" ,{
  opacity:1,
  y:-50,
  duration:1,
  delay:.3,
  scrollTrigger:".addto_quote_form"
});
gsap.registerPlugin(ScrollTrigger);
gsap.to(".progress_section" ,{
  opacity:1,
  y:-50,
  duration:1,
  scrollTrigger:".progress_section"
});


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
gsap.to(".price_heading" ,{
  y:-50,
  duration:1,
  opacity:1,
  scrollTrigger:".price_heading"
})
gsap.registerPlugin(ScrollTrigger);
gsap.to(".testimonial_hading" ,{
  y:-50,
  duration:1,
  opacity:1,
  scrollTrigger:".testimonial_hading"
})
gsap.registerPlugin(ScrollTrigger);
gsap.to(".container" ,{
  y:-50,
  duration:1,
  opacity:1,
  scrollTrigger:".container"
})