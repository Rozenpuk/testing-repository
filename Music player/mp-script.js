var songCoversBank = ["assets/bridge.jpg", "assets/market.jpg", "assets/river.jpg"]

function nextSong() {
  var currSongCover = document.getElementById("player-body").style.backgroundImage;
  for (var songCover in songCoversBank) {
    if (currSongCover == url(songCoversBank[songCover])) {
      currSongCover = songCoversBank[+songCover + 1]
    }
  }
  }
}

function test() {
  alert("hello");
}
