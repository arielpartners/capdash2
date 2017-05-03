#
# Either Single Adult, Adult Family, Family with Children
#
class CaseType < Classifier
  has_many :shelter_buildings
end
