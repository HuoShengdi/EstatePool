class Api::SessionsController < ApplicationController

  def create
    @account = Account.find_by_credentials(
    params[:account][:email],
    params[:account][:password]
    )

    if @account.nil?
      @account = Account.new(email: params[:account][:email])
      render json: {base: ["Invalid email/password"]}, status: 422
    else
      log_in!(@account)
      render 'api/accounts/show'
    end
  end

  def destroy

    if current_account
      log_out!
      @account = Account.new
      render json: {}
    else
      render json: {base: ['Not logged in!']}, status: 404
    end
  end
end
