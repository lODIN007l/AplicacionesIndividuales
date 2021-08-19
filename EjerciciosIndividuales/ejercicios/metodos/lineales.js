function Incidencia_sol(){
    var h=document.getElementById("h").value;
    var s=document.getElementById("s").value;
    var hora=document.getElementById("hora").value;
    var min = document.getElementById("min").value;

    if(h<0 || s<0 || hora<0 || min<0 || hora>23 ||min>59 || h=="" || s=="" || hora=="" || min=="" || hora=="" ||min==""){
        alert("Un dato no es valido");
    }
    else{
        h=parseFloat(h);
        s=parseFloat(s);
        var grad= Math.atan(h / s) * (180 / Math.PI);
        grad= grad.toFixed(2);
        var g=Math.trunc(grad);
        var m=Math.trunc((grad-g)*60);
        var s=Math.trunc((((grad-g)*60)-m)*60);

        document.getElementById("eje1Res").innerHTML=g+"º, "+m+" min, "+s+"  seg";
    }
}

function ResolverParteFraccionaria(){
    var num=document.getElementById("num").value;
    if(num=="")
        alert("Ingrese un numero");
    else{
        var arrayNum = num.toString();
        arrayNum = arrayNum.split('.')[1];
        arrayNum==undefined?document.getElementById("eje2Res").innerHTML="0":document.getElementById("eje2Res").innerHTML=arrayNum;
    }
}

function NuevoNumero(){
    var num1=document.getElementById("num1").value;
    var num2=document.getElementById("num2").value;
    var num3=document.getElementById("num3").value;
    var num4=document.getElementById("num4").value;
    var num5=document.getElementById("num5").value;

    if(Cifras5(num1) && Cifras5(num2) && Cifras5(num3) && Cifras5(num4) && Cifras5(num5)){
        var num6=num1.toString()[0]+num2.toString()[1]+num3.toString()[2]+num4.toString()[3]+num5.toString()[4];
        document.getElementById("eje3Res").innerHTML=num6;
    }
    
}

function Cifras5(num){
    if(num.toString().length===5)
        return true;
    alert("Ingrese un numero de 5 cifras");
    return false;
}