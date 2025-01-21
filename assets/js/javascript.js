let piosenki = document.querySelectorAll('.piosenka');

piosenki.forEach(function(piosenka) {
    piosenka.addEventListener("click", function() {
        piosenki.forEach(function(p) {
            p.id = "";
        });

        piosenka.id = "wybranaPiosenka";

        zmianaPiosenek();
    });
});


function zmianaPiosenek() {

    let wybranaPiosenka = document.querySelector("#wybranaPiosenka h2:first-of-type").textContent;


    let songUrl = ""; 

    switch (wybranaPiosenka) {
        case "Feel Good Inc ":
            songUrl = "assets/Audio/Fgi.mp3";
            break;
        case "Clint Eastwood":
            songUrl = "assets/Audio/Cle.mp3";
            break;
        case "Learn To Fly":
        songUrl = "assets/Audio/Ltf.mp3"; 
        break;
        case "Holy Wars... The Punishment Due":
        songUrl = "assets/Audio/Hwtpd.mp3";
        break;
        case "In bloom":
            songUrl = "assets/Audio/Ib.mp3";
            break;
            case "Call of Ktulu":
                songUrl = "assets/Audio/Tcok.mp3";
                break;
        case "Drain You":
            songUrl = "assets/Audio/Dy.mp3";
            break;
        case "Raining Blood ":
            songUrl = "assets/Audio/Rb.mp3";
            break;
        case "Repentless ":
            songUrl = "assets/Audio/Rep.mp3";
            break;
        case "Smells like teen spirit":
            songUrl = "assets/Audio/Slts.mp3";
            break;
        case "Pretty Fly for a white guy":
            songUrl = "../Audio/Pffawg.mp3";
            break;
        case "Tornado of Souls":
            songUrl = "../Audio/Tos.mp3";
            break;
        default:
            songUrl = "";
            break;
    }

    let audioPlayer = document.querySelector('.audio-player');
    audioPlayer.innerHTML = `
    <audio controls id='background_audio1'>
        <source src='${songUrl}' />
        Your browser does not support the audio element.
    </audio>
    <div id="PokazName">${wybranaPiosenka}</div>
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

    hour =
        hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currentTime = hour + ":" + min + ":" + sec + " " + am_pm;

    document.querySelector(".clock").innerHTML = currentTime; 
}

showTime();