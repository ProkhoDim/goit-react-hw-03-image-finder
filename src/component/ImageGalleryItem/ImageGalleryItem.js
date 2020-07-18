import React from 'react';

const ImageGalleryItem = ({ webformatURL, tags }) => {
  return (
    <li className="ImageGalleryItem">
      <img src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
    </li>
  );
};

export default ImageGalleryItem;
