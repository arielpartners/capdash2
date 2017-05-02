AfterConfiguration do
  CaseType.destroy_all
  single = CaseType.create!(name: 'Single Adult')
  CaseType.create!(name: 'Single Adult Male', parent: single)
  CaseType.create!(name: 'Single Adult Female', parent: single)
  CaseType.create!(name: 'Adult Family')
  CaseType.create!(name: 'Family with Children')
  ShelterType.create!(name: 'Adult Shelter', code: 'FTC009')
  ShelterType.create!(name: 'Late Arrival', code: 'FTC005')
  ShelterType.create!(name: 'Family Hotel', code: 'FTC004')
  ShelterType.create!(name: 'Family Cluster', code: 'FTC003')
  ShelterType.create!(name: 'Adult Family Hotel', code: 'FTC008')
  ShelterType.create!(name: 'Adult Family Tier 2', code: 'FTC006')
  ShelterType.create!(name: 'Family Tier 2', code: 'FTC001')
end
