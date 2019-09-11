import React, { Component } from 'react';
import { connect } from 'react-redux';
import randomColor from 'randomcolor';
import Unicorn from '../../components/Unicorn';
import Gallery from '../../components/ProjectGallery';
import * as actions from '../../redux/actions';
import TileContainer from '../TileContainer';
import getProjects from '../../utils/thunks/getProjects';

export class App extends Component {
  constructor(props) {
    super(props);
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
    // const { allProjects, loading } = this.state;
    return (
      <main className="app">
        <header className="header">
          <h1>Palette Picker</h1>
        </header>
        <Unicorn />
        <section className="palettes-big">PALETTES</section>
        <section className="new-palette-section">
          COLOR GENERATOR
          <TileContainer />
          <h3 onClick={this.getRandomColors}>Generate Colors</h3>
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

export const mapDispatchToProps = (dispatch) => ({
  getCurrentColors: (colors) => dispatch(actions.getCurrentColors(colors)),
  getProjects: (projectUrl, paletteUrl) => dispatch(getProjects(projectUrl, paletteUrl))
});

export const mapStateToProps = (state) => ({
  currentColors: state.currentColors,
  allProjects: state.allProjects
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
