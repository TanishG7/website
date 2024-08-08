import React from 'react';

const PhotoGallery = ({ photos }) => {
  return (
    <div className="photo-gallery-pdp">
      {photos.map((photo, index) => (
        <img key={index} src={photo} alt={`Photo ${index + 1}`} />
      ))}
    </div>
  );
};

export default PhotoGallery;