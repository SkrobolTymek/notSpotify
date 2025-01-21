function renderLibrary() {
    let libraryContainer = document.querySelector(".library-container");
    let playlist = JSON.parse(localStorage.getItem('playlist')) || [];

    libraryContainer.innerHTML = ""; // Czyszczenie listy

    playlist.forEach((song) => {
        libraryContainer.innerHTML += `
            <div class="library-song">
                <img src="${song.image}" alt="${song.title}" height="80px">
                <h2>${song.title}</h2>
                <h3>${song.artist}</h3>
                <h4>${song.duration}</h4>
                <button onclick="usunPiosenke('${song.title}')">Usuń</button>
            </div>
        `;
    });
    function usunPiosenke(title) {
        let playlist = JSON.parse(localStorage.getItem('playlist')) || [];
        playlist = playlist.filter((song) => song.title !== title); // Filtruje playlistę, usuwając piosenkę o podanym tytule
        localStorage.setItem('playlist', JSON.stringify(playlist)); // Aktualizuje playlistę w LocalStorage
        renderLibrary(); // Ponowne renderowanie listy
        console.log(`Usunięto piosenkę: ${title}`);
    }
    

}

document.addEventListener("DOMContentLoaded", renderLibrary);
