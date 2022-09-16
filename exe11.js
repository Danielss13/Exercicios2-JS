        let op = Number(prompt('Qual a operação? 1.Adição.  2.Subtração. 3.Divisão. 4.Multiplicação'));
        let n1 = Number(prompt('Escreva o primeiro valor: '));
        let n2 = Number(prompt('Escreva o segundo valor: '));

        let adi = n1 + n2;
        let sub = n1 - n2;
        let div = n1 / n2;
        let mult = n1 * n2;

        if (op == 1){
            op = adi;
        }
        if (op == 2){
            op = sub;
        }
        if (op == 3){
            op = div;
        }
        if (op == 4){
            op = mult;
        }
        document.write('O número 1: ' + n1 + '<br>');
        document.write('O número 2: ' + n2 + '<br>');
        document.write('Valor da operação: ' + op);
