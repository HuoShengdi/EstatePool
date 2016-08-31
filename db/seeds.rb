# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Account.create(email: 'example@example.com', password_digest: '$2a$10$U6LoygDZ7q03v.qPQqtF8e1haTr6vStBgwcLTNfNn7kRwFII5949G')

Offering.create(
  {name: Example, account_id: 1, investment_type: "Example", property_type: "Example", min_investment: 0, description: "Example"})
