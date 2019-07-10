import React, { Component } from 'react';
import { connect } from 'react-redux'
import Tile from '../../components/Tiles';

export class TileContainer extends Component {
  render() {
    const displayTiles = this.props.currentColors.map( color => <Tile key={color} color={color}/>)
    return (
      <div>
        {displayTiles}
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  currentColors: state.currentColors
})

export default connect(mapStateToProps)(TileContainer)
