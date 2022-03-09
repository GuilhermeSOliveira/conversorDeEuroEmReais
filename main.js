function Converter(){

    let valorEuro = document.querySelector('#conversor');
    let valor = valorEuro.value;
    let euroHoje = 5.52
    let valorEmReais = valor * euroHoje;
    
    document.querySelector('#resultado').innerHTML = `$ ${valorEmReais.toFixed(2)}`;

    console.log(valorEmReais);
}