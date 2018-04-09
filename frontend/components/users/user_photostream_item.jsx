import React from 'react';
import { Link } from 'react-router-dom';

const photoStreamItem = ({photo}) => {
  return (
    <li className="photostream-photo-card">
      <img  src={`${photo.photo_url}`} />
    </li>
  );
};

export default photoStreamItem;
