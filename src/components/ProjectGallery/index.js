import React, { Component } from 'react';
import Project from '../Project';
import { connect } from 'react-redux'


export class ProjectGallery extends Component {
  render() {
    const displayProjects = this.props.allProjects.map(project => <Project project={project}/>)
    return (
      <div>
        {displayProjects}
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  allProjects : state.allProjects
});

export default connect(mapStateToProps)(ProjectGallery)
