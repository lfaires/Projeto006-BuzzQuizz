let ID = [];
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
    const ulQuizzes = document.querySelector(".all-quizzes .quizzes")
    const quizzes = resposta.data
    for(let i=0;i < quizzes.length;i++){
        let quizz = quizzes[i];
        ID.push(quizz.id)
        ulQuizzes.innerHTML += `
        <li id="Q-${quizz.id}"><div class="quizz-title">${quizz.title}</div></li>
        `
        document.getElementById(`Q-${quizz.id}`).style.backgroundImage = `linear-gradient(#FFFFFF00, #00000080),url(${quizz.image})`
    }
}

function errorDisplayQuizz(resposta) {
    window.location.reload()
    getQuizzes()
}

console.log(ID)