import React, { Component } from 'react';
import SongSelector from '../components/SongSelector.js';
import SongDetail from '../components/SongDetail.js';

class SongContainer extends Component {
   constructor(props) {
      super(props);
      this.state = {
         songs: [],
         currentSong: null
      };
      this.handleSongSelected = this.handleSongSelected.bind(this);
   }

handleSongSelected(index){
   const selectedSong = this.state.songs[index];
   this.setState({currentSong: selectedSong});
}


componentDidMount(){
   const url = 'https://rss.itunes.apple.com/api/v1/gb/itunes-music/top-songs/all/10/non-explicit.json';
   const request = new XMLHttpRequest();
   request.open('GET', url);
   request.addEventListener('load', () => {
      const jsonString = request.responseText;
      const songObjects = JSON.parse(jsonString);
      this.setState({songs: songObjects.feed.results});
   })
   request.send();
}

   render() {
      return (
         <>
            <h1>Top of the Pops Top 20!</h1>
            <SongSelector songs={this.state.songs} onSongSelected={this.handleSongSelected} />
            <SongDetail song={this.state.currentSong} />
         </>
      );
   }

}

export default SongContainer;