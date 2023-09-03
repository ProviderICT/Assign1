const username = document.getElementById('username');
const saveScoreBtn = document.getElementById('saveScoreBtn');
const finalScore = document.getElementById('finalScore');
const mostRecentScore = localStorage.getItem('mostRecentScore');

// const highScores = JSON.parse(localStorage.getItem('highScores'));
const MAx_High_Score = 5;
// console.log(highScores);

finalScore.innerText = mostRecentScore;

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value;//if nothing in username then btn should be disabled
})

saveHighScore = (e) => {
    // console.log("sfsf");
    e.preventDefault();


    //create a score obj store the highscore
    const score = {
        score: mostRecentScore, 
        // score: Math.floor(Math.random() * 100),
        name: username.value,
    };
    // highScores.push(score);

    //sorting the highscore array of top 5
    // highScores.sort((a, b) => b.score - a.score)
    // highScores.splice(5);//it deduct the score which is less

    //permanently store the score to localstorage
    // localStorage.setItem("highScores", JSON.stringify(highScores));
    window.location.assign("./quiz.html");
    // console.log(highScores);
}
