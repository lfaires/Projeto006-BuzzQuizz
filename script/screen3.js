let isValidationQuizzOk = false;
let isValidationQuestionOk = false;
let isValidationLevelOk = false;
const createStart = document.querySelector(".start-create-quizz")
const createQuestion = document.querySelector(".create-questions")
const createLevel = document.querySelector(".create-levels")
const createReady = document.querySelector(".create-ready")
let titleQuizz ="";
let imageQuizz =""; 
let numberOfQuestions = "";
let numberOfLevels ="";

//FUNÇÕES PARA SUBMETER
function createQuizzBox() {
    createStart.innerHTML +=`
        <span>Comece pelo começo</span>
        <input class="title-quizz" type="text" placeholder="Título do seu quizz">
        <input class="image-quizz" type="url" placeholder="URL da imagem do seu quizz">
        <input class="questions-quizz"  type="text" placeholder="Quantidade de perguntas do seu quizz">
        <input class="levels-quizz" type="text" placeholder="Quantidade de níveis do seu quizz">
        <button class="reset-quizz" onclick="submitQuizz()">Prosseguir para criar perguntas</button>
    ` 
}

function submitQuizz(){
    titleQuizz = document.querySelector(".title-quizz").value
    imageQuizz = document.querySelector(".image-quizz").value
    numberOfQuestions = parseInt(document.querySelector(".questions-quizz").value)
    numberOfLevels = parseInt(document.querySelector(".levels-quizz").value)
    const valid = validationQuizz(titleQuizz, imageQuizz, numberOfQuestions, numberOfLevels)
 
    if (valid === true) {
        clearStartQuizz()
        createQuestionAndLevel(numberOfQuestions, numberOfLevels)
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
    //postQuizz()
    createReady.innerHTML = `
    <span>Seu quizz está pronto!</span>
    <div class="ready-img"> ${titleQuizz}</div>
    <button class="reset-quizz" class="reset-quizz">Acessar Quizz</button>
    <button class="back-home">Voltar para home</button>
    `
    document.querySelector(".ready-img").style.backgroundImage = `linear-gradient(#FFFFFF00, #00000080),url(${imageQuizz})`;
}

//FUNÇÃO PARA INSERIR A QUANTIDADE DE PERGUNTAS E NÍVEIS

function createQuestionAndLevel(numeroQuestoes, numeroNiveis){
    createStart.classList.add("hide");
    createQuestion.classList.remove("hide");
    createQuestion.innerHTML = `<span>Crie suas perguntas</span>`;
    createLevel.innerHTML = `<span>Agora, decida os níveis!</span> `;

    for (let i=0; i<numeroQuestoes; i++){
        createQuestion.innerHTML += `
        <div class="question-${i+1}">
            <div class="heading">
                Pergunta ${i+1}
                <ion-icon class="open" name="create-outline"></ion-icon>
            </div>
            <div class="question-body">
                <input class="title" placeholder="Texto da pergunta">
                <input class="color-background" placeholder="Cor de fundo da pergunta">
                <div class="heading">Resposta correta</div>
                <input class="title" placeholder="Resposta correta">
                <input class="correct-img" placeholder="URL da imagem">
                <div class="heading">Respostas incorretas</div>
                <input class="title" placeholder="Resposta incorreta 1">
                <input class="image" placeholder="URL da imagem 1">
                <input class="title" placeholder="Resposta incorreta 2">
                <input class="image" placeholder="URL da imagem 2">
                <input class="title" placeholder="Resposta incorreta 3">
                <input class="image" placeholder="URL da imagem 3">
            </div>    
        </div>`
    }
    createQuestion.innerHTML += `<button class="reset-quizz" onclick="submitQuestion()">Prosseguir pra criar níveis</button>`

    for (let i=0; i<numeroNiveis; i++){
        createLevel.innerHTML += `
        <div class="level-${i+1}">
            <div class="heading">
                Nível ${i+1}
                <ion-icon class="open" name="create-outline"></ion-icon>
            </div>
            <div>
                <input class="title" placeholder="Título do Nível">
                <input class="title" placeholder="% de acerto mínima">
                <input class="image" placeholder="URL da imagem do nível">
                <textarea placeholder="Descrição do nível"></textarea>
            </div>
        </div>`
    }
    createLevel.innerHTML += `<button class="reset-quizz" onclick="submitLevel()">Finalizar Quizz</button>`
}
// FUNÇÃO PARA LIMPAR OS INPUT DA TELA 3.1

function clearStartQuizz(){
    document.querySelector(".title-quizz").value = ""
    document.querySelector(".image-quizz").value = ""
    document.querySelector(".questions-quizz").value = ""
    document.querySelector(".levels-quizz").value = ""
}

// FUNÇÕES DE VALIDAÇÃO

function validationQuizz(title, url, questions, levels) {
    if((title.length >= 20 && title.length <= 68) && (isNaN(questions) === false && questions >= 3) && (isNaN(levels) === false && levels >= 2) ){
        isValidationQuizzOk = true
        return isValidationQuizzOk 
    }
    //validação da url ainda não está feita
}

//function validationQuestion(){}

//function validationLevel(){}

//if(/^#[0-9A-F]{6}$/i.test(color) === true) então é hexadecimal

/*function postQuizz(){

    const dataQuizz = [{title: titleQuizz, image: imageQuizz ,questions:"array",levels:"array2"}]
    const requestQuizz = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/buzzquizz/quizzes",dataQuizz)

    requestQuizz.then(saveQuizz)
    requestQuizz.catch(errorSaveQuizz)
}*/