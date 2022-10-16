import React from "react"

const Context = React.createContext()

function ContextProvider(props) {

    const url ='https://pokeapi.co/api/v2/pokemon?limit=20&offset=0'

    const pokemonUrl = 'https://pokeapi.co/api/v2/pokemon/1/'

    const [allPokemon, setAllPokemon] = React.useState([])
    const [Url, setUrl] = React.useState(url)
    const [PokeUrl, setPokeUrl] = React.useState(pokemonUrl)
    const [Pokemon, setPokemon] = React.useState([])
    const [currentPokemon, setCurrentPokemon] = React.useState([])

    async function FetchAllPokemon(url) {
        const res = await fetch(url)
        const data = await res.json()
        setAllPokemon(data)
        setPokemon(data.results)
    }

    async function FetchThisPokemon(url) {
        const res = await fetch(url)
        const data = await res.json()
        setCurrentPokemon(data)
    }

    React.useEffect(() => {
        FetchAllPokemon(Url)
        FetchThisPokemon(PokeUrl)
    }, [Url, PokeUrl])

    return(
        <Context.Provider value={{allPokemon, setUrl, Pokemon, setPokeUrl, currentPokemon}} >
            {props.children}
        </Context.Provider>
    )

}

export {ContextProvider, Context}