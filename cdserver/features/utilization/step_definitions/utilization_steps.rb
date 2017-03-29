Given(/^The following shelters exist in the system$/) do |table|
  entries = table.hashes
  entries.each do |entry|
    address = Address.create!(
      street_address1: entry['Street Address'],
      city: entry['Borough'],
      zip: entry['Zip Code']
    )
    shelter = Shelter.create!(
      name: entry['Shelter'],
      provider: Provider.new(name: entry['Provider'])
    )
    ShelterBuilding.create!(
      address: address,
      population_group: entry['Shelter Type'],
      name: entry['Building'],
      shelter: shelter
    )
  end
end

Given(/^The following census information exists in the system$/) do |table|
  entries = table.hashes
  entries.each do |entry|
    building = ShelterBuilding.find_by(name: entry['Building'])
    Census.create!(
      count: entry['Occupied'],
      observed_for: DateTime.parse(entry['Business Date']),
      shelter_building: building
    )
  end
end
