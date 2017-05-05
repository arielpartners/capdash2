Given(/^The following shelters exist in the system$/) do |table|
  entries = table.hashes
  entries.each do |entry|
    address = Address.create!(
      line1: entry['Street Address'],
      city: entry['Borough'],
      zip: entry['Zip Code']
    )
    shelter = Shelter.create!(
      name: entry['Shelter'],
      provider: Provider.new(name: entry['Provider'])
    )
    building = ShelterBuilding.create!(
      address: address,
      case_type: entry['Case Type'],
      name: entry['Building'],
      shelter: shelter
    )
    floor = building.floors.create!(name: '1')
    n = entry['Units'].to_i
    if entry['Case Type'].include?('Family')
      Unit.transaction { n.times { Unit.create!(name: n, compartment: floor) } }
    else
      Bed.transaction { n.times { Bed.create!(name: n, compartment: floor) } }
    end
  end
end

Given(/^The following census information exists in the system$/) do |table|
  entries = table.hashes
  entries.each do |entry|
    building = ShelterBuilding.find_by(name: entry['Building'])
    Census.create!(
      count: entry['Occupied'],
      shelter_date: ShelterDate.new(entry['Shelter Date'], 3),
      shelter_building: building
    )
  end
end

When(/^I ask for the following average utilization by calendar period$/) do |table|
  params = table.hashes[0]
  body = {
    group_by: params['Group By'],
    period_type: params['Period Type'],
    period_ending: params['Period Ending']
  }
  post 'api/utilization', body
end

Then(/^The system should provide the following average utilization by ([^"]*)$/) do |grouping, table|
  results = JSON.parse(last_response.body)
  entries = table.hashes
  entries.each do |entry|
    result =  if grouping == 'Shelter'
                results.find { |r| entry['Facility'] == r['facility'] }
              else
                results.find { |r| entry['Group'] == r['group'] }
              end
    formatted_percentage = "#{result['percentage']}%"
    expect(formatted_percentage).to eq(entry['Percentage'])
    expect(result['average_utilization'].to_s).to eq(entry['Average Utilization'])
    expect(result['average_capacity'].to_s).to eq(entry['Average Capacity']) if entry['Average Capacity']
    expect(result['address']).to eq(entry['Street Address'])
  end
end
