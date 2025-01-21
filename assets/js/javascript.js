let piosenka1 = `<div class="piosenka">
                <img src="assets/images/FeelGoodIncGorillaz.jpg" height="80px" alt="">
                <h2>Feel Good Inc </h2>
                <h2 class="name"> Gorillaz </h2>
                <h2 class="time">4:13</h2>
            </div>`;
let piosenka2 = ` <div class="piosenka">
                <img src="assets/images/ClintEastwoodGorillaz.jpg" height="80px" alt="">
                <h2>Clint Eastwood </h2>
                <h2 class="name"> Gorillaz </h2>
                <h2 class="time">4:29</h2>
            </div>`;
let piosenka3 = ` <div class="piosenka">
                <img src="assets/images/FooFightersLearnToFly.jpg" height="80px" alt="">
                <h2>Learn To Fly </h2>
                <h2 class="name"> Foo Fighters </h2>
                <h2 class="time">4:37</h2>
            </div>`;
let piosenka4 = `<div class="piosenka">
                <img src="assets/images/HolyWarsThePunishmentDue.jpg" height="80px" alt="">
                <h2>Holy Wars... The Punishment Due</h2>
                <h2 class="name"> Megadeth </h2>
                <h2 class="time">6:38</h2>
            </div>`;
let piosenka5 = `<div class="piosenka">
                <img src="assets/images/InBloom.webp" height="80px" alt="">
                <h2>In bloom </h2>
                <h2 class="name"> Nirvana </h2>
                <h2 class="time">4:58</h2>
            </div>`;
let piosenka6 = `<div class="piosenka">
                <img src="assets/images/MetallicaCallOfKtulu.jpg" height="80px" alt="">
                <h2>Call of Ktulu</h2>
                <h2 class="name"> Metallica </h2>
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
                <h2>Pretty Fly for a white guy </h2>
                <h2 class="name"> The offspring </h2>
                <h2 class="time">3:13</h2>
            </div>`;
let piosenka12 = `<div class="piosenka">
                <img src="assets/images/TornadoOfSoulsMegadeth.jpg" height="80px" alt="">
                <h2>Tornado of Souls </h2>
                <h2 class="name"> Megadeth </h2>
                <h2 class="time">5:20</h2>
            </div>`;
            

let containerPiosenki = document.querySelector('.container');
// containerPiosenki.innerHTML = `${piosenka1}${piosenka2}${piosenka3}${piosenka4}${piosenka5}${piosenka6}${piosenka7}${piosenka8}${piosenka9}${piosenka10}${piosenka11}${piosenka12}`;

// Pobieranie danych z LocalStorage
let songTitle = localStorage.getItem('selectedSong');


console.log(localStorage.getItem('playlist'));

// Sprawdzanie, czy tytuł istnieje
if (songTitle) {
    console.log(`Odczytany tytuł piosenki: ${songTitle}`);
    // Możesz tutaj użyć `songTitle` według potrzeby
} else {
    console.log('Brak wybranego tytułu piosenki w LocalStorage.');
}



function renderPlaylist() {
  let playerContainer = document.querySelector(".container");
  let playlist = JSON.parse(localStorage.getItem('playlist')) || [];

  playerContainer.innerHTML = ""; // Czyszczenie listy

  playlist.forEach((song) => {
        document.querySelector('.container').innerHTML += `
          <div class="piosenka">
              <img src="${song.image}" alt="${song.title}" height="80px">
              <h2>${song.title}</h2>
              <h3>${song.artist}</h3>
              <h4>${song.duration}</h4>
              <button onclick="usunPiosenke('${song.title}')">Usuń</button>
          </div>
      `;
  });
}

  function usunPiosenke(title) {
    let playlist = JSON.parse(localStorage.getItem('playlist')) || [];
    playlist = playlist.filter((song) => song.title !== title);
    localStorage.setItem('playlist', JSON.stringify(playlist));
    renderPlaylist();
    console.log(`Usunięto piosenkę: ${title}`);
}



let piosenki = document.querySelectorAll(".piosenka");

piosenki.forEach(function (piosenka) {
  piosenka.addEventListener("click", function () {
    piosenki.forEach(function (p) {
      p.id = "";
    });

    piosenka.id = "wybranaPiosenka";

    zmianaPiosenek();
  });
});

function zmianaPiosenek() {
  let wybranaPiosenka = document.querySelector(
    "#wybranaPiosenka h2:first-of-type"
  ).textContent;

  let songUrl = "";

  let opis = "";

  switch (wybranaPiosenka) {
    case "Feel Good Inc ":
      songUrl = "assets/Audio/Fgi.mp3";
      break;
    case "Clint Eastwood ":
      songUrl = "assets/Audio/Cle.mp3";
      break;
    case "Learn To Fly ":
      songUrl = "assets/Audio/Ltf.mp3";
      break;
    case "Holy Wars... The Punishment Due":
      songUrl = "assets/Audio/Hwtpd.mp3";
      break;
    case "In bloom ":
      songUrl = "assets/Audio/Ib.mp3";
      break;
    case "Call of Ktulu":
      songUrl = "assets/Audio/Tcok.mp3";
      break;
    case "Drain You":
      songUrl = "assets/Audio/Dy.mp3";
      break;
    case "Raining Blood":
      songUrl = "assets/Audio/Rb.mp3";
      break;
    case "Repentless":
      songUrl = "assets/Audio/Rep.mp3";
      break;
    case "Smells like teen spirit":
      songUrl = "assets/Audio/Slts.mp3";
      break;
    case "Pretty Fly for a white guy ":
      songUrl = "assets/Audio/Pffawg.mp3";
      break;
    case "Tornado of Souls ":
      songUrl = "assets/Audio/Tos.mp3";
      break;
    default:
      songUrl = "";
      break;
  }

  switch (wybranaPiosenka) {
    case "Feel Good Inc ":
      opis =
        "Feel Good Inc. is a song by Gorillaz that blends elements of alternative rock, hip-hop, and electronic music. The track explores themes of modern society's decadence, contrasting virtual illusions of happiness with the reality of isolation and emptiness. Despite its dark message, the song captivates with its energetic sound, characteristic of Gorillaz's unique style.";
      break;
    case "Clint Eastwood ":
      opis =
        "Clint Eastwood by Gorillaz is a genre-blending track that mixes hip-hop, alternative rock, and electronic elements. The song features a laid-back beat and catchy lyrics, with a memorable rap by Del the Funky Homosapien. It tells the story of self-discovery and empowerment, with the narrator reflecting on control and overcoming challenges. The track's unique sound and thought-provoking themes helped establish Gorillaz as a groundbreaking band in the 2000s music scene.";
      break;
    case "Learn To Fly ":
      opis =
        "Learn to Fly by Foo Fighters is an energetic rock song that blends catchy melodies with powerful guitar riffs. The lyrics explore themes of longing, self-reflection, and the desire for change. With its uplifting sound and dynamic structure, the song has become one of Foo Fighters' most iconic tracks, resonating with listeners through its anthemic feel and emotional depth.";
      break;
    case "Holy Wars... The Punishment Due":
      opis =
        "Holy Wars... The Punishment Due by Megadeth is a fast-paced thrash metal epic that addresses political and religious conflict. The song is split into two parts, with the first focusing on the horrors of war and the second on the consequences of religious extremism. Known for its complex guitar riffs and intricate lyrics, it is one of Megadeth's most influential tracks, highlighting themes of justice, morality, and the devastating impact of war.";
      break;
    case "In bloom ":
      opis =
        "In Bloom by Nirvana is a grunge rock song that contrasts catchy, melodic elements with deeper, more introspective lyrics. Written by Kurt Cobain, the song explores the idea of people not fully understanding or connecting with the true meaning behind his music, especially those who only enjoy it on the surface. With its powerful dynamics and emotional depth, In Bloom became one of Nirvana's defining tracks, capturing the band's raw energy and Cobain's complex thoughts on fame and identity.";
      break;
    case "Call of Ktulu":
      opis =
        "Call of Ktulu by Metallica is an instrumental track that blends symphonic elements with thrash metal, creating a dark and atmospheric sound. Inspired by H.P. Lovecraft's Cthulhu Mythos, the song evokes a sense of mystery and cosmic horror, with intricate guitar work and dynamic shifts building tension throughout. As one of Metallica's standout instrumentals, it showcases the band's technical prowess and ability to convey intense emotions without words.";
      break;
    case "Drain You":
      opis =
        "Drain You by Nirvana is a dynamic grunge rock song that combines raw energy with emotional depth. The lyrics explore themes of dependence, love, and the complexity of relationships, often with a sense of discomfort and unease. With its catchy melody, intense guitar riffs, and Kurt Cobain’s distinctive voice, Drain You captures the raw, unfiltered emotions that define Nirvana's sound, making it a standout track on their landmark album Nevermind.";
      break;
    case "Raining Blood":
      opis =
        "Raining Blood by Slayer is an iconic thrash metal anthem known for its intense speed, aggressive riffs, and dark, apocalyptic imagery. The song, from their album Reign in Blood, explores themes of violence, chaos, and destruction, with lyrics that evoke a sense of an impending, blood-soaked reckoning. Its powerful drumming, blistering guitar solos, and relentless energy have made it a seminal track in the metal genre, showcasing Slayer's mastery of extreme music.";
      break;
    case "Repentless":
      opis =
        "Repentless by Slayer is a fast, aggressive thrash metal track that embodies the band's signature brutal sound. The song deals with themes of vengeance, defiance, and the rejection of remorse, with intense lyrics and powerful instrumentation. As the title track of their final studio album, Repentless, it captures the raw, uncompromising energy that Slayer is known for, combining blistering guitar riffs, rapid drumming, and dark, rebellious themes.";
      break;
    case "Smells like teen spirit":
      opis =
        "Smells Like Teen Spirit by Nirvana is an iconic grunge anthem that revolutionized rock music in the early '90s. With its powerful guitar riffs, raw energy, and catchy yet rebellious chorus, the song captures the angst and disillusionment of Generation X. Kurt Cobain’s introspective lyrics, often hard to decipher, convey a sense of youthful frustration and alienation. Widely considered one of the most influential songs of all time, it helped propel Nirvana and the grunge movement into the mainstream.";
      break;
    case "Pretty Fly for a white guy ":
      opis =
        "Pretty Fly (for a White Guy) by The Offspring is a fun, upbeat punk rock song that humorously addresses cultural appropriation and identity. The lyrics tell the story of a white boy who tries to adopt hip-hop style and attitudes to fit in, despite lacking true understanding of the culture. With its catchy melody and playful tone, the song became a mainstream hit, offering a satirical look at the desire to be something one is not, all while maintaining the band's signature energetic sound.";
      break;
    case "Tornado of Souls ":
      opis =
        "Tornado of Souls by Megadeth is a high-energy thrash metal track known for its intricate guitar work and complex songwriting. The song delves into themes of betrayal, revenge, and personal destruction, with vivid lyrics that capture the emotional intensity of a relationship unraveling. Featuring one of the band's most iconic guitar solos, Tornado of Souls showcases Megadeth's technical prowess and became a fan favorite, solidifying its place as one of the standout tracks on their album Rust in Peace.";
      break;
    default:
      opis = "CHOOSE A SONG";
      break;
  }

  let audioPlayer = document.querySelector(".audio-player");
  audioPlayer.innerHTML = `
    <audio controls id='background_audio1'>
        <source src='${songUrl}' />
        Your browser does not support the audio element.
    </audio>
    <div id="PokazName">${wybranaPiosenka}</div>
    `;

  let songInfo = document.querySelector(".songInfo");
  songInfo.innerHTML = `
    <h2>${opis}</h2>
    `;
}

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

  document.querySelector(".clock").innerHTML = `<h2>${currentTime} </h2>`;
}

showTime();

