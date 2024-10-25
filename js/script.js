// Obtener los elementos
const playVideoButton = document.getElementById('playVideoButton');
const videoContainer = document.getElementById('videoContainer');
const video = document.getElementById('video');
const imageButtonContainer = document.getElementById('imageButtonContainer');
const showImageButton = document.getElementById('showImageButton');
const imageContainer = document.getElementById('imageContainer');
const content = document.querySelector('.content');
const closeImageButton = document.getElementById('closeImageButton');

// Función para iniciar el video
playVideoButton.addEventListener('click', () => {
    content.classList.add('hidden');  
    videoContainer.classList.remove('hidden');  
    video.play();  
});

// Al finalizar el video
video.addEventListener('ended', () => {
    videoContainer.classList.add('hidden');  
    imageButtonContainer.classList.remove('hidden');  
});

// Mostrar imagen al hacer clic en el botón
showImageButton.addEventListener('click', () => {
    imageContainer.classList.remove('hidden');  
    imageButtonContainer.classList.add('hidden');  
});

// Al cerrar la imagen
closeImageButton.addEventListener('click', () => {
    imageContainer.classList.add('hidden');  
    content.classList.remove('hidden');  
    playVideoButton.classList.remove('hidden');
});