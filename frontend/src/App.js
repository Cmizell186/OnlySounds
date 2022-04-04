import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";

// thunk imports
import { getAllSongs } from "./store/songs";

// components
// import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import Audio from './components/AudioPlayer';
import SongList from "./components/SongList";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser())
      .then(() => setIsLoaded(true));
    dispatch(getAllSongs())
  }, [dispatch]);

  const songs = useSelector(state => state.song.songs)
  console.log(songs);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/">
            <h1>{songs[0]?.title}</h1>
            <SongList songList={songs}/>
          </Route>
        </Switch>
      )}
      <Audio song={songs} />
    </>
  );
}

export default App;
