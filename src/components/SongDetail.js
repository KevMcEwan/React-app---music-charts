import React from 'react';
import './SongDetail.css';

const SongDetail = (song) => (
   <>
      <p>Position: {song.position}</p>
      <p>Title: {song.title}</p>
      <p>Artist: {song.artist}</p>
      <p>Genre: {song.genre}</p>
      
   </>
)

export default SongDetail;