function enviar(){
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;
    const resultadoAno = document.getElementById("spanyears");
    const resultadoMeses = document.getElementById("spanmonths");
    const resultadoDias = document.getElementById("spandays");
    resultadoAno.innerHTML = year;
    resultadoMeses.innerHTML = month;
    resultadoDias.innerHTML = day;
}

