let isValidationQuizzOk = false;
let isValidationQuestionOk = false;
let isValidationLevelOk = false;
const createStart = document.querySelector(".create-start")
const createQuestion = document.querySelector(".create-questions")
const createLevel = document.querySelector(".create-levels")
const createReady = document.querySelector(".create-ready")

//FUNÇÕES PARA SUBMETER
function submitQuizz(){
    alert()
    const titleQuizz = document.querySelector("#quizz-title").value
    const imageQuizz = document.querySelector("#quizz-image").value
    const numberQuestions = parseInt(document.querySelector("#quizz-questions").value)
    const numberLevels = parseInt(document.querySelector("#quizz-levels").value)
    
    const valid = validationQuizz(titleQuizz, imageQuizz, numberQuestions, numberLevels)
    
    if (valid === true) {
        clearStartQuizz()
        createQuestionAndLevel(numberQuestions, numberLevels)
        return alert("validação ok")
        //Abrir tela de criação de perguntas
    } else {
        return alert("Por favor, preencha os dados corretamente!")
    }
}

function submitQuestion(){
    //validação dos dados das perguntas
    //Se a validação tá ok vai esconder a tela de pergunta e abrir a de nível
    createQuestion.classList.add("hide")
    createLevel.classList.remove("hide")
}

function submitLevel(){
    //validação dos dados dos níveis
    //Se a validação tá ok vai fazer o post para o servidor
    //Apagar o innerHTML da tela de pergunta e nível
    //Esconder a tela de nivel e abrir a tela de pronto
    createLevel.classList.add("hide")
    createReady.classList.remove("hide")
}

//FUNÇÃO PARA INSERIR A QUANTIDADE DE PERGUNTAS E NÍVEIS

function createQuestionAndLevel(numeroQuestoes, numeroNiveis){
    createStart.classList.add("hide")
    createQuestion.classList.remove("hide")
    for (let i=0; i<numeroQuestoes; i++){
        createQuestion.innerHTML += `
        <li class="question-${i+1}">
            <div class="heading">
                Pergunta ${i+1}
                <ion-icon class="open" name="create-outline"></ion-icon>
            </div>
            <div class="question-body">
                <input class="title" placeholder="Texto da pergunta">
                <input class="color-background" placeholder="Cor de fundo da pergunta">
                <div class="heading">Resposta correta</div>
                <input class="correct" placeholder="Resposta correta">
                <input class="correct-img" placeholder="URL da imagem">
                <div class="heading">Respostas incorretas</div>
                <input class="incorrect" placeholder="Resposta incorreta 1">
                <input class="incorrect-img" placeholder="URL da imagem 1">
                <input class="incorrect" placeholder="Resposta incorreta 2">
                <input class="incorrect-img" placeholder="URL da imagem 2">
                <input class="incorrect" placeholder="Resposta incorreta 3">
                <input class="incorrect-img" placeholder="URL da imagem 3">
            </div>    
        </li>`
    }
    createQuestion.innerHTML += `<button onclick="submitQuestion()">Prosseguir pra criar níveis</button>`

    for (let i=0; i<numeroNiveis; i++){
        createLevel.innerHTML += `
        <li class="level-${i+1}">
            <div class="heading">
                Nível ${i+1}
                <ion-icon class="open" name="create-outline"></ion-icon>
            </div>
            <div>
                <input class="" placeholder="Título do Nível">
                <input class="" placeholder="% de acerto mínima">
                <input class="" placeholder="URL da imagem do nível">
                <input class="" placeholder="Descrição do nível">
            </div>
        </li>`
    }
    createLevel.innerHTML += `<button onclick="submitLevel()">Finalizar Quizz</button>`
}
// FUNÇÃO PARA LIMPAR OS INPUT DA TELA 3.1

function clearStartQuizz(){
    document.querySelector("#quizz-title").value = ""
    document.querySelector("#quizz-image").value = ""
    document.querySelector("#quizz-questions").value = ""
    document.querySelector("#quizz-levels").value = ""
}

// FUNÇÕES DE VALIDAÇÃO

function validationQuizz(title, url, questions, levels) {
    if((title.length >= 20 && title.length <= 68) && (isNaN(questions) === false && questions >= 3) && (isNaN(levels) === false && levels >= 2) ){
        isValidationQuizzOk  = true
        return isValidationQuizzOk 
    }
    //validação da url ainda não está feita
    /*if(url) === false && numberQuestions >= 2){
        validTeste.push(true)
    } else {
        validTeste.push(false)
    }*/
}

//function validationQuestion(){}

//function validationLevel(){}