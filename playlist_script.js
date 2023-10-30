const playlistId = '2AebaflwnlNAGob8GLb7EV'; // ID de la playlist de Spotify

function showPlaylist(playlistId) {
  const url = `https://open.spotify.com/embed/playlist/${playlistId}`;
  const iframe = document.createElement('iframe');
  iframe.src = url;
  iframe.width = '300';
  iframe.height = '380';
  iframe.frameborder = '0';
  iframe.allowtransparency = 'true';
  iframe.allow = 'encrypted-media';
  document.getElementById('playlist-container').appendChild(iframe);
}

showPlaylist(playlistId);