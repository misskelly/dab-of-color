import React, { Component } from 'react';
import { connect } from 'react-redux';
import randomColor from 'randomcolor';
import * as actions from '../../redux/actions';
import currentProject from '../../utils/thunks/currentProject';
import postNew from '../../utils/apiCalls/postNew';
import { cleanPalette } from '../../utils/cleaners/cleanPalette';

export class UniForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unicornName: '',
      paletteName: '',
      editView: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e, field) => {
    this.setState({ [field]: e.target.value });
  };

  savePalette = async palette => {
    return await postNew('palettes', palette);
  };

  handleSaveName = e => {
    e.preventDefault();
    const { currentProject } = this.props;
    const { unicornName } = this.state;
    currentProject({ name: unicornName, palettes: [] });
    this.setState({ editView: true });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { featuredProject } = this.props;
    if (featuredProject.id) {
      this.addPalette();
    }
  };

  generateNewPalette = () => {
    const { setCurrentColors } = this.props;
    const newCurrentColors = [];
    for (let i = 0; i < 5; i++) {
      newCurrentColors.push(randomColor());
    }
    setCurrentColors(newCurrentColors);
  };

  addPalette = () => {
    const { currentColors, featuredProject } = this.props;
    const { paletteName } = this.state;
    const paletteToAdd = cleanPalette(
      paletteName,
      currentColors,
      featuredProject.id
    );
    this.savePalette(paletteToAdd);
    this.updateFeatured(paletteToAdd);
    this.resetPaletteForm();
  };

  updateFeatured = async newPalette => {
    const { featuredProject, currentProject } = this.props;
    const { id, name } = featuredProject;
    const palettes = featuredProject.palettes.concat(newPalette);
    const updatedProject = { id, name, palettes };
    const update = await currentProject(updatedProject);
    return update;
  };

  resetPaletteForm = () => {
    this.generateNewPalette();
    return this.setState({
      paletteName: ''
    });
  };

  formReset = () => {
    const { setCurrentProject } = this.props;
    this.setState({ unicornName: '', editView: false });
    setCurrentProject({});
  };

  render() {
    const { unicornName, paletteName, editView } = this.state;
    return (
      <section className="form-section">
        {!editView && (
          <form className="new-uni-form" onSubmit={this.handleSaveName}>
            <label className="name-input-label" htmlFor="name-input">
              Hello, my name is
              <input
                type="text"
                value={unicornName}
                className="name-input"
                placeholder=""
                onChange={e => this.handleChange(e, 'unicornName')}
              />
            </label>
            <button className="name-uni-btn" type="submit">
              Save
            </button>
          </form>
        )}
        {editView && (
          <form className="save-project-form" onSubmit={this.handleSubmit}>
            <label
              className="palette-name-input-label"
              htmlFor="palette-name-input"
            >
              Name this color scheme:
              <input
                type="text"
                value={paletteName}
                className="palette-name-input"
                onChange={e => this.handleChange(e, 'paletteName')}
              />
            </label>
            <button type="submit" className="add-palette-btn">
              Save
            </button>
            <button
              className="new-uni-btn"
              type="button"
              onClick={this.formReset}
            >
              + Create New Unicorn
            </button>
          </form>
        )}
      </section>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  setCurrentProject: project => dispatch(actions.setCurrentProject([project])),
  setCurrentColors: colors => dispatch(actions.setCurrentColors(colors)),
  currentProject: project => dispatch(currentProject(project))
});

export const mapStateToProps = state => ({
  currentColors: state.currentColors,
  featuredProject: state.featuredProject
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UniForm);
