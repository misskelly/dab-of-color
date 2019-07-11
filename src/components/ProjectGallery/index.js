import React, { Component } from 'react';
import { connect } from 'react-redux';
import uniqid from 'uniqid';
import Project from '../Project';


export class Gallery extends Component {
  render() {
    const { allProjects } = this.props;
      const projects = (unicorns) => {
        const key = uniqid();
        const lilUnis = unicorns.map(uni => (
          <Project
            key={key}
            name={uni.name}
            palettes={uni.palettes}
          />
        ));
        return lilUnis;
      };
      return (
        <section className="project-gallery">
          { projects(allProjects) }
        </section>
      );
    
  }
}

export const mapStateToProps = state => ({
  currentColors: state.currentColors,
  allProjects: state.allProjects
});


export default connect(mapStateToProps)(Gallery);
