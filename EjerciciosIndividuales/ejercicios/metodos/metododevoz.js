var speechRecognition = window.webkitSpeechRecognition;

var recognition = new speechRecognition();

var textbox = $("#textbox");

var content = '';

recognition.continuous = true;



$("#start-btn").click(function(event){

    if(content.length){
     content+= '';   
    }

    recognition.start()
   
    recognition.onresult = function (event){
       
        var current = event.resultIndex;
       
        var transcript = event.results[current][0].transcript;
    
        content+= transcript;
    
        textbox.val(content);
    
    }

    document.getElementById("stop-btn").disabled =false
    document.getElementById("start-btn").disabled =true;
    document.getElementById("cargando").style.visibility = 'visible';
    document.getElementById("start-btn").textContent = "Escuchando...";

});

$("#stop-btn").click(function(event){
    document.getElementById("start-btn").disabled =false;
    document.getElementById("cargando").style.visibility = 'hidden';
    document.getElementById("start-btn").textContent = "Escuchar";
    recognition.stop();
});

function loadData(){
    document.getElementById("stop-btn").disabled =true;
    document.getElementById("textbox").disabled =true;
    document.getElementById("cargando").style.visibility = 'hidden';
}

function limpiar(){
    location.reload();
}