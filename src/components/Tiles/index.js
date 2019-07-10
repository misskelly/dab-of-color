import React from 'react'

export default function Tile(props) {
  return (
    <div >
      <a style={{backgroundColor: props.color}}>{props.color}</a>
    </div>
  )
}
