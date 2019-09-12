import React from 'react'

export default function Tile(props) {
  return (
      <a className='tile' style={{backgroundColor: props.color}}>{props.color}</a>
  )
}
