
const scriptURL = 'https://script.google.com/macros/s/AKfycbw8cWtkEbcEi7QzZXF4rbJofqet9oaPiYvJqmIJD5TKL9aOwO2OMFrUyQc4DLLWF2z3/exec'

const form = document.forms['contactForm']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! Your Message is submitted successfully." ))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
  })
  
  // Header Scroll
  let nav = document.querySelector(".navbar");
  window.onscroll = function () {
      if(document.documentElement.scrollTop > 20){
          nav.classList.add("header-scrolled");
      }else{
          nav.classList.remove("header-scrolled");
      }
  } 
  
  // nav hide 
  let navBar = document.querySelectorAll(".nav-link");
  let navCollapse = document.querySelector(".navbar-collapse.collapse");
  navBar.forEach(function (a){
      a.addEventListener("click", function(){
          navCollapse.classList.remove("show");
      })
  })
   
  

  document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
  
    const options = {
      root: null,
      rootMargin: "0px 0px 0px 0px",
      threshold: 0.1
    };
  
    const observer = new IntersectionObserver(handleIntersection, options);
  
    sections.forEach(section => observer.observe(section));
  
    function handleIntersection(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!entry.target.classList.contains("footer_wrapper")) {
            entry.target.classList.add("animation");
          }
        } else {
          entry.target.classList.remove("animation");
        }
      });
    }
  });

  
