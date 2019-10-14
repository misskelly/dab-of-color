/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import Palette from '../../components/Palette';
// import currentProject from '../../utils/thunks/currentProject';

// TODO: PROPTYPES
export const FeaturedPalettes = props => {
  let palettes;
  let currentPalettes;
  if (props.length > 0) {
    const { featuredProject } = props;
    palettes = featuredProject.palettes;
    currentPalettes = palettes.map(pal => {
      const { name, color_1, color_2, color_3, color_4, color_5 } = pal;
      return (
        <Palette
          name={name}
          colors={[color_1, color_2, color_3, color_4, color_5]}
        />
      );
    });

    console.log(palettes);
  }
  return (
    <section className="featured-palettes">
      {currentPalettes && (
        <h3 className="featured-palettes-heading">Palettes</h3>
      )}
      {currentPalettes && { currentPalettes }}
    </section>
  );
};

export const mapStateToProps = state => ({
  featuredProject: state.featuredProject
});

export default connect(mapStateToProps)(FeaturedPalettes);
