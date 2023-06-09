import Player from '@vimeo/player';

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);


//Mensaje de inicio del video
player.on('play', function() {
  console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
  console.log('title:', title);
});


//captura del segundo exacto donde está el video (localStorage)

//Versión de la escucha original (250 ms)
/* player.on('timeupdate', (obj) => {
  localStorage.setItem("videoplayer-current-time", obj.seconds);
  console.log(localStorage.getItem("videoplayer-current-time"));
}); */

//Versión de 1 segundo con librería throttle
player.on('timeupdate', _.throttle((obj) => {
  localStorage.setItem("videoplayer-current-time", obj.seconds);
  console.log(localStorage.getItem("videoplayer-current-time"));
}, 1000));




//Añadimos la escucha que permite establecer el video desde el momento en que se dejó
//antes de la recarga de la página
document.addEventListener("DOMContentLoaded", function() {

  player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))
  .then(function(seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function(error) {
      switch (error.name) {
          case 'RangeError':
              // the time was less than 0 or greater than the video’s duration
              console.log("Tiempo por debajo de 0 o excedido del frame del video");
              break;

          default:
              // some other error occurred
              console.log("ocurrió un error diferente");
              break;
      }
  });

});