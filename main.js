var acertos =0;
var count=0;

function myFunction() {
    
   count++;

    if( document.getElementById("demo1") ){
    document.getElementById("demo1").style.color = "green"; 
    acertos++;      
    }

    if( document.getElementById("demo2") ){
        document.getElementById("demo2").style.color = "red";       
    }
    
    if( document.getElementById("demo3") ){
        document.getElementById("demo3").style.color = "red";       
    }  

    if( document.getElementById("demo4") ){
        document.getElementById("demo4").style.color = "red";       
    } 

    if( document.getElementById("demo5") ){
        document.getElementById("demo5").style.color = "red";       
    }

        alert("Número de respostas corretas" + acertos);
 
}
