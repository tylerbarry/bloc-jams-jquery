class Helper {
  playPauseAndUpdate(song){
    const duration = player.getDuration();
    player.playPause(song);
    $('#time-control .total-time').text(
      player.prettyTime( duration )
    );
  }
}

const helper = new Helper();
