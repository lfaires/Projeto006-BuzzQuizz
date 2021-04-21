let iD = [];
let myId = []
getQuizzes()

function openCreateQuizz(){
    const firstScreen = document.querySelector(".first-screen")
    const thirdScreen = document.querySelector(".third-screen")
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
        let quizz = quizzes[i];
        iD.push(quizz.id)
        
        ulAllQuizzes.innerHTML += `
        <li id="Q-${quizz.id}"><div class="quizz-title">${quizz.title}</div></li>
        `
        document.getElementById(`Q-${quizz.id}`).style.backgroundImage = `linear-gradient(#FFFFFF00, #00000080),url(${quizz.image})`
    }
    const allId = checkID(iD)
    console.log("todos id",allId)
    console.log("seus id", myId)
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