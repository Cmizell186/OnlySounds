import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Switch} from "react-router-dom";
import * as sessionActions from "./store/session";
// thunk imports

// components
// import LoginFormPage from "./components/LoginFormPage";
// import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import Audio from './components/AudioPlayer';
import SongList from "./components/SongList";
import CreateNewSong from "./components/CreateNewSong";
import SpecificSong from "./components/SpecificSongPage";
import UpdateSong from './components/UpdateSong/index';
function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  const songs = useSelector(state => state.song.songs)
  const sessionUser = useSelector(state => state.session.user);
  // const {id} = useParams();
  // console.log({id});
  useEffect(() => {
    dispatch(sessionActions.restoreUser())
      .then(() => setIsLoaded(true))
    }, [dispatch]);

  // useEffect(() =>{
  //   dispatch(getAllSongs())
  // },[dispatch])


  // console.log(songs);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Switch>
          {sessionUser ?
          <Route path="/discover">
            <SongList />
          </Route> :
          <Redirect to='/error'></Redirect>}
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
      <Audio song={songs} />
    </>
  );
}

export default App;
