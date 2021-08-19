function Letras(){
    var txt = document.getElementById("texto").value;
    var array =[];
    for(var i=0;i<txt.length;i++){
        if(txt[i]!=" "){
            array.push(txt[i].toUpperCase());
        }
    }
    var acum = parseInt(0);
    var letras = [...new Set(array)];
    for(var i=0;i<letras.length;i++){
        for(var j=0;j<=txt.length;j++){
            if(letras[i]==array[j])
                acum++;
        }
        document.getElementById("eje2Res").innerHTML+= letras[i]+": "+acum+"<br>"
        acum=0;
    }
}