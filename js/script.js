const header = document.querySelector('header');

window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 0);
});

const topscroll = document.querySelector('#top-scroll');

window.addEventListener("scroll", function () {
    topscroll.classList.toggle("topdown", window.scrollY > 800);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    navlist.classList.toggle('active')
}

window.onscroll = () => {
    menu.classList.remove('bx-x')
    navlist.classList.remove('active')
}

// scroll ScrollReveal

const sr = ScrollReveal({
    duration: 2000,
    reset: true,
    distance: '45px'
})

sr.reveal('.img-p', { delay: 350, origin: 'bottom' });
sr.reveal('.text-p', { delay: 350, origin: 'top' });

sr.reveal('#about, #services, #portfolio, #contact', { delay: 250, origin: 'bottom' });


// darkmode

let icon = document.querySelector('#icon-m');

icon.onclick = () => {
    document.body.classList.toggle('dark-theme');
      if (document.body.classList.contains('dark-theme')){
          icon.src = "img/sun.png";
      }
      else{
          icon.src = "img/moon.png";
      }
   
}
//  contact form

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwWlgXqCcqTs9sCwa-kT-BpYNHzowekrPZHLrLZ9az4BBXcj5f18qYE2mqm5IM0VDRI_w/exec'
  const form = document.forms['submit-to-google-sheet']

  const msg = document.getElementById('msg')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
         msg.innerHTML = "Form Submit Successfully"
         setTimeout(function(){
            msg.innerHTML = ""
         },2000)
         form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
