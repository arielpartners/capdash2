Given(/^the following list of shelter units:$/) do |table|
  entries = table.hashes
  entries.each do |entry|
    shelter = Shelter.find_or_create_by!(id: entry['Shelter ID']) do |s|
      s.name = entry['Shelter']
    end
    building = ShelterBuilding.find_or_create_by!(name: entry['Building'],
                                                  shelter: shelter)
    floor = Floor.find_or_create_by!(shelter_building: building,
                                     name: entry['Floor'])
    if entry['Population Group'].include?('Family')
      Unit.create!(name: entry['Unit'], compartment: floor,
                   bed_count: entry['Beds'])
    else
      Bed.create!(name: entry['Bed'], compartment: floor)
    end
  end
end

Given(/^the following shelter building information:$/) do |table|
  entries = table.hashes
  entries.each do |entry|
    shelter = Shelter.find_or_create_by!(name: entry['Shelter'])
    building = ShelterBuilding.find_or_create_by!(name: entry['Building'],
                                                  shelter: shelter)
    building.update!(
      surge_beds: entry['Surge Beds'],
      population_group: entry['Population Group'],
      date_opened: DateTime.parse(entry['Date Opened'])
    )
  end
end

Given(/^Providers in the system$/) do |table|
  entries = table.hashes
  entries.each do |entry|
    Provider.create!(name: entry['Provider'])
  end
end

Then(/^I should see the following provider information$/) do |table|
  providers = JSON.parse(last_response.body).map{ |p| p['name'] }
  entries = table.hashes
  entries.each do |entry|
    expect(providers).to include(entry['Provider'])
  end
end
