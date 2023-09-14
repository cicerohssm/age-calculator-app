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
    }
    resultadoAno.innerHTML = comparation(month, day, year);
    
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
            var comparationData = today.getDate();
        } else if(today.getMonth() >= dataNascimento.getMonth() && today.getDate() < dataNascimento.getDate()){
            var comparationMonth = today.getMonth() - dataNascimento.getMonth() - 1;
            var comparationData = 30 + (today.getDate() - dataNascimento.getDate());
        }
    }
    console.log(comparationYear, comparationMonth, comparationData);
    return comparationYear
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
    if(day == 0 || day > 31 || day == null){
        if(day == 29 && month == 2 && bisexto(year)){
            const inputMessage = document.getElementById("messageDay");
            inputMessage.innerHTML = "";
            return false
        }
        if(day >= 29 && month == 2){
            const inputMessage = document.getElementById("messageDay");
            inputMessage.innerHTML = "Must be a valid day";
            return true
        }
        const inputMessage = document.getElementById("messageDay");
        inputMessage.innerHTML = "Must be a valid day";
        return true
    }
    const inputMessage = document.getElementById("messageDay");
    inputMessage.innerHTML = "";
    return false
}

function bisexto(year){
    if((year % 4) == 0){
        return true
    }
    return false
}