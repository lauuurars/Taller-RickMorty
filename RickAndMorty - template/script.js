function Character(id, name, status, species, type, gender, origin, location, image, episode, url, created) {
}

function renderCharacter(character) {
    const card = document.createElement('div');
    card.className = 'character-card';
    
    card.innerHTML = `
        <img src="${character.image}" alt="${character.name}" class="character-image">
        <div class="character-info">
            <h2 class="character-name">${character.name}</h2>
            <p class="character-detail">
                <span class="status ${character.status}"></span>
                ${character.status} - ${character.species}
            </p>
            ${character.type ? `<p class="character-detail"><strong>Tipo:</strong> ${character.type}</p>` : ''}
            <p class="character-detail"><strong>Género:</strong> ${character.gender}</p>
            <p class="character-detail"><strong>Origen:</strong> ${character.origin.name}</p>
            <p class="character-detail"><strong>Ubicación:</strong> ${character.location.name}</p>
            <p class="character-detail"><strong>Episodios:</strong> ${character.episode.length}</p>
        </div>
    `;
    
    return card;
}

function fetchAndDisplayCharacters() {
    const container = document.getElementById('characters-container');

    // Aqui ira el fetch
}

document.addEventListener('DOMContentLoaded', fetchAndDisplayCharacters);