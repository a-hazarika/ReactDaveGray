import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import Missing from './Missing';
import About from './About';
import Layout from './Layout';
import EditPost from './EditPost';
import { Route, Routes } from 'react-router-dom';
import { DataProvider } from './context/DataContext';

function App() { 

  return (
    <DataProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='post' element={<NewPost />} />
          <Route path='edit/:id' element={<EditPost />} />
          <Route path='post/:id' element={<PostPage />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={<Missing />} />
        </Route>
      </Routes>
    </DataProvider>
  );
}

export default App;
