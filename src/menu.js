const menus = [
    {"name": "Original Fried Chicken", "detail": "Taste the mouth watering original Korean fried chicken", "price": "$21.99"},
    {"name": "Yangyeom Chicken", "detail": "Taste the Korean special yangyeom (sweet-chilli) chicken", "price": "$22.99"},
    {"name": "Onion Chicken", "detail": "Like onions? Wanna taste something unique? Try our onion chicken!", "price": "$22.99"},
    {"name": "Garlic Mayo Chicken", "detail": "Flavor explosion in your mouth. Taste the combination of Garlic and mayo", "price": "$23.99"}
]

function menu() {
    const main = document.createElement('div');
    const h1 = document.createElement('h1');
    const cardDiv = document.createElement('div');
    
    cardDiv.setAttribute('id', 'card-container');

    const fcImg = document.createElement('img');
    const yyImg = document.createElement('img');
    const ocImg = document.createElement('img');
    const gmImg = document.createElement('img');

    fcImg.setAttribute('src', '../src/css/friedchicken.png');
    fcImg.setAttribute('alt', 'original-chicken');

    yyImg.setAttribute('src', '../src/css/sweetchilli.jpg');
    yyImg.setAttribute('alt', 'sweet-chilli-chicken');

    ocImg.setAttribute('src', '../src/css/onionchicken.jpg');
    ocImg.setAttribute('alt', 'onion-chicken');

    gmImg.setAttribute('src', '../src/css/garlicmayo.jpg');
    gmImg.setAttribute('alt', 'garlic-mayo-chicken');

    for (i = 0; i < menus.length; i++) {
        const h3 = document.createElement('h3');
        const detailP = document.createElement('p');
        const priceP = document.createElement('p');
    }
}