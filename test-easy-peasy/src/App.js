import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect } from "react";
import useAxiosFetch from "./hooks/useAxiosFetch";

function App() {

  const posts = useStoreState((state) => state.posts);
  const setPosts = useStoreActions((actions) => actions.setPosts);

  const search = useStoreState(state => state.search);
  const setSearch = useStoreActions(actions => actions.setSearch);

  const { data } = useAxiosFetch('http://localhost:3500/posts');

  useEffect(() => {
    setPosts(data);
  }, [data, setPosts])
 

  return (
    <main className="App">
      <h1>Test page</h1>
      <input 
        id="search"
        placeholder="search"
        autoFocus
        type="text"
        value={search}
        onChange={(e) => {
          console.log(e.target.value)
          setSearch(e.target.value)
        }}
      />

      {posts.map(post => (
        <article key={post.id} className="post">            
            <p className="postBody">
                {
                    (post.body).length <= 25
                    ? post.body
                    : `${(post.body).slice(0,25)}...`
                }
            </p>
        </article>
      ))}
    </main>
  );
}

export default App;
