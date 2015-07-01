var firebaseClient = new Firebase("https://dbc-jeopardy.firebaseio.com/");
var connected_players = new Firebase("https://dbc-jeopardy.firebaseio.com/connected_players");

var userData = {}
var userRef;

$(document).on("ready", function() {

  $(".add-user").on("click", function(event) {
    userData.username = $(".username").val();
    userRef = connected_players.push(userData);
    userRef.onDisconnect().remove();
  });

});

var playerToHtml = function(player) {
  return ("<div class='item'>" + player.username + "</div>");
}

connected_players.on("value", function(snapshot) {
  players = snapshot.val();
  var playerText = ""
  _.each(players, function(player) {
    playerText += playerToHtml(player);
  })

  $(".connected-players").html(playerText);
})

// var userData = {};

// var userRef = connected_players.push(userData);

// connected_players.on("value", function(snapshot) {

// })

// // firebaseClient.child("connected_players").on("value", function(snapshot) {
// //   connected_players = snapshot.val();
// //   _.each(connected_players, function(item) {
// //     console.log(item);
// //   });
// // });

// // firebaseClient.onDisconnect().update({connected_players: _.filter(connected_players, function(player) { player != userData })})

// userRef.onDisconnect().remove();
