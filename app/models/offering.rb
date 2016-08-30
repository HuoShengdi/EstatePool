class Offering < ActiveRecord::Base
  validates :name, :investment_type, :property_type, presence: true

  belongs_to :account
  has_many :investments

  def investment_total
    total = 0
    self.investments.each do |investment|
      total += investment.amount
    end
    total
  end

  def investor_ids
    self.investments.map {|investment| investment.account_id}
  end
end
