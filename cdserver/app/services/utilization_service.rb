class UtilizationService

  def self.averages(params)
    case params[:group_by]
    when 'Shelter' then averages_by_building
    when 'Case Type' then averages_by_case_type
    end
  end

  def self.averages_by_building
    sql = <<-SQL
    SELECT
      shelter_buildings.name as building,
      shelters.name as facility,
      round((c.percentage * 100)::numeric, 0) as percentage,
      round(c.avg_utilization,0) as average_utilization,
      addresses.line1 as address
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
    results = ActiveRecord::Base.connection.exec_query(sql)
    results.to_hash
  end

  def self.averages_by_case_type
    #TODO
  end
end
