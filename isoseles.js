//Funcion que calcula si es isoseles
function esIsoseles(a,b,c){
    if((a==b)||(a==c)||(b==c)){
        var es="si es isoseles"
    }
    else{
        es="no es";
    }
    return es;
}

//funcion que calcula la altura
function altura(a,b,c){
    var l=lado(a,b,c);
    var b=base(a,b,c);
    var h;
    h=Math.sqrt((l*l)-(0.25*b*b));
    return h;
}

//funcion que calcula el lado
function lado(a,b,c){
    if(a==b){
        var lado=a;
    }
    else if(a==c){
        var lado=a;
    }
    else if(b==c){
        var lado=b;
    }
    return lado;
}

//funcion que calcula la base
function base(a,b,c){
    if(a==b){
        var base=c;
    }
    else if(a==c){
        var base=b;
    }
    else if(b==c){
        var base=a;
    }
    return base;
}


//interactuamos con html

function f1(){
    const l1=document.getElementById("1");
    const l2=document.getElementById("2");
    const l3=document.getElementById("3");
    const a=l1.value;
    const b=l2.value;
    const c=l3.value;

    const es=esIsoseles(a,b,c);
    alert(es);
}

function f2(){
    const l1=document.getElementById("1");
    const l2=document.getElementById("2");
    const l3=document.getElementById("3");
    const a=l1.value;
    const b=l2.value;
    const c=l3.value;

    const al=altura(a,b,c);
    alert(al);
}