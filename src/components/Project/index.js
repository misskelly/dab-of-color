import React, { Component } from 'react';
// import randomColor from 'randomcolor';
import uniqid from 'uniqid';
import LittleUni from '../Unicorn';
import Rainbow from '../Rainbow';
import fetchAll from '../../utils/apiCalls/fetchAll';

export class Project extends Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   palettes: [
    //     {
    //       color1: '#F655AA',
    //       color2: '#FBA904',
    //       color3: '#7AFDDF',
    //       color4: '#571E7F',
    //       color5: '#0071BD'
    //     }
    //   ]
    // };
  }

  componentDidMount = () => {
    fetchAll('https://unicolors.herokuapp.com/api/v1/palettes')
      .then(res => res.filter(palette => palette.project_id === this.props.id))
      .then(palettes => this.setState({ palettes }));
  };

  render() {
    const { name, palettes, id } = this.props;
    const key = uniqid();
    const rainbows = palettes.map(palette => (
      <Rainbow colors={palette} key={`${key}_${key}`} />
    ));
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