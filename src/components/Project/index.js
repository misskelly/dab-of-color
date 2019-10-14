import React, { Component } from 'react';
import uniqid from 'uniqid';
import LittleUni from '../Unicorn';
import Rainbow from '../Rainbow';
import fetchAll from '../../utils/apiCalls/fetchAll';

export class Project extends Component {

  componentDidMount = () => {
    fetchAll('https://unicolors.herokuapp.com/api/v1/palettes')
      .then(res => res.find(palette => palette.project_id === this.props.id))
  };
  // TODO: 
        // STYLE PROJECT CARD
        // MAKE CLICKABLE
        // ON CLICK
        // => 
        // => 
        // => 
  render() {
    const { name, palettes, id } = this.props;
    const rainbows = palettes.map(palette => {
      const key = uniqid();
      return (
      <Rainbow colors={palette} key={`${key}_${key}`} />
    )});
    return (
      <div className="project-card" id={`project-${id}`}>
        <h5 className="card-heading">{name}</h5>
        {palettes.length >= 1 && (
          <LittleUni colors={palettes[0]} small={true} />
        )}
        <ul className="rainbow-container">
        {rainbows}
        </ul>
      </div>
    );
  }
}
 export default Project;