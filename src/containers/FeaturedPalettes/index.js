/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import Palette from '../../components/Palette';

// TODO: PROPTYPES
export const FeaturedPalettes = props => {
  const { featuredProject } = props;
  let pals;
  if (featuredProject) {
    pals = featuredProject.palettes;
  }
  const currentPalettes = palettes => {
    const featured = palettes.map(pal => {
      const { name, color_1, color_2, color_3, color_4, color_5 } = pal;
      return (
        <Palette
          name={name}
          colors={[color_1, color_2, color_3, color_4, color_5]}
        />
      );
    });
    return featured;
  };

  return (
    <section className="featured-palettes">
      {pals && featuredProject.palettes.length > 0 && (
        <>
          <h3 className="featured-palettes-heading">Palettes</h3>
          <ul className="current-palettes-article">
            {currentPalettes(featuredProject.palettes)}
          </ul>
        </>
      )}
    </section>
  );
};

export const mapStateToProps = state => ({
  featuredProject: state.featuredProject
});

export default connect(mapStateToProps)(FeaturedPalettes);
