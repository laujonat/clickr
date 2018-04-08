import React from 'react';


const PhotoIndexItem = ({photo}) => {
  console.log(photo.photo_url);
  return (
    <li>
      <img className="photo-index-item" src={`${photo.photo_url}`} />
    </li>
  );
};


export default PhotoIndexItem;
