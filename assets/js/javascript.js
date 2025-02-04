













// _________      .__                                 
// /   _____/____  |__|____________________    ____    
// \_____  \\__  \ |  \___   /\___   /\__  \  /    \   
// /        \/ __ \|  |/    /  /    /  / __ \|   |  \  
// /_______  (____  /__/_____ \/_____ \(____  /___|  /  
//        \/     \/         \/      \/     \/     \/   
//  __                                                 
// _/  |_  ____                                         
// \   __\/  _ \                                        
// |  | (  <_> )                                       
// |__|  \____/                                        
                                                    
//       .__               .__                         
// ______ |__| ___________  |  |                        
// \____ \|  |/  ___/\__  \ |  |                        
// |  |_> >  |\___ \  / __ \|  |__                      
// |   __/|__/____  >(____  /____/                      
// |__|           \/      \/                            



































let piosenka1 = `<div class="piosenka">
                <img src="assets/images/FeelGoodIncGorillaz.jpg" height="80px" alt="">
                <h2>Feel Good Inc </h2>
                <h2 class="name"> Gorillaz</h2>
                <h2 class="time">4:13</h2>
            </div>`;
let piosenka2 = ` <div class="piosenka">
                <img src="assets/images/ClintEastwoodGorillaz.jpg" height="80px" alt="">
                <h2>Clint Eastwood </h2>
                <h2 class="name"> Gorillaz</h2>
                <h2 class="time">4:29</h2>
            </div>`;
let piosenka3 = ` <div class="piosenka">
                <img src="assets/images/FooFightersLearnToFly.jpg" height="80px" alt="">
                <h2>Learn To Fly </h2>
                <h2 class="name"> Foo Fighters</h2>
                <h2 class="time">4:37</h2>
            </div>`;
let piosenka4 = `<div class="piosenka">
                <img src="assets/images/HolyWarsThePunishmentDue.jpg" height="80px" alt="">
                <h2>Holy Wars... The Punishment Due</h2>
                <h2 class="name"> Megadeth</h2>
                <h2 class="time">6:38</h2>
            </div>`;
let piosenka5 = `<div class="piosenka">
                <img src="assets/images/InBloom.webp" height="80px" alt="">
                <h2>In bloom </h2>
                <h2 class="name"> Nirvana</h2>
                <h2 class="time">4:58</h2>
            </div>`;
let piosenka6 = `<div class="piosenka">
                <img src="assets/images/MetallicaCallOfKtulu.jpg" height="80px" alt="">
                <h2>Call of Ktulu</h2>
                <h2 class="name"> Metallica</h2>
                <h2 class="time">8:56</h2>
            </div>`;
let piosenka7 = `<div class="piosenka">
                <img src="assets/images/NirvanaDrainYou.jpg" height="80px" alt="">
                <h2>Drain You</h2>
                <h2 class="name">Nirvana</h2>
                <h2 class="time">3:44</h2>
            </div>`;
let piosenka8 = ` <div class="piosenka">
                <img src="assets/images/RainingBloodSlayer.jpg" height="80px" alt="">
                <h2>Raining Blood</h2>
                <h2 class="name">Slayer</h2>
                <h2 class="time">4:18</h2>
            </div>`;
let piosenka9 = ` <div class="piosenka">
                <img src="assets/images/RepentlessSlayer.jpg" height="80px" alt="">
                <h2>Repentless</h2>
                <h2 class="name">Slayer</h2>
                <h2 class="time">4:37</h2>
            </div>`;
let piosenka10 = `<div class="piosenka">
                <img src="assets/images/SmellsLikeTeenSpiritNirvana.jpg" height="80px" alt="">
                <h2>Smells like teen spirit</h2>
                <h2 class="name"> Nirvana </h2>
                <h2 class="time">4:39</h2>
            </div>`;
let piosenka11 = ` <div class="piosenka">
                <img src="assets/images/TheOffspringPrettyFlyforaWhiteGuy.jpg" height="80px" alt="">
                <h2>Pretty Fly for a white guy</h2>
                <h2 class="name"> The offspring </h2>
                <h2 class="time">3:13</h2>
            </div>`;
let piosenka12 = `<div class="piosenka">
                <img src="assets/images/TornadoOfSoulsMegadeth.jpg" height="80px" alt="">
                <h2>Tornado of Souls</h2>
                <h2 class="name"> Megadeth </h2>
                <h2 class="time">5:20</h2>
            </div>`;
            
document.querySelector('main').innerHTML = `<div class="piosenki-container">
            <div class="piosenkap">
                <img src="assets/images/FeelGoodIncGorillaz.jpg" height="80px" alt="">
                <h2>Feel Good Inc</h2>
                <h2 class="name">Gorillaz</h2>
                <h2 class="time">4:13</h2>
                <button class="plus-btn" onclick="pobierz(this)"> +</button>
            </div>
    
            <div class="piosenkap">
                <img src="assets/images/ClintEastwoodGorillaz.jpg" height="80px" alt="">
                <h2>Clint Eastwood</h2>
                <h2 class="name">Gorillaz</h2>
                <h2 class="time">4:29</h2>
                <button class="plus-btn" onclick="pobierz(this)">+</button>
            </div>
    
            <div class="piosenkap">
                <img src="assets/images/FooFightersLearnToFly.jpg" height="80px" alt="">
                <h2>Learn To Fly</h2>
                <h2 class="name">Foo Fighters</h2>
                <h2 class="time">4:37</h2>
                <button class="plus-btn" onclick="pobierz(this)">+</button>
            </div>
    
            <div class="piosenkap">
                <img src="assets/images/HolyWarsThePunishmentDue.jpg" height="80px" alt="">
                <h2>Holy Wars... The Punishment Due</h2>
                <h2 class="name">Megadeth</h2>
                <h2 class="time">6:38</h2>
                <button class="plus-btn" onclick="pobierz(this)">+</button>
            </div>
    
            <div class="piosenkap">
                <img src="assets/images/InBloom.webp" height="80px" alt="">
                <h2>In bloom</h2>
                <h2 class="name">Nirvana</h2>
                <h2 class="time">4:58</h2>
                <button class="plus-btn" onclick="pobierz(this)">+</button>
            </div>
    
            <div class="piosenkap">
                <img src="assets/images/MetallicaCallOfKtulu.jpg" height="80px" alt="">
                <h2>Call of Ktulu</h2>
                <h2 class="name">Metallica</h2>
                <h2 class="time">8:56</h2>
                <button class="plus-btn" onclick="pobierz(this)">+</button>
            </div>
    
            <div class="piosenkap">
                <img src="assets/images/NirvanaDrainYou.jpg" height="80px" alt="">
                <h2>Drain You</h2>
                <h2 class="name">Nirvana</h2>
                <h2 class="time">3:44</h2>
                <button class="plus-btn" onclick="pobierz(this)">+</button>
            </div>
    
            <div class="piosenkap">
                <img src="assets/images/RainingBloodSlayer.jpg" height="80px" alt="">
                <h2>Raining Blood</h2>
                <h2 class="name">Slayer</h2>
                <h2 class="time">4:18</h2>
                <button class="plus-btn" onclick="pobierz(this)">+</button>
            </div>
    
            <div class="piosenkap">
                <img src="assets/images/RepentlessSlayer.jpg" height="80px" alt="">
                <h2>Repentless</h2>
                <h2 class="name">Slayer</h2>
                <h2 class="time">4:37</h2>
                <button class="plus-btn" onclick="pobierz(this)">+</button>
            </div>
    
            <div class="piosenkap">
                <img src="assets/images/SmellsLikeTeenSpiritNirvana.jpg" height="80px" alt="">
                <h2>Smells like teen spirit</h2>
                <h2 class="name">Nirvana</h2>
                <h2 class="time">4:39</h2>
                <button class="plus-btn" onclick="pobierz(this)">+</button>
            </div>
    
            <div class="piosenkap">
                <img src="assets/images/TheOffspringPrettyFlyforaWhiteGuy.jpg" height="80px" alt="">
                <h2>Pretty Fly for a White Guy</h2>
                <h2 class="name">The Offspring</h2>
                <h2 class="time">3:13</h2>
                <button class="plus-btn" onclick="pobierz(this)">+</button>
            </div>
    
            <div class="piosenkap">
                <img src="assets/images/TornadoOfSoulsMegadeth.jpg" height="80px" alt="">
                <h2>Tornado of Souls</h2>
                <h2 class="name">Megadeth</h2>
                <h2 class="time">5:20</h2>
                <button class="plus-btn" onclick="pobierz(this)">+</button>
            </div>
        </div>`;
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
              renderLibrary(); 
          } else {
              console.log(`Piosenka już istnieje: ${song.title}`);
          }
      }
      document.querySelector('header').id = "headerXD";

document.querySelector('main').id = "mainHome"
document.getElementById("home", "home2").addEventListener('click', function (){
  document.querySelector('main').id = "mainHome"
  document.querySelector('header').id = "headerXD";
  document.querySelector('main').innerHTML = `<div class="piosenki-container">
            <div class="piosenkap">
                <img src="assets/images/FeelGoodIncGorillaz.jpg" height="80px" alt="">
                <h2>Feel Good Inc</h2>
                <h2 class="name">Gorillaz</h2>
                <h2 class="time">4:13</h2>
                <button class="plus-btn" onclick="pobierz(this)"> +</button>
            </div>
    
            <div class="piosenkap">
                <img src="assets/images/ClintEastwoodGorillaz.jpg" height="80px" alt="">
                <h2>Clint Eastwood</h2>
                <h2 class="name">Gorillaz</h2>
                <h2 class="time">4:29</h2>
                <button class="plus-btn" onclick="pobierz(this)">+</button>
            </div>
    
            <div class="piosenkap">
                <img src="assets/images/FooFightersLearnToFly.jpg" height="80px" alt="">
                <h2>Learn To Fly</h2>
                <h2 class="name">Foo Fighters</h2>
                <h2 class="time">4:37</h2>
                <button class="plus-btn" onclick="pobierz(this)">+</button>
            </div>
    
            <div class="piosenkap">
                <img src="assets/images/HolyWarsThePunishmentDue.jpg" height="80px" alt="">
                <h2>Holy Wars... The Punishment Due</h2>
                <h2 class="name">Megadeth</h2>
                <h2 class="time">6:38</h2>
                <button class="plus-btn" onclick="pobierz(this)">+</button>
            </div>
    
            <div class="piosenkap">
                <img src="assets/images/InBloom.webp" height="80px" alt="">
                <h2>In bloom</h2>
                <h2 class="name">Nirvana</h2>
                <h2 class="time">4:58</h2>
                <button class="plus-btn" onclick="pobierz(this)">+</button>
            </div>
    
            <div class="piosenkap">
                <img src="assets/images/MetallicaCallOfKtulu.jpg" height="80px" alt="">
                <h2>Call of Ktulu</h2>
                <h2 class="name">Metallica</h2>
                <h2 class="time">8:56</h2>
                <button class="plus-btn" onclick="pobierz(this)">+</button>
            </div>
    
            <div class="piosenkap">
                <img src="assets/images/NirvanaDrainYou.jpg" height="80px" alt="">
                <h2>Drain You</h2>
                <h2 class="name">Nirvana</h2>
                <h2 class="time">3:44</h2>
                <button class="plus-btn" onclick="pobierz(this)">+</button>
            </div>
    
            <div class="piosenkap">
                <img src="assets/images/RainingBloodSlayer.jpg" height="80px" alt="">
                <h2>Raining Blood</h2>
                <h2 class="name">Slayer</h2>
                <h2 class="time">4:18</h2>
                <button class="plus-btn" onclick="pobierz(this)">+</button>
            </div>
    
            <div class="piosenkap">
                <img src="assets/images/RepentlessSlayer.jpg" height="80px" alt="">
                <h2>Repentless</h2>
                <h2 class="name">Slayer</h2>
                <h2 class="time">4:37</h2>
                <button class="plus-btn" onclick="pobierz(this)">+</button>
            </div>
    
            <div class="piosenkap">
                <img src="assets/images/SmellsLikeTeenSpiritNirvana.jpg" height="80px" alt="">
                <h2>Smells like teen spirit</h2>
                <h2 class="name">Nirvana</h2>
                <h2 class="time">4:39</h2>
                <button class="plus-btn" onclick="pobierz(this)">+</button>
            </div>
    
            <div class="piosenkap">
                <img src="assets/images/TheOffspringPrettyFlyforaWhiteGuy.jpg" height="80px" alt="">
                <h2>Pretty Fly for a White Guy</h2>
                <h2 class="name">The Offspring</h2>
                <h2 class="time">3:13</h2>
                <button class="plus-btn" onclick="pobierz(this)">+</button>
            </div>
    
            <div class="piosenkap">
                <img src="assets/images/TornadoOfSoulsMegadeth.jpg" height="80px" alt="">
                <h2>Tornado of Souls</h2>
                <h2 class="name">Megadeth</h2>
                <h2 class="time">5:20</h2>
                <button class="plus-btn" onclick="pobierz(this)">+</button>
            </div>
        </div>`;
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
              renderLibrary(); 
          } else {
              console.log(`Piosenka już istnieje: ${song.title}`);
          }
      }
      
});
document.getElementById('playerr', 'playerr2').addEventListener('click', function () {
  console.log("Kliknięto na playerr!"); 
  document.querySelector('main').id = "mainPlayer"

  document.querySelector('header').id = "headerlol";

  document.querySelector('main').innerHTML = `
    <section class="leftSectionMain">
        <div class="container"></div>
    </section>
    <section class="rightSectionMain">
        <section class="play">
            <div class="audio-player"></div>
        </section>
        <section class="bottomTwoDivs">
            <div class="songInfo"></div>
            <div class="clock">0:00:00</div>
        </section>
    </section>`;

  
  let containerPiosenki = document.querySelector('.container');
  console.log("Kontener piosenek załadowany:", containerPiosenki); 


  let playlist = JSON.parse(localStorage.getItem('playlist')) || [];
  containerPiosenki.innerHTML = "";  

  playlist.forEach((song) => {
    containerPiosenki.innerHTML += `
      <div class="piosenka">
          <img src="${song.image}" alt="${song.title}" height="80px">
          <h2>${song.title}</h2>
          <h2 class="name">${song.artist}</h2>
          <h2 class="time">${song.duration}</h2>
      </div>
    `;
  });

  let piosenki = document.querySelectorAll(".piosenka");
  console.log("Tablica piosenek:", piosenki); 

  if (piosenki.length === 0) {
    console.log("Brak piosenek na stronie.");
  }


  function zmianaPiosenek() {
    let wybranaPiosenka = document.querySelector("#wybranaPiosenka h2:first-of-type").textContent;
    console.log("Wybrana piosenka:", wybranaPiosenka);

    let songUrl = "";
    let opis = "";

    switch (wybranaPiosenka) {
      case "Feel Good Inc":
        songUrl = "assets/Audio/Fgi.mp3";
        opis = "Feel Good Inc. by Gorillaz is a song that blends elements of alternative rock, hip-hop, and electronic music...";
        break;
      case "Clint Eastwood":
        songUrl = "assets/Audio/Cle.mp3";
        opis = "Clint Eastwood by Gorillaz is a genre-blending track that mixes hip-hop, alternative rock, and electronic elements...";
        break;
      case "Learn To Fly":
        songUrl = "assets/Audio/Ltf.mp3";
        opis = "Learn to Fly by Foo Fighters is an energetic rock song that blends catchy melodies with powerful guitar riffs...";
        break;
      case "Holy Wars... The Punishment Due":
        songUrl = "assets/Audio/Hwtpd.mp3";
        opis = "Holy Wars... The Punishment Due by Megadeth is a fast-paced thrash metal epic that addresses political and religious conflict...";
        break;
      case "In bloom":
        songUrl = "assets/Audio/Ib.mp3";
        opis = "In Bloom by Nirvana is a grunge rock song that contrasts catchy, melodic elements with deeper, more introspective lyrics...";
        break;
      case "Call of Ktulu":
        songUrl = "assets/Audio/Tcok.mp3";
        opis = "Call of Ktulu by Metallica is an instrumental track that blends symphonic elements with thrash metal...";
        break;
      case "Drain You":
        songUrl = "assets/Audio/Dy.mp3";
        opis = "Drain You by Nirvana is a dynamic grunge rock song that combines raw energy with emotional depth...";
        break;
      case "Raining Blood":
        songUrl = "assets/Audio/Rb.mp3";
        opis = "Raining Blood by Slayer is an iconic thrash metal anthem known for its intense speed, aggressive riffs...";
        break;
      case "Repentless":
        songUrl = "assets/Audio/Rep.mp3";
        opis = "Repentless by Slayer is a fast, aggressive thrash metal track that embodies the band's signature brutal sound...";
        break;
      case "Smells like teen spirit":
        songUrl = "assets/Audio/Slts.mp3";
        opis = "Smells Like Teen Spirit by Nirvana is an iconic grunge anthem that revolutionized rock music...";
        break;
      case "Pretty Fly for a white guy":
        songUrl = "assets/Audio/Pffawg.mp3";
        opis = "Pretty Fly (for a White Guy) by The Offspring is a fun, upbeat punk rock song that humorously addresses cultural appropriation...";
        break;
      case "Tornado of Souls":
        songUrl = "assets/Audio/Tos.mp3";
        opis = "Tornado of Souls by Megadeth is a high-energy thrash metal track known for its intricate guitar work...";
        break;
      default:
        songUrl = "";
        opis = "CHOOSE A SONG";
        break;
    }

    console.log("Ścieżka piosenki:", songUrl);
    console.log("Opis piosenki:", opis);

   
    let audioPlayer = document.querySelector(".audio-player");
    audioPlayer.innerHTML = `
      <audio controls id="background_audio1">
          <source src="${songUrl}" />
          Your browser does not support the audio element.
      </audio>
      <div id="PokazName">${wybranaPiosenka}</div>
    `;

    let songInfo = document.querySelector(".songInfo");
    songInfo.innerHTML = `<h2>${opis}</h2>`;
  }

  piosenki.forEach(function (piosenka) {
    piosenka.addEventListener("click", function () {
      console.log("Kliknięto na piosenkę:", piosenka);
    
      piosenki.forEach(function (song) {
        song.id = ""; 
      });

    
      piosenka.id = "wybranaPiosenka"; 
      zmianaPiosenek(); 
    });
  });

  setInterval(showTime, 1000);

  function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let am_pm = "AM";

    if (hour >= 12) {
      if (hour > 12) hour -= 12;
      am_pm = "PM";
    } else if (hour == 0) {
      hour = 12;
      am_pm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":" + min + ":" + sec + " " + am_pm;
    document.querySelector(".clock").innerHTML = `<h2>${currentTime}</h2>`;
  }

  showTime();  
});




     
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
      <div class="library-song" >
          <img src="${song.image}" alt="${song.title}" height="80px">
          <h2>${song.title}</h2>
          <h3>${song.artist}</h3>
          <h4>${song.duration}</h4>
          <button class="delete-btn" onclick="usunPiosenke('${song.title}')"><p style="text-align:center;">-</p></button>
      </div>
    `;
  });
}


document.getElementById("librarynav", "librarynav2").addEventListener('click', function () {
  document.querySelector('main').id = "mainLib"
  console.log("kliknales library, gdzies inny jest blad");
  document.querySelector('header').id = "headerbozo";
  document.querySelector('main').innerHTML = `<div class="library-container" style=""></div>`;

  renderLibrary(); 
});


const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
hamMenu.addEventListener('click', () =>{
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
  document.getElementById('close').addEventListener('click', function (){
      hamMenu.classList.remove('active');
      offScreenMenu.classList.remove('active');
  });
} );




function changeToHome(){
  document.querySelector('main').id = "mainHome"
  document.querySelector('header').id = "headerXD";
  hamMenu.classList.remove('active');
  offScreenMenu.classList.remove('active');
  document.querySelector('main').innerHTML = `<div class="piosenki-container">
            <div class="piosenkap">
                <img src="assets/images/FeelGoodIncGorillaz.jpg" height="80px" alt="">
                <h2>Feel Good Inc</h2>
                <h2 class="name">Gorillaz</h2>
                <h2 class="time">4:13</h2>
                <button class="plus-btn" onclick="pobierz(this)"> +</button>
            </div>
    
            <div class="piosenkap">
                <img src="assets/images/ClintEastwoodGorillaz.jpg" height="80px" alt="">
                <h2>Clint Eastwood</h2>
                <h2 class="name">Gorillaz</h2>
                <h2 class="time">4:29</h2>
                <button class="plus-btn" onclick="pobierz(this)">+</button>
            </div>
    
            <div class="piosenkap">
                <img src="assets/images/FooFightersLearnToFly.jpg" height="80px" alt="">
                <h2>Learn To Fly</h2>
                <h2 class="name">Foo Fighters</h2>
                <h2 class="time">4:37</h2>
                <button class="plus-btn" onclick="pobierz(this)">+</button>
            </div>
    
            <div class="piosenkap">
                <img src="assets/images/HolyWarsThePunishmentDue.jpg" height="80px" alt="">
                <h2>Holy Wars... The Punishment Due</h2>
                <h2 class="name">Megadeth</h2>
                <h2 class="time">6:38</h2>
                <button class="plus-btn" onclick="pobierz(this)">+</button>
            </div>
    
            <div class="piosenkap">
                <img src="assets/images/InBloom.webp" height="80px" alt="">
                <h2>In bloom</h2>
                <h2 class="name">Nirvana</h2>
                <h2 class="time">4:58</h2>
                <button class="plus-btn" onclick="pobierz(this)">+</button>
            </div>
    
            <div class="piosenkap">
                <img src="assets/images/MetallicaCallOfKtulu.jpg" height="80px" alt="">
                <h2>Call of Ktulu</h2>
                <h2 class="name">Metallica</h2>
                <h2 class="time">8:56</h2>
                <button class="plus-btn" onclick="pobierz(this)">+</button>
            </div>
    
            <div class="piosenkap">
                <img src="assets/images/NirvanaDrainYou.jpg" height="80px" alt="">
                <h2>Drain You</h2>
                <h2 class="name">Nirvana</h2>
                <h2 class="time">3:44</h2>
                <button class="plus-btn" onclick="pobierz(this)">+</button>
            </div>
    
            <div class="piosenkap">
                <img src="assets/images/RainingBloodSlayer.jpg" height="80px" alt="">
                <h2>Raining Blood</h2>
                <h2 class="name">Slayer</h2>
                <h2 class="time">4:18</h2>
                <button class="plus-btn" onclick="pobierz(this)">+</button>
            </div>
    
            <div class="piosenkap">
                <img src="assets/images/RepentlessSlayer.jpg" height="80px" alt="">
                <h2>Repentless</h2>
                <h2 class="name">Slayer</h2>
                <h2 class="time">4:37</h2>
                <button class="plus-btn" onclick="pobierz(this)">+</button>
            </div>
    
            <div class="piosenkap">
                <img src="assets/images/SmellsLikeTeenSpiritNirvana.jpg" height="80px" alt="">
                <h2>Smells like teen spirit</h2>
                <h2 class="name">Nirvana</h2>
                <h2 class="time">4:39</h2>
                <button class="plus-btn" onclick="pobierz(this)">+</button>
            </div>
    
            <div class="piosenkap">
                <img src="assets/images/TheOffspringPrettyFlyforaWhiteGuy.jpg" height="80px" alt="">
                <h2>Pretty Fly for a White Guy</h2>
                <h2 class="name">The Offspring</h2>
                <h2 class="time">3:13</h2>
                <button class="plus-btn" onclick="pobierz(this)">+</button>
            </div>
    
            <div class="piosenkap">
                <img src="assets/images/TornadoOfSoulsMegadeth.jpg" height="80px" alt="">
                <h2>Tornado of Souls</h2>
                <h2 class="name">Megadeth</h2>
                <h2 class="time">5:20</h2>
                <button class="plus-btn" onclick="pobierz(this)">+</button>
            </div>
        </div>`;
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
              renderLibrary(); 
          } else {
              console.log(`Piosenka już istnieje: ${song.title}`);
          }
      }
      
}


function changeToPlayer(){
  console.log("Kliknięto na playerr!"); 
  document.querySelector('main').id = "mainPlayer"
  hamMenu.classList.remove('active');
  offScreenMenu.classList.remove('active');

  document.querySelector('header').id = "headerlol";

  document.querySelector('main').innerHTML = `
    <section class="leftSectionMain">
        <div class="container"></div>
    </section>
    <section class="rightSectionMain">
        <section class="play">
            <div class="audio-player"></div>
        </section>
        <section class="bottomTwoDivs">
            <div class="songInfo"></div>
            <div class="clock">0:00:00</div>
        </section>
    </section>`;

  
  let containerPiosenki = document.querySelector('.container');
  console.log("Kontener piosenek załadowany:", containerPiosenki); 


  let playlist = JSON.parse(localStorage.getItem('playlist')) || [];
  containerPiosenki.innerHTML = "";  

  playlist.forEach((song) => {
    containerPiosenki.innerHTML += `
      <div class="piosenka">
          <img src="${song.image}" alt="${song.title}" height="80px">
          <h2>${song.title}</h2>
          <h2 class="name">${song.artist}</h2>
          <h2 class="time">${song.duration}</h2>
      </div>
    `;
  });

  let piosenki = document.querySelectorAll(".piosenka");
  console.log("Tablica piosenek:", piosenki); 

  if (piosenki.length === 0) {
    console.log("Brak piosenek na stronie.");
  }


  function zmianaPiosenek() {
    let wybranaPiosenka = document.querySelector("#wybranaPiosenka h2:first-of-type").textContent;
    console.log("Wybrana piosenka:", wybranaPiosenka);

    let songUrl = "";
    let opis = "";

    switch (wybranaPiosenka) {
      case "Feel Good Inc":
        songUrl = "assets/Audio/Fgi.mp3";
        opis = "Feel Good Inc. by Gorillaz is a song that blends elements of alternative rock, hip-hop, and electronic music...";
        break;
      case "Clint Eastwood":
        songUrl = "assets/Audio/Cle.mp3";
        opis = "Clint Eastwood by Gorillaz is a genre-blending track that mixes hip-hop, alternative rock, and electronic elements...";
        break;
      case "Learn To Fly":
        songUrl = "assets/Audio/Ltf.mp3";
        opis = "Learn to Fly by Foo Fighters is an energetic rock song that blends catchy melodies with powerful guitar riffs...";
        break;
      case "Holy Wars... The Punishment Due":
        songUrl = "assets/Audio/Hwtpd.mp3";
        opis = "Holy Wars... The Punishment Due by Megadeth is a fast-paced thrash metal epic that addresses political and religious conflict...";
        break;
      case "In bloom":
        songUrl = "assets/Audio/Ib.mp3";
        opis = "In Bloom by Nirvana is a grunge rock song that contrasts catchy, melodic elements with deeper, more introspective lyrics...";
        break;
      case "Call of Ktulu":
        songUrl = "assets/Audio/Tcok.mp3";
        opis = "Call of Ktulu by Metallica is an instrumental track that blends symphonic elements with thrash metal...";
        break;
      case "Drain You":
        songUrl = "assets/Audio/Dy.mp3";
        opis = "Drain You by Nirvana is a dynamic grunge rock song that combines raw energy with emotional depth...";
        break;
      case "Raining Blood":
        songUrl = "assets/Audio/Rb.mp3";
        opis = "Raining Blood by Slayer is an iconic thrash metal anthem known for its intense speed, aggressive riffs...";
        break;
      case "Repentless":
        songUrl = "assets/Audio/Rep.mp3";
        opis = "Repentless by Slayer is a fast, aggressive thrash metal track that embodies the band's signature brutal sound...";
        break;
      case "Smells like teen spirit":
        songUrl = "assets/Audio/Slts.mp3";
        opis = "Smells Like Teen Spirit by Nirvana is an iconic grunge anthem that revolutionized rock music...";
        break;
      case "Pretty Fly for a white guy":
        songUrl = "assets/Audio/Pffawg.mp3";
        opis = "Pretty Fly (for a White Guy) by The Offspring is a fun, upbeat punk rock song that humorously addresses cultural appropriation...";
        break;
      case "Tornado of Souls":
        songUrl = "assets/Audio/Tos.mp3";
        opis = "Tornado of Souls by Megadeth is a high-energy thrash metal track known for its intricate guitar work...";
        break;
      default:
        songUrl = "";
        opis = "CHOOSE A SONG";
        break;
    }

    console.log("Ścieżka piosenki:", songUrl);
    console.log("Opis piosenki:", opis);

   
    let audioPlayer = document.querySelector(".audio-player");
    audioPlayer.innerHTML = `
      <audio controls id="background_audio1">
          <source src="${songUrl}" />
          Your browser does not support the audio element.
      </audio>
      <div id="PokazName">${wybranaPiosenka}</div>
    `;

    let songInfo = document.querySelector(".songInfo");
    songInfo.innerHTML = `<h2>${opis}</h2>`;
  }

  piosenki.forEach(function (piosenka) {
    piosenka.addEventListener("click", function () {
      console.log("Kliknięto na piosenkę:", piosenka);
    
      piosenki.forEach(function (song) {
        song.id = ""; 
      });

    
      piosenka.id = "wybranaPiosenka"; 
      zmianaPiosenek(); 
    });
  });
  if (typeof document.querySelector(".clock") === undefined){
  function showTime(){
    
  }
}
else{
  
  setInterval(showTime, 1000);

  function showTime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let am_pm = "AM";

    if (hour >= 12) {
      if (hour > 12) hour -= 12;
      am_pm = "PM";
    } else if (hour == 0) {
      hour = 12;
      am_pm = "AM";
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":" + min + ":" + sec + " " + am_pm;
    document.querySelector(".clock").innerHTML = `<h2>${currentTime}</h2>`;
  }

  showTime();
}
} 


function changeToLibrary(){
  hamMenu.classList.remove('active');
  offScreenMenu.classList.remove('active');
  document.querySelector('main').id = "mainLib"
  console.log("kliknales library, gdzies inny jest blad");
  document.querySelector('header').id = "headerbozo";
  document.querySelector('main').innerHTML = `<div class="library-container" style=""></div>`;

  renderLibrary(); 
}
