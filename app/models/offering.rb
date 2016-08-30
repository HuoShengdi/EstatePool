class Offering < ActiveRecord::Base
  validates :name, :investment_type, :property_type, presence: true

  belongs_to :account
  has_many :investments
end
