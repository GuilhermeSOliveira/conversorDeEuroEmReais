function Converter(){

    let valorEuro = document.querySelector('#conversor');
    let valor = valorEuro.value;
    let euroHoje = 5.52;
    let bitcoinHoje = 35948.94;
    let valorEmReais = valor * euroHoje;
    let valorEmBitcoin = valor / bitcoinHoje;
    
    document.querySelector('#resultado').innerHTML = `$ ${valorEmReais.toFixed(2)}`;
    document.querySelector('#resultadoBitcoin').innerHTML = `&#8383; ${valorEmBitcoin.toFixed(5)}`;

    console.log(valorEmReais);
}