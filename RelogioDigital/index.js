
setInterval(function(){
var data = new Date;
var corpo = document.body;


var pHora = document.getElementById('hora');
var pMinutos = document.getElementById('minutos');
var pSegundos = document.getElementById('segundos');
var pMes = document.getElementById('mes');
var pDia = document.getElementById('dia');
var pTurno = document.getElementById('ampm');


var hora = data.getHours();
var minuto = data.getMinutes();
var segundos = data.getSeconds();
var mes = data.getMonth();
var dia = data.getDate();

console.log(dia)

pHora.innerText = hora;
pMinutos.innerText = minuto
pSegundos.innerText = segundos
pMes.innerText = mes+1;
pDia.innerText = "/" +dia;


if(minuto < 10){
    pMinutos.innerText = '0'+ minuto;
}
if(segundos < 10){
    pSegundos.innerText = '0'+ segundos;
}
if(hora < 13){
        pTurno.innerText ='am';
    }else{
        pTurno.innerText ='pm';
    };
if(hora <= 5){
    corpo.style.background = 'black';

} else if(hora <=10){
    corpo.style.background = '#d37b40';
}else if(hora <=15){
    corpo.style.background = 'rgb(143, 110, 50)';
}else if(hora <= 19){
corpo.style.background = 'rgb(27, 18, 11)';
}else if(hora > 19){
corpo.style.background = 'black';
}

}, 1000);





