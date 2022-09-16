let v1 = Number(prompt('Digite o primeiro numero '));
let v2 = Number(prompt('Segundo numero '));
let v3 = Number(prompt('Terceiro numero')); 
let res1 = v1 + v2 
let res2 = v2 + v3 
let res3 =  v3 + v1 

if(v1 > v2 && v2 > v3 ){


    document.write ('A soma dos dois maiores é = ' + res1 );
       
    }
    else if (v2 > v1 && v3 > v1){
    
        document.write ('A soma dos dois maiores é = ' + res2 );
    
    }
    
    else if ( v3 > v2 && v1 > v2){
    
        document.write ('A soma dos dois maiores é = ' + res3);

        }
