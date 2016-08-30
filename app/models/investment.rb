class Investment < ActiveRecord::Base
  validates :offering_id, :account_id, :amount, presence: true

  belongs_to :account
  belongs_to :offering

  def offering_name
    self.offering.name
  end
end
