let n1 = Number(prompt('Digite um numero'));
let n2 = Number(prompt('Digite um numero'));
let n3 = Number(prompt('Digite um numero'));
let n4 = Number(prompt('Digite um numero'));
let media = 0;

if ( n1 > 0 && n1 <= 10 && n2 > 0 && n2 <= 10 && n3 > 0 && n3 <= 10 && n4 > 0 && n4 <= 10){

    media = ((n1 + n2 + n3 + n4 ) /4);


}

if ( media > 5){

    alert('Você foi aprovado ' + media)

}else{

    alert('Você foi reprovado, tente  outro dia ' + media);

}











