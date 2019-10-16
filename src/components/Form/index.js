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
      featuredPalettes: [],
      editView: false
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount = () => {
    const { featuredProject } = this.props;
    if (featuredProject !== undefined) {
      console.log('featured project: ', featuredProject)
    }
  }
  
  handleChange = (e, field) => {
    this.setState({ [field]: e.target.value });
  };
  
  handleSaveName = e => {
    e.preventDefault()
    const { 
      // featuredProject, 
      currentProject } = this.props;
    const { unicornName } = this.state;
    currentProject({ name: unicornName, palettes: [] });
    this.setState({editView: true})

  }

  handleSubmit = e => {
    e.preventDefault();
    // const { unicornName } = this.state;
    // const { currentProject, currentColors } = this.props;
    this.addPalette();
    // console.log('currentColors:  ', currentColors)
    // currentProject({ name: unicornName, palettes: });
    // this.setState({
    //   unicornName: '',
    //   paletteName: '',
    //   featuredPalettes: [],
    //   editView: false
    // });
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
    console.log('palettes:  ', palettes)
  };

  resetForm = () => {
    this.generateNewPalette();
    return this.setState({
      unicornName: '',
      paletteName: ''
    });
  }

  render() {
    const { unicornName, paletteName, editView } = this.state;
    const { featuredProject } = this.props;
    if(featuredProject !== undefined) {
      console.log('featured project: ',featuredProject)
    }
    return (
      <section className="form-section">
        {!editView &&
        <form className="new-uni-form" onSubmit={this.handleSaveName}>
          <fieldset className="name-form">
            <label className="name-input-label" htmlFor="name-input">
              Name this unicorn:
              <input
                type="text"
                value={unicornName}
                className="name-input"
                placeholder="Bob"
                onChange={e => this.handleChange(e, 'unicornName')}
                />
            </label>
            <button className="name-uni-btn" type="submit">Save</button>
          </fieldset>
        </form>
        }
        {editView &&
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
        }
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
