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
    playlist.push(song);
    
    localStorage.setItem('playlist', JSON.stringify(playlist));
    console.log(`Dodano piosenkę do playlisty: ${song.title}`);
}
