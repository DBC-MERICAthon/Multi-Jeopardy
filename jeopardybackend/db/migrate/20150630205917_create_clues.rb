class CreateClues < ActiveRecord::Migration
  def change
    create_table :clues do |t|
      t.belongs_to :clue_group
      t.string :question
      t.string :answer
      t.integer :point_value

      t.timestamps null: false
    end
  end
end
