import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ imageList }) => {
  return (
    <ul className="ImageGallery">
      {imageList.map(({ id, webformatURL, tags }) => (
        <ImageGalleryItem key={id} webformatURL={webformatURL} tags={tags} />
      ))}
    </ul>
  );
};

export default ImageGallery;
