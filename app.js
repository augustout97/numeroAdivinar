numMenor = parseInt(prompt("Indica el primer numero menor del rango a adivinar:"));
numMayor = parseInt(prompt("Indica el segundo numero mayor del rango a adivinar:"));

let numeroSecreto =Math.floor(Math.random() * (numMayor - numMenor)) + numMenor;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 3;


while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt(`Me indicas un número entre ${numMenor} y ${numMayor} por favor:`));

    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        intentos++;

        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos el numero era ${numeroSecreto}`);
            break;
        }
    }
}