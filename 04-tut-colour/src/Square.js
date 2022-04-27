import React from 'react'

const Square = ({bgColour, hexValue, isDarkText}) => {
  return (
    <div className='square' style={{
            backgroundColor : bgColour,
            color: isDarkText ? "#000" : "#fff"
        }}>
        <p>{ bgColour ? bgColour : "Empty Value" }</p>
        <p>{hexValue ? hexValue : null}</p>
    </div>
  )
}

Square.defaultProps = {
    bgColour: "No default colour"
}

export default Square