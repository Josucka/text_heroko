const cardPokemons = document.querySelectorAll(".card_pokemon");
const pokemonSelecionado = document.querySelector("#pokemon_selecionado");
//construindo a logica pra selecionar o pokemon quando for clikado
for(const cardPokemon of cardPokemons){
    //addeventlistner serve pra adicionar um evento ao parametro cardpokemon
    cardPokemon.addEventListener("click", function(){
        const nomePokemon = this.getAttribute("data-nome");
        if(!this.classList.contains("selecionado")){
            //o this nesse caso esta fazendo referencia ao nome do pokemon
            this.classList.add("selecionado");
            pokemonSelecionado.innerHTML = `o ultimo pokemon selecionado <b>${nomePokemon}</b>`
        }
        else{
            this.classList.remove("selecionado");
            const pokemonsSelecionados = document.querySelectorAll(".selecionado");
            if(pokemonsSelecionados.length >= 1){
                pokemonSelecionado.innerHTML = `voce desmarcou o pokemon <b>${nomePokemon}</b>. Restantes<b>${pokemonsSelecionados.length}</b>`;
            }
            else{
                pokemonSelecionado.innerHTML = "Selecione um Pokemon"
            }
        }
    })
}