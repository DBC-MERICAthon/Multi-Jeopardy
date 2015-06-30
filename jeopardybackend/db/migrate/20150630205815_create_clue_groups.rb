class CreateClueGroups < ActiveRecord::Migration
  def change
    create_table :clue_groups do |t|
      t.belongs_to :category
      t.string :round
      t.integer :year

      t.timestamps null: false

    end
  end
end
