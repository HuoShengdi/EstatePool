class Api::OfferingsController < ApplicationController

  def index
    @offerings = Offering.all
  end

  def show
    @offering = Offering.find_by_name(params[:name]);
  end

  def create
    @offering = Offering.new(offering_params)
    if @offering.save
      render 'api/offerings/show'
    else
      render json: @offering.errors
    end
  end

  def offering_params
    params.require(:offering).permit(:name,:account_id, :investment_type, :property_type, :min_investment, :target_return, :hold, :description)
  end
end
