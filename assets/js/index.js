// Toggle Menu Functionaliy Start
$(document).ready(function () {
    $(".menu-icon").click(function () {
        $("body").addClass("menuToggle");
    });
    $(".close-icon").click(function () {
        $("body").removeClass("menuToggle");
    });
});
// Toggle Menu Functionaliy End

// Animation On Scroll JS Start
AOS.init();
// Animation On Scroll JS Start

 //Cookies JS Start
 const cookiesBox = document.querySelector('.wrapper'),
 buttons = document.querySelectorAll('.button');

// ---- ---- Show ---- ---- //
const executeCodes = () => {
 if (document.cookie.includes('AlexGolovanov')) return;
 cookiesBox.classList.add('show');

 // ---- ---- Button ---- ---- //
 buttons.forEach((button) => {
   button.addEventListener('click', () => {
     cookiesBox.classList.remove('show');

     // ---- ---- Time ---- ---- //
     if (button.id == 'acceptBtn') {
       document.cookie =
         'cookieBy= AlexGolovanov; max-age=' + 60 * 60 * 24 * 30;
     }
   });
 });
};
window.addEventListener('load', executeCodes);
// //Cookies JS End