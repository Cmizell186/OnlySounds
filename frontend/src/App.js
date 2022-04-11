import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch} from "react-router-dom";
import * as sessionActions from "./store/session";
// thunk imports

// components
import Navigation from "./components/Navigation";
import Audio from './components/AudioPlayer';
import SongList from "./components/SongList";
import CreateNewSong from "./components/CreateNewSong";
import SpecificSong from "./components/SpecificSongPage";
import UpdateSong from './components/UpdateSong/index';
import SplashPage from "./components/SplashPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  const sessionUser = useSelector(state => state.session.user);

  useEffect(() => {
    dispatch(sessionActions.restoreUser())
      .then(() => setIsLoaded(true))
    }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          {sessionUser ?
          <Route path="/discover">
            <SongList />
          </Route> :
          <Redirect exact to='/'></Redirect>}
          <Route path='/newsong'>
            <CreateNewSong />
          </Route>
          <Route path={`/songs/:id`}>
            <SpecificSong />
          </Route>
          <Route path={`/editsong/:id`}>
            <UpdateSong />
          </Route>
        </Switch>
      )}
          <Route exact path="/">
            <SplashPage />
          </Route>
      <Audio />
    </>
  );
}

export default App;
