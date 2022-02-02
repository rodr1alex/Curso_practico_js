const lista1=[
    1,
    2,
    3,
    1,
    2,
    3,
    4,
    2,
    2,
    2,
    1,
];


function moda(lista){
    const listaObjeto={};

    lista.map(function(valor){
        if(listaObjeto[valor]){
            listaObjeto[valor] += 1;
        }else{
            listaObjeto[valor]=1;
        }
    });
    
    const arrayOrdenado=Object.entries(listaObjeto).sort(function(a,b){
        return b[1]-a[1];
    });

    const moda=arrayOrdenado[0];  
    return moda;

}


function mediaGeometrica(lista){
    var multi=1;
    for(i=0;i<lista.length;i++){
        multi=multi*lista[i];
    }
    console.log(multi);
    const media= Math.pow(multi,(1/lista.length));
    return media;
}