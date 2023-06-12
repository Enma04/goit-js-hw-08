// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// Descrito en la documentación
import SimpleLightbox from "simplelightbox";
// Importación adicional de estilos
import "simplelightbox/dist/simple-lightbox.min.css";

console.log(galleryItems);

console.log(SimpleLightbox);


//--------------------------------------------------------------------------------
//------------------- DEFINICIONES ---------------------------------------------

const galleryList = document.querySelector(".gallery");

const galleryHTML = galleryItems.map( ( { original, preview, description } ) => 
    `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img class="gallery__image" src=" ${preview} " alt="${description}" />
        </a>
    </li>`).join("");

galleryList.insertAdjacentHTML('afterbegin', galleryHTML);

var lightbox = new SimpleLightbox( '.gallery a', { captionsData: "alt", captionDealy: 250} );

lightbox.on('show.simplelightbox', (e) => {
    e.preventDefault();
    console.log("Estoy en el lightbox!");
});

