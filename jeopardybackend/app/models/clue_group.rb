class ClueGroup < ActiveRecord::Base
  belongs_to :category
  has_many :clues
end
