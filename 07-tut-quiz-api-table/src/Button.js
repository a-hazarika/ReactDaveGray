const Button = ({buttonText, selection, setSelection}) => {
  return (
    <button
        className={selection === buttonText ? "active" : null}
        onClick={(e) => {
            e.preventDefault();
            setSelection(buttonText)
        }}
    >
        {buttonText}
    </button>
  )
}

export default Button