let counter =0;
let counterQuestions = 0;
let score = 0;
function selectedAnswer(selected){
    //ACHO QUE TEM QUE TER UM IF AQUI PRA O SELECTED TER CLASSE NOT-ANSWERED
    selected.classList.add("selected")
    selected.classList.remove("not-answered")
    if(selected.classList.contains("true")){
        selected.classList.add("correct-answer")
        score +=1
    } else{
        selected.classList.add("wrong-answer")
    }
    counterQuestions += 1
    
    for(let i = 0; i < 3; i++){
        let notSelected = document.querySelector(".not-answered")
        if(!notSelected.classList.contains("selected")){
            notSelected.classList.add("not-selected");
            notSelected.classList.remove("not-answered");
        }
        if(notSelected.classList.contains("true")){
            notSelected.classList.add("correct-answer")
        } else{
            notSelected.classList.add("wrong-answer")
        }
        setTimeout(rolarPagina, 2000)
    }
    let finalScore = ((score/counterQuestions) * 100);
    let myLevel = Math.round(finalScore);
    console.log(myLevel);
    checkEndQuizz(idQuizzControl, myLevel)
    
}
function checkEndQuizz(idQ, level){
    console.log("entrei no checkend")
    if(counterQuestions === (idQ.questions.length)){
        const finalResult = document.querySelector(".second-screen-final")
        finalResult.classList.remove("hide")
        //if()
        const finalResultMsg = document.querySelector(".final-result")
        finalResultMsg.innerHTML = `
            ${level} % ${idQ.levels[0].title}
        `;
        const finalResultImg = document.querySelector(".result-img")
        finalResultImg.innerHTML =`
            <img src="${idQ.levels[0].image}">
            <span>${idQ.levels[0].text}</span>
        `
    };
}

function rolarPagina(){
    window.scrollBy({
        top: 550,
        left: 0,
        behavior: 'smooth'
    });
}

function scoreQuizz(){
    const score = (counter/counterQuestions)*100

}
