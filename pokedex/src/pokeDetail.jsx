import React from 'react'

function PokeDetail(props) {

    const types = props.pokemon.types.map(typ => {
        return(
        <p key={typ.type.name}><small>{typ.type.name}</small></p>
        )
    })

    return(
        <div>
            <img src={props.pokemon.sprites.front_default} />
            <h1>{props.pokemon.name}</h1>
            {types}
        </div>
    )
}

export default PokeDetail