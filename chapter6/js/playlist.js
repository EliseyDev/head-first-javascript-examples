function addSongs() {
    var song1 = document.getElementById("song1");
    var song2 = document.getElementById("song2");
    var song3 = document.getElementById("song3");

    song1.innerHTML = "Sound of silence, by Disturbed";
    song2.innerHTML = "Lost on you, by LP";
    song3.innerHTML = "Nothing else matters, by Metallica";
}

window.onload = addSongs;