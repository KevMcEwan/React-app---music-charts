import React from 'react';
import SongDetail from './SongDetail.js';

const SongList = ({ songs }) => {
   const newSongs = songs.map((song, index) => {
      return (
         <li key={index} className="song">
            <SongDetail
               title={song["im:name"].label}
               artist={song["im:artist"].label}
               genre={song.category.attributes.label}
               play={song.link[1].attributes.href}
               position={index + 1}
            >
            </SongDetail>
         </li>
      );
   });

   return (
      <ol>
         {newSongs}
      </ol>
   );

}

export default SongList;