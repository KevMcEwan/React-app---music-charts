import React, { Component } from 'react';
import SongList from '../components/SongList.js';
import SongDetail from '../components/SongDetail.js';
import Header from '../components/Header.js';

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
   const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
   const request = new XMLHttpRequest();
   request.open('GET', url);
   request.addEventListener('load', () => {
      const jsonString = request.responseText;
      const songObjects = JSON.parse(jsonString);
      this.setState({songs: songObjects.feed.entry});
   })
   request.send();
}

   render() {
      return (
         <>
            <Header/>
            <SongList songs={this.state.songs} onSongSelected={this.handleSongSelected} />
            <SongDetail song={this.state.currentSong} />
         </>
      );
   }

}

export default SongContainer;