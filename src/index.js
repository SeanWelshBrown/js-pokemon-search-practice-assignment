document.addEventListener('DOMContentLoaded', () => {
  console.log(POKEMON)
  
/**** DOM Elements ****/
const pokemonContainer = document.querySelector("#pokemon-container");
const pokemonSearchInput = document.querySelector("#pokemon-search-input");

/**** Event Listeners ****/
pokemonSearchInput.addEventListener("input", handleInput)

/**** Event Helpers ****/
function handleInput(event) {
  const searchInput = event.target.value;
  
  let filteredPokemon = POKEMON.filter(function(pokemon) {
    return pokemon.name.includes(searchInput)
  });
  
  renderAllPokemon(filteredPokemon)
};

/**** Render Helpers ****/

function renderOnePokemon(pokemonObj) {
  const pokemonCard = document.createElement('div')
  pokemonCard.className = "card"

  pokemonCard.innerHTML = `
  <div class="pokemon-card">
    <div class="pokemon-frame">
      <h1 class="center-text">${pokemonObj.name}</h1>
      <div class="pokemon-image">
        <img data-id="${pokemonObj.id}" data-action="flip" class="toggle-sprite" src="${pokemonObj.sprites.front}">
      </div>
    </div>
  </div>
  `
  const pokeImg = pokemonCard.querySelector(".toggle-sprite")
  pokeImg.addEventListener("click", handleFlip)

  function handleFlip() {
    const pokeImgSprite = pokeImg.getAttribute("src");
    if (pokeImgSprite === pokemonObj.sprites.front) {
      pokeImg.setAttribute("src", pokemonObj.sprites.back);
    } else if (pokeImgSprite === pokemonObj.sprites.back) {
      pokeImg.setAttribute("src", pokemonObj.sprites.front);
    };
  };

  pokemonContainer.append(pokemonCard)
}

function renderAllPokemon(pokemon) {
  console.log(pokemon)
  // while (pokemonContainer.firstChild) {
  //   pokemonContainer.removeChild(pokemonContainer.firstChild);
  // };
  if (pokemon.length === 0) {
    pokemonContainer.innerHTML = "<p><center>There are no Pokémon here</center></p>"
  } else {
    pokemonContainer.innerHTML = ""
    pokemon.forEach(renderOnePokemon)
  }
};

/**** Initial Render ****/
renderAllPokemon(POKEMON)

})
