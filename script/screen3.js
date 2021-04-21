let isValidationOk = false;

function createQuizz(){
    alert()
    const titleQuizz = document.querySelector("#quizz-title").value
    const imageQuizz = document.querySelector("#quizz-image").value
    const numberQuestions = parseInt(document.querySelector("#quizz-questions").value)
    const numberLevels = parseInt(document.querySelector("#quizz-levels").value)
    
    const valid = validationQuizz(titleQuizz, imageQuizz, numberQuestions, numberLevels)
    
    if (valid === true) {
        console.log("deu certo")
        //Abrir tela de criação de perguntas
    } else {
        console.log("Deu ruim")
        return alert("Preencheu algo errado")
    }
}

function clearStarQuizz(){
    document.querySelector("#quizz-title").value = ""
    document.querySelector("#quizz-image").value = ""
    document.querySelector("#quizz-questions").value = ""
    document.querySelector("#quizz-levels").value = ""
}

function validationQuizz(title, url, questions, levels) {
    if((title.length >= 20 && title.length <= 68) || (isNaN(questions) === false && questions >= 3) || (isNaN(levels) === false && levels >= 2) ){
        isValidationOk = true
        return isValidationOk
    }
    //validação da url ainda não está feita
    /*if(url) === false && numberQuestions >= 2){
        validTeste.push(true)
    } else {
        validTeste.push(false)
    }*/
}