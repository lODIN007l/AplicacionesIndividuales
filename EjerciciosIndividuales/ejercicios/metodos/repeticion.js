class Vehiculo{
    constructor(nombre,cantidad){
        this.nombre = nombre;
        this.cantidad = cantidad;
    }

    Show(){
        document.getElementById("").innerHTML="";
    }
}

var inicial;
var vehiculos;

function Empezar(){
    inicial = parseInt(document.getElementById("inicial").value);
    if(isNaN(inicial) || inicial<0){
        alert("Dato no valido");
        inicial = 0;
    }
    else
        alert("EL DEPOSITO DEL TANQUE ES DE : ["+inicial+" litros]");
        vehiculos = [];
        document.ej1.nom.value="";
        document.ej1.litros.value="";
}

function AddCar(){
    var auxVehi;
    if(inicial == 0 || isNaN(inicial)){
        alert("NO HAY GASOLINA")
    }
    else{
        var nombre = document.getElementById("nom").value;
        var litros = parseInt(document.getElementById("litros").value);
        var litrost= litros;

        if(nombre =="" || isNaN(litros))
            alert("complete los campos");
        else{
            if(inicial-litros<0){
                alert("NO HAY SUFICIENTE GASOLINA DISPONIBLE")
            }
            else{
                auxVehi = new Vehiculo(nombre,litros);
                vehiculos.push(auxVehi);
                alert("Vendido ["+auxVehi.nombre+";"+auxVehi.cantidad+" litros]");
                inicial-=litros;
                alert("MEDIDOR DE GASOLINA: "+inicial+" litros")
                document.ej1.nom.value="";
                document.ej1.litros.value="";
            }
            
        }
        
    }
}

function Reporte(){
    var atendidos = vehiculos.length;
    
    var total=atendidos*1.25;
    
    var dinero = 0;
    var aux =0;
    var mayorVehiculo="";
    for(var i = 0;i<atendidos;i++){
        total=+vehiculos[i].cantidad;
        if(vehiculos[i].cantidad>aux){
            aux = vehiculos[i].cantidad;
            mayorVehiculo = vehiculos[i].nombre;
        }
    }


    document.getElementById("eje1Res1").innerHTML="Vehiculos atendidos: "+atendidos;
    document.getElementById("eje1Res2").innerHTML ="Dinero Recaudado: "+(total*1.25)+" $";
    document.getElementById("eje1Res3").innerHTML ="[Vehiculo: "+mayorVehiculo+"] [Cantidad: "+aux+"]";
}


function Numero(){
    num = parseInt(document.getElementById("numero").value);
    if(isNaN(num)){
        alert("Numero no valido")
    }
    else{
        document.getElementById("eje2Res1").innerHTML="Perfecto: "+Perfecto(num);
        document.getElementById("eje2Res2").innerHTML="Capicua: "+Capicua(num);
        document.getElementById("eje2Res3").innerHTML="Palindromo: "+Capicua(num);
        document.getElementById("eje2Res4").innerHTML="Factorial: "+Factorial(num);
        document.getElementById("eje2Res5").innerHTML="Factorion: "+Factorion(num);
        document.getElementById("eje2Res6").innerHTML="Cifras: "+num.toString().length;
    }
}

function Perfecto(n){
    var aux = parseInt(0);
    for(var i=1;i<n;i++){
        if((n%i)==0)
            aux+=i;
    }
    return aux===n?"SI":"NO";
}

function Capicua(n){
    var aux = n.toString().split("").reverse().join("");
    return n===parseInt(aux)?"SI":"NO"
}

function Factorial(n){
    if(n==0){
        return 1;
    }
    else
        return n*Factorial(n-1);
}

function Factorion(n){
    var sum = parseInt(0);
    var aux = n.toString();

    for(var i=0;i<aux.length;i++){
        sum += Factorial(parseInt(aux[i]));
    }
    return n===sum?"SI":"NO";
}

function NumerosNaturales(){
    var acum = parseInt(0);
    for(var i=1200;i<=2000;i++){
        var aux = Divisores(parseInt(i));
        if(aux.length==4){
            if(aux[0]==1)
                acum++;
            if(aux[1]==5)
                acum++;
            if(Divisores(aux[2]).length==2)
                acum++;
            if(aux[3]==i)
                acum++;
            if(acum==4){
                document.getElementById("eje3Res").innerHTML+=""+i+"-  ";
            }
            acum=0;
        }
    }
}

function Divisores(num){
    var array =[];
    for(var i=1;i<=num;i++){
        if(num%i==0){
            array.push(i);
        }
    }
    return array;
}

function Combinacion(){
    var aux = [];

    for(var i=1;i<=4;i++){
        for(var j=1;j<=4;j++){
            for(var k=1;k<=4;k++){
                aux=[i,j,k]
                if(!Repetidos(aux)){
                    document.getElementById("eje4Res").innerHTML+=aux+"<br>";
                }
            }
        } 
    }


}

function Repetidos(array){
    return new Set(array).size!==array.length;
  }
  