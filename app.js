//"https://api.api-ninjas.com/v1/dadjokes?limit=1"
const dadJoke = async () =>{
    const config = {headers: {Accept: "application/json"}};
    const joke = await axios.get("https://icanhazdadjoke.com/", config);
    return joke.data.joke;
}

const btn = document.querySelector("button");
const display = document.querySelector("#display");

const getJoke = async () =>{
    const gotJoke = await dadJoke()
    display.textContent = gotJoke;
}

btn.addEventListener('click', getJoke);