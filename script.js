// Select the toggle button
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

// Check Local Storage for saved preference
if (localStorage.getItem('theme') === 'light') {
    body.classList.add('light-mode');
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
}

// Add Click Event Listener
themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');

    // Switch Icon and Save Preference
    if (body.classList.contains('light-mode')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-lightbulb');
        localStorage.setItem('theme', 'light');
    } else {
        icon.classList.remove('fa-lightbulb');
        icon.classList.add('fa-moon');
        localStorage.setItem('theme', 'dark');
    }
});

// Get the button
const backToTopBtn = document.getElementById("floatingBackToTop");

// Listen for the scroll event
window.addEventListener("scroll", () => {
    // If user scrolls down more than 300px, show the button
    if (window.scrollY > 300) {
        backToTopBtn.classList.add("show");
    } else {
        backToTopBtn.classList.remove("show");
    }
});

// Scroll to top smoothly when clicked
backToTopBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor jump
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});


// Select the header element
const header = document.querySelector('header');

// Listen for the scroll event
window.addEventListener('scroll', () => {
  //  // If scrolled down more than 50px...
    if (window.scrollY > 50) {
        // Add the 'scrolled' class
        header.classList.add('scrolled');
    } else {
        // Otherwise, remove it (back to transparent)
       header.classList.remove('scrolled');
    }
});


const menuToggle = document.getElementById('menu-toggle');
const navMenu = document.getElementById('nav-menu');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  
  // Optional: Change icon from Bars to X when open
  const icon = menuToggle.querySelector('i');
  icon.classList.toggle('fa-bars');
  icon.classList.toggle('fa-xmark');
});

// Close menu when a link is clicked
document.querySelectorAll('#nav-menu a').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  
    
  });
});



 const contactForm = document.getElementById('contact-form');
 const submitBtn = document.getElementById('submit-btn');

 contactForm.addEventListener('submit', function(event) {
     event.preventDefault();

     // Change button text to show progress
     submitBtn.innerText = "Sending...";
     submitBtn.disabled = true;

    
     emailjs.sendForm('service_k6whjhn', 'template_6xinvcg',this )
         .then(() => {
             alert('Message Sent Successfully!');
             contactForm.reset(); // Clear the form
             submitBtn.innerText = "Submit";
             submitBtn.disabled = false;
         }, (error) => {
             alert('Failed to send message. Please try again.');
             console.log('FAILED...', error);
             submitBtn.innerText = "Submit";
             submitBtn.disabled = false;
         });
 });


window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('down'); // This triggers the CSS above
    } else {
        header.classList.remove('down');
    }
});



const showMoreBtn = document.getElementById('show-more-btn');
const hiddenCards = document.querySelectorAll('.hidden-project');

showMoreBtn.addEventListener('click', function () {
    const isExpanding = this.innerText === "Show More Projects";

    hiddenCards.forEach(card => {
        if (isExpanding) {
            card.classList.add('is-visible');
        } else {
            card.classList.remove('is-visible');
        }
    });

    this.innerText = isExpanding ? "Show Less" : "Show More Projects";

    if (!isExpanding) {
        document.getElementById('project_section').scrollIntoView({ behavior: 'smooth' });
    }
});