var avatars = [
  'http://images.clipartpanda.com/pizza-slice-graphic-slice_of_pepperoni_pizza_0515-0901-2114-1926_SMU.jpg',
  'http://img2.wikia.nocookie.net/__cb20100210020028/assassinscreed/images/c/cf/AwesomeSmileySmall.png',
  'http://avatarbox.net/avatars/img29/cat_dancing_avatar_picture_47092.gif',
  'http://orig00.deviantart.net/2890/f/2011/037/4/5/the_black_cat_avatar_by_laurasan-d38yxj2.gif',
  'http://www.animateit.net/data/media/august2009/th_dance.gif',
  'http://content.sportslogos.net/logos/7/168/full/zh2dlesaa9i69f6flilx.gif',
  'http://www.ninjasoftware.net/images/NinjaSoftware.png',
  'http://1.bp.blogspot.com/-wCIH436M3Ug/Ta7blKaUT_I/AAAAAAAAL98/JXz76aFUSXw/s1600/profile_leonardo.gif',
  'https://slack-imgs.com/?url=http%3A%2F%2Fimages.clipartpanda.com%2Fsquirrel-clip-art-9T4ryKETE.jpeg&width=400&height=288',
  'data:image/jpeg;base64,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',
  'http://cdn1.galadarling.com/images/09-03/cashmoney.jpg',
  'http://img2.timeinc.net/people/i/2014/database/140831/justin-bieber-300.jpg',
  'https://slack-imgs.com/?url=https%3A%2F%2Fencrypted-tbn3.gstatic.com%2Fimages%3Fq%3Dtbn%3AANd9GcSEN_5thpHKNm3dSStsVoev8nWDYrg0xs35jJj8urxPugdwQiRN&width=225&height=225',
  'https://slack-imgs.com/?url=http%3A%2F%2Fwww.ucl.ac.uk%2Fslade%2Fdegree2007%2Fimg%2Fstrange1maya.jpg&width=370&height=464',
  'https://slack-imgs.com/?url=http%3A%2F%2Fsomethingtocraftabout.com%2Fwp-content%2Fuploads%2F2013%2F01%2Fangry-bird.jpg&width=786&height=937'
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
    avatarUrl: avatars[getRandomInt(0,(avatars.length - 1))],
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
              React.createElement("image", {src: player.avatarUrl, className: "player img"})
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
      return React.createElement("div", {className: "show-question", onClick: this.buzzIn},
        React.createElement("p", {className: "question-text"}, this.props.clue.questionText.toUpperCase())
      )
    },

    buzzIn: function() {
      gameStateRef.child("/buzzed_in_user").set(userData);
    }
  })

  var showBuzzedInUser = React.createClass({
    render: function() {
      return React.createElement("div", {className: "show-player"},
        React.createElement("p", {className: "player-name"}, this.props.userData.username)
      )
    }
  })

  // Game
  var game = React.createClass({
    getInitialState: function() {
      return {
        gameState: {
          board: {},
          connected_players: [],
          buzzed_in_user: {}
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
      var currentClues = _.filter(this.state.gameState.board, function(value, key) {
        return value.status == "current"
      });

      var currentClue = _.isEmpty(currentClues) ? null : _.first(currentClues);

      if (this.state.gameState.buzzed_in_user) {
        return React.createElement(showBuzzedInUser, {userData: this.state.gameState.buzzed_in_user})
      }

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
