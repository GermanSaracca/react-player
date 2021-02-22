import React from "react";

const LibrarySongRow = ({
  seeLibrary,
  setSeeLibrary,
  song,
  currentSong,
  setCurrentSong,
}) => {
  const songHandler = () => {
    setCurrentSong(song);
    setSeeLibrary(!seeLibrary);
  };

  return (
    <div
      onClick={songHandler}
      className={`library-song-row ${song.id === currentSong.id && "selected"}`}
    >
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
        <h2>{song.name}</h2>
        <h3>{song.artist}</h3>
      </div>
    </div>
  );
};

export default LibrarySongRow;
