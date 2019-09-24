import React, { Component } from 'react';
import uniqid from 'uniqid';
import LittleUni from '../Unicorn';
import Rainbow from '../Rainbow';
import fetchAll from '../../utils/apiCalls/fetchAll';

export class Project extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    fetchAll('https://unicolors.herokuapp.com/api/v1/palettes')
      .then(res => res.filter(palette => palette.project_id === this.props.id))
      .then(pals => console.log(pals));
  };

  render() {
    const { name, palettes, id } = this.props;
    const rainbows = palettes.map(palette => {
      const key = uniqid();
      return (
      <Rainbow colors={palette} key={`${key}_${key}`} />
    )});
    return (
      <div id={`project-${id}`}>
        <h5>{name}</h5>
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