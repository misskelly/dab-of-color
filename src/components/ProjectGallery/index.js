import React from 'react';
import { connect } from 'react-redux';
import uniqid from 'uniqid';
import Project from '../Project';


export const Gallery = (props) => {
  const { allProjects } = props;
  const key = uniqid();

  return (
    <section className="project-gallery">
      { allProjects.length && allProjects.map(uni => (
        <Project
          key={key}
          name={uni.name}
          palettes={uni.palettes}
        />
      ))
    }

    </section>
  );
};

export const mapStateToProps = state => ({
  currentColors: state.currentColors,
  allProjects: state.allProjects
});


export default connect(mapStateToProps)(Gallery);
