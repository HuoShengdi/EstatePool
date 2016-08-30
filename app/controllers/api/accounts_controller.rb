class Api::AccountsController < ApplicationController

  def create
    @account = Account.new(account_params)

    if @account.save
      log_in!(@account)
      render 'api/accounts/show'
    else
      render json: @account.errors, status: 422
    end
  end

  private
  def account_params
    params.require(:account).permit(:email, :password)
  end
end
