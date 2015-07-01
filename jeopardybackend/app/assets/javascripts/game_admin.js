$(function() {

if($("body").hasClass("games-admin")) {

  var gameStateRef = new Firebase("https://dbc-jeopardy.firebaseio.com/games/" + window.location.pathname.split("/").reverse()[1]);

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
          return React.createElement("td", {className: "clue-value", onClick: this.showClue}, "$" + this.props.clue.pointValue)
        case "current":
          return React.createElement("td", {}, this.props.clue.questionText)
        case "answered":
          return React.createElement("td", {}, "")
      }
    },

    showClue: function() {
      gameStateRef.child("/board/" + this.props.clue_ident).set({
        answerText: this.props.clue.answerText,
        pointValue: this.props.clue.pointValue,
        questionText: this.props.clue.questionText,
        status: "current"
      })
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
              React.createElement(clue, {clue: this.props.board.clue_a_1, clue_ident: "clue_a_1"}),
              React.createElement(clue, {clue: this.props.board.clue_b_1, clue_ident: "clue_b_1"}),
              React.createElement(clue, {clue: this.props.board.clue_c_1, clue_ident: "clue_c_1"}),
              React.createElement(clue, {clue: this.props.board.clue_d_1, clue_ident: "clue_d_1"}),
              React.createElement(clue, {clue: this.props.board.clue_e_1, clue_ident: "clue_e_1"}),
              React.createElement(clue, {clue: this.props.board.clue_f_1, clue_ident: "clue_f_1"})
            ),
            React.createElement("tr", {},
              React.createElement(clue, {clue: this.props.board.clue_a_2, clue_ident: "clue_a_2"}),
              React.createElement(clue, {clue: this.props.board.clue_b_2, clue_ident: "clue_b_2"}),
              React.createElement(clue, {clue: this.props.board.clue_c_2, clue_ident: "clue_c_2"}),
              React.createElement(clue, {clue: this.props.board.clue_d_2, clue_ident: "clue_d_2"}),
              React.createElement(clue, {clue: this.props.board.clue_e_2, clue_ident: "clue_e_2"}),
              React.createElement(clue, {clue: this.props.board.clue_f_2, clue_ident: "clue_f_2"})
            ),
            React.createElement("tr", {},
              React.createElement(clue, {clue: this.props.board.clue_a_3, clue_ident: "clue_a_3"}),
              React.createElement(clue, {clue: this.props.board.clue_b_3, clue_ident: "clue_b_3"}),
              React.createElement(clue, {clue: this.props.board.clue_c_3, clue_ident: "clue_c_3"}),
              React.createElement(clue, {clue: this.props.board.clue_d_3, clue_ident: "clue_d_3"}),
              React.createElement(clue, {clue: this.props.board.clue_e_3, clue_ident: "clue_e_3"}),
              React.createElement(clue, {clue: this.props.board.clue_f_3, clue_ident: "clue_f_3"})
            ),
            React.createElement("tr", {},
              React.createElement(clue, {clue: this.props.board.clue_a_4, clue_ident: "clue_a_4"}),
              React.createElement(clue, {clue: this.props.board.clue_b_4, clue_ident: "clue_b_4"}),
              React.createElement(clue, {clue: this.props.board.clue_c_4, clue_ident: "clue_c_4"}),
              React.createElement(clue, {clue: this.props.board.clue_d_4, clue_ident: "clue_d_4"}),
              React.createElement(clue, {clue: this.props.board.clue_e_4, clue_ident: "clue_e_4"}),
              React.createElement(clue, {clue: this.props.board.clue_f_4, clue_ident: "clue_f_4"})
            ),
            React.createElement("tr", {},
              React.createElement(clue, {clue: this.props.board.clue_a_5, clue_ident: "clue_a_5"}),
              React.createElement(clue, {clue: this.props.board.clue_b_5, clue_ident: "clue_b_5"}),
              React.createElement(clue, {clue: this.props.board.clue_c_5, clue_ident: "clue_c_5"}),
              React.createElement(clue, {clue: this.props.board.clue_d_5, clue_ident: "clue_d_5"}),
              React.createElement(clue, {clue: this.props.board.clue_e_5, clue_ident: "clue_e_5"}),
              React.createElement(clue, {clue: this.props.board.clue_f_5, clue_ident: "clue_f_5"})
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
        React.createElement("p", {className: "question-text"}, this.props.clue.questionText.toUpperCase()),
        React.createElement("p", {className: "answer-text"}, this.props.clue.answerText)
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
