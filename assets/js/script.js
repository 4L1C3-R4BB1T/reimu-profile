let image = document.querySelector('#image');
let outfits = document.querySelectorAll('.outfits li img');

outfits.forEach(outfit => {
    outfit.addEventListener('click', () => {
        image.src = `assets/img/outfit/${outfit.alt}.png`;
        image.alt = outfit.alt;
    })
});