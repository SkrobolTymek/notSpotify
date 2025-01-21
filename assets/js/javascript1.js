function pobierz(button) {
    // Pobranie rodzica o klasie 'piosenkap'
    let parent = button.closest('.piosenkap');
    if (!parent) {
        console.error('Nie znaleziono elementu .piosenkap');
        return;
    }

    // Pobranie tytułu piosenki
    let songTitle = parent.querySelector('h2:first-of-type')?.textContent;
    if (!songTitle) {
        console.error('Nie znaleziono tytułu piosenki');
        return;
    }

    // Zapis tytułu piosenki do LocalStorage
    localStorage.setItem('selectedSong', songTitle);
    console.log(`Tytuł piosenki zapisany w LocalStorage: ${songTitle}`);
}
