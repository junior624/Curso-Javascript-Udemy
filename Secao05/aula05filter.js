var numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function filtrar_pares(n){
    return n%2 === 0; 
}

function filtrar_impares(n){
    return n % 2 !== 0;
}

function filtrar_multiplos_5(n){
    return n % 5 === 0;
}

var ret = numeros.filter(filtrar_pares);
//console.log(ret);

ret = numeros.filter(filtrar_impares);
//console.log(ret);

ret = numeros.filter(filtrar_multiplos_5);
//console.log(ret);

var alunos = [
    {nome: 'Aline', nota:8.5},
    {nome: 'Lima', nota:7},
    {nome:'Victor', nota :5}
]
console.log(alunos);

function filtrar_notas_maiores(nome){
    return nome.nota > 5;
}

var filtrados = alunos.filter(filtrar_notas_maiores);
console.log(filtrados);