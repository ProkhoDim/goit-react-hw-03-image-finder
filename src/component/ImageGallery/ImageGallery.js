import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem';

const ImageGallery = ({ imageList, onImageClick }) => {
  return (
    <ul className="ImageGallery">
      {imageList.map(({ id, webformatURL, tags }) => (
        <ImageGalleryItem
          key={id}
          webformatURL={webformatURL}
          tags={tags}
          id={id}
          onClick={onImageClick}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
