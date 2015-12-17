require "sinatra"

get '/' do
	erb :home
end

get '/about' do
	erb :about
end

get '/services' do
	erb :services
end

get '/contact' do
	erb :contact
end

post '/contact' do
	puts "Thanks for contacting us." + params.inspect
end