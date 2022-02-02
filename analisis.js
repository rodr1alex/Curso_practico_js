// Helpers
function esPar(numerito){
    return (numerito % 2 === 0);
}



const salariosCol=colombia.map(function(personita){  //hola
    return personita.salary;
});

const salariosColSorted=salariosCol.sort(
    function(salaryA,salaryB){
        return salaryA-salaryB;
    }
);



//FUNCION CALCULADORA DE MEDIANA 
function medianaSalarios(lista){
    const mitad=parseInt(lista.length/2);
    var mediana;
    if(esPar(lista.length)){
        mediana=(lista[mitad]+lista[mitad-1])*0.5; 
    }else{
        mediana=lista[mitad];
    }
    return mediana;
}

const medianaGeneralCol= medianaSalarios(salariosColSorted);

//mediana del top 10%

const spliceStart=(salariosColSorted.length*0.9);
const spliceCount=salariosColSorted.length-spliceStart;

const salariosColTop10 = salariosColSorted.splice(
    spliceStart,
    spliceCount,
);

const medianaTop10Col=medianaSalarios(salariosColTop10);

console.log({
    medianaGeneralCol,
    medianaTop10Col,
})