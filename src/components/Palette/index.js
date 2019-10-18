import React from 'react';

const Palette = ({ name, colors }) => {
  console.log('palette');
  let blocks;
  if (colors) {
    blocks = colors.map((color, i) => (
      <li
        className={`color-${i} block-li`}
        style={{ backgroundColor: color }}
      />
    ));
  }
  return (
    <li className="palette-wrapper">
      <h4>{name}:</h4>
      <ul className="pal-color-ul">{blocks}</ul>
    </li>
  );
};

export default Palette;
