class BoardController < ApplicationController

  def show_board
    @clue_groups = ClueGroup.where(round: "single").order("RANDOM()").first(6)
  end



end
