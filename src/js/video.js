window.addEventListener('DOMContentLoaded', function () {
    var video = document.querySelector('.how-it-is-made-video');
    video.addEventListener('click', function () {
        if (video.classList.contains('ready')) {
            return; 
        }

        video.classList.add('ready');
        video.insertAdjacentHTML('afterbegin', '<iframe src="https://www.youtube.com/embed/DISjdfkSjc8?autoplay=1" title="YouTube video player" frameborder="0" class="how-it-is-made-iframe-video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')
    });
});


