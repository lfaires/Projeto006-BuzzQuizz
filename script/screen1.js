const firstScreen = document.querySelector(".first-screen")
const secondScreen = document.querySelector(".second-screen")
const thirdScreen = document.querySelector(".third-screen")
let iD = [];
let myId = [];
let quizz =[];
getQuizzes()

function openCreateQuizz(){
    firstScreen.classList.add("hide")
    thirdScreen.classList.remove("hide")
}

function getQuizzes() {
    const promiseQuizz = axios.get("https://mock-api.bootcamp.respondeai.com.br/api/v2/buzzquizz/quizzes")

    promiseQuizz.then(displayQuizz)
    promiseQuizz.catch(errorDisplayQuizz)
}

function displayQuizz(resposta) {
    const quizzes = resposta.data
    const ulAllQuizzes = document.querySelector(".all-quizzes .quizzes")
    const ulMyQuizzes = document.querySelector(".my-quizzes .quizzes")
 
    for(let i=0;i < quizzes.length;i++){
        quizz = quizzes[i];
        iD.push(quizz.id)
        
        ulAllQuizzes.innerHTML += `
        <li id="Q-${quizz.id}" onclick="goToQuizz(${quizz.id})"><div class="quizz-title">${quizz.title}</div></li>
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
    alert("Q-"+idQuizz)
    firstScreen.classList.add("hide")
    secondScreen.classList.remove("hide")
    
    
    secondScreen.innerHTML += `
        <div class="Q-${idQuizz} hide">
            <div class="quizz-top"><span>${quizz.title}</span></div>
            <ul class="quizz-questions">
            </ul>
        </div>`;

    const quizzScreen = document.querySelector(".second-screen .Q-"+idQuizz)
    quizzScreen.classList.remove("hide")

        document.querySelector(`.Q-${idQuizz} .quizz-top`).style.backgroundImage = `linear-gradient(#FFFFFF00, #00000080),url(${quizz.image})`

        let quizzQuestions = document.querySelector(`.Q-${idQuizz} .quizz-questions`)
        for(let j=0;j<quizz.questions.length;j++){
            quizzQuestions.innerHTML += `
            <div class="question-title">
                <span>${quizz.questions[j].title}</span>         
            </div>
            ` 
        }

}

function inputQuestions(arrayObjetos){
   
}

 /*<ul class="quizz-questions">
            <li class="quizz-question">
                <div class="question-title">
                    <span>Em qual animal Olho-Tonto Moody transfigurou Malfoy?</span>         
                </div>
                <ul class="question-options">
                    <li class="question-option not-answered true" onclick="selectedAnswer(this)">
                        <img src="https://www.petz.com.br/blog/wp-content/uploads/2020/08/cat-sitter-felino.jpg">
                        <p>Gatíneo</p>
                    </li>
                    <li class="question-option not-answered" onclick="selectedAnswer(this)">
                        <img src="https://www.petz.com.br/blog/wp-content/uploads/2020/08/cat-sitter-felino.jpg">
                        <p>Gatíneo</p>
                        </li>
                    <li class="question-option not-answered" onclick="selectedAnswer(this)">
                        <img src="https://www.petz.com.br/blog/wp-content/uploads/2020/08/cat-sitter-felino.jpg">
                        <p>Gatíneo</p>
                    </li>
                    <li class="question-option not-answered" onclick="selectedAnswer(this)">
                        <img src="https://www.petz.com.br/blog/wp-content/uploads/2020/08/cat-sitter-felino.jpg">
                        <p>Gatíneo</p>
                    </li>                    
                </ul>        
            </li>
        </ul>*/