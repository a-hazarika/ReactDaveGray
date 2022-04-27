import React from 'react'
import colorNames from 'colornames'

const ColorTextbox = ({colour, setColour, setHexValue, isDarkText, setIsDarkText}) => {
    return (
        <form className='colorForm' onSubmit={(e) => e.preventDefault()}>
            <label for="colorName">Colour Name</label>
            <input 
                autoFocus
                required
                type="text"
                placeholder="Colour name"
                value={colour}
                onChange={(e) => {
                    setColour(e.target.value);
                    setHexValue(colorNames(e.target.value));
                }}
            />
            <button onClick={() => setIsDarkText(!isDarkText)}>Change Text Color</button>
        </form>
    )
}

export default ColorTextbox