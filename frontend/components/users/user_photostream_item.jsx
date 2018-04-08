import React from 'react';
import { Link } from 'react-router-dom';

const photoStreamItem = ({photo}) => {
  return (
    <li>
      <img className="photostream-photo-card" src={`${photo.photo_url}`} />
    </li>
  );
};

export default photoStreamItem;
