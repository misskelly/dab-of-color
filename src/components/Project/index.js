import React, { Component } from 'react';
import uniqid from 'uniqid'



export default class Project extends Component {
  constructor(props) {
    super(props);
  }

  key = () => {
    return uniqid();
  }

  render() {
    const displayProject = this.props.project.palettes.map(palette => {
      return (
      <ul>
        <li style={{backgroundColor: palette.color_1}}>{palette.color_1}</li>
        <li style={{backgroundColor: palette.color_2}}>{palette.color_2}</li>
        <li style={{backgroundColor: palette.color_3}}>{palette.color_3}</li>
        <li style={{backgroundColor: palette.color_4}}>{palette.color_4}</li>
        <li style={{backgroundColor: palette.color_5}}>{palette.color_5}</li>
      </ul>
      )
    })
    return(
      <div>
        <h3>{this.props.project.name}</h3>
        {displayProject}
      </div>
    )
  }
}
