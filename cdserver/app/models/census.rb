class Census < ApplicationRecord
  belongs_to :shelter_building, required: true

  serialize :shelter_date
  before_save :calculate_utilization

  def self.utilization_averages(group_by, period_type, period_ending)
    case group_by
    when 'Shelter' then utilization_by_building(period_type, period_ending)
    when 'Case Type' then utilization_by_case_type(period_type, period_ending)
    end
  end

  private

  def self.utilization_by_building(period_type, period_ending)
    sql = <<-SQL
    SELECT
      shelter_buildings.name as building,
      shelters.name as shelter,
      c.percentage,
      c.avg_utilization,
      addresses.line1
    FROM (
      SELECT shelter_building_id,
      avg(utilization) as percentage,
      avg(count) as avg_utilization
      FROM censuses
      GROUP BY shelter_building_id
    ) AS c
    JOIN shelter_buildings
    ON shelter_buildings.id = c.shelter_building_id
    JOIN addresses
    ON addresses.id = shelter_buildings.address_id
    JOIN shelters
    ON shelters.id = shelter_buildings.shelter_id
    SQL
    results = Census.find_by_sql(sql)
    results.map do |result|
      {
        facility: result.shelter,
        building: result.building,
        address: result.line1,
        average_utilization: result.avg_utilization.round,
        percentage: (result.percentage * 100).round,
        period_ending: period_ending
      }
    end
  end

  def self.utilization_by_case_type(period_type, period_ending)
    sql = <<-SQL
      SELECT case_type.name as group,
      avg(utilization) as percentage,
      avg(count) as avg_utilization
      FROM censuses as c
      JOIN shelter_buildings as b
      ON b.id = c.shelter_building_id
      JOIN classifiers as case_type
      ON b.case_type_id = case_type.id
      GROUP BY case_type.id
    SQL
    results = Census.find_by_sql(sql)
    results.map do |result|
      {
        group: result.group,
        period_ending: period_ending,
        percentage: (result.percentage * 100).round,
        average_utilization: result.avg_utilization.round,
        average_capacity: nil #TODO: figure this out
      }
    end
  end

  def calculate_utilization
    self.utilization = (count.to_f / shelter_building.places.count).round(3)
  end
end
