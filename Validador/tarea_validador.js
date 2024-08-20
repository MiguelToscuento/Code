document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();//metodo para prevenir errores
    const RESERVADA1 = document.getElementById("reservada1").value;
    const RESERVADA2 = document.getElementById("reservada2").value;
    const RESERVADA3 = document.getElementById("reservada3").value;
    const RFC = document.getElementById("rfc").value;
    const IDENTIFICADOR = document.getElementById("identificador").value;
    const RESULTADO = document.getElementById("resultado");

    RESULTADO.innerHTML = "";

    const reservadas = ["break", "case", "catch", "class", "const", "continue", "debugger",
        "default", "delete", "do", "else", "enum", "export", "extends", "false", "finally",
        "for", "function", "if", "import", "in", "instanceof", "new", "null", "return", "super",
        "switch", "this", "throw", "true", "try", "typeof", "var", "void", "while", "with", "yield"
        , "let", "static", "await", "async", "arguments", "implements", "interface", "package", "private",
        "protected", "public"];

    //Esta seccion obtiene los elementos de html pero sin su valor es decir, el objeto en bruto
    const reservada1 = document.getElementById("reservada1");
    const reservada2 = document.getElementById("reservada2");
    const reservada3 = document.getElementById("reservada3");

    if (reservadas.includes(RESERVADA1)) {
        reservada1.style.backgroundColor = "green";
    } else {
        reservada1.style.backgroundColor = "red"    
    }
    if (reservadas.includes(RESERVADA2)) {
        reservada2.style.backgroundColor = "green";
    } else {
        reservada2.style.backgroundColor = "red";
    }
    if (reservadas.includes(RESERVADA3)) {
        reservada3.style.backgroundColor = "green";
    } else {
        reservada3.style.backgroundColor = "red";
    }

    //seccion para los identificadores
    let operadores = ["+", "-", "*", "/", "%", "++", "--", "=", "==", "===",
        "!==", ">", "<", ">=", "<=", "&&", "||", "!", ";", ",", "(", ")", "{", "}", "[", "]"];


    const identificador = document.getElementById("identificador");

    let almacen = [];
    let aux = "";
    aux = IDENTIFICADOR;

    for (let i = 0; i < aux.length; i++) {
        almacen[i] = aux.charAt(i);
    }

    if (almacen[0] >= 0 || operadores.includes(almacen[0])) {
        identificador.style.backgroundColor = "red";
    } else {
        identificador.style.backgroundColor = "green";
    }
    //seccion para el rfc
    const rfc = document.getElementById("rfc");

    let almacena_RFC = [];
    let aux_RFC = "";
    aux_RFC = RFC;

    for (let i = 0; i < aux_RFC.length; i++) {
        aux_RFC[i] = almacena_RFC[i];
    }

    let alfabeto = [
        "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"
    ];

    let mes = parseInt(aux_RFC.slice(6, 8), 10);//el numero 10 es la base en la que se debe convertir la seccion de cadena es decir, la cadena en esta seccion se va a convertir en un numero en base decimal
    let dia = parseInt(aux_RFC.slice(8, 10), 10);

    if (alfabeto.includes(aux_RFC[0]) && alfabeto.includes(aux_RFC[1]) && alfabeto.includes(aux_RFC[2]) && alfabeto.includes(aux_RFC[3])) {
        if (mes >= 1 && mes <= 12 && dia >= 1 && dia <= 31) {
            rfc.style.backgroundColor = "green";
        } else {
            rfc.style.backgroundColor = "red";
        }
    } else {
        rfc.style.backgroundColor = "red";
    }

    if (aux_RFC.length > 13 && aux_RFC < 12) {
        rfc.style.backgroundColor = "red";
    }

});