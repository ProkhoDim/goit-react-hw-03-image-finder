import React from 'react';

const ImageGalleryItem = ({ id, webformatURL, tags, onClick }) => {
  return (
    <li className="ImageGalleryItem">
      <img
        src={webformatURL}
        alt={tags}
        className="ImageGalleryItem-image"
        onClick={() => onClick(id)}
      />
    </li>
  );
};

export default ImageGalleryItem;
