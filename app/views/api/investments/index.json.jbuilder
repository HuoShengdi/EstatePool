json.array! @investments do |investment|
  json.partial! 'api/investments/investment', investment: investment
end
