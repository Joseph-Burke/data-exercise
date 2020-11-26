let game = { "name": "testgame" };

fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games", {
  method: "POST",
  headers: {
    "content-type": "application/json"
  },
  body: JSON.stringify(game)
})
.then(response => response.json())
.then(data => console.log(data))
