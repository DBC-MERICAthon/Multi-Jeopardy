$(function() {

if($("body").hasClass("games-show")) {

  var helloWorld = React.createClass({
    render: function() {
      return (
        <h1>Hello World</h1>
      )
    }
  });


}

})

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
