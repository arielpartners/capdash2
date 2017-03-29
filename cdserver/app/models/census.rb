class Census < ApplicationRecord
  belongs_to :shelter_building, required: true
end
