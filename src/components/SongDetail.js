import React from 'react';

const SongDetail = ({song}) => {
   if (!song) return null;
   return (
      <>
      <h3>Position: </h3>
      <p>Title: {song["im:name"].label}</p>
      <p>Artist: {song["im:artist"].label}</p>
      <p>Genre: {song.category.attributes.label}</p>
      <p>Link</p>
      </>
   );
}

export default SongDetail;