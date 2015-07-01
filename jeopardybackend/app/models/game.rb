class Game < ActiveRecord::Base

  after_create :sync_to_firebase

  def generate_game_state
    single_jeopardy_clue_groups = self.single_jeopardy_clue_groups.split(",").map { |id| ClueGroup.find(id) }
    double_jeopardy_clue_groups = self.single_jeopardy_clue_groups.split(",").map { |id| ClueGroup.find(id) }

    {phase: "choose-question",
     board: {
      category_a: single_jeopardy_clue_groups[0].category.name,
      category_b: single_jeopardy_clue_groups[1].category.name,
      category_c: single_jeopardy_clue_groups[2].category.name,
      category_d: single_jeopardy_clue_groups[3].category.name,
      category_e: single_jeopardy_clue_groups[4].category.name,
      category_f: single_jeopardy_clue_groups[5].category.name,

      clue_a_1: {pointValue: 200, questionText: single_jeopardy_clue_groups[0].clues.where(point_value: 200).first.question, answerText: single_jeopardy_clue_groups[0].clues.where(point_value: 200).first.answer, status: "ready", ident: "clue_a_1"},
      clue_a_2: {pointValue: 400, questionText: single_jeopardy_clue_groups[0].clues.where(point_value: 400).first.question, answerText: single_jeopardy_clue_groups[0].clues.where(point_value: 400).first.answer, status: "ready", ident: "clue_a_2"},
      clue_a_3: {pointValue: 600, questionText: single_jeopardy_clue_groups[0].clues.where(point_value: 600).first.question, answerText: single_jeopardy_clue_groups[0].clues.where(point_value: 600).first.answer, status: "ready", ident: "clue_a_3"},
      clue_a_4: {pointValue: 800, questionText: single_jeopardy_clue_groups[0].clues.where(point_value: 800).first.question, answerText: single_jeopardy_clue_groups[0].clues.where(point_value: 800).first.answer, status: "ready", ident: "clue_a_4"},
      clue_a_5: {pointValue: 1000, questionText: single_jeopardy_clue_groups[0].clues.where(point_value: 1000).first.question, answerText: single_jeopardy_clue_groups[0].clues.where(point_value: 1000).first.answer, status: "ready", ident: "clue_a_5"},

      clue_b_1: {pointValue: 200, questionText: single_jeopardy_clue_groups[1].clues.where(point_value: 200).first.question, answerText: single_jeopardy_clue_groups[1].clues.where(point_value: 200).first.answer, status: "ready", ident: "clue_b_1"},
      clue_b_2: {pointValue: 400, questionText: single_jeopardy_clue_groups[1].clues.where(point_value: 400).first.question, answerText: single_jeopardy_clue_groups[1].clues.where(point_value: 400).first.answer, status: "ready", ident: "clue_b_2"},
      clue_b_3: {pointValue: 600, questionText: single_jeopardy_clue_groups[1].clues.where(point_value: 600).first.question, answerText: single_jeopardy_clue_groups[1].clues.where(point_value: 600).first.answer, status: "ready", ident: "clue_b_3"},
      clue_b_4: {pointValue: 800, questionText: single_jeopardy_clue_groups[1].clues.where(point_value: 800).first.question, answerText: single_jeopardy_clue_groups[1].clues.where(point_value: 800).first.answer, status: "ready", ident: "clue_b_4"},
      clue_b_5: {pointValue: 1000, questionText: single_jeopardy_clue_groups[1].clues.where(point_value: 1000).first.question, answerText: single_jeopardy_clue_groups[1].clues.where(point_value: 1000).first.answer, status: "ready", ident: "clue_b_5"},

      clue_c_1: {pointValue: 200, questionText: single_jeopardy_clue_groups[2].clues.where(point_value: 200).first.question, answerText: single_jeopardy_clue_groups[2].clues.where(point_value: 200).first.answer, status: "ready", ident: "clue_c_1"},
      clue_c_2: {pointValue: 400, questionText: single_jeopardy_clue_groups[2].clues.where(point_value: 400).first.question, answerText: single_jeopardy_clue_groups[2].clues.where(point_value: 400).first.answer, status: "ready", ident: "clue_c_2"},
      clue_c_3: {pointValue: 600, questionText: single_jeopardy_clue_groups[2].clues.where(point_value: 600).first.question, answerText: single_jeopardy_clue_groups[2].clues.where(point_value: 600).first.answer, status: "ready", ident: "clue_c_3"},
      clue_c_4: {pointValue: 800, questionText: single_jeopardy_clue_groups[2].clues.where(point_value: 800).first.question, answerText: single_jeopardy_clue_groups[2].clues.where(point_value: 800).first.answer, status: "ready", ident: "clue_c_4"},
      clue_c_5: {pointValue: 1000, questionText: single_jeopardy_clue_groups[2].clues.where(point_value: 1000).first.question, answerText: single_jeopardy_clue_groups[2].clues.where(point_value: 1000).first.answer, status: "ready", ident: "clue_c_5"},

      clue_d_1: {pointValue: 200, questionText: single_jeopardy_clue_groups[3].clues.where(point_value: 200).first.question, answerText: single_jeopardy_clue_groups[3].clues.where(point_value: 200).first.answer, status: "ready", ident: "clue_d_1"},
      clue_d_2: {pointValue: 400, questionText: single_jeopardy_clue_groups[3].clues.where(point_value: 400).first.question, answerText: single_jeopardy_clue_groups[3].clues.where(point_value: 400).first.answer, status: "ready", ident: "clue_d_2"},
      clue_d_3: {pointValue: 600, questionText: single_jeopardy_clue_groups[3].clues.where(point_value: 600).first.question, answerText: single_jeopardy_clue_groups[3].clues.where(point_value: 600).first.answer, status: "ready", ident: "clue_d_3"},
      clue_d_4: {pointValue: 800, questionText: single_jeopardy_clue_groups[3].clues.where(point_value: 800).first.question, answerText: single_jeopardy_clue_groups[3].clues.where(point_value: 800).first.answer, status: "ready", ident: "clue_d_4"},
      clue_d_5: {pointValue: 1000, questionText: single_jeopardy_clue_groups[3].clues.where(point_value: 1000).first.question, answerText: single_jeopardy_clue_groups[3].clues.where(point_value: 1000).first.answer, status: "ready", ident: "clue_d_5"},

      clue_e_1: {pointValue: 200, questionText: single_jeopardy_clue_groups[4].clues.where(point_value: 200).first.question, answerText: single_jeopardy_clue_groups[4].clues.where(point_value: 200).first.answer, status: "ready", ident: "clue_e_1"},
      clue_e_2: {pointValue: 400, questionText: single_jeopardy_clue_groups[4].clues.where(point_value: 400).first.question, answerText: single_jeopardy_clue_groups[4].clues.where(point_value: 400).first.answer, status: "ready", ident: "clue_e_2"},
      clue_e_3: {pointValue: 600, questionText: single_jeopardy_clue_groups[4].clues.where(point_value: 600).first.question, answerText: single_jeopardy_clue_groups[4].clues.where(point_value: 600).first.answer, status: "ready", ident: "clue_e_3"},
      clue_e_4: {pointValue: 800, questionText: single_jeopardy_clue_groups[4].clues.where(point_value: 800).first.question, answerText: single_jeopardy_clue_groups[4].clues.where(point_value: 800).first.answer, status: "ready", ident: "clue_e_4"},
      clue_e_5: {pointValue: 1000, questionText: single_jeopardy_clue_groups[4].clues.where(point_value: 1000).first.question, answerText: single_jeopardy_clue_groups[4].clues.where(point_value: 1000).first.answer, status: "ready", ident: "clue_e_5"},

      clue_f_1: {pointValue: 200, questionText: single_jeopardy_clue_groups[5].clues.where(point_value: 200).first.question, answerText: single_jeopardy_clue_groups[5].clues.where(point_value: 200).first.answer, status: "ready", ident: "clue_f_1"},
      clue_f_2: {pointValue: 400, questionText: single_jeopardy_clue_groups[5].clues.where(point_value: 400).first.question, answerText: single_jeopardy_clue_groups[5].clues.where(point_value: 400).first.answer, status: "ready", ident: "clue_f_2"},
      clue_f_3: {pointValue: 600, questionText: single_jeopardy_clue_groups[5].clues.where(point_value: 600).first.question, answerText: single_jeopardy_clue_groups[5].clues.where(point_value: 600).first.answer, status: "ready", ident: "clue_f_3"},
      clue_f_4: {pointValue: 800, questionText: single_jeopardy_clue_groups[5].clues.where(point_value: 800).first.question, answerText: single_jeopardy_clue_groups[5].clues.where(point_value: 800).first.answer, status: "ready", ident: "clue_f_4"},
      clue_f_5: {pointValue: 1000, questionText: single_jeopardy_clue_groups[5].clues.where(point_value: 1000).first.question, answerText: single_jeopardy_clue_groups[5].clues.where(point_value: 1000).first.answer, status: "ready", ident: "clue_f_5"}
      }}
  end

  def sync_to_firebase
    firebase = Firebase::Client.new("https://dbc-jeopardy.firebaseio.com")
    firebase.set("/games/#{self.id}", self.generate_game_state)
  end

end
