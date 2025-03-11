let galleryImage = 1

document.getElementById('main-image').setAttribute('src', `img/gallery/${galleryImage}.jpeg`)

document.getElementById('right-arrow').addEventListener('click', () => {
    galleryImage++
    if (galleryImage > 3) {
        galleryImage = 1
    }
    document.getElementById('main-image').setAttribute('src', `img/${galleryImage}.jpeg`)
    });

    document.getElementById('left-arrow').addEventListener('click', () => {
        galleryImage--
        if (galleryImage < 1) {
            galleryImage = 3
        }
        document.getElementById('main-image').setAttribute('src', `img/${galleryImage}.jpeg`)
        });