function usunPiosenke(title) {
    let playlist = JSON.parse(localStorage.getItem('playlist')) || [];
    playlist = playlist.filter((song) => song.title !== title);
    localStorage.setItem('playlist', JSON.stringify(playlist)); 
    renderLibrary(); 
    console.log(`Usunięto piosenkę: ${title}`);
}

function renderLibrary() {
    let libraryContainer = document.querySelector(".library-container");
    let playlist = JSON.parse(localStorage.getItem('playlist')) || [];

    libraryContainer.innerHTML = "";

    playlist.forEach((song) => {
        libraryContainer.innerHTML += `
            <div class="library-song">
                <img src="${song.image}" alt="${song.title}" height="80px">
                <h2>${song.title}</h2>
                <h3>${song.artist}</h3>
                <h4>${song.duration}</h4>
                <button onclick="usunPiosenke('${song.title}')"><h2>-</h2></button>
            </div>
        `;
    });
}

document.addEventListener("DOMContentLoaded", renderLibrary);
