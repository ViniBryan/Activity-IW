// Script 1: Criar um array de 2 números e ordená-los em ordem crescente
(function () {
    // Função para ordenar um array de 2 números em ordem crescente
    function ordenarArray(array) {
        return array.sort((a, b) => a - b);
    }

    // Array de exemplo com 2 números
    let numeros = [5, 2];
    // Ordenando o array
    numeros = ordenarArray(numeros);
    // Exibindo resultado
    document.getElementById('resultados').innerHTML += `<div><h2>Script 1: Ordenar array de 2 números</h2><p>Array após a ordenação: ${numeros}</p></div>`;
})();

// Script 2: Perguntar 3 números ao usuário, colocá-los em um array e exibir tal array
(function () {
    // Array para armazenar os números inseridos pelo usuário
    let numerosUsuario = [];
    for (let i = 0; i < 3; i++) {
        let numero = parseFloat(prompt("Digite um número:"));
        numerosUsuario.push(numero);
    }

    // Exibindo resultado
    document.getElementById('resultados').innerHTML += `<div><h2>Script 2: Perguntar 3 números ao usuário e exibir array</h2><p>Array inserido pelo usuário: ${numerosUsuario}</p></div>`;
})();

// Script 3: Criar um array de frutas e exibir o segundo elemento do array
(function () {
    // Array de frutas
    let frutas = ['maçã', 'banana', 'laranja', 'uva', 'manga'];

    // Exibindo o segundo elemento do array de frutas
    document.getElementById('resultados').innerHTML += `<div><h2>Script 3: Exibir segundo elemento do array de frutas</h2><p>Segundo elemento: ${frutas[1]}</p></div>`;
})();

// Script 4: Exibir o último elemento do array de frutas sem usar índice diretamente
(function () {
    // Array de frutas
    let frutas = ['maçã', 'banana', 'laranja', 'uva', 'manga'];

    // Exibindo o último elemento do array de frutas sem usar índice diretamente
    document.getElementById('resultados').innerHTML += `<div><h2>Script 4: Exibir último elemento do array de frutas sem usar índice diretamente</h2><p>Último elemento: ${frutas[frutas.length - 1]}</p></div>`;
})();

// Script 5: Modificar o array de frutas
(function () {
    // Array de frutas
    let frutas = ['maçã', 'banana', 'laranja', 'uva', 'manga'];

    // Adicionando 'abacaxi' no final do array de frutas
    frutas.push('abacaxi');

    // Adicionando 'morango' no início do array de frutas
    frutas.unshift('morango');

    // Removendo o primeiro elemento do array de frutas
    frutas.shift();

    // Removendo o último elemento do array de frutas
    frutas.pop();

    // Exibindo resultado
    document.getElementById('resultados').innerHTML += `<div><h2>Script 5: Modificar array de frutas</h2><p>Array de frutas após modificações: ${frutas}</p></div>`;
})();

// Script 6: Encontrar o índice da 'laranja' no array de frutas
(function () {
    // Array de frutas
    let frutas = ['maçã', 'banana', 'laranja', 'uva', 'manga'];

    // Encontrando o índice da 'laranja' no array de frutas
    let indiceLaranja = frutas.indexOf('laranja');

    // Exibindo resultado
    document.getElementById('resultados').innerHTML += `<div><h2>Script 6: Encontrar índice da 'laranja' no array de frutas</h2><p>Índice da 'laranja': ${indiceLaranja}</p></div>`;
})();

// Script 7: Criar um novo array com frutas que começam com 'm'
(function () {
    // Array de frutas
    let frutas = ['maçã', 'banana', 'laranja', 'uva', 'manga'];

    // Criando um novo array com frutas que começam com 'm'
    let frutasComM = frutas.filter(fruta => fruta.startsWith('m'));

    // Exibindo resultado
    document.getElementById('resultados').innerHTML += `<div><h2>Script 7: Criar novo array com frutas que começam com 'm'</h2><p>Frutas que começam com 'm': ${frutasComM}</p></div>`;
})();

// Script 8: Encontrar o índice da 'laranja' no array de frutas
(function () {
    // Array de frutas
    let frutas = ['maçã', 'banana', 'laranja', 'uva', 'manga'];

    // Encontrando o índice da 'laranja' no array de frutas
    let indiceLaranja = frutas.indexOf('laranja');

    // Exibindo resultado
    document.getElementById('resultados').innerHTML += `<div><h2>Script 8: Encontrar índice da 'laranja' no array de frutas</h2><p>Índice da 'laranja': ${indiceLaranja}</p></div>`;
})();

// Script 9: Criar um novo array com frutas que começam com a letra 'm'
(function () {
    // Array de frutas
    let frutas = ['maçã', 'banana', 'laranja', 'uva', 'manga'];

    // Filtrando frutas que começam com a letra 'm'
    let frutasComM = frutas.filter(fruta => fruta.startsWith('m'));

    // Exibindo resultado
    document.getElementById('resultados').innerHTML += `<div><h2>Script 9: Criar novo array com frutas que começam com a letra 'm'</h2><p>Frutas que começam com 'm': ${frutasComM}</p></div>`;
})();
