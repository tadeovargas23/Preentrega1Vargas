function verificarParImpar() {
    let numero;

    while (true) {
        numero = parseInt(prompt("Ingrese un número para verificar si es par o impar:"));

        if (!isNaN(numero)) {
            break; 
        } else {
            alert("Por favor, ingrese un número válido."); 
        }
    }

    if (numero % 2 === 0) {
        alert(numero + " es un número par.");
    } else {
        alert(numero + " es un número impar.");
    }
}

verificarParImpar();
