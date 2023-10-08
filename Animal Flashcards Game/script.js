// Get the base path of the current HTML file
const basePath = window.location.href.substring(0, window.location.href.lastIndexOf("/") + 1);

const animals = [
    { name: "Bear", image: `${basePath}images/Bear.jpg`, revealed: false },
    { name: "Deer", image: `${basePath}images/Deer.jpg`, revealed: false },
    { name: "Fox", image: `${basePath}images/Fox.jpg`, revealed: false },
    { name: "Human", image: `${basePath}images/Human.jpg`, revealed: false },
    { name: "Rabbit", image: `${basePath}images/Rabbit.jpg`, revealed: false },
    { name: "Raccoon", image: `${basePath}images/Raccoon.jpg`, revealed: false },
    { name: "Squirrel", image: `${basePath}images/Squirrel.jpg`, revealed: false }
    // You can continue adding more animals using the dynamic base path
];

// Function to shuffle the animals array randomly
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Shuffle the animals array before starting the game
shuffleArray(animals);

let currentIndex = 0;

function showFlashcard(index) {
    const animalImage = document.getElementById("animal-image");
    const animalName = document.getElementById("animal-name");
    
    animalImage.src = animals[index].image;
    animalName.textContent = animals[index].revealed ? animals[index].name : '';

    // When showing the flashcard, reset the revealed state to false
    animals[index].revealed = false;
}

showFlashcard(currentIndex);

document.getElementById("animal-image").addEventListener("click", () => {
    animals[currentIndex].revealed = true;
    showFlashcard(currentIndex);
});

document.getElementById("next-button").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % animals.length;
    showFlashcard(currentIndex);
});

document.getElementById("prev-button").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + animals.length) % animals.length;
    showFlashcard(currentIndex);
});
