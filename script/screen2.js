function selectedAnswer(selected){
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
    
    setTimeout(rolarPagina, 2000)
}

function rolarPagina(){
    window.scrollBy(0, 1000);
}