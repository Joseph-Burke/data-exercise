let game = { name: "Jueguito" };

const gameId = "UcKKRKvukMYoZMUP4puG";

const fetchScores = () => {
  return fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`
  ).then((response) => response.json());
};

const postScore = (score) => {
  fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(score),
    }
  );
};

async function displayScores() {
  let scores = await fetchScores();
  let scoresArray = scores.result.sort((a, b) => {
    return b.score - a.score;
  });

  let list = document.getElementById("scores-list");

  scoresArray.forEach((score) => {
    let listItem = document.createElement("li");
    listItem.textContent = `${score.user}: ${score.score}`;
    list.appendChild(listItem);
  });
}

function refreshScores() {
  let list = document.getElementById("scores-list");
  list.innerHTML = "";
  displayScores();
}

const refreshButton = document.getElementById("refresh-scores-button");

refreshButton.addEventListener("click", function () {
  refreshScores();
});

displayScores();

async function processForm () {
  let user = document.getElementById("user-input");
  let score = document.getElementById("score-input");

  let newInput = { user: user.value, score: score.value };
  
  postScore(newInput);
  refreshScores();
};

let button = document.getElementById("submit-btn");
button.addEventListener("click", () => {
  processForm();
});
