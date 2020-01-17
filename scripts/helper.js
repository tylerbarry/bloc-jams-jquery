class Helper {
  playPauseAndUpdate(song) {
    player.playPause(song);
    const duration = player.currrentlyPlaying.getDuration();
    $('#time-control .total-time').text( duration );
  }
};

var helper = Helper;

$('player.playPause').replaceAll('helper.playPauseAndUpdate');
