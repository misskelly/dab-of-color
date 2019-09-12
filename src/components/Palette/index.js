import React from 'react';

const Palette = ({ name, colors }) => {
  const blocks = colors.map((color, i) => (
    <li
      className={`color-${i} block-li`}
      style={{ backgroundColor: color }}
    ></li>
  ));
  return (
    <article className="palette-wrapper">
      <h4>{name}:</h4>
      <ul className="pal-color-ul">{blocks}</ul>
    </article>
  );
};

export default Palette;
