document.getElementById("generate-btn").addEventListener("click", generatePokemon);

async function generatePokemon() {
    const randomId = Math.floor(Math.random() * 151) + 1; // Gets a Pokémon from Gen 1 (1-151)
    const url = `https://pokeapi.co/api/v2/pokemon/${randomId}`;
    
    try {
        const response = await fetch(url);
        const data = await response.json();

        // Update the Pokémon card with data
        document.getElementById("pokemon-img").src = data.sprites.front_default;
        document.getElementById("pokemon-name").textContent = data.name.toUpperCase();
        document.getElementById("pokemon-type").textContent = `Type: ${data.types.map(type => type.type.name).join(", ")}`;
        document.getElementById("pokemon-stats").textContent = `Stats: HP ${data.stats[0].base_stat}`;

        // Show the Pokémon card
        document.querySelector(".card").classList.remove("hidden");
        
    } catch (error) {
        console.error("Error fetching Pokémon data:", error);
    }
}

// Generate a Pokémon when the page loads
generatePokemon();
