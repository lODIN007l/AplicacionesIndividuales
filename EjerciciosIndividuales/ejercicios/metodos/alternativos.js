function Vuelo(){
    var n = document.getElementById("tVuelo").value;
    var t = document.getElementById("mVuelo").value;

    if(!Entero(n) && !Entero(t) || n<0 || t<0 || n=="" || t==""){
        alert("Dato no valido")
    }
    else{
         var n = parseInt(n);
         var t = parseInt(t);
         var total = parseInt(10+n);
        if(t>total){
            alert("El tiempo transcurrido es mayor al total de vuelo");
        }
        else{
            if(t<=10)
                document.getElementById("eje1Res1").innerHTML="Despegando"
            else{
                if(t>=(total-1))
                    document.getElementById("eje1Res1").innerHTML="Preparandose para aterrizar";
                else{
                    document.getElementById("eje1Res1").innerHTML="en vuelo";
                }
            }
            var h= total/60 | 0, m= total%60 | 0;
            document.getElementById("eje1Res2").innerHTML=h+"H:"+m+"M, "+15+"s";
        }  

    }

    
}

function Entero(num){
    if(num%1==0){
        return true;
    }
    return false;
}

function Raices(){
    var a = document.getElementById("a").value; 
    var b = document.getElementById("b").value;
    var c = document.getElementById("c").value;

    if(a =="" || b =="" || b =="")
        alert("Campo vacio")
    else{
        a = parseFloat(a);
        b = parseFloat(b);
        c = parseFloat(c);
        

        var raiz1,raiz2,numer,denom,raiz;
        raiz= (b*b)-(4*a*c);
        if(raiz<0){
            raiz1=(b*-1)+" + "+Math.sqrt(raiz*-1).toFixed(2)+"i "+" / "+(2*a);
            raiz2=(b*-1)+" - "+Math.sqrt(raiz*-1).toFixed(2)+"i "+" / "+(2*a);

        }
        else{
            raiz1 = (((b*-1)+(Math.sqrt(raiz)))/(2*a)).toFixed(2);
            raiz2 = (((b*-1)-(Math.sqrt(raiz)))/(2*a)).toFixed(2);
        }
        document.getElementById("eje2Res").innerHTML=raiz1+"<br>"+raiz2;
    }
}

function Alquiler(){
    var rec = document.getElementById("recorrido").value;
    var extra;

    if(rec<0 || rec=="")
        alert("Dato no valido");
    else{
        rec = parseInt(rec);
        if(rec<=300){
            rec = rec*1000;
        }
        else if(rec>300 && rec <=1000){
            extra=rec-300;
            rec=300000+(extra*15000);
        }
        else{
            extra =rec-1000;
            rec = 300000+(700*15000)+(extra*10000);
        }

        document.getElementById("eje3Res1").innerHTML=rec+"$";
        document.getElementById("eje3Res2").innerHTML=(rec*0.80)+"$";
        document.getElementById("eje3Res3").innerHTML=(rec*0.20)+"$";
    }
}

function Edad(){
    
    var hoy = new Date();
    var fecha = new Date(document.getElementById("fecha").value);
    var edad = hoy.getFullYear() - fecha.getFullYear();
    var diferenciaMeses = hoy.getMonth() - fecha.getMonth();
    if (diferenciaMeses < 0 || (diferenciaMeses === 0 && hoy.getDate() < fecha.getDate())) 
        edad--
    if(isNaN(edad))
        alert("ha ocurrido un error")
    else
        document.getElementById("eje4Res").innerHTML=edad+" años";
}