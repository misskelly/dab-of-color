import React, { Component } from 'react';
import uniqid from 'uniqid';
import LittleUni from '../Unicorn';
import Rainbow from '../Rainbow';


export default class Project extends Component {
  constructor(props) {
    super(props);
  }

  // componentDidMount = () => {
  // };

  key = () => uniqid()


  render() {
    const { palettes, name } = this.props;
    const pal = palettes[0];
    const rainbows = palettes.map(palette => (
      <Rainbow
        colors={palette}
        key={this.key}
      />
    ));
    return (
      <>
        { palettes.length
        && (
<article className="project-card">
          <h3>{name}</h3>
          <LittleUni
            colors={[
            pal.color_1,
            pal.color_2,
            pal.color_3,
            pal.color_4,
            pal.color_5
          ]}
            size="little"
          />
          <div className="rainbow-wrapper">
            { rainbows }
          </div>
        </article>
)
        }
      </>
    );
  }
}
