const Header = () => {
    const headerStyle = {
        backgroundColor: 'mediumblue',
        color: '#fff'
    };

  return (
    // Inline styling Option 1
    // <header style={{
    //     backgroundColor: 'mediumblue',
    //     color: '#fff'
    // }}>
    //     <h1>Groceries List</h1>
    // </header>
    /* OPTION 2
    <header style={headerStyle}>
        <h1>Groceries List</h1>
    </header> */

    <header>
        <h1>Groceries List</h1>
    </header>
  )  
}

export default Header