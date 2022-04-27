import Button from "./Button";

const Header = ({selection, setSelection}) => {
  return (
    <header>
        <Button selection={selection} setSelection={setSelection} buttonText="users"/>
        <Button selection={selection} setSelection={setSelection} buttonText="posts"/>
        <Button selection={selection} setSelection={setSelection} buttonText="comments"/>        
    </header>
  )
}

export default Header