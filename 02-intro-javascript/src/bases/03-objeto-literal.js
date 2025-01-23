const persona = {
    nombre: "Jose",
    apellido: "Sincal",
    edad: 25,
    direccion: {
        ciudad: "Patzun",
        zip: 40007,
        lat: 14.6465,
        lng: -90.9897,
    },
};

// console.table(persona);

const persona2 = { ...persona };
persona2.nombre = "Peter";

console.log(persona);
console.log(persona2);
