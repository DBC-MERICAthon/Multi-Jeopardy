var firebaseClient = new Firebase("https://dbc-jeopardy.firebaseio.com/");
var gameStateRef = new Firebase("https://dbc-jeopardy.firebaseio.com/game_state");

// var mockGameStateData = {
//   board: {
//     clue_a_1: {status: "ready", questionText: "", answerText: "", pointValue: 0},
//     clue_b_1: {status: "ready", questionText: "", answerText: "", pointValue: 0},
//     clue_c_1: {status: "ready", questionText: "", answerText: "", pointValue: 0},
//     clue_d_1: {status: "ready", questionText: "", answerText: "", pointValue: 0},
//     clue_e_1: {status: "ready", questionText: "", answerText: "", pointValue: 0},
//     clue_f_1: {status: "ready", questionText: "", answerText: "", pointValue: 0},

//     clue_a_2: {status: "ready", questionText: "", answerText: "", pointValue: 0},
//     clue_b_2: {status: "ready", questionText: "", answerText: "", pointValue: 0},
//     clue_c_2: {status: "ready", questionText: "", answerText: "", pointValue: 0},
//     clue_d_2: {status: "ready", questionText: "", answerText: "", pointValue: 0},
//     clue_e_2: {status: "ready", questionText: "", answerText: "", pointValue: 0},
//     clue_f_2: {status: "ready", questionText: "", answerText: "", pointValue: 0},

//     clue_a_3: {status: "ready", questionText: "", answerText: "", pointValue: 0},
//     clue_b_3: {status: "ready", questionText: "", answerText: "", pointValue: 0},
//     clue_c_3: {status: "ready", questionText: "", answerText: "", pointValue: 0},
//     clue_d_3: {status: "ready", questionText: "", answerText: "", pointValue: 0},
//     clue_e_3: {status: "ready", questionText: "", answerText: "", pointValue: 0},
//     clue_f_3: {status: "ready", questionText: "", answerText: "", pointValue: 0},

//     clue_a_4: {status: "ready", questionText: "", answerText: "", pointValue: 0},
//     clue_b_4: {status: "ready", questionText: "", answerText: "", pointValue: 0},
//     clue_c_4: {status: "ready", questionText: "", answerText: "", pointValue: 0},
//     clue_d_4: {status: "ready", questionText: "", answerText: "", pointValue: 0},
//     clue_e_4: {status: "ready", questionText: "", answerText: "", pointValue: 0},
//     clue_f_4: {status: "ready", questionText: "", answerText: "", pointValue: 0},

//     clue_a_5: {status: "ready", questionText: "", answerText: "", pointValue: 0},
//     clue_b_5: {status: "ready", questionText: "", answerText: "", pointValue: 0},
//     clue_c_5: {status: "ready", questionText: "", answerText: "", pointValue: 0},
//     clue_d_5: {status: "ready", questionText: "", answerText: "", pointValue: 0},
//     clue_e_5: {status: "ready", questionText: "", answerText: "", pointValue: 0},
//     clue_f_5: {status: "ready", questionText: "", answerText: "", pointValue: 0}
//   },

//   phase: "choose-question",

//   connected_players: []
// }

// choose-question
// question-timer
// waiting-for-buzz
// waiting-for-confirmation

$(function() {

if($("body").hasClass("games-show")) {

  // Board
  var board = React.createClass({
    render: function( ) {
      return React.DOM.h1({}, "This is the board");
    }
  });

  // Connected Users Section

  // Popover Question View (clue where, state is active)
  var clue = React.createClass({
    render: function() {
      return React.DOM.p({}, this.props.clue.questionText)
    }
  })

  // Game
  var game = React.createClass({
    getInitialState: function() {
      return {
        gameState: {}
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
        return React.createElement(clue, {clue: currentClue})
      } else {
        return React.DOM.div({},
          React.createElement(board, {gameState: this.state.gameState})
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

// <div class = "connected-players">
// </div>

//   <table >

//   <thead>
//     <tr>
//       <% @single_jeopardy_clue_groups.each do |clue_group| %>
//         <th><%= "#{clue_group.category.name} (#{clue_group.year})"%></th>
//       <% end %>
//     </tr>
//   </thead>

//   <tbody>
//     <tr>
//         <% @single_jeopardy_clue_groups.each do |clue_group| %>
//           <!-- <td><%= clue_group.clues.where(point_value: 200).first.question %></td> -->
//           <td class="clue-value">$200</td>
//         <% end %>
//     </tr>
//     <tr>
//         <% @single_jeopardy_clue_groups.each do |clue_group| %>
//           <!-- <td><%= clue_group.clues.where(point_value: 400).first.question %></td> -->
//           <td class="clue-value">$400</td>
//         <% end %>
//     </tr>
//     <tr>
//         <% @single_jeopardy_clue_groups.each do |clue_group| %>
//           <!-- <td><%= clue_group.clues.where(point_value: 600).first.question %></td> -->
//           <td class="clue-value">$600</td>
//         <% end %>
//     </tr>
//     <tr>
//         <% @single_jeopardy_clue_groups.each do |clue_group| %>
//           <!-- <td><%= clue_group.clues.where(point_value: 800).first.question %></td> -->
//           <td class="clue-value">$800</td>
//         <% end %>
//     </tr>
//     <tr>
//         <% @single_jeopardy_clue_groups.each do |clue_group| %>
//           <!-- <td><%= clue_group.clues.where(point_value: 1000).first.question %></td> -->
//           <td class="clue-value">$1000</td>
//         <% end %>
//     </tr>
//   </tbody>
// </table>

// <br />
// <br />
// <br />
// <br />
// <br />

//   <table >

//   <thead>
//     <tr>
//       <% @double_jeopardy_clue_groups.each do |clue_group| %>
//         <th><%= "#{clue_group.category.name} (#{clue_group.year})"%></th>
//       <% end %>
//     </tr>
//   </thead>

//   <tbody>
//     <tr>
//         <% @double_jeopardy_clue_groups.each do |clue_group| %>
//           <!-- <td><%= clue_group.clues.where(point_value: 400).first.question %></td> -->
//           <td class="clue-value">$400</td>
//         <% end %>
//     </tr>
//     <tr>
//         <% @double_jeopardy_clue_groups.each do |clue_group| %>
//           <!-- <td><%= clue_group.clues.where(point_value: 800).first.question %></td> -->
//           <td class="clue-value">$800</td>
//         <% end %>
//     </tr>
//     <tr>
//         <% @double_jeopardy_clue_groups.each do |clue_group| %>
//           <!-- <td><%= clue_group.clues.where(point_value: 1200).first.question %></td> -->
//           <td class="clue-value">$1200</td>
//         <% end %>
//     </tr>
//     <tr>
//         <% @double_jeopardy_clue_groups.each do |clue_group| %>
//           <!-- <td><%= clue_group.clues.where(point_value: 1600).first.question %></td> -->
//           <td class="clue-value">$1600</td>
//         <% end %>
//     </tr>
//     <tr>
//         <% @double_jeopardy_clue_groups.each do |clue_group| %>
//           <!-- <td><%= clue_group.clues.where(point_value: 2000).first.question %></td> -->
//           <td class="clue-value">$2000</td>
//         <% end %>
//     </tr>
//   </tbody>
// </table>


// <!-- Avatar stuff from SemanticUI -->
// <div class="ui mini horizontal divided list">
//   <div class="item">
//     <div class="ui avatar image">
//       <%= image_tag "daniel.jpg" %>
//     </div>
//     <div class="content">
//       <a class="header">Helen</a>
//     </div>
//   </div>
//   <div class="item">
//     <div class="ui avatar image">
//       <%= image_tag "helen.jpg" %>
//     </div>
//     <div class="content">
//       <a class="header">Christian</a>
//     </div>
//   </div>
//   <div class="item">
//     <div class="ui avatar image">
//       <%= image_tag "christian.jpg" %>
//     </div>
//     <div class="content">
//       <a class="header">Daniel</a>
//     </div>
//   </div>
// </div>
// <!-- Avatar stuff from SemanticUI -->
