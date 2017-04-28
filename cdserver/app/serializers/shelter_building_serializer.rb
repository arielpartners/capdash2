class ShelterBuildingSerializer < ActiveModel::Serializer
  attributes :id, :name,  :surge_beds, :shelter_id, :date_opened, :address,
             :case_type, :slug, :address_id, :created_at, :updated_at,
             :units, :beds

  def units
    object.places.count
  end

  def beds
    object.bed_count(true)
  end
end
