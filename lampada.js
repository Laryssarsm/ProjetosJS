const turnOn = document.getElementById ( 'turnOn' );
const turnOff = document.getElementById ( 'turnOff' );
const lamp = document.getElementById ( 'lamp' );

function isLampBroken () {
    return lamp.src.indexOf ('quebrada') > -1
}

function lampON () {
   if ( !isLampBroken () ) { 
lamp.src = './img/ligada.jpg';
}

}

function lampOFF() {
    if ( !isLampBroken () ) {
 lamp.src = './img/desligada.jpg';
}

}

function lampBROKEN() {
lamp.src = './img/quebrada.jpg';

}

turnOn.addEventListener ( 'click', lampON );
turnOff.addEventListener ( 'click', lampOFF);
lamp.addEventListener ( 'mouseover', lampON);
lamp.addEventListener ( 'mouseleave', lampOFF);
lamp.addEventListener ( 'dblclick', lampBROKEN);