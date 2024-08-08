import React from 'react';

const VideoComponent = ({ videoPath }) => {
  return (
    <div>
      <video controls>
        <source src={videoPath} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoComponent;