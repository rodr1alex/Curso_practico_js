// codigo del cuadrado
function perimetroCuadrado(lado){
    return lado*4;
}

function areaCuadrado(lado){
    return lado*lado;
}




//codigo del triangulo
function perimetroTriangulo(lado1,lado2,base){
    return lado1+lado2+base;
}

function areaTriangulo(base,altura){
    return 0.5*base*altura;
}




//codigo para el circulo
function diametroCirculo(radio){
    return radio*2;
}

const PI=Math.PI;

function perimetroCirculo(radio){
    return diametroCirculo(radio)*PI;
}

function  areaCirculo(radio){
    return radio*radio*PI;
}




//Aqui interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value= input.value;

    const area=areaCuadrado(value);
    alert(area);
}



function calcularPerimetroTriangulo(){
    const input1 = document.getElementById("1");
    const input2 = document.getElementById("2");
    const input3 = document.getElementById("3");
    const value1 = parseInt(input1.value);
    const value2 = parseInt(input2.value);
    const value3 = parseInt(input3.value);
    
    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert(perimetro);

}

function calcularAreaTriangulo(){
    const input1 = document.getElementById("3");
    const input2 = document.getElementById("4");
    const base = input1.value;
    const altura = input2.value;

    const area = areaTriangulo(base,altura);
    alert(area);


}


function calcularPerimetroCirculo(){
    const input=document.getElementById("radio");
    const radio=input.value;

    const perimetro=perimetroCirculo(radio);
    alert(perimetro);

}

function calcularAreaCirculo(){
    const input=document.getElementById("radio");
    const radio=input.value;

    const area=areaCirculo(radio);
    alert(area);

}