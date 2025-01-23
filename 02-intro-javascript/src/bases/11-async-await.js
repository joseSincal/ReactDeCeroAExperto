const getImagen = async () => {
    try {
        const API = "rV8V3hfprM1cnWNQHBQb5jzuER10SNXp";
        const URL = `https://api.giphy.com/v1/gifs/random?api_key=${API}`;
        const resp = await fetch(URL);
        const { data } = await resp.json();

        const { url } = data.images.original;
        const img = document.createElement("img");
        img.src = url;
        document.body.append(img);
    } catch (error) {
        // Manejo del error
        console.error(error);
    }
};

getImagen();
