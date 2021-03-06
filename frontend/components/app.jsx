import React from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/sign_up_container';
import NavBarContainer from './splash/nav_bar_container';
import FeedContainer from './feed/feed_container';
import UploadPhotoContainer from './photos/upload_photo_container';
import UploadNavContainer from './photos/upload_nav_container';
import UserProfileContainer from './users/user_profile_container';
import PhotoShowContainer from './photos/photo_show_container';
import PhotoShowNavContainer from './photos/photo_show_nav_container';
import AlbumCreateNavContainer from './albums/album_create_nav_container';
import AlbumCreateContainer from './albums/album_create_container';
import AlbumEditContainer from './albums/album_edit_container';


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
      <div className="app-container">
        <Switch>
          <AuthRoute path="/signup" component={SignupFormContainer} />
          <AuthRoute path="/login" component={LoginFormContainer} />
          <ProtectedRoute path="/upload" component={UploadNavContainer} />
          <ProtectedRoute path="/albums/create" component={AlbumCreateNavContainer} />
          <ProtectedRoute path="/photos/:photosId" component={PhotoShowNavContainer} />
          <Route path="/" component={NavBarContainer} />
        </Switch>

        <Switch>
          <ProtectedRoute path="/feed" component={FeedContainer} />
          <ProtectedRoute path="/upload" component={UploadPhotoContainer} />
          <ProtectedRoute path="/user/:userId" component={UserProfileContainer} />
          <ProtectedRoute path="/albums/create" component={AlbumCreateContainer} />
          <ProtectedRoute path="/albums/:albumId/edit" component={AlbumEditContainer} />
          <Route path="/photos/:photoId" component={PhotoShowContainer} />
          <ProtectedRoute path="/" component={FeedContainer} />
        </Switch>
      </div>
      </React.Fragment>
    );
  }
}

export default App;
