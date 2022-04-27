import React from 'react';
import ReactDOM from 'react-dom'; //Using this for compatibility with easy peasy since it does not yet support react 18 root render
//import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StoreProvider } from 'easy-peasy';
import store from './store';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <StoreProvider store={store}>
//       <Router>
//         <Routes>
//           <Route path="/*" element={<App />} />
//         </Routes>
//       </Router>
//     </StoreProvider>
//   </React.StrictMode>
// );

//Using this for compatibility with easy peasy since it does not yet support react 18 root render
ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </Router>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root')
);