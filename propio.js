const a=[3,7];


//  FUNCION MEDIA ARITMETICA
function calcularMediaAritmetica(lista){
        const sumaLista = lista.reduce(
            function (valorAcumulado = 0,nuevoElemento){
                return valorAcumulado + nuevoElemento;
            }
        );        
        const promedioLista = sumaLista / lista.length;
        return promedioLista;
    }

//FUNCION MEDIANA
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

//FUNCION MODA
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
    console.log(arrayOrdenado);
    var moda=[];
    moda.push(arrayOrdenado[0][0]);
    for(i=1;i<arrayOrdenado.length;i++){
        if(arrayOrdenado[i][1]==arrayOrdenado[0][1]){
            moda.push(arrayOrdenado[i][0]);
        }
    }
    console.log(moda); 
    return moda;

}

//FUNCION MEDIA GEOMETRICA
function mediaGeometrica(lista){
    var multi=1;
    for(i=0;i<lista.length;i++){
        multi=multi*lista[i];
    }
    const media= Math.pow(multi,(1/lista.length));
    return media;
}


//INTERACTUAMOS CON HTML
function f1(){
    const b=calcularMediaAritmetica(d);
    r1.innerText="El promedio es: "+b;
}

function f2(){
    const b=mediana(d);
    r2.innerText="La mediana es: "+b;
}

function f3(){
    const b=moda(d);
    var mod="La moda es: "
    for(i=0;i<b.length;i++){
        var mod=mod+b[i]+", ";
    }
    r3.innerText=mod;
}

function f4(){
    const b=mediaGeometrica(d);
    r4.innerText="La media geometrica es: "+b;
}

var d=[];
var j=0;
var valoresIngresados="Valores ingresados: ";
function f5(){
    j=j+1;
    var b=document.getElementById("datosInput");
    var c=parseInt(b.value) ;
    d.push(c);
    valoresIngresados=valoresIngresados+d[j-1]+", ";
    
    r5.innerText=valoresIngresados;
    return d;
}

console.log(d);