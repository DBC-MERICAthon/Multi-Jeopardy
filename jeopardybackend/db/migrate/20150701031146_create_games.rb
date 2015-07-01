class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.string :single_jeopardy_clue_groups
      t.string :double_jeopardy_clue_groups

      t.timestamps null: false
    end
  end
end
