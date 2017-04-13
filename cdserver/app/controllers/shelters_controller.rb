class SheltersController < ApplicationController
  def index
    if params[:provider]
      @shelters = Shelter.join(:provider).where(provider: { name: params[:provider] } )
    else
      @shelters = Shelter.all
    end
    render json: @shelters
  end
end
