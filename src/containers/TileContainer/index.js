import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tile from '../../components/Tiles';

export class TileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { locked: [false, false, false, false, false] };
    this.lockColor = this.lockColor.bind(this);
  }

  lockColor = color => {
    const { locked } = this.state;
    const newLocked = locked.map((bool, index) => {
      if (index === color) {
        return !bool;
      } else {
        return bool;
      }
    });
    this.setState({ locked: newLocked });
  };

  render() {
    const displayTiles = this.props.currentColors.map((color, index) => {
      const isLocked = this.state.locked[index];
      return (
        <Tile
          key={color}
          color={color}
          lockColor={this.lockColor}
          isLocked={isLocked}
        />
      );
    });
    return <div className="tile-container">{displayTiles}</div>;
  }
}

export const mapStateToProps = state => ({
  currentColors: state.currentColors
});

export default connect(mapStateToProps)(TileContainer);
