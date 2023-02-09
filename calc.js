function insert(num){
    numero = document.getElementById("resultado").value;
    document.getElementById("resultado").value = numero + num;
}

function clean(){
    document.getElementById("resultado").value = "";
}

function back(){
    const resultado = document.getElementById("resultado").value;
    document.getElementById("resultado").value = resultado.substring(0, resultado.length -1);
}

function calcular(){
    const resultado = document.getElementById("resultado").value;
    if (resultado){
        document.getElementById("resultado").value = eval(resultado);
    }else{
        document.getElementById("resultado").value = alert("erro");
    }
}