function esPar(numerito){
    if(numerito % 2 ===0){
        return true;
    }
    else{
        return false;
    }
}

function mediana(lista){
    lista=ordena(lista);
    const mitadLista=lista.length/2;
    if(esPar(lista.length)){
        var suma = lista[(mitadLista-1)]+lista[mitadLista];
        var mediana = suma/2;
    }
    else{
        var posicion=parseInt(mitadLista);
        mediana=lista[posicion];
    }
    return mediana;
}

function ordena(lista){
    lista.sort(function(a, b) {
    return a - b;
    });
    return lista;
}