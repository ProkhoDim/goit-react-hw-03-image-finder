import React from 'react';

const ImageInModal = ({ options: { largeImageURL, tags } }) => {
  return (
    <>
      <img src={largeImageURL} alt={tags} />
    </>
  );
};

export default ImageInModal;
