let nav = document.querySelector('nav');

window.addEventListener('scroll', e => {
   e.preventDefault();
   if (window.scrollY >= 100) {
      nav.style.backgroundColor = '#FFFFFF';
   }
   else {
      nav.style.backgroundColor = 'transparent';
   }
})

let label = document.querySelector('label');

window.addEventListener('scroll', e => {
   e.preventDefault();
   if (window.scrollY >= 100) {
   label.style.color = '#EF4B6C';
   }
   else {
      label.style.color = '#FFFFFF';
   }
})
