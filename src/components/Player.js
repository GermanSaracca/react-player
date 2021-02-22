import React, { useRef, useState, useEffect } from "react";
//FontAwesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faPlay,
  faPause,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

const Player = ({
  songs,
  setCurrentSong,
  currentSong,
  isPlaying,
  setIsPlaying,
}) => {
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    }
  }, [isPlaying, currentSong]);
  //Ref
  const audioRef = useRef(null);
  //Event Handlers
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
      audioRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };
  const skipSongHandler = (direction) => {
    let currentIndex = songs.findIndex((song) => song.id === currentSong.id);

    direction === "forward"
      ? setCurrentSong(songs[currentIndex + 1] || songs[0])
      : setCurrentSong(songs[currentIndex - 1] || songs[songs.length - 1]);
  };

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    const roundedCurrent = Math.round(current);
    const roundedDuration = Math.round(duration);
    const animationPercentage = Math.round(
      (roundedCurrent / roundedDuration) * 100
    );

    setSongInfo({
      ...songInfo,
      currentTime: current,
      duration,
      animationPercentage,
    });
  };

  const formatTime = (time) => {
    return (
      Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
  };

  const dragHandler = (e) => {
    audioRef.current.currentTime = e.target.value;
    setSongInfo({ ...songInfo, currentTime: e.target.value });
  };

  //States
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0,
  });

  //Style for animate-track div
  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)`,
  };
  const trackColor = {
    background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`,
  };

  return (
    <div className="player">
      <div className="time-control">
        <p>{formatTime(songInfo.currentTime)}</p>
        <div style={trackColor} className="track">
          <input
            type="range"
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragHandler}
          />
          <div className="animate-track" style={trackAnim}></div>
        </div>

        <p>{songInfo.currentTime ? formatTime(songInfo.duration) : "0:00"}</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon
          onClick={() => skipSongHandler("back")}
          icon={faAngleLeft}
          size="2x"
        />
        <FontAwesomeIcon
          onClick={playSongHandler}
          className="play"
          icon={isPlaying ? faPause : faPlay}
          size="2x"
        />
        <FontAwesomeIcon
          onClick={() => skipSongHandler("forward")}
          icon={faAngleRight}
          size="2x"
        />
      </div>
      <audio
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
        onEnded={() => skipSongHandler("forward")}
      ></audio>
    </div>
  );
};

export default Player;
