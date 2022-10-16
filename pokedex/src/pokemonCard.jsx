import React from 'react'
import { Context } from './pokeContext'
import PokeDetail from './pokeDetail'

function PokemonCard() {

    const {allPokemon, setUrl, Pokemon, setPokeUrl, currentPokemon} = React.useContext(Context)

    function NextPokemon(){
        setUrl(allPokemon.next)
    }

    function PrevPokemon(){
        setUrl(allPokemon.previous)
    }

    function ChangePokemon(url) {
        setPokeUrl(url)
    }

    const PokemonElements = Pokemon.map(poke => {
        return(
            <div key={poke.name} onClick={() => ChangePokemon(poke.url)}>
                <h1>{poke.name}</h1>
            </div>
        )
    })

    return(
        <div>
            {PokemonElements}
            <button onClick={PrevPokemon}>prev</button>
            <button onClick={NextPokemon}>next</button>

            <PokeDetail pokemon={currentPokemon} />
        </div>
    )
}

export default PokemonCard