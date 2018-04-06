import React from 'react';
import FeedNav from './feed_nav';
import PhotoIndexContainer from '../photos/photo_index_container';
// import UserIndexContainer from '../users/container';

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <FeedNav />
        <Switch>
          <ProtectedRoute path="/feed" component={PhotoIndexContainer} />
        </Switch>
      </div>
    );
  }
}

export default Feed;


// switch

// /feed => render photo index
// /upload => upload form
// /people => get list of people with most recent photo or default photo
  // get people randomly
