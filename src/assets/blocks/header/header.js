document.addEventListener('DOMContentLoaded', function(){
     let burger = document.querySelector('.burger');

     burger.onclick = () => {
         if (burger.classList.contains('burger_open')) {
             burger.classList.remove('burger_open')
         } else {
             burger.classList.add('burger_open')
         }
     }
})