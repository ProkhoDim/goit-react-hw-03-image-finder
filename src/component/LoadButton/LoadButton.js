import React from 'react';

const LoadButton = ({ onCLick }) => {
  return (
    <div className="Button__wrap">
      <button type="button" onClick={onCLick} className="Button">
        Load more...
      </button>
    </div>
  );
};

export default LoadButton;
