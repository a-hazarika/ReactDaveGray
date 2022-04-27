// const Header = (props) => {
//     const headerStyle = {
//         backgroundColor: 'mediumblue',
//         color: '#fff'
//     };

//   return (
//     // Inline styling Option 1
//     // <header style={{
//     //     backgroundColor: 'mediumblue',
//     //     color: '#fff'
//     // }}>
//     //     <h1>Groceries List</h1>
//     // </header>
//     /* OPTION 2
//     <header style={headerStyle}>
//         <h1>Groceries List</h1>
//     </header> */

//     <header>
//         <h1>{props.title}</h1>
//     </header>
//   )  
// }

const Header = ({ title,  subtitle }) => {        
    return (      
      <header>
          <h1>{title}</h1>
          <h5>{subtitle}</h5>
      </header>
    )  
  }

Header.defaultProps = {
  title: "Default Title",
  subtitle: "Default Subtitle"
}

export default Header