class ArtistManager {
    constructor() {
        this.artists = [];
    }

    displayArtists() {
        const artistList = document.getElementById('artist-list');
        artistList.innerHTML = '';
        this.artists.forEach((artist, index) => {
            const artistCard = document.createElement('div');
            artistCard.className = 'artist-card';
            artistCard.innerHTML = `
                <h2>${artist.name}</h2>
                <p>Genre: ${artist.genre}</p>
                <button onclick="artistManager.removeArtist(${index})">Delete</button>
            `;
            artistList.appendChild(artistCard);
        });
    }

    addArtist(artist) {
        this.artists.push(artist);
        this.displayArtists();
    }

    removeArtist(index) {
        this.artists.splice(index, 1);
        this.displayArtists();
    }
}