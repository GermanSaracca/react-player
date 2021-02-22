import React, { useState } from "react";

//Style
import "./styles/app.scss";
//Components
import Player from "./components/Player";
import Song from "./components/Song";
import Library from "./components/Library";
import ToggleLibrary from "./components/ToggleLibrary";
//Songs
import songsData from "./util";

function App() {
  //State
  const [songs, setSongs] = useState(songsData());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [seeLibrary, setSeeLibrary] = useState(false);

  return (
    <div className={`App ${seeLibrary ? "library-active" : ""}`}>
      <ToggleLibrary seeLibrary={seeLibrary} setSeeLibrary={setSeeLibrary} />
      <Song currentSong={currentSong} isPlaying={isPlaying} />
      <Player
        songs={songs}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        setCurrentSong={setCurrentSong}
        currentSong={currentSong}
      />
      <Library
        songs={songs}
        setCurrentSong={setCurrentSong}
        currentSong={currentSong}
        seeLibrary={seeLibrary}
        setSeeLibrary={setSeeLibrary}
      />
    </div>
  );
}

export default App;
