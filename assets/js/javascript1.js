function pobierz(button) {
    let parent = button.closest('.piosenkap');
    if (!parent) {
        console.error('Nie znaleziono elementu .piosenkap');
        return;
    }

    let song = {
        title: parent.querySelector('h2:first-of-type')?.textContent || 'Nieznany tytuł',
        artist: parent.querySelector('.name')?.textContent || 'Nieznany wykonawca',
        duration: parent.querySelector('.time')?.textContent || '0:00',
        image: parent.querySelector('img')?.src || ''
    };

    let playlist = JSON.parse(localStorage.getItem('playlist')) || [];
    
    if (!playlist.some((s) => s.title === song.title && s.artist === song.artist)) {
        playlist.push(song);
        localStorage.setItem('playlist', JSON.stringify(playlist));
        console.log(`Dodano piosenkę do playlisty: ${song.title}`);
        renderLibrary(); // Call renderLibrary to update the library display
    } else {
        console.log(`Piosenka już istnieje: ${song.title}`);
    }
}
