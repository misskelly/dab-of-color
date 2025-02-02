import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../redux/actions';
import randomColor from 'randomcolor';

import Tile from '../../components/Tile';

export class Generator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locked: [false, false, false, false, false]
    };
    this.lockColor = this.lockColor.bind(this);
  }

  componentDidMount() {
    this.generateNewPalette();
  }

  lockColor = color => {
    const { locked } = this.state;
    const { currentColors } = this.props;
    const newLocked = locked.map((lock, index) => {
      if (currentColors[index] === color) {
        return !lock;
      } else {
        return lock;
      }
    });

    this.setState({ locked: newLocked });
  };

  generateNewPalette = () => {
    const newCurrentColors = [];
    for (let i = 0; i < 5; i++) {
      newCurrentColors.push(randomColor());
    }
    this.props.setCurrentColors(newCurrentColors);
  };

  updatePalette = () => {
    const { locked } = this.state;
    const { currentColors, setCurrentColors } = this.props;
    const updated = locked.map((color, index) => {
      if (color) {
        console.log(color);
        return currentColors[index];
      } else {
        return randomColor();
      }
    });
    setCurrentColors(updated);
  };

  render() {
    const { locked } = this.state;
    const { currentColors } = this.props;
    const displayTiles = currentColors.map((color, index) => {
      const isLocked = locked[index];
      return (
        <Tile
          key={color}
          color={color}
          lockColor={this.lockColor}
          isLocked={isLocked}
        />
      );
    });
    return (
      <section className="generator-section">
        <h3 className="generator-heading heading">Color Generator</h3>
        <div className="tile-container">{displayTiles}</div>
        <button className="generator-btn" onClick={this.updatePalette}>Generate Colors</button>
      </section>
    );
  }
}

export const mapDispatchToProps = dispatch => ({
  setCurrentColors: colors => dispatch(actions.setCurrentColors(colors))
});

export const mapStateToProps = state => ({
  currentColors: state.currentColors,
  allProjects: state.allProjects
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Generator);
