// Questão 1

// A)
/*
let fat = 1;
n = 7

while (n >= 1){

    fat =  fat*n
    n--

}

document.write('O resultado de 7! é: ', fat)*/

//B)
/*
let fat = 1
n = 20

while (n >= 1){

    fat =  fat*n
    n--
}

document.write('O resultado de 20! é: ', fat)*/

//C) 
/*
let fat = 1;
n = 4

while (n >= 1){

    fat = fat*n
    n--
}

let fot = 1;
n = 7

while (n >= 1){
    fot = fot*n
    n--
}

let resultado = (fat*fot)

document.write('O resultado da multiplicação entre 4! e 7! é: ',  resultado)*/



// Questão 2
/*
let c = []
let g, nome

for(c = 1; c < 3; c++){

    nome = prompt('Informe o nome do cliente: ')
    g = Number(prompt('Informe o valor gasto pelo cliente no ano passado: '))

    if(g<1000){
        g = g*0.10   
    }
    else{
        g = g*0.15
    }
    document.write(`
        <br>O nome do cliente: ${nome} <br>
        O cliente pode gastar de bônus na loja: ${g}
    `)
}*/

// Questão 3 
/*
var base = Number(prompt('Digite o valor da base: '))
var total = 0
var n = Number(prompt('Digite o valor da expoente: '))
var control = n
    
    for(control = n; control > 1; control--){
        total += base * base
    }
    
alert(`
    ${base} elevado ao ${n} é igual a: ${total}
`)
*/
// Questão 4
/*
let respostas = []
let idade, nota
for(c=0; c<20; c++){

    idade = parseInt(prompt("Informe a idade ["+(c+1)+"/20]: "))
    nota = parseInt(prompt("Informe a nota ["+(c+1)+"/3]: "))
    respostas.push([idade, nota])
}

let  soma_idade = 0, media_idade = 0, pessoas = 0;
let regular = 0, bom = 0, otimo = 0, porcentagem_bom = 0

for(resposta of respostas){
    
    if(resposta[1] == 1){
    otimo ++
    soma_idade += resposta[0]
    pessoas ++
    }
    else if(resposta[1] == 2){
        bom++
    }
    else if(resposta[1] == 3){
        regular++
    }
    
    else{
        document.write('Número inválido!')
    }
}
porcentagem_bom = bom / 0.2
media_idade = soma_idade / pessoas
document.write("A quantidade de pessoas que responderam 'ótimo' é: ",otimo+'<br>')
document.write("A quantidade de pessoas que responderam 'bom' é: ",bom+'<br>')
document.write("A quantidade pessoas que responderam 'regular': ",regular+'<br>')
document.write("A média das idades das pessoas que responderam 'ótimo' é: ",media_idade+'<br>')
document.write("A porcentagem de pessoas responderam 'bom': ",porcentagem_bom+'<br>')*/


// Questão 5 
/*
let i
let c = 1
let stop

while(stop != 1){

    let i = Number(prompt('Digite valores números: '))
    c = c*i
    stop = prompt('Quer parar o programa? 1- sim  2- Não')
    
}
document.write('O resultado da sua multiplicação é: ',c)
*/


// Questão 6 
/*
let acumulaSalario = 0;
let i = 0; 
let n =  prompt('Digite a quantidade dos funcionários: ')
let menor_salario;
let maior_salario;


while(i < n){
    
    let nome = prompt('Digite o nome do usuário: ')
    let salario = Number(prompt('Digite o salário do usuário'))

    if(i == 0){
        menor_salario = salario
        maior_salario = salario
    }else{
        if(salario > maior_salario){      
        maior_salario = salario
    }else if(salario < menor_salario){
        menor_salario = salario
    }
}
    acumulaSalario = acumulaSalario + salario
    i++
}
document.write(`
    Média dos salários: ${(acumulaSalario/n).toFixed(2)}<br>
    Maior Salário: ${maior_salario}<br>
    Menor Salário: ${menor_salario}<br>
`)*/



// Questão 7 
/*
let aluno, idade, iTotal=0, tamanho, tTotal=0
let turma = 1 

while(turma <= 1){

    tamanho = Number(prompt('Digite o tamanho do aluno: '))
    idade = Number(prompt('Digite a idade do aluno: '))

    if(tamanho < 1.70){
        iTotal+= idade
    }
    else if(idade < 20){
        tTotal += tamanho
    }
   turma ++
}
document.write(`
    A idade média dos alunos com menos de 1,70m  de altura: ${iTotal/3}<br>
    A altura média dos alunos com mais de 20 anos: ${tTotal}<br>
`)*/



// Questão 8 
/*
let c = []
let g,stop, nome = ""

while(true){

    nome = prompt('Informe o nome do cliente: ')
    g = Number(prompt('Informe o valor gasto pelo cliente no ano passado: '))

    if(g<1000){
        g = g*0.10   
    }
    else{
        g = g*0.15
    }
    document.write(`
    O nome do cliente: ${nome}<br>
    O cliente pode gastar de bônus na loja: ${g}<br>
    `)

    var esc = prompt('Você deseja cadastrar mais um cliente? 1- Sim   2- Não')
    if (esc != 1){
      break
    }
}


// Questão 9 
/*
let crianca = pcrianca = adosle = adulto = sr = 0

while(true){

    idade = Number(prompt('Digite sua idade: '+'\n'+ 'Obs.: Não é permitida idades negativas.' ))

        if(idade < 0){
            break
        }

        if(idade >= 0 && idade <= 5){
         crianca++
        } 

        else if(idade >= 6 && idade <= 13){
         pcrianca++
        }  

        else if(idade >= 14 && idade <= 17){
         adosle++
        } 

        else if(idade >= 18 && idade <= 59){
            adulto++
        } 

        else if(idade >= 60){
         sr++
        }
}
    
document.write(`
    Quantidade de crianças pequenas: ${crianca}<br>
    Quantidade de crianças grandes: ${pcrianca}<br>
    Quantidade de adolescentes: ${adosle}<br>
    Quantidade de adultos: ${adulto}<br>
    Quantidade de idosos: ${sr}<br>
`)*/



// Questão 10 
/*
var qtd = 0;
var regular = 0;
var bom = 0;
var otimo = 0;
var idade = 0;

var soma_idade = 0;
    
    do{

        qtd++;
        idade = Number(prompt('Qual a sua idade?'));
        var resposta = prompt("Informe a nota: "+'\n'+'1- Ótimo'+'\n'+'2- Bom'+'\n'+'3- Regular');

        if(resposta == 1){
            regular++;
        } 
        else if(resposta == 2){
            bom++;
        } 

        else if(resposta == 3){
            otimo++;
            soma_idade+=idade;
        }

        if(regular>10){
            break;
        }

    }while(qtd<3)

    
   document.write(`
    --- Pesquisa --- <br>
    A quantidade de pessoas é:${qtd}<br>
    A quantidade de pessoas que responderam 'ótimo' é: ${otimo}<br>
    A quantidade pessoas que responderam 'bom': ${bom}<br>
    A quantidade pessoas que responderam 'regular': ${regular} pessoas<br>
    A média das idades das pessoas que responderam 'ótimo' é ${Number(soma_idade/otimo)} anos<br>
    A porcentagem de pessoas responderam 'bom': ${(bom/qtd)*100}<br>
    `)*/