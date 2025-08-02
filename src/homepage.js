import restaurantImage from './homepage-img.jpg';

// const content = document.getElementById('content');
// content.style.backgroundImage = `url(${restaurantImage})`;

// const h2 = document.createElement('h2');
// h2.textContent = "Get Your Buns in Here!";
// content.appendChild(h2);

const homeButton = document.querySelector("[data-home]");
homeButton.addEventListener('click', () => {
    console.log("homeButton");

    const content = document.getElementById('content');
    content.style.backgroundImage = `url(${restaurantImage})`;

    const h2 = document.createElement('h2');
    h2.textContent = "Get Your Buns in Here!";
    content.appendChild(h2);
})
