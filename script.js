function enviar(){
    var year = document.getElementById("year").value;
    var month = document.getElementById("month").value;
    var day = document.getElementById("day").value;
    renderizar(year, month, day);
}

function renderizar(year, month, day){
    const resultadoAno = document.getElementById("spanyears");
    const resultadoMeses = document.getElementById("spanmonths");
    const resultadoDias = document.getElementById("spandays");
    if(invalidYear(year)){
        year = "- -";
    } 
    if(invalidMonth(month)){
        month = "- -";
    } 
    if(invalidDay(day, month, year)){
        day = "- -";
    } else{
        resultadoAno.innerHTML = comparation(month, day, year)[0];
        resultadoMeses.innerHTML = comparation(month, day, year)[1];
        resultadoDias.innerHTML = comparation(month, day, year)[2];
    }
}
function comparation(month, day, year){
    const today = new Date();
    const dataNascimento = new Date(year, month - 1, day);


    var comparationYear = today.getFullYear() - dataNascimento.getFullYear()

    if(today.getMonth() >= dataNascimento.getMonth()){
        if(today.getMonth() == dataNascimento.getMonth() && today.getDate() >= dataNascimento.getDate()){
            var comparationMonth = 0;
            var comparationData = today.getDate() - dataNascimento.getDate();
        } else if(today.getMonth() >= dataNascimento.getMonth() && today.getDate() >= dataNascimento.getDate()){
            var comparationMonth = today.getMonth() - dataNascimento.getMonth();
            var comparationData = today.getDate() - dataNascimento.getDate();
        } else if(today.getMonth() >= dataNascimento.getMonth() && today.getDate() < dataNascimento.getDate()){
            var comparationMonth = today.getMonth() - dataNascimento.getMonth() - 1;
            var comparationData = 30 + (today.getDate() - dataNascimento.getDate());
        }
    }
    if(today.getMonth() <= dataNascimento.getMonth()){
        if(today.getMonth() == dataNascimento.getMonth() && today.getDate() >= dataNascimento.getDate()){
            var comparationMonth = 0;
            var comparationData = today.getDate() - dataNascimento.getDate();
        } else if(today.getMonth() <= dataNascimento.getMonth() && today.getDate() >= dataNascimento.getDate()){
            comparationYear--;
            var comparationMonth = 12 - (dataNascimento.getMonth() - today.getMonth());
            var comparationData = 30 - (today.getDate() - dataNascimento.getDate());
        } else if(today.getMonth() <= dataNascimento.getMonth() && today.getDate() < dataNascimento.getDate()){
            comparationYear--;
            var comparationMonth = 12 - (dataNascimento.getMonth() - today.getMonth()) - 1;
            var comparationData = 30 - (dataNascimento.getDate() - today.getDate());
        }
    }
    console.log(comparationYear, comparationMonth, comparationData);
    return [comparationYear, comparationMonth, comparationData]
}

function invalidYear(year){
    if(year == 0 || year > 2023 || year == null){
        const inputMessage = document.getElementById("messageYear");
        inputMessage.innerHTML = "Must be a valid year";
        return true
    }
    const inputMessage = document.getElementById("messageYear");
    inputMessage.innerHTML = "";
    return false
}

function invalidMonth(month){
    if(month == 0 || month > 12|| month == null){
        const inputMessage = document.getElementById("messageMonth");
        inputMessage.innerHTML = "Must be a valid month";
        return true
    }
    const inputMessage = document.getElementById("messageMonth");
    inputMessage.innerHTML = "";
    return false
}

function invalidDay(day, month, year){
    if(day <= 29 && month == 2 && bisexto(year)){
        const inputMessage = document.getElementById("messageDay");
        inputMessage.innerHTML = "";
        return false
    }
    if(day == 29 && month == 2 && !bisexto(year)){
        const inputMessage = document.getElementById("messageYear");
        inputMessage.innerHTML = "It's not a leap year";
        return true
    }
    if(day == 0 || day > 31 || day == null){
        const inputMessage = document.getElementById("messageDay");
        inputMessage.innerHTML = "Must be a valid day";
        return true
    }
    const inputMessage = document.getElementById("messageDay");
    inputMessage.innerHTML = "";
    return false
}

function bisexto(year){
    var resto = year % 4
    if(resto == 0){
        return true
    }
    return false
}