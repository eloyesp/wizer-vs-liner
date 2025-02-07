json.extract! adn, :id, :sequence, :created_at, :updated_at
json.mutant adn.mutant?
json.url adn_url(adn, format: :json)
