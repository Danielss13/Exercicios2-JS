let n1 = Number(prompt('Digite o primeiro numero '));
let n2 = Number(prompt('Segundo numero '));
let n3 = Number(prompt('Terceiro numero')); 
let n4 = Number(prompt('Quarto numero '));

if ( n1 > n2 && n1 > n3 && n1 > n4){

    document.write (`O primeiro numero é ${n1} </br> O ultimo numero é ${n4} </br> O maior de todos é ${n1}`)
}

if ( n2 > n1 && n2 > n3 && n2 > n4){

    document.write (`O primeiro numero é ${n1} </br> O ultimo numero é ${n4} </br> O maior de todos é ${n2}`)
}

if ( n3 > n1 && n3 > n2 && n3 > n4){

    document.write (`O primeiro numero é ${n1} </br> O ultimo numero é ${n4} </br> O maior de todos é ${n3}`)
}

if ( n4 > n1 && n4 > n2 && n4 > n3){

    document.write (`O primeiro numero é ${n1} </br> O ultimo numero é ${n4} </br> O maior de todos é ${n4}`)
}

