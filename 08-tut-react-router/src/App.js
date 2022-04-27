import { useState, useEffect } from 'react'
import Home from './Home';
import NewPost from './NewPost';
import PostPage from './PostPage';
import Missing from './Missing';
import About from './About';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Layout from './Layout';
import { format } from 'date-fns';

function App() {  
  const [searchResults, setSearchResults] = useState([])
  const [postTitle, setPostTitle] = useState('')
  const [postBody, setPostBody] = useState('')
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy pp');
    const newPost = {
        id,
        title: postTitle,
        datetime,
        body: postBody
      };

    const allPosts = [...posts, newPost];
    setPosts(allPosts);
    setPostTitle('');
    setPostBody('');
    navigate('/');
  }

  const handleDelete = (id) => {
    const postsList = posts.filter(post => post.id !== id);
    setPosts(postsList);
    navigate('/');
  }

  const [posts, setPosts] = useState([{
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    datetime: "July 01, 2021 11:17:36 AM",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  },
  {
    id: 2,
    title: "qui est esse",
    datetime: "July 02, 2021 10:27:16 AM",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
  },
  {
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    datetime: "August 04, 2021 5:57:56 PM",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
  },
  {
    id: 4,
    title: "dolorem eum magni eos aperiam quia",
    datetime: "September 15, 2021 9:07:39 AM",
    body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
  }])

  const [search, setSearch] = useState('');

  useEffect(() => {
    const filteredResults = posts.filter(post => 
      ((post.body).toLowerCase()).includes(search.toLowerCase())
      || ((post.title).toLowerCase()).includes(search.toLowerCase())
    )

    setSearchResults(filteredResults.reverse());
  }, [posts, search])

  return (
    <Routes>
      <Route path='/' element={<Layout search={search} setSearch={setSearch} />}>
        <Route index element={<Home posts={searchResults} />} />
        <Route path='post' element={
          <NewPost
            handleSubmit={handleSubmit}
            postTitle={postTitle}
            setPostTitle={setPostTitle}
            postBody={postBody}
            setPostBody={setPostBody}
          />} />
        <Route path='post/:id' element={<PostPage posts={searchResults} handleDelete={handleDelete} />} />
        <Route path='about' element={<About />} />
        <Route path='*' element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
