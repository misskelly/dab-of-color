/* eslint-disable no-alert */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';

export class UniForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newName: '',
      project: {
        name: '',
        palettes: []
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ newName: e.target.value });
  }

  handleSubmit(e) {
    const { newName } = this.state;
    e.preventDefault();
    this.setState({
      newName: '',
      project: { name: newName }
    });
  }

  render() {
    const { newName, project } = this.state;
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
            onChange={this.handleChange}
          />
        </label>
        <button className="name-btn" type="submit">
          Save
        </button>
      </form>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  setCurrentColors: colors => dispatch(actions.setCurrentColors(colors))
  // getProjects: (projectUrl, paletteUrl) => dispatch(getProjects(projectUrl, paletteUrl))
});

export const mapStateToProps = state => ({
  currentColors: state.currentColors,
  allProjects: state.allProjects
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UniForm);
