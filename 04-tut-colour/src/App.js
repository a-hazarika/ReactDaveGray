import { useState } from 'react'
import ColorTextbox from "./ColorTextbox";
import Square from "./Square";

function App() {
  
  const [colour, setColour] = useState('')
  const [hexValue, setHexValue] = useState('')
  const [isDarkText, setIsDarkText] = useState(true)

  return (
    <div className="App">
      <Square 
        bgColour={colour}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <ColorTextbox 
        colour={colour}
        setColour={setColour}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
