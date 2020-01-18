{
  album.songs.forEach( (song, index) => {
  var prettyTimed = player.prettyTime(song.duration);

    song.element = $(`
      <tr>
        <td>
          <button>
            <span class="song-number">${index + 1}</span>
            <span class="ion-play"></span>
            <span class="ion-pause"></span>
          </button>
        </td>
        <td>${song.title}</td>
        <td>${prettyTimed}</td>
      </tr>
    `);

  song.element.on('click', event => {
    helper.playPauseAndUpdate(song);
    $('button#play-pause').attr('playState', player.playState);
  });
    $('#song-list').append(song.element);
  });
}
