/* eslint-disable no-alert */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import randomColor from 'randomcolor';
import * as actions from '../../redux/actions';
import currentProject from '../../utils/thunks/currentProject';
import { cleanPalette } from '../../utils/cleaners/cleanPalette';

export class UniForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      unicornName: '',
      paletteName: '',
      featuredPalettes: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    const { featuredProject } = this.props;
    if (featuredProject !== undefined) {
      console.log('featured project: ', featuredProject)
    }
  }

  handleChange = (e, field) => {
    this.setState({ [field]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { unicornName } = this.state;
    const { currentProject } = this.props;
    this.addPalette();
    currentProject({ name: unicornName, palettes: this.state.featuredPalettes });
    this.setState({
      unicornName: '',
      paletteName: '',
      featuredPalettes: []
    });
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
    const { currentColors } = this.props;
    const { paletteName, featuredPalettes } = this.state;
    const newPalette = cleanPalette(paletteName, currentColors);
    const palettes = featuredPalettes.concat(newPalette);
    console.log(palettes)
    this.generateNewPalette();
    return this.setState({
      paletteName: '',
      featuredPalettes: palettes
    });
  };

  render() {
    const { unicornName, paletteName } = this.state;
    const { featuredProject } = this.props;
    if(featuredProject !== undefined) {
      console.log('featured project: ',featuredProject)
    }
    return (
      <form className="new-uni-form" onSubmit={this.handleSubmit}>
        {unicornName.length > 1 && (
          <h2 className="name-heading">
            Hello, my name is {unicornName}
          </h2>
        )}
        <label className="name-input-label" htmlFor="name-input">
          Name
          <input
            type="text"
            value={unicornName}
            className="name-input"
            placeholder="Bob"
            onChange={e => this.handleChange(e, 'unicornName')}
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
  currentColors: state.currentColors,
  featuredProject: state.featuredProject
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UniForm);
