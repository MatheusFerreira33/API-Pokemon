async function consomePokeAPI() {

    const loading = document.querySelector("#loading");
    const pokemonsDaAPI = await fetch("https://pokeapi.co/api/v2/pokemon")
        .then((Response) => {
            return Response.json();

        })
        .then((Response) => {
            return Response;
        })
    
    loading.classList.add("hide");
    return pokemonsDaAPI;
}

async function findPokemon(valor){
    const loading = document.querySelector("#loading");
    //loading.classList.toggle()
    console.log(loading);
    const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${valor}`)
    .then((Response)=>{
        return Response.json()
    })
    .then((Response)=>{
        return Response
    })
   
    console.log(loading);
    return pokemon;
}