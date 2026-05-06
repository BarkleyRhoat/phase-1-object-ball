function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}
console.log(gameObject());

function homeTeamName() {
  let object = gameObject();
  return object["home"]["teamName"];
}

console.log(homeTeamName());

function homeTeamName() {
  return gameObject()["home"]["teamName"];
}
console.log(homeTeamName());

function awayTeamName() {
  return gameObject()["away"]["teamName"];
}
console.log(awayTeamName());

function mostPointsScored() {
  let game = gameObject();
  let topPlayer = "";
  let topPoints = "";

  // for in because it needs to loop over objects not an array...
  for (let side in game) {
    let players = game[side].players; // looping through players on both teams
    for (let name in players) {
      if (players[name].points > topPoints) { // keeping track of highest points per player
        topPoints = players[name].points; // updates variables of player with most points
        topPlayer = name; // updates variables of player with most points
      }
    }
  }
  return topPlayer;
}
console.log(mostPointsScored());

function winningTeam() {
  let game = gameObject();
  let topTeam = "";
  let topPoints = 0;

  for (let side in game) {
    let players = game[side].players;
    let teamPoints = 0;
    for (let name in players) {
      teamPoints += players[name].points;
    }
    if (teamPoints > topPoints) {
      topPoints = teamPoints;
      topTeam = game[side].teamName;
    }
  }
  return topTeam;
}
console.log(winningTeam());

function playerWithLongestName() {
  let game = gameObject();
  let longestName = "";

  for (let side in game) {
    let players = game[side].players;
    for (let name in players) {
      if (name.length > longestName.length) {
        longestName = name;
      }
    }
  }
  return longestName;
}
console.log(playerWithLongestName());
