let n1 = Number(prompt('Digite o primeiro numero '));
let n2 = Number(prompt('Segundo numero '));
let n3 = Number(prompt('Terceiro numero')); 
let n4 = Number(prompt('Quarto numero '));
let n5 = Number(prompt('Quinto numero '));
let n6 = Number(prompt('Sexto numero'));
let soma = 0;
let nfx = 72; 

document.write (`Os numeros informados foram ${n1}, ${n2}, ${n3}, ${n4}, ${n5} e ${n6} </br>`);

if (nfx > n1){

    soma += n1;
}

if (nfx > n2){

    soma += n2;
}

if (nfx > n3){

    soma += n3;

}

if (nfx > n4){

    soma += n4;
}

if (nfx > n5){

    soma += n5;
}

if (nfx > n6){

    soma += n6;
}

 document.write (`O resultado da soma é = ` + soma)



