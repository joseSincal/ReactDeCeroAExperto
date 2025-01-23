// import { heroes } from "./data/heroes";
// import { heroes } from ".data/heroes";

// import cualquierCosaArr, { owners } from "../data/heroes";
import cualquierCosaArr from "../data/heroes";
// console.log(owners);

export const getHeroById = (id) =>
    cualquierCosaArr.find((hero) => hero.id === id);
// console.log(getHeroById(2)); // Spiderman

export const getHeroesByOwner = (owner) =>
    cualquierCosaArr.filter((hero) => hero.owner === owner);
// console.log(getHeroesByOwner("DC"));
