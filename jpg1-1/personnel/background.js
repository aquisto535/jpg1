const images = [
    "forest.jpg",
    "valley.jpg",
    "view.jpg"
]

const chooseimages = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chooseimages}`;

document.body.appendChild(bgImage)