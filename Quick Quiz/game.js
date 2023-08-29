const ques = document.getElementById('ques');
const choice = Array.from(document.getElementsByClassName('choice-text'));//Convert To Array
// console.log(choice);
//Score and hud
const progressTxt = document.getElementById('progressTxt');
const scoreTxt = document.getElementById('score');
const progressBarFull = document.getElementById('progressBarfull');


let currentQues = {};
let acceptingAns = false;
let score = 0;
let quesCounter = 0;
let availableQues = [];

//fetch api
let questions = [];
//we return a promise here
// fetch("questions.json")
fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple")
.then(res => {
    return res.json();
}).then(loadedQues => {
    console.log(loadedQues.results);
    //transform the araay to the something for that we use map
    questions =loadedQues.results.map(loadedQuestion =>{
        const formatedQues ={
            ques: loadedQuestion.question
        };
        const ansChoice =[...loadedQuestion.incorrect_answers];
        formatedQues.answer = Math.floor(Math.random()*3)+1;
        ansChoice.splice(formatedQues.answer -1,0,loadedQuestion.correct_answer);
    //iterator the ans choice
    ansChoice.forEach((choice,index)=>{
        formatedQues['choice' +(index+1)]= choice;
    })
    return formatedQues;
    })
    // questions = loadedQues;
     startGame();
}).catch(err => {
    console.error(err);
});

//Constants
const Correct_bonus = 10;
const Max_Ques = 3;

startGame = () => {
    quesCounter = 0;
    score = 0;
    availableQues = [...questions];//by spread operator put all ques here
    // console.log(availableQues);
    getNewQues();
}

getNewQues = () => {

    //Check there is ques is remaining or not
    if (availableQues.length === 0 || quesCounter >= Max_Ques) {
        localStorage.setItem('mostRecentScore', score);

        //go to the end page
         return window.location.assign('./end.html');
    }
    quesCounter++;
    //Counter txt
    progressTxt.innerText = `Question ${quesCounter} / ${Max_Ques}`;
    //update the progress bar
    console.log();
    progressBarFull.style.width = `${(quesCounter / Max_Ques) * 100}%`;

    const quesIndex = Math.floor(Math.random() * availableQues.length);//get ques diamacally from spread operator
    currentQues = availableQues[quesIndex];
    ques.innerText = currentQues.ques;

    //render ques 
    choice.forEach(choice => {
        const number = choice.dataset["number"];//iterator the data-number from html to print ques
        choice.innerHTML = currentQues["choice" + number];

    });
    availableQues.splice(quesIndex, 1);//ques should not repeat
    acceptingAns = true;
};
//onc;ick
choice.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAns) return;

        acceptingAns = false;
        const selectedChoice = e.target;
        const SelectedAns = selectedChoice.dataset['number'];
        const classToApply = SelectedAns == currentQues.answer ? "correct" : "incorrect";
        // console.log(SelectedAns == currentQues.answer);// we put == bcoz dataset in int and currentques ans is string
        // console.log(classToApply);

        //increase the score if ans is correct
        if (classToApply == "correct") {
            incrementScore(Correct_bonus);
        }
        selectedChoice.parentElement.classList.add(classToApply);//it remove color imediately for that we use settime out
        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply);
            getNewQues();
        }, 1000);

    });

})

incrementScore = num => {
    score += num;
    scoreTxt.innerText = score;
}
