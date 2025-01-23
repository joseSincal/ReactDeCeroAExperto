const API = "rV8V3hfprM1cnWNQHBQb5jzuER10SNXp";
const URL = `https://api.giphy.com/v1/gifs/random?api_key=${API}`;

const peticion = fetch(URL);

peticion
    .then((resp) => resp.json())
    .then(({ data }) => {
        const { url } = data.images.original;
        const img = document.createElement("img");
        img.src = url;
        document.body.append(img);
    })
    .catch(console.warn);
