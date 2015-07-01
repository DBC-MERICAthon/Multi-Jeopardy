class GamesController < ApplicationController

  def index
    @games = Game.all
  end

  def show
    @game = Game.find(params[:id])
  end

  def admin
    @game = Game.find(params[:id])
  end

  def create
    game = Game.new
    game.single_jeopardy_clue_groups = generate_clue_groups_for_round("single")
    game.double_jeopardy_clue_groups = generate_clue_groups_for_round("double")
    game.save!
    redirect_to :games_index
  end

# Helper Functions
  def generate_clue_groups_for_round(round)
    six_random_clue_groups = ClueGroup.where(round: round).order("RANDOM()").first(6)
    six_random_clue_groups.map { |clue_group| clue_group.id }.join(",")
  end

end
