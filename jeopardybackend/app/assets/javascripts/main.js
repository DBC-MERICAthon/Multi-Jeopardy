// var firebaseClient = new Firebase("https://dbc-jeopardy.firebaseio.com/");
// var connected_players = new Firebase("https://dbc-jeopardy.firebaseio.com/connected_players");

// username = ""

// if(localStorage.getItem("username")) {
//   username = localStorage.getItem("username");
// } else {
//   username = prompt("What's your username");
//   localStorage.setItem("username", username);
// }

// var userData = {
//   username: username,
//   avatarUrl: "http://img2.wikia.nocookie.net/__cb20100210020028/assassinscreed/images/c/cf/AwesomeSmileySmall.png"
// }

// var userRef = connected_players.push(userData);
// userRef.onDisconnect().remove();

// var playerToHtml = function(player) {
//   return ("<div class='item'>" + player.username + "</div>");
// }

// connected_players.on("value", function(snapshot) {
//   players = snapshot.val();
//   var playerText = ""
//   _.each(players, function(player) {
//     playerText += playerToHtml(player);
//   })

//   $(".connected-players").html(playerText);
// })
