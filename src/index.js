// src/index.js
import "./styles.css"; // Importing the CSS file
import "./homepage.js";
import "./menu.js";

console.log("test connection");

// Homepage ////DONE
// import restaurantImage from './homepage-img.jpg';

const content = document.getElementById('content');
// content.style.backgroundImage = `url(${restaurantImage})`;

// const h2 = document.createElement('h2');
// h2.textContent = "Get Your Buns in Here!";
// content.appendChild(h2);


// Write the tab-switching logic inside of index.js. 
// You should have event listeners for each button in the header navbar 
// that wipes out the current contents of div#content and then 
// runs the correct ‘tab module’ to populate it with the new contents again.




const homeButton = document.querySelector("[data-home]")
const menuButton = document.querySelector("[data-menu]")
const aboutButton = document.querySelector("[data-about]")

homeButton.addEventListener('click', () => {
    console.log("homeButton");
})

menuButton.addEventListener('click', () => {
    console.log("menuButton");
    content.textContent = '';
    content.style.backgroundImage = '';
})























