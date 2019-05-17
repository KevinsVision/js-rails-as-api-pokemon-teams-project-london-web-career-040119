const BASE_URL = "http://localhost:3000"
const TRAINERS_URL = `${BASE_URL}/trainers`
const POKEMONS_URL = `${BASE_URL}/pokemons`

const main = document.querySelector('main')

fetch('http://localhost:3000/pokemons')
    .then(resp => resp.json())
    .then(addPokemonOnPage)
  
function addPokemonOnPage (pokemons) {
    const mainDiv = document.createElement('div')
    pokemons.forEach(function (pokemon) {
        mainDiv.innerHTML = `
        <div class="card" data-id="${trainer.id}"><p>${trainer.name}</p>
            <button data-trainer-id="1">Add Pokemon</button>
                <ul>
                    <li>${pokemon.name} (${pokemon.species}) <button class="release" data-pokemon-id="${pokemon.id}">Release</button> </li>
                </ul>
        </div>
        `
    })
}