var firebaseClient = new Firebase("https://dbc-jeopardy.firebaseio.com/");
var gameStateRef = new Firebase("https://dbc-jeopardy.firebaseio.com/games/12" );

// choose-question
// question-timer
// waiting-for-buzz
// waiting-for-confirmation

$(function() {

if($("body").hasClass("games-show")) {

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
  })

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

  // Connected Users Section

  // Popover Question View (clue where, state is active)

  // Game
  var game = React.createClass({
    getInitialState: function() {
      return {
        gameState: {
          board: {}
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
      return React.DOM.div({},
          React.createElement(board, {board: this.state.gameState.board})
      )

      // var currentClues = _.filter(this.state.gameState.board, function(value, key) {
      //   return value.status == "current"
      // });

      // var currentClue = _.isEmpty(currentClues) ? null : _.first(currentClues);
    },

    setGameState: function(gameState) {
      this.setState({
        gameState: gameState
      })
    }

  });

  React.render(React.createElement(game), document.body);








} })
