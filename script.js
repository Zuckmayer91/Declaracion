document.getElementById('siBtn').addEventListener('click', function() {
    document.getElementById('respuesta').innerText = '¡Sabía que me dirías que sí!';
});



document.addEventListener('DOMContentLoaded', function() {
    const audioPlayer = document.getElementById('audioPlayer');

    // Reproducir el audio al hacer clic en cualquier lugar de la página
    document.addEventListener('click', function() {
        audioPlayer.play();
    });
});


// const noBtn = document.querySelector('#noBtn');

// noBtn.addEventListener('mouseover', function () {
//     const randomX = parseInt(Math.random()*100);
//     const randomY = parseInt(Math.random()*100);
//     noBtn.style.setProperty('top',randomY+'%');
//     noBtn.style.setProperty('left',randomX+'%');
//     noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
// })

document.addEventListener('DOMContentLoaded', function() {
    const noBtn = document.querySelector('#noBtn');
    const container = document.querySelector('.container');

    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;

    noBtn.addEventListener('mouseover', function () {
        const btnWidth = noBtn.offsetWidth;
        const btnHeight = noBtn.offsetHeight;

        const maxX = containerWidth - btnWidth;
        const maxY = containerHeight - btnHeight;

        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        noBtn.style.setProperty('top', randomY + 'px');
        noBtn.style.setProperty('left', randomX + 'px');
        noBtn.style.setProperty('transform', `translate(-${randomX}px, -${randomY}px)`);
    });
});










