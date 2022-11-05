function generatePin () {

    let pin = Math.round( 1000 + Math.random() * 1000 );
    let generatePinDisplay = document.getElementById('generatePinDisplay');
    generatePinDisplay.value = pin;

}

let pinDisplay = document.getElementById('pinDisplay');

function pin (number) {

    pinDisplay.value += number;

}

function clr() {

    pinDisplay.value = "";

}

function erase () {

    pinDisplay.value = pinDisplay.value.slice(0, -1);

}

function submit () {

    if ( pinDisplay.value == generatePinDisplay.value ) {

        document.getElementById('notifyTrue').style.display = 'block';
        document.getElementById('notifyFalse').style.display = 'none';


    } else {

        document.getElementById('notifyFalse').style.display = 'block';
        document.getElementById('notifyTrue').style.display = 'none';

    }

    clr()

}