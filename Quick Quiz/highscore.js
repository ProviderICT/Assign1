const highscoreList =document.getElementById('highscoreList');
const highScores =JSON.parse(localStorage.getItem("highScores"))||[];


//iterato the all the high score through map
highscoreList.innerHTML =highScores.map(score=>{
    return `<li class="high-score">${score.name} - ${score.score} </li>`; //jsx
}) .join("");
console.log(highScores);