
let banner = document.querySelector('.banner');
let dayNight = document.querySelector('.dayNight');
dayNight.onclick = function () {

    banner.classList.toggle('night');
    document.body.classList.toggle('night')
}
//new code again :<
let menu = document.querySelector('.menu');
let ul = document.querySelector('.ul');

// Function to toggle the menu
function toggleMenu(event) {
    if (window.innerWidth <= 1000) { // Only toggle menu in mobile mode
        event.stopPropagation(); // Prevent the click from propagating to the document
        ul.style.display = ul.style.display === 'flex' ? 'none' : 'flex';
    }
}

// Function to close the menu when clicking outside
function closeMenu() {
    if (window.innerWidth <= 1000) { // Only close menu in mobile mode
        ul.style.display = 'none';
    }
}

// Add event listener to the menu icon
menu.addEventListener('click', toggleMenu);

// Add event listener to the document to close the menu when clicking outside
document.addEventListener('click', closeMenu);

// Prevent the menu from closing when clicking inside the ul
ul.addEventListener('click', function (event) {
    event.stopPropagation();
});
// Check if the user has visited the site before
if(localStorage.getItem('visited') === null) {
    // If not, set the visited value to 1 and display a welcome message
    localStorage.setItem('visited', 1);
    console.log("Welcome to our website!");
  } else {
    // If yes, increment the visited value and display the total number of visits
    let visited = parseInt(localStorage.getItem('visited')) + 1;
    localStorage.setItem('visited', visited);
    console.log(`You have visited our website ${visited} times.`);
  }
  
