class PokemonsController < ApplicationController
    def index
        pokemons = Pokemon.all
        render json: pokemons
    end

    def show
        pokemon = Pokemon.find_by(params[:id])
        if pokemon != nil
            render json: pokemon
        else
            render json: {error: "Pokemon Not Found!!!!"}
        end
    end
end
