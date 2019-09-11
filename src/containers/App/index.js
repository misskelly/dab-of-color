import React, { Component } from 'react';
import { connect } from 'react-redux';
import randomColor from 'randomcolor';
import Unicorn from '../../components/Unicorn';
import Gallery from '../../components/ProjectGallery';
import * as actions from '../../redux/actions';
import TileContainer from '../TileContainer';
import Palette from '../../components/Palette';
import getProjects from '../../utils/thunks/getProjects';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProject: '',
      currentPalettes: [
        {
          name: 'coolman2',
          color_1: '#8e5cd6',
          color_2: '#adf49f',
          color_3: '#efc8aa',
          color_4: '#b4fca4',
          color_5: '#e3e858'
        },
        {
          name: 'Dazzle',
          color_1: '#32213A',
          color_2: '#383B53',
          color_3: '#66717E',
          color_4: '#D4D6B9',
          color_5: '#D1CAA1'
        }
      ],
      loading: false
    };
  }

  componentDidMount() {
    const projUrl = 'https://unicolors.herokuapp.com/api/v1/projects';
    const palUrl = 'https://unicolors.herokuapp.com/api/v1/palettes';
    this.getRandomColors();
    this.props.getProjects(projUrl, palUrl);
  }

  getRandomColors = () => {
    const newCurrentColors = [];
    for (let i = 0; i < 5; i++) {
      newCurrentColors.push(randomColor());
    }
    this.props.getCurrentColors(newCurrentColors);
  };

  render() {
    const { currentProject, currentPalettes, loading } = this.state;
    const palettes = currentPalettes.map(pal => {
      const { name, color_1, color_2, color_3, color_4, color_5 } = pal;
      return (
        <Palette
          name={name}
          colors={[color_1, color_2, color_3, color_4, color_5]}
        />
      );
    });
    return (
      <main className="app">
        <header className="header">
          <h1>Palette Picker</h1>
        </header>
        <Unicorn />
        <section className="palettes-big">
          <h3>Palettes</h3>
          {loading === false && palettes}
        </section>
        <section className="new-palette-section">
          <h3>Color Generator</h3>
          <TileContainer />
          <button onClick={this.getRandomColors}>Generate Colors</button>
        </section>
        <section className="new-project-form">
          <input type="text" placeholder="name" />
          <button type="submit" className="save-project-btn">
            Save
          </button>
        </section>
        <section className="gallery-section">
          <Gallery />
        </section>
      </main>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  getCurrentColors: colors => dispatch(actions.getCurrentColors(colors)),
  getProjects: (projectUrl, paletteUrl) =>
    dispatch(getProjects(projectUrl, paletteUrl))
});

export const mapStateToProps = state => ({
  currentColors: state.currentColors,
  allProjects: state.allProjects
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
