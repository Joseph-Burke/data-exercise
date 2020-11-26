let game = { "name": "Jueguito" };

const gameId = "UcKKRKvukMYoZMUP4puG"; 

// fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games", {
//   method: "POST",
//   headers: {
//     "content-type": "application/json"
//   },
//   body: JSON.stringify(game)
// })
// .then(response => response.json())
// .then(data => console.log(data))

const gameResults = () => {
  return fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`
  )
    .then((response) => response.json())
}

gameResults().then(data => console.log(data));

let testScore = {
  user: "John Doe",
  score: 42,
};

const updateResults = () => {
  fetch(
    `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`,
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(testScore),
    }
  ).then((response) => response.json())
  .then(data => console.log(data))
};

updateResults();