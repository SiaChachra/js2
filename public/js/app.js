document.addEventListener('DOMContentLoaded', () => {
    const artistManager = new ArtistManager();
    artistManager.displayArtists();

    document.getElementById('add-artist').addEventListener('click', () => {
        artistManager.addArtist({
            name: 'New Artist',
            genre: 'Genre',
            albums: [],
        });
    });
});