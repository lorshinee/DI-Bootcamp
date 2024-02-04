const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];
   
   // 1. Array of usernames with "!" added
   const usernames = [];
   gameInfo.forEach(player => {
       usernames.push(player.username + "!");
   });
   
   // 2. Array of usernames of players with score bigger than 5
   const winners = [];
   gameInfo.forEach(player => {
       if (player.score > 5) {
           winners.push(player.username);
       }
   });
   
   // 3. Total score of the users
   let totalScore = 0;
   gameInfo.forEach(player => {
       totalScore += player.score;
   });
   
   console.log("Usernames:", usernames);
   console.log("Winners:", winners);
   console.log("Total score:", totalScore);
   