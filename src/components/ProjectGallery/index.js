import React, { Component } from 'react';
import { connect } from 'react-redux';
import uniqid from 'uniqid';
import Project from '../Project';

export class Gallery extends Component {
  render() {
    const { allProjects } = this.props;
    const filtered = allProjects.filter(project => project.palettes.length);
    const projects = unicorns => {
      const lilUnis = unicorns.map(uni => {
        const key = uniqid();
        return (
          <Project
            key={key}
            name={uni.name}
            id={uni.id}
            palettes={uni.palettes}
          />
        );
      });
      return lilUnis;
    };
    return <section className="project-gallery">{projects(filtered)}</section>;
  }
}

export const mapStateToProps = state => ({
  currentColors: state.currentColors,
  allProjects: state.allProjects
});

export default connect(mapStateToProps)(Gallery);
