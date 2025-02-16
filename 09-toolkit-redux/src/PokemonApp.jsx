import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "./store/slices/pokemon";
import { useSelector } from "react-redux";

export const PokemonApp = () => {
    const {
        page,
        pokemons = [],
        isLoading,
    } = useSelector((state) => state.pokemons);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemons());
    }, []);

    return (
        <>
            <h1>PokemonApp</h1>
            <hr />

            <span>Loading: {isLoading ? "True" : "False"}</span>

            <ul>
                {pokemons.map((pokemon) => {
                    return <li key={pokemon.name}>{pokemon.name}</li>;
                })}
            </ul>
            <button
                disabled={isLoading}
                onClick={() => dispatch(getPokemons(page))}
            >
                next
            </button>
        </>
    );
};
