//alerta de bienvenida
window.onload=function(){alert('Bienvenido a Tpaseo'); }
window.onunload=function(){alert('Vuelva en otro momento'); }

//Fecha y día
var fecha = new Date();
document.getElementById('hora').innerHTML = fecha;

//validación de formulario
(function () {
    'use strict';
    window.addEventListener('load', function () {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function (form) {
            form.addEventListener('submit', function (event) {
                if (form.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                }
                form.classList.add('was-validated');
            }, false);
        });
    }, false);
})();

//efecto mouse Nosotros
function mOver(obj) {
    obj.innerHTML = "Conócenos"
}

function mOut(obj) {
    obj.innerHTML = "Leer más"
}

//carrusel imagenes
/**
     * Array con las imagenes y enlaces que se iran mostrando en la web
     */
var imagenes = new Array(
    ['assets/img/amigos.jpg', ''],
    ['assets/img/grupo.jpg', ''],
    ['assets/img/celebracion.jpg', ''],
);

/**
 * Funcion para cambiar la imagen y link
 */
function rotarImagenes() {
    // obtenemos un numero aleatorio entre 0 y la cantidad de imagenes que hay
    var index = Math.floor((Math.random() * imagenes.length));

    // cambiamos la imagen y la url
    document.getElementById("imagen").src = imagenes[index][0];
    document.getElementById("link").href = imagenes[index][1];
}

/**
 * Función que se ejecuta una vez cargada la página
 */
onload = function () {
    // Cargamos una imagen aleatoria
    rotarImagenes();

    // Indicamos que cada 5 segundos cambie la imagen
    setInterval(rotarImagenes, 5000);
}
//scroll
/*
$(window).scroll(function () {
    if ($("#menu").offset().top > 56) {
        $("#menu").addClass("bg-dark");
    } else {
        $("#menu").removeClass("bg-dark");
    }
});
*/