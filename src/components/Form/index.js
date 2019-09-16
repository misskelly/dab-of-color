/* eslint-disable no-alert */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import currentProject from '../../utils/thunks/currentProject';

export class UniForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newName: '',
      paletteName: '',
      paletteCollection: [
        {
          name: 'coolman2',
          color_1: '#8e5cd6',
          color_2: '#adf49f',
          color_3: '#efc8aa',
          color_4: '#b4fca4',
          color_5: '#e3e858'
        }
      ],
      project: {
        name: '',
        palettes: []
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (e, field) => {
    this.setState({ [field]: e.target.value });
  };

  handleSubmit = e => {
    const { newName, paletteCollection, project } = this.state;
    const { currentProject } = this.props;
    this.setState({
      newName: '',
      paletteName: ''
    });
    e.preventDefault();
    currentProject({ name: newName, palettes: paletteCollection });
  };

  addPalette = () => {
    const { currentColors } = this.props;
    const { paletteName, paletteCollection, project } = this.state;
    const newPalette = {
      name: paletteName,
      color_1: currentColors[0],
      color_2: currentColors[1],
      color_3: currentColors[2],
      color_4: currentColors[3],
      color_5: currentColors[4]
    };
    const updatedPalettes = [...paletteCollection, newPalette];
    this.setState({
      paletteCollection: updatedPalettes
    });
    console.log(this.state);
  };

  render() {
    const { newName, paletteName, project } = this.state;
    return (
      <form className="new-uni-form" onSubmit={this.handleSubmit}>
        {project.name.length > 0 && (
          <h2 className="name-heading">Hello, my name is {project.name}</h2>
        )}
        <label className="name-input-label" htmlFor="name-input">
          Name
          <input
            type="text"
            value={newName}
            className="name-input"
            placeholder="Bob"
            onChange={e => this.handleChange(e, 'newName')}
          />
        </label>
        <label
          className="palette-name-input-label"
          htmlFor="palette-name-input"
        >
          Name this color scheme:
          <input
            type="text"
            value={paletteName}
            className="palette-name-input"
            placeholder="Cotton Candy"
            onChange={e => this.handleChange(e, 'paletteName')}
          />
        </label>
        <button
          type="button"
          className="add-palette-btn"
          onClick={this.addPalette}
        >
          +
        </button>
        <button className="name-btn" type="submit">
          Save
        </button>
      </form>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  setCurrentColors: colors => dispatch(actions.setCurrentColors(colors)),
  currentProject: project => dispatch(currentProject(project))
});

export const mapStateToProps = state => ({
  currentColors: state.currentColors
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UniForm);
