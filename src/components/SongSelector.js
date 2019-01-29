import React from 'react';

const SongSelector = (props) => {
   const options = props.songs.map((song, index) => {
      return(
         <option value={index} key={index}>{song["im:name"].label} by {song["im:artist"].label}</option>
      )
   })

   function handleChange(event){
      props.onSongSelected(event.target.value);
   }

   return(
      <select id="song-select" onChange={handleChange} defaultValue = 'default'>
      {options}
      </select>
   )

}

export default SongSelector;