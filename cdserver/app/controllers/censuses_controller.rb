class CensusesController < ApplicationController
  def utilization
    results = Census.utilization_averages(params[:group_by], params[:period_type], params[:period_ending])
    render json: results
  end
end
