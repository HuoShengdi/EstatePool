json.array! @offerings do |offering|
  json.partial! 'api/offerings/offering', offering: offering
end
