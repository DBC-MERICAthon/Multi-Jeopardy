// choose-question
// question-timer
// waiting-for-buzz
// waiting-for-confirmation

var avatars = [
  'http://images.clipartpanda.com/pizza-slice-graphic-slice_of_pepperoni_pizza_0515-0901-2114-1926_SMU.jpg',
  'http://img2.wikia.nocookie.net/__cb20100210020028/assassinscreed/images/c/cf/AwesomeSmileySmall.png',
  'http://avatarbox.net/avatars/img29/cat_dancing_avatar_picture_47092.gif',
  'http://orig00.deviantart.net/2890/f/2011/037/4/5/the_black_cat_avatar_by_laurasan-d38yxj2.gif',
  'http://www.animateit.net/data/media/august2009/th_dance.gif'
]

var getRandomInt = function(min, max) {
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

$(function() {

if($("body").hasClass("games-show")) {
  var firebaseClient = new Firebase("https://dbc-jeopardy.firebaseio.com/");
  var gameStateRef = new Firebase("https://dbc-jeopardy.firebaseio.com/games/" + _.last(window.location.pathname.split("/")));
  var connectedPlayersRef = new Firebase("https://dbc-jeopardy.firebaseio.com/games/" + _.last(window.location.pathname.split("/")) + "/connected_players");

  // username = ""

  // if(localStorage.getItem("username")) {
  //   username = localStorage.getItem("username");
  // } else {
  //   localStorage.setItem("username", username);
  // }

  username = prompt("What's your username");

  var userData = {
    username: username,
    avatarUrl: avatars[getRandomInt(0,avatars.length)],
    points: 0
  }

  var userRef = connectedPlayersRef.push(userData);
  userRef.onDisconnect().remove();

  // Connected Users
  var connectedPlayers = React.createClass({
    render: function() {

      return React.createElement("div", {className: "connected-players"},
        _.map(this.props.connected_players, function(player) {
          return React.createElement("div", {className: "ui card"},
            React.createElement("a", {className: "image", href: "#"},
              React.createElement("image", {src: player.avatarUrl})
            ),
            React.createElement("div", {className: "content"},
              React.createElement("p", {className: "header player-username"}, player.username),
              React.createElement("p", {className: "header player-score"}, "$" + player.points)
            )
          )
        })
      )
    }
  });

  // Clue
  var clue = React.createClass({
    render: function() {
      switch(this.props.clue.status) {
        case "ready":
          return React.createElement("td", {className: "clue-value"}, "$" + this.props.clue.pointValue)
        case "current":
          return React.createElement("td", {}, this.props.clue.questionText)
        case "answered":
          return React.createElement("td", {}, "")
      }
    }
  });

  // Board
  var board = React.createClass({
    render: function() {
      if(!_.isEmpty(this.props.board)) {
        return React.createElement("table", {},
          React.createElement("thead", {},
            React.createElement("tr", {},
              React.createElement("th", {}, this.props.board.category_a),
              React.createElement("th", {}, this.props.board.category_b),
              React.createElement("th", {}, this.props.board.category_c),
              React.createElement("th", {}, this.props.board.category_d),
              React.createElement("th", {}, this.props.board.category_e),
              React.createElement("th", {}, this.props.board.category_f)
            )
          ),
          React.createElement("tbody", {},
            React.createElement("tr", {},
              React.createElement(clue, {clue: this.props.board.clue_a_1}),
              React.createElement(clue, {clue: this.props.board.clue_b_1}),
              React.createElement(clue, {clue: this.props.board.clue_c_1}),
              React.createElement(clue, {clue: this.props.board.clue_d_1}),
              React.createElement(clue, {clue: this.props.board.clue_e_1}),
              React.createElement(clue, {clue: this.props.board.clue_f_1})
            ),
            React.createElement("tr", {},
              React.createElement(clue, {clue: this.props.board.clue_a_2}),
              React.createElement(clue, {clue: this.props.board.clue_b_2}),
              React.createElement(clue, {clue: this.props.board.clue_c_2}),
              React.createElement(clue, {clue: this.props.board.clue_d_2}),
              React.createElement(clue, {clue: this.props.board.clue_e_2}),
              React.createElement(clue, {clue: this.props.board.clue_f_2})
            ),
            React.createElement("tr", {},
              React.createElement(clue, {clue: this.props.board.clue_a_3}),
              React.createElement(clue, {clue: this.props.board.clue_b_3}),
              React.createElement(clue, {clue: this.props.board.clue_c_3}),
              React.createElement(clue, {clue: this.props.board.clue_d_3}),
              React.createElement(clue, {clue: this.props.board.clue_e_3}),
              React.createElement(clue, {clue: this.props.board.clue_f_3})
            ),
            React.createElement("tr", {},
              React.createElement(clue, {clue: this.props.board.clue_a_4}),
              React.createElement(clue, {clue: this.props.board.clue_b_4}),
              React.createElement(clue, {clue: this.props.board.clue_c_4}),
              React.createElement(clue, {clue: this.props.board.clue_d_4}),
              React.createElement(clue, {clue: this.props.board.clue_e_4}),
              React.createElement(clue, {clue: this.props.board.clue_f_4})
            ),
            React.createElement("tr", {},
              React.createElement(clue, {clue: this.props.board.clue_a_5}),
              React.createElement(clue, {clue: this.props.board.clue_b_5}),
              React.createElement(clue, {clue: this.props.board.clue_c_5}),
              React.createElement(clue, {clue: this.props.board.clue_d_5}),
              React.createElement(clue, {clue: this.props.board.clue_e_5}),
              React.createElement(clue, {clue: this.props.board.clue_f_5})
            )
          )
        );
      } else {
        return React.createElement("p", {}, "LOADING...")
      }
    }
  });

  // Popover Question View (clue where, state is active)
  var showClue = React.createClass({
    render: function() {
      return React.createElement("div", {className: "show-question"},
        React.createElement("p", {className: "question-text"}, this.props.clue.questionText.toUpperCase())
      )
    }
  })

  // Game
  var game = React.createClass({
    getInitialState: function() {
      return {
        gameState: {
          board: {},
          connected_players: []
        }
      }
    },

    componentDidMount: function() {
      component = this;
      gameStateRef.on("value", function(snapshot) {
        component.setGameState(snapshot.val())
      })
    },

    render: function() {
      // console.log(this.state.gameState.connected_players);

      var currentClues = _.filter(this.state.gameState.board, function(value, key) {
        return value.status == "current"
      });

      var currentClue = _.isEmpty(currentClues) ? null : _.first(currentClues);

      if (currentClue) {
        return React.createElement(showClue, {clue: currentClue})
      } else {
        return React.createElement("div", {className: "container"},
            React.createElement(board, {board: this.state.gameState.board}),
            React.createElement(connectedPlayers, {connected_players: this.state.gameState.connected_players})
        )
      }
    },

    setGameState: function(gameState) {
      this.setState({
        gameState: gameState
      })
    }

  });

  React.render(React.createElement(game), document.body);

} })
