import React from "react";
import LibrarySongRow from "./LibrarySongRow";

const Library = ({
  seeLibrary,
  setSeeLibrary,
  songs,
  setCurrentSong,
  currentSong,
}) => {
  return (
    <div className={`library ${seeLibrary ? "" : "hide-library"}`}>
      <h2>Library</h2>
      <div className="library-songs">
        {songs.map((song) => (
          <LibrarySongRow
            song={song}
            currentSong={currentSong}
            setCurrentSong={setCurrentSong}
            key={song.id}
            seeLibrary={seeLibrary}
            setSeeLibrary={setSeeLibrary}
          />
        ))}
      </div>
    </div>
  );
};

export default Library;
