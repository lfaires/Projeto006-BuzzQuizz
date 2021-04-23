let isValidationQuizzOk = false;
let isValidationQuestionOk = false;
let isValidationLevelOk = false;
const createStart = document.querySelector(".third-screen .start-create-quizz")
const createQuestion = document.querySelector(".third-screen .create-questions")
const createLevel = document.querySelector(".third-screen .create-levels")
const createReady = document.querySelector(".third-screen .create-ready")
let titleQuizz ="";
let imageQuizz =""; 
let numberOfQuestions = "";
let numberOfLevels ="";
let questions = [];
let answers = [];
let levels = [];
let dataQuizz =[];

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
    alert()
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
    for (let i=1;i<numberOfQuestions+1;i++){
        let titleQuestion = document.querySelector(`.question-${i} .title`).value
        let colorQuestion = document.querySelector(`.question-${i} .color-background`).value
        let titleCorrectAnswer = document.querySelector(`.question-${i} .title-correct`).value
        let imageCorrectAnswer = document.querySelector(`.question-${i} .image-correct`).value
        let titleIncorrectAnswer1 = document.querySelector(`.question-${i} .title-incorrect1`).value
        let imageIncorrectAnswer1 = document.querySelector(`.question-${i} .image-incorrect1`).value
        let titleIncorrectAnswer2 = document.querySelector(`.question-${i} .title-incorrect2`).value
        let imageIncorrectAnswer2 = document.querySelector(`.question-${i} .image-incorrect2`).value
        let titleIncorrectAnswer3 = document.querySelector(`.question-${i} .title-incorrect3`).value
        let imageIncorrectAnswer3 = document.querySelector(`.question-${i} .image-incorrect3`).value
        

        if (titleIncorrectAnswer2 === ""){
            answers =[{text:titleCorrectAnswer, image: imageCorrectAnswer, isCorrectAnswer: true}, {text:titleIncorrectAnswer1, image: imageIncorrectAnswer1, isCorrectAnswer: false}]
        } else if (titleIncorrectAnswer3 === "") {
            answers =[{text:titleCorrectAnswer, image: imageCorrectAnswer, isCorrectAnswer: true}, {text:titleIncorrectAnswer1, image: imageIncorrectAnswer1, isCorrectAnswer: false}, {text:titleIncorrectAnswer2, image: imageIncorrectAnswer2, isCorrectAnswer: false}]
        } else {
            answers =[{text:titleCorrectAnswer, image: imageCorrectAnswer, isCorrectAnswer: true}, {text:titleIncorrectAnswer1, image: imageIncorrectAnswer1, isCorrectAnswer: false}, {text:titleIncorrectAnswer2, image: imageIncorrectAnswer2, isCorrectAnswer: false}, {text:imageIncorrectAnswer3, image: imageIncorrectAnswer3, isCorrectAnswer: false}]
        }

        const valid = validationQuestion(titleQuestion, colorQuestion, titleCorrectAnswer, imageCorrectAnswer, titleIncorrectAnswer1, imageIncorrectAnswer1, titleIncorrectAnswer2, imageIncorrectAnswer2, titleIncorrectAnswer3, imageIncorrectAnswer3)
        
        if (valid === true) {
            questions.push({title: titleQuestion, color: colorQuestion, answers: answers})
        } else {
            answer = [];
            questions = []
            return alert("Por favor, preencha os dados corretamente!")  
        }
    }
    clearCreateQuestion()
    createLevel.classList.remove("hide")
    alert("salvou questao")
}

function submitLevel(){
    for (let i=1;i<numberOfLevels;i++){
    let titleLevel = document.querySelector(`.level-${i} .title`).value
    let minLevel = parseInt(document.querySelector(`.level-${i} .min-correct`).value)
    let imageLevel = document.querySelector(`.level-${i} .image`).value
    let describeLevel = document.querySelector(`.level-${i} textarea`).value
    
    let level = [{title: titleLevel,image: imageLevel,text: describeLevel,minValue: minLevel}]

    const valid = validationLevel(titleLevel, minLevel, imageLevel, describeLevel)

    if (valid === true) {
        levels.push(level)
    } else {
        levels= []
        return alert("Por favor, preencha os dados corretamente!")  
    }
}
    createLevel.classList.add("hide")
    createReady.classList.remove("hide")
    postQuizz()
    createReady.innerHTML = `
    <span>Seu quizz está pronto!</span>
    <div class="ready-img" onclick="goToQuizz(${idCreatedQuizz})"> ${titleQuizz}</div>
    <button class="reset-quizz" onclick="goToQuizz(${idCreatedQuizz})">Acessar Quizz</button>
    <button class="back-home" onclick="goToHome()">Voltar para home</button>
    `
    document.querySelector(".ready-img").style.backgroundImage = `linear-gradient(#FFFFFF00, #00000080),url(${imageQuizz})`;
    alert("salvou quizz")
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
                <input class="title-correct" placeholder="Resposta correta">
                <input class="image-correct" placeholder="URL da imagem">
                <div class="heading">Respostas incorretas</div>
                <input class="title-incorrect1" placeholder="Resposta incorreta 1">
                <input class="image-incorrect1" placeholder="URL da imagem 1">
                <input class="title-incorrect2" placeholder="Resposta incorreta 2">
                <input class="image-incorrect2" placeholder="URL da imagem 2">
                <input class="title-incorrect3" placeholder="Resposta incorreta 3">
                <input class="image-incorrect3" placeholder="URL da imagem 3">
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
                <input class="min-correct" placeholder="% de acerto mínima">
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

function clearCreateQuestion(){
    for (let i=1; i<numberOfQuestions+1;i++){
    document.querySelector(`.question-${i} .title`).value =""
    document.querySelector(`.question-${i} .color-background`).value =""
    document.querySelector(`.question-${i} .title-correct`).value =""
    document.querySelector(`.question-${i} .image-correct`).value =""
    document.querySelector(`.question-${i} .title-incorrect1`).value =""
    document.querySelector(`.question-${i} .image-incorrect1`).value =""
    document.querySelector(`.question-${i} .title-incorrect2`).value =""
    document.querySelector(`.question-${i} .image-incorrect2`).value =""
    document.querySelector(`.question-${i} .title-incorrect3`).value =""
    document.querySelector(`.question-${i} .image-incorrect3`).value =""
    }
    createQuestion.classList.add("hide");
}

// FUNÇÕES DE VALIDAÇÃO

function validationQuizz(title, url, questions, levels) {
    alert("entrei na validação")
    if((title.length >= 20 && title.length <= 68) && (checkURL(url) === true) && (isNaN(questions) === false && questions >= 3) && (isNaN(levels) === false && levels >= 2) ){
        isValidationQuizzOk = true
        return isValidationQuizzOk 
    }
}

function validationQuestion(title, color, titleAnswer, imageAnswer, titleAnswer2, imageAnswer2, titleAnswer3, imageAnswer3, titleAnswer4, imageAnswer4){
    if((title.length >= 20) && (/^#[0-9A-F]{6}$/i.test(color) === true) && (titleAnswer !== "" && checkURL(imageAnswer) === true) && (titleAnswer2 !== "" && checkURL(imageAnswer2) === true) ){
        isValidationQuestionOk = true
        return isValidationQuestionOk 
    }
}

function validationLevel(title, minimum, url, description){
    if((title.length >= 10) && (isNaN(minimum) === false) && (minimum >=0 || minimum <= 100) && (checkURL(url) === true) && (description.length >= 30)){
        isValidationLevelOk = true
        return isValidationLevelOk 
    }
}

function postQuizz(){

    dataQuizz = [{title: titleQuizz, image: imageQuizz ,questions: questions,levels: levels}]
    console.log()
    const requestQuizz = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/buzzquizz/quizzes", dataQuizz)

    requestQuizz.then(saveQuizz)
    requestQuizz.catch(errorSaveQuizz)

}

function saveQuizz(resposta){
    idCreatedQuizz = resposta.data.id
    alert("enviou carai")
}

function errorSaveQuizz(){
    alert("tá dando erro")
}

function checkURL(urlString){
    let pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(urlString);
}