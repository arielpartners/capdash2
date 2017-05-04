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
      SELECT case_type.name as case_type,
      sum(c.avg_utilization) as avg_utilization
      FROM (
        SELECT shelter_building_id,
        avg(count) as avg_utilization
        FROM censuses
        GROUP BY shelter_building_id
      ) AS c
      JOIN shelter_buildings
      ON c.shelter_building_id = shelter_buildings.id
      JOIN classifiers as case_type
      ON shelter_buildings.case_type_id = case_type.id
      GROUP BY case_type.name
    SQL
    results = Census.find_by_sql(sql)
    results.map! do |result|
      {
        group: result.case_type,
        average_utilization: result.avg_utilization.round
      }
    end
    results.each do |result|
      buildings = CaseType.find_by(name: result[:group]).shelter_buildings
      capacity = buildings.reduce(0) { |sum, building| sum + building.places.count }
      percentage = ((result[:average_utilization].to_f / capacity) * 100).round
      result.merge!(average_capacity: capacity, percentage: percentage)
    end
    utilization_sum = Census.find_by_sql <<-SQL
      SELECT sum(c.avg_utilization) as total
      FROM (
        SELECT shelter_building_id,
        avg(count) as avg_utilization
        FROM censuses
        GROUP BY shelter_building_id
      ) AS c
    SQL
    total_utilization = utilization_sum[0].total.round
    total_capacity = Place.count
    percentage = ((total_utilization.to_f / total_capacity) * 100).round
    results << {
      group: 'Total',
      average_capacity: total_capacity,
      average_utilization: total_utilization,
      percentage: percentage
    }
    results
  end

  def calculate_utilization
    self.utilization = (count.to_f / shelter_building.places.count).round(3)
  end
end
