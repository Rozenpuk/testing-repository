var songCoversBank = ['url("assets/bridge.jpg")', 'url("assets/market.jpg")', 'url("assets/river.jpg")'],
    songsBank = ['assets/Under the Bridge.m4a', 'assets/Ching Chime.mp3', 'assets/River In The Road.mp3'],
    audio = "",
    buttonState = document.getElementById("play").src,
    splitArr = buttonState.split("/");

document.getElementById("player-body").style.backgroundImage = songCoversBank[0];

function nextSong() {
  var currSongCover = document.getElementById("player-body").style.backgroundImage;
//  console.log(splitArr[splitArr.length - 1]);
  if (!audio == "") {
    audio.pause();
  }
  for (var key in songCoversBank) {
    if (currSongCover == songCoversBank[key]) {
      document.getElementById("player-body").style.backgroundImage = songCoversBank[+key +1];
      if (songCoversBank[+key +1]) {
        audio = new Audio(songsBank[+key +1]);
        document.getElementById("bg-cover").src=songCoversBank[+key +1].slice(5, -2);
      }
    } if (currSongCover == songCoversBank[songCoversBank.length - 1]) {
      document.getElementById("player-body").style.backgroundImage = songCoversBank[0];
      audio = new Audio(songsBank[0]);
      document.getElementById("bg-cover").src=songCoversBank[0].slice(5, -2);
    }
  }
  if (splitArr[splitArr.length - 1] == "pause.png") {
  audio.play();
  }
  audio.volume = 0.4;
}

function prevSong() {
  var currSongCover = document.getElementById("player-body").style.backgroundImage;
  if (!audio == "") {
    audio.pause();
  }
  for (var key in songCoversBank) {
    if (currSongCover == songCoversBank[key]) {
      document.getElementById("player-body").style.backgroundImage = songCoversBank[+key -1];
      audio = new Audio(songsBank[+key -1]);
      if (songCoversBank[+key -1]) {
        document.getElementById("bg-cover").src=songCoversBank[+key -1].slice(5, -2);
      }
    } if (currSongCover == songCoversBank[0]) {
      document.getElementById("player-body").style.backgroundImage = songCoversBank[songCoversBank.length - 1];
      audio = new Audio(songsBank[songsBank.length - 1]);
      document.getElementById("bg-cover").src=songCoversBank[songCoversBank.length - 1].slice(5, -2);
    }
  }
  if (splitArr[splitArr.length - 1] == "pause.png") {
  audio.play();
  }
  audio.volume = 0.4;
}

function playPause() {
  buttonState = document.getElementById("play").src;
  splitArr = buttonState.split("/");
//  console.log(splitArr[splitArr.length - 1])
  if (splitArr[splitArr.length - 1] == "play.png") {
    document.getElementById('body-filter').style.backgroundColor = "rgba(34, 46, 55, 0.8)";
    document.getElementById("play").src = "assets/pause.png";
//    console.log(document.getElementById("play").src)
    if (!audio == "") {
      audio.play();
    } else {
    switch (document.getElementById("player-body").style.backgroundImage) {
      case songCoversBank[0]:
        audio = new Audio(songsBank[0]);
        audio.play();
        break;
      case songCoversBank[1]:
        audio = new Audio(songsBank[1]);
        audio.play();
        break;
      case songCoversBank[2]:
        audio = new Audio(songsBank[2]);
        audio.play();
        break;
      }
    }
  } else {
    audio.pause();
    document.getElementById("play").src = "assets/play.png";
    document.getElementById('body-filter').style.backgroundColor = "rgba(34, 46, 55, 0.9)";
//    console.log(document.getElementById("play").src)
  }
  buttonState = document.getElementById("play").src;
  splitArr = buttonState.split("/");
  audio.volume = 0.4;
}

function test() {
  alert('test');
}

function change() {
  document.getElementById("player-body").style.backgroundImage = songCoversBank[0];
}
