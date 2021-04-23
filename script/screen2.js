let counter =0;
let counterQuestions = 0;
let score = 0;
function selectedAnswer(selected,answer){
    //ACHO QUE TEM QUE TER UM IF AQUI PRA O SELECTED TER CLASSE NOT-ANSWERED
    selected.classList.add("selected")
    selected.classList.remove("not-answered")
    if(selected.classList.contains("true")){
        selected.classList.add("correct-answer")
    } else{
        selected.classList.add("wrong-answer")
    }
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
    }
    counterQuestions++
    if (answer === true){
        counter += 1
    } else {
        counter += 0
    }
    
    setTimeout(rolarPagina, 2000)
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
