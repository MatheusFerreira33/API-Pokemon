async function renderPokemon() {
    const body = document.querySelector("body");
    const containerCard = document.createElement("div");

    const botao = document.querySelector("button");

    botao.addEventListener("click", async (event) => {
        event.preventDefault();

        containerCard.remove();
        const card = document.createElement("div");
        const img = document.createElement("img");
        const namePokemon = document.createElement("span");
        const containerCardaSelect = document.createElement("div");

        card.className = "Card";
        containerCardaSelect.className = "containerCardaSelect";

        let valorInput = document.querySelector("input").value.toLowerCase();
        let result = await findPokemon(valorInput);
        const { id, name } = result;

        img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        img.alt = name;

        namePokemon.innerText = name;

        card.append(img, namePokemon);
        containerCardaSelect.appendChild(card);
        body.appendChild(containerCardaSelect);
    })
    containerCard.className = "containerCard";
    body.appendChild(containerCard)

    const pokemons = await consomePokeAPI();
    const { results } = pokemons;

    results.map(element => {
        const card = document.createElement("div");
        const namePokemon = document.createElement("span");
        const img = document.createElement("img");
        const idImg = element.url.slice(34, -1);

        namePokemon.innerText = element.name;
        img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${idImg}.png`;
        img.alt = namePokemon;

        card.className = "card";

        card.append(img, namePokemon);
        containerCard.append(card);

    });

}
setTimeout(() => {
    renderPokemon();
}, 2000);
