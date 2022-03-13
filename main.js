function Converter(){

    let valorInserido = document.querySelector('#conversor');
    let valor = valorInserido.value;
    let valorEmReais = valor;
    let euro = valorEmReais * 5.52;
    let dolar = valorEmReais * 5.08;
    let libras = valorEmReais * 6.62;
    let bitcoin = valorEmReais / 35948.94;
    

    const moeda = document.getElementsByName("radioInput");


    if (moeda[0].checked) {
       valorEmReais = dolar;
    }else if (moeda[1].checked) {
        valorEmReais = euro;
    }else if (moeda[2].checked) {
        valorEmReais = libras;
    }else if (moeda[3].checked) {
        valorEmReais = bitcoin;
    }

    console.log(valorEmReais)   

    if (valorEmReais == bitcoin){
        document.querySelector('#resultado').innerHTML = `R$ ${valorEmReais.toFixed(5)}`;
    }else{
        document.querySelector('#resultado').innerHTML = `R$ ${valorEmReais.toFixed(2)}`;
    }
}
