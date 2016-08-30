class Api::InvestmentsController < ApplicationController

  def index
    @investments = Investment.where(:account_id => current_account.id)
  end

  def show
    @investment = Offering.find_by_name(params[:offering_name]).investments.where(:account_id => current_account.id)
  end

  def create
    @investment = Investment.new(investment_params)
    if @investment.save
      render 'api/investments/show'
    else
      render json: @investment.errors
    end
  end




  private
  def investment_params
    params.require(:investment).permit(:account_id, :offering_id, :amount)
  end

end
