import React from 'react';
import FeedNav from './feed_nav';
import PhotoIndexContainer from '../photos/photo_index_container';
import {
  Route,
  Switch,
  Link
} from 'react-router-dom';

class Feed extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getPhotos();
  }

  render() {
    console.log(this.props.photos);
    return (
      <div>
        <FeedNav />
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
