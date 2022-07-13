function criaSegundos(segundos) {
    const data = new Date(segundos * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false, timeZone: 'GMT'
    })
}

let segundos = 0;
let timer;
function iniciaRelogio() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = criaSegundos(segundos);
    }, 1000);
}

const relogio = document.querySelector('.relogio');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar= document.querySelector('.zerar');

iniciar.addEventListener('click', function(event) {
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
});
pausar.addEventListener('click', function(event) {
    relogio.classList.add('pausado');
    clearInterval(timer);
});
zerar.addEventListener('click', function(event) {
    clearInterval(timer); relogio.innerHTML = '00:00:00';
    segundos = 0;
    relogio.classList.remove('pausado');
});