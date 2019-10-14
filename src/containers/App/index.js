import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainUni from '../../components/Unicorn';
import ProjectGallery from '../../components/ProjectGallery';
import * as actions from '../../redux/actions';
import PaletteGenerator from '../Generator';
import Palette from '../../components/Palette';
import NewUniForm from '../../components/Form';
import getProjects from '../../utils/thunks/getProjects';
import currentProject from '../../utils/thunks/currentProject';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPalettes: []
    };
  }

  componentDidMount() {
    const { getProjects } = this.props;
    getProjects();
  }

  featuredPallets() {
    const { currentPalettes } = this.state;
    const palettes = currentPalettes.map(pal => {
      const { name, color_1, color_2, color_3, color_4, color_5 } = pal;
      return (
        <Palette
          name={name}
          colors={[color_1, color_2, color_3, color_4, color_5]}
        />
      );
    });

    return palettes;
  }

  render() {
    const { currentColors } = this.props;
    return (
      <main className="app">
        <header className="header">
          <h1>Palette Picker</h1>
        </header>
        <MainUni />
        <section className="featured-palettes">
          <h3>Palettes</h3>
          {currentColors.length === 5 && this.featuredPallets()}
        </section>
        <PaletteGenerator />
        <NewUniForm />
        <section className="gallery-section">
          <ProjectGallery />
        </section>
      </main>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  setCurrentColors: colors => dispatch(actions.setCurrentColors(colors)),
  setCurrentProject: project => dispatch(actions.setCurrentProject(project)),
  getProjects: () => dispatch(getProjects()),
  currentProject: project => dispatch(currentProject(project))
});

export const mapStateToProps = state => ({
  currentColors: state.currentColors,
  allProjects: state.allProjects,
  featuredProject: state.featuredProject,
  isLoading: state.isLoading
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
