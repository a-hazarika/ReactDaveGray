import Header from "./Header";
import { useState, useEffect } from 'react'
import Table from "./Table";

function App() {
  const [selection, setSelection] = useState("users")
  const [fetchError, setFetchError] = useState("")
  const API_URL = 'https://jsonplaceholder.typicode.com/';

  const [contents, setContents] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${selection}`);

        if (!response.ok) {
          throw Error('Did not receive expected data')
        }

        const listItems = await response.json();
        
        console.log(listItems)

        setContents(listItems);
        setFetchError(null);
      }
      catch (err) {
        setFetchError(err.message);
      }            
    }

    (async () => await fetchItems())();
  }, [selection])

  return (
    <div className="App">
      <Header selection={selection} setSelection={setSelection} />
      <main>
        {fetchError && <p>{fetchError}</p>}
        {!fetchError && <Table items={contents} />}
      </main>
    </div>
  );
}

export default App;
