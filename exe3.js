let v1 = Number(prompt('Digite o primeiro numero '));
let v2 = Number(prompt('Segundo numero '));
let v3 = Number(prompt('Terceiro numero')); 

if(v1 > v2 && v1 > v3){

document.write ('O maior de todos é ' + v1 );
   
}
else if (v2 > v1 && v2 > v3){

    document.write ('O maior de todos é ' + v2 );

}

else if ( v3 > v1 && v3 > v2){

    document.write ('O maior de todos é ' + v3 );
}