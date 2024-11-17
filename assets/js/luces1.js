$(document).ready(function () {
    function crearExplosion() {
        // Crear un contenedor para la explosión
        const $contenedorExplosion = $('<div class="contenedor-explosion"></div>');
        const numCírculos = 200; // Incrementamos a muchos más círculos para mayor densidad

        // Crear múltiples círculos pequeños para la explosión
        for (let i = 0; i < numCírculos; i++) {
            const $circulo = $('<div class="circulo"></div>');

            // Direcciones y distancias aleatorias
            const angulo = Math.random() * 360; // Dirección en grados
            const distancia = Math.random() * 300 + 50; // Distancia inicial de la explosión
            const x = Math.cos((angulo * Math.PI) / 180) * distancia;
            const y = Math.sin((angulo * Math.PI) / 180) * distancia;

            // Posición inicial y destinos del círculo
            $circulo.css({
                transform: `translate(0, 0)`, // Empiezan juntos
                animationDelay: `${Math.random() * 0.2}s`, // Animación con un pequeño retraso aleatorio
            });

            // Agregar movimiento de caída lento
            $circulo.data('destino', `translate(${x}px, ${y}px)`);
            $circulo.data('caida', `translate(${x}px, ${y + 200}px)`); // Caída más pronunciada pero lenta

            $contenedorExplosion.append($circulo);
        }

        // Posicionar el contenedor en un lugar aleatorio
        $contenedorExplosion.css({
            top: Math.random() * $(window).height() + "px",
            left: Math.random() * $(window).width() + "px",
        });

        $('body').append($contenedorExplosion);

        // Iniciar la animación de explosión
        setTimeout(() => {
            $contenedorExplosion.find('.circulo').each(function () {
                const destino = $(this).data('destino');
                $(this).css({ transform: destino });
            });
        }, 50);

        // Simular caída lenta de los círculos
        setTimeout(() => {
            $contenedorExplosion.find('.circulo').each(function () {
                const caida = $(this).data('caida');
                $(this).css({
                    transform: caida,
                    opacity: 0, // Desvanecer mientras caen
                });
            });
        }, 1000); // Inicia la caída después de 1 segundo

        // Eliminar el contenedor
        setTimeout(() => {
            $contenedorExplosion.remove();
        }, 3000); // El efecto completo dura 3 segundos
    }

    // Llamar a la función de explosión cada cierto tiempo
    setInterval(crearExplosion, 2000); // Ligeramente más espaciado
});
