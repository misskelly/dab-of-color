import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainUni from '../../components/Unicorn';
import ProjectGallery from '../../components/ProjectGallery';
import * as actions from '../../redux/actions';
import PaletteGenerator from '../Generator';
import FeaturedPalettes from '../FeaturedPalettes';
import NewUniForm from '../../components/Form';
import getProjects from '../../utils/thunks/getProjects';
// import currentProject from '../../utils/thunks/currentProject';

export class App extends Component {
  componentDidMount() {
    const { getProjects } = this.props;
    getProjects();
  }

  // featuredPallets() {
  //   const { currentPalettes } = this.state;
  //   const palettes = currentPalettes.map(pal => {
  //     const { name, color_1, color_2, color_3, color_4, color_5 } = pal;
  //     return (
  //       <Palette
  //         name={name}
  //         colors={[color_1, color_2, color_3, color_4, color_5]}
  //       />
  //     );
  //   });

  //   return palettes;
  // }

  render() {
    return (
      <main className="app">
        <header className="header">
          <a href="https://dab-of-colors.web.app/" className="main-heading-a">
            <h1 className="main-heading">DAB OF COLORS</h1>
          </a>
        </header>
        <MainUni />
        <FeaturedPalettes />
        <PaletteGenerator />
        <NewUniForm />
        <ProjectGallery />
      </main>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  getProjects: () => dispatch(getProjects())
  // currentProject: project => dispatch(currentProject(project))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
