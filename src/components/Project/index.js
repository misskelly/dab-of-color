import React, { Component } from 'react';
import randomColor from 'randomcolor';
import uniqid from 'uniqid';
import LittleUni from '../Unicorn';
import Rainbow from '../Rainbow';
import getAll from '../../utils/apiCalls/getAll';


export default class Project extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Fred',
      palettes: [
        {
          name: 'Fancy',
          color_1: '#F655AA',
          color_2: '#FBA904',
          color_3: '#7AFDDF',
          color_4: '#571E7F',
          color_5: '#0071BD'
        },
        {
          name: 'Dazzle',
          color_1: '#32213A',
          color_2: '#383B53',
          color_3: '#66717E',
          color_4: '#D4D6B9',
          color_5: '#D1CAA1'
        }

      ]
    };
  }

  componentDidMount = () => {
    getAll('https://unicolors.herokuapp.com/api/v1/palettes')
      .then(res => console.log(res));
    const color = randomColor();
    console.log(this.state.palettes[0]);
    console.log(color);
  };

  key = () => uniqid()

  render(props) {
    const { name, palettes } = this.props;
    const rainbows = this.state.palettes.map(palette => (
      <Rainbow
        colors={palette}
        key={this.key}
      />
    ));
    return (
      <article className="project">
        <h3>{ name }</h3>
        <LittleUni colors={this.state.palettes[0]} size="little" />
        { rainbows }
      </article>
    );
  }
}
