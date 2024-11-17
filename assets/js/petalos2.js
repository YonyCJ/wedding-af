function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal');
    petal.style.left = Math.random() * 100 + 'vw';
    petal.style.top = '-50px'; // Comienza fuera de la pantalla
    petal.style.animationDuration = Math.random() * 3 + 2 + 's';
    petal.style.animationDelay = Math.random() * 5 + 's';
    petal.style.backgroundImage = 'url("../assets/img/peazul.png")'; // Actualiza la ruta aquí
    document.getElementById('petals-container2').appendChild(petal);

    setTimeout(() => {
        petal.remove();
    }, (parseFloat(petal.style.animationDuration) + parseFloat(petal.style.animationDelay)) * 1000);
}

setInterval(createPetal, 300);
