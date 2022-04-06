import React, { useEffect, useState, useRef } from "react";
import { useSelector } from 'react-redux';
import "./AudioPlayer.css";
function Audio() {
  // selectors
  const playingSong = useSelector(state => state.song.playingSong);

  // useStates
  const [playing, setPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // refs
  const audioPlayer = useRef(); //uses to reference audio component
  const progressBar = useRef(); //references progressBar
  const slider = useRef(); //reference animation of slider

  // dependancy array
  const depend1 = audioPlayer?.current?.loadedmetadata;
  const depend2 = audioPlayer?.current?.readyState;

  const togglePlayPause = () => {
    setPlaying(!playing);
    const prevValue = playing;
    setPlaying(!prevValue);
    if (!prevValue) {
      audioPlayer.current.play();
      slider.current = requestAnimationFrame(isPlaying);
    } else {
      audioPlayer.current.pause();
      cancelAnimationFrame(slider.current);
    }
  };

  // useEffects
  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);

    progressBar.current.max = seconds;
  }, [depend1, depend2]);

  // calculate the time
  const time = (sec) => {
    const minutes = Math.floor(sec / 60);
    const returnMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;

    const seconds = Math.floor(sec % 60);
    const returnSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${returnMinutes}:${returnSeconds}`;
  };

  const isPlaying = () => {
    progressBar.current.value = audioPlayer.current.currentTime;
    changeAudioPlayerTime();
    slider.current = requestAnimationFrame(isPlaying);
  };

  const changeRange = () => {
    audioPlayer.current.currentTime = progressBar.current.value;

    changeAudioPlayerTime();
  };

  // helper function
  const changeAudioPlayerTime = () => {
    progressBar.current.style.setProperty(
      "--seek-before-width",
      `${(progressBar.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBar.current.value);
  };

  return (
    <header className="audio-player">
      <audio ref={audioPlayer} src={playingSong.songUrl}></audio>
      <div className="play-pause-button-container">
        <button className='pause-play-button' onClick={togglePlayPause}>{playing ? "pause" : "play"}</button>
      </div>


      {/* current time */}
      <div className="current-time">{time(currentTime)}</div>


      {/* audio range */}
      <div className="audio-range-container">
        <input
          className="audio-range"
          type="range"
          defaultValue="0"
          ref={progressBar}
          onChange={changeRange}
        />
      </div>

      {/* duration */}
      <div className="duration">
        {!isNaN(duration) ? time(duration) : "0:00"}
      </div>

      {/* current song title */}
      <div className="current-song-container">
        <p className="current-song">{playingSong.title ? playingSong.title : 'no song selected'}</p>
        <p className="current-song-user"></p>
      </div>


    </header>
  );
}

export default Audio;
