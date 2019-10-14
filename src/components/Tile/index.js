import React from 'react';

export const Tile = props => {
  const { color, lockColor, isLocked } = props;
  const locked = isLocked ? ' locked' : '';

  const handleLock = () => {
    // TODO: render lock SVG
    lockColor(color);
  };
  return (
    <button
      type="button"
      onClick={handleLock}
      className="tile"
      style={{ backgroundColor: color }}
    >
      {color} {locked}
    </button>
  );
};

export default Tile;
