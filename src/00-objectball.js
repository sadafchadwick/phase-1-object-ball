function gameObject(){
   return { 
    home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: [{
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
        },],
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
};

function homeTeamName() {
    let object = gameObject();
    return object["home"]["teamName"]; 
}
//console.log(homeTeamName());

function awayTeamName() {
    return gameObject() ["away"]["teamName"];
}
//console.log(awayTeamName());

function teamColors (team) {
    if (team === "Brooklyn Nets") {
        let color = gameObject();
        return color["home"]["colors"];
    }
    else {
        let color = gameObject();
        return color["away"]["colors"];
    }
}
//console.log(teamColors());

function homePlayerStats(name) {
    let stats = gameObject()
    if (name === "Alan Anderson") {
        return stats["home"]["players"]["Alan Anderson"];
    }
    else if (name === "Reggie Evans") {
        return stats["home"]["players"]["Reggie Evans"];
    }
    else if (name === "Brook Lopez") {
        return stats["home"]["players"]["Brook Lopez"];
    }
    else if (name === "Mason Plumlee") {
        return stats["home"]["players"]["Mason Plumlee"];
    }
    else if (name === "Jason Terry") {
        return stats["home"]["players"]["Jason Terry"];
    }
    else {
        console.log("Player unknown");
    };  
}
//console.log(homePlayerStats("Alan Anderson"));

function awayPlayerStats(name) {
    let stats = gameObject()
    if (name === "Jeff Adrien") {
        return stats["away"]["players"]["Jeff Adrien"];
    }
    else if (name === "Bismak Biyombo") {
        return stats["away"]["players"]["Bismak Biyombo"];
    }
    else if (name === "DeSagna Diop") {
        return stats["away"]["players"]["DeSagna Diop"];
    }
    else if (name === "Ben Gordon") {
        return stats["away"]["players"]["Ben Gordon"];
    }
    else if (name === "Brendan Haywood") {
        return stats["away"]["players"]["Brendan Haywood"];
    }
    else {
        console.log("Player unknown");
    };  
}
//console.log(awayPlayerStats("Jeff Adrien"));

function homeNumPointsScored(name) {
    let stats = gameObject()
    if (name === "Alan Anderson") {
        return stats["home"]["players"]["Alan Anderson"]["points"];
    }
    else if (name === "Reggie Evans") {
        return stats["home"]["players"]["Reggie Evans"]["points"];
    }
    else if (name === "Brook Lopez") {
        return stats["home"]["players"]["Brook Lopez"]["points"];
    }
    else if (name === "Mason Plumlee") {
        return stats["home"]["players"]["Mason Plumlee"]["points"];
    }
    else if (name === "Jason Terry") {
        return stats["home"]["players"]["Jason Terry"]["points"];
    }
    else {
        console.log("Player unknown");
    };  
}
//console.log(homeNumPointsScored("Alan Anderson"));

function awayNumPointsScored(name) {
    let stats = gameObject()
    if (name === "Jeff Adrien") {
        return stats["away"]["players"]["Jeff Adrien"]["points"];
    }
    else if (name === "Bismak Biyombo") {
        return stats["away"]["players"]["Bismak Biyombo"]["points"];
    }
    else if (name === "DeSagna Diop") {
        return stats["away"]["players"]["DeSagna Diop"]["points"];
    }
    else if (name === "Ben Gordon") {
        return stats["away"]["players"]["Ben Gordon"]["points"];
    }
    else if (name === "Brendan Haywood") {
        return stats["away"]["players"]["Brendan Haywood"]["points"];
    }
    else {
        console.log("Player unknown");
    };  
}
//console.log(awayNumPointsScored("Jeff Adrien"));

function homeShoeSize(name) {
    let stats = gameObject()
    if (name === "Alan Anderson") {
        return stats["home"]["players"]["Alan Anderson"]["shoe"];
    }
    else if (name === "Reggie Evans") {
        return stats["home"]["players"]["Reggie Evans"]["shoe"];
    }
    else if (name === "Brook Lopez") {
        return stats["home"]["players"]["Brook Lopez"]["shoe"];
    }
    else if (name === "Mason Plumlee") {
        return stats["home"]["players"]["Mason Plumlee"]["shoe"];
    }
    else if (name === "Jason Terry") {
        return stats["home"]["players"]["Jason Terry"]["shoe"];
    }
    else {
        console.log("Player unknown");
    };  
}
//console.log(homeShoeSize("Alan Anderson"));

function awayShoeSize(name) {
    let stats = gameObject()
    if (name === "Jeff Adrien") {
        return stats["away"]["players"]["Jeff Adrien"]["shoe"];
    }
    else if (name === "Bismak Biyombo") {
        return stats["away"]["players"]["Bismak Biyombo"]["shoe"];
    }
    else if (name === "DeSagna Diop") {
        return stats["away"]["players"]["DeSagna Diop"]["shoe"];
    }
    else if (name === "Ben Gordon") {
        return stats["away"]["players"]["Ben Gordon"]["shoe"];
    }
    else if (name === "Brendan Haywood") {
        return stats["away"]["players"]["Brendan Haywood"]["shoe"];
    }
    else {
        console.log("Player unknown");
    };  
}
//console.log(awayShoeSize("Jeff Adrien"));

function playerNumber(teamName) {
    const num = gameObject()
    if (typeof teamName === "Brooklyn Nets") {
      for (const colors in home) {
        console.log(num.home.colors)
        //playerNumber(players[teamName])
      }
    }

}
//     else if (team === "Charlotte Hornets") {
//         console.log("away")
//     }
//     else {
//         console.log("Team unknown")
//     }
//     return jersey ;
// };
console.log(playerNumber("Brooklyn Nets")); 


// function playerNumbers(team) {
//     let jersey = gameObject()
//     if (typeof team === "Brooklyn Nets") {
//         for (i=0; i < players.length ; i++) {
//             return jersey(home.players[i].number)
//         } 
//     }
//     else if (team === "Charlotte Hornets") {
//         console.log("away")
//     }
//     else {
//         console.log("Team unknown")
//     }
//     return jersey ;
// };
// console.log(playerNumbers("Brooklyn Nets")); 