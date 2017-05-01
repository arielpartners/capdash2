# floor belonging to a building
class Floor < ApplicationRecord
  has_many :places, as: :compartment
  belongs_to :shelter_building
  belongs_to :case_type
  belongs_to :program_type

  def case_type
    super || shelter_building.case_type
  end

  def program_type
    super || shelter_building.case_type
  end
end
