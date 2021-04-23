const firstScreen = document.querySelector(".first-screen")
const secondScreen = document.querySelector(".second-screen")
const thirdScreen = document.querySelector(".third-screen")
const createFirstScreen = document.querySelector(".create-quizz")
let iD = [];
let myId = [];
let quizzes =[];
let idQuizzControl;
getQuizzes()

function openCreateQuizz(){
    firstScreen.classList.add("hide")
    thirdScreen.classList.remove("hide")
    createQuizzBox()
}

function getQuizzes() {
    createFirstScreen.innerHTML = "<span>Carregando...</span>"
    const promiseQuizz = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/buzzquizz/quizzes")

    promiseQuizz.then(displayQuizz)
    promiseQuizz.catch(errorDisplayQuizz)
}

function displayQuizz(resposta) {
    quizzes = resposta.data
   
    const ulAllQuizzes = document.querySelector(".all-quizzes .quizzes")
    const ulMyQuizzes = document.querySelector(".my-quizzes .quizzes")
 
    createFirstScreen.innerHTML = `
    <span>Você não criou nenhum <br> quiz ainda :( </span>
    <button onclick="openCreateQuizz()">Criar Quizz</button>`

    for(let i=0;i < quizzes.length;i++){
        quizz = quizzes[i];
        iD.push(quizz.id)
        
        ulAllQuizzes.innerHTML += `
        <li id="Q-${quizz.id}" onclick="goToQuizz(${quizz.id})">
            <div class="quizz-title">
                ${quizz.title}
            </div>
        </li>
        `
        document.getElementById(`Q-${quizz.id}`).style.backgroundImage = `linear-gradient(#FFFFFF00, #00000080),url(${quizz.image})`  
    }
    const allId = checkID(iD)
}

function errorDisplayQuizz(resposta) {
    window.location.reload()
    getQuizzes()
}

function checkID(array){
    const intersection = array.filter(element => myId.includes(element))
    if(intersection.length !== 0){
        displayMyQuizz()
    } 
    return array.filter(element => !myId.includes(element))
}

function displayMyQuizz() {
    const myQuizz = document.querySelector(".my-quizzes")
    const createQuizz = document.querySelector(".create-quizz")
    createQuizz.classList.add("hide")
    myQuizz.classList.remove("hide")
}

//clicar no quiz e redirecionar pra tela 2

function goToQuizz(idQuizz){
    alert("Q" + idQuizz)
    firstScreen.classList.add("hide")
    secondScreen.classList.remove("hide")

    const promiseQuizz = axios.get(`https://mock-api.bootcamp.respondeai.com.br/api/v2/buzzquizz/quizzes/${idQuizz}`)

    promiseQuizz.then(getUniqueQuizz)
    promiseQuizz.catch(errorGetUniqueQuizz)       

}

function getUniqueQuizz(resposta){
    const uniqueQuizz = resposta.data
    secondScreen.innerHTML += `
    <div class="Q-${uniqueQuizz.id} hide">
        <div class="quizz-top">
            <span>
                ${uniqueQuizz.title}
            </span>
        </div>
        <ul class="quizz-questions">
        </ul>
        <div class="second-screen-final hide">
            <div class="container-finalresult-img">
                <div class="final-result">
                </div>
                <div class="result-img">
                </div>
                <div class="result-options">
                    <button type="reset" class="reset-quizz">
                        Reiniciar Quizz
                    </button>
                    <button type="button" class="back-home">
                        Voltar para Home
                    </button>
                </div>
            </div>
        </div>
    </div>`;

    const quizzScreen = document.querySelector(`.second-screen .Q-${uniqueQuizz.id}`)
    quizzScreen.classList.remove("hide")

    document.querySelector(`.Q-${uniqueQuizz.id} .quizz-top`).style.backgroundImage = `linear-gradient(#FFFFFF00, #00000080),url(${uniqueQuizz.image})`

    let quizzQuestions = document.querySelector(`.Q-${uniqueQuizz.id} .quizz-questions`)
    
    for(let j=0;j<uniqueQuizz.questions.length;j++){
        quizzQuestions.innerHTML += `
            <li class="quizz-question P${j}">
                <div class="question-title">
                <span>
                     ${uniqueQuizz.questions[j].title}
                </span>
                </div>
            <ul class="question-options">
            </ul>`;

        document.querySelector(`.Q-${uniqueQuizz.id} .P${j} div`).style.backgroundColor = uniqueQuizz.questions[j].color;

        document.querySelector(`.Q-${uniqueQuizz.id} .quizz-top`).style.backgroundImage = `linear-gradient(#FFFFFF00, #00000080),url(${uniqueQuizz.image})`
     
        let possibleAnswers = document.querySelector(`.P${j} .question-options`);
            
        for(let i = 0; i < uniqueQuizz.questions[j].answers.length; i++){
            possibleAnswers.innerHTML += `
                <li class="question-option not-answered ${uniqueQuizz.questions[j].answers[i].isCorrectAnswer}" onclick="selectedAnswer(this)">
                    <img src="${uniqueQuizz.questions[j].answers[i].image}">
                    <p>${uniqueQuizz.questions[j].answers[i].text}</p>
                </li>              
                `;                
        }  
    }  
    idQuizzControl = uniqueQuizz;
   checkEndQuizz(uniqueQuizz)    
}

function errorGetUniqueQuizz() {
    alert("erro")
}

function goToHome(){
    firstScreen.classList.remove("hide")
    secondScreen.classList.add("hide")
    thirdScreen.classList.add("hide")
    getQuizzes()
}