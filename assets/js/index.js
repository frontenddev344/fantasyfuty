// Toggle Menu Functionaliy Start
document.addEventListener('DOMContentLoaded', function() {
  var menuIcon = document.querySelector('.menu-icon');
  var closeIcon = document.querySelector('.close-icon');
  var body = document.body;

  menuIcon.addEventListener('click', function() {
      body.classList.add('menuToggle');
  });

  closeIcon.addEventListener('click', function() {
      body.classList.remove('menuToggle');
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







document.addEventListener('DOMContentLoaded', function () {
  // Select all accordion buttons
  const accordionButtons = document.querySelectorAll('.accordion-button');

  // Loop through each button and add a click event listener
  accordionButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const targetId = this.getAttribute('data-bs-target'); // Get the target panel to collapse/expand
      const targetPanel = document.querySelector(targetId); // The collapse panel

      // Check if the clicked button is already expanded
      const isExpanded = !this.classList.contains('collapsed');

      // Toggle the current button and panel
      if (isExpanded) {
        this.classList.add('collapsed'); // Add collapsed class to mark as closed
        targetPanel.classList.remove('show'); // Hide the panel content
      } else {
        // Close all other panels
        accordionButtons.forEach(function (btn) {
          const panel = document.querySelector(btn.getAttribute('data-bs-target'));
          btn.classList.add('collapsed'); // Collapse the other buttons
          panel.classList.remove('show'); // Hide the other panels
        });

        // Expand the clicked panel
        this.classList.remove('collapsed'); // Mark this button as expanded
        targetPanel.classList.add('show'); // Show the associated content
      }
    });
  });
});