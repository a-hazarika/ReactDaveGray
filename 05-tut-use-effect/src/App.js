import { useState, useEffect } from "react";
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import AddItem from "./AddItem";
import SearchItem from "./SearchItem";
import apiRequest from "./apiRequest";

/* THIS IS A TODO LIST APPLICATION USING JSON-SERVER WITH CRUD OPERATIONS */
/* Start json server: npx json-server -p 3500 -w data/db.json */
function App() {
  const API_URL = 'http://localhost:3500/items';

  const today = new Date();
  const [items, setItems] = useState([]);

  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   localStorage.setItem("shoppinglist", JSON.stringify(items));
  // }, [items]); //Using [] specifies that run it only at load time, without this parameter it is run on every render. [items] specifies it runs whenever items changes

  useEffect(() => {

    const fetchItems = async () => {
      try {
        const response = await fetch(API_URL);

        if (!response.ok) {
          throw Error('Did not receive expected data')
        }

        const listItems = await response.json();
        setItems(listItems);
        setFetchError(null);
      }
      catch (err) {
        // console.log(err.stack)
        setFetchError(err.message);
      }
      finally {
        setIsLoading(false);
      }
    }

    setTimeout(() => {
      (async () => await fetchItems())();
    }, 2000) //Using timeout to simulate a real API call

  }, []);

  const addItem = async (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);

    //Update request to API
    const postOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewItem)
    }

    const result = await apiRequest(API_URL, postOptions);

    if (result) {
      setFetchError(result);
    }
  }

  const handleCheck = async (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);

    //Update request to API
    const myItem = listItems.filter((item) => item.id === id); //Filter returns an array

    const updateOptions = {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ checked: myItem[0].checked })
    }

    const reqUrl = `${API_URL}/${id}`;

    const result = await apiRequest(reqUrl, updateOptions);

    if (result) {
      setFetchError(result);
    }
  }

  const handleDelete = async (id) => {
    const listItems = items.filter((item) => item.id != id);
    setItems(listItems);

    //Delete request to API
    const myItem = listItems.filter((item) => item.id === id); //Filter returns an array

    const deleteOptions = { method: 'DELETE' };

  const reqUrl = `${API_URL}/${id}`;

  const result = await apiRequest(reqUrl, deleteOptions);

  if (result) {
    setFetchError(result);
  }
}

const handleSubmit = (e) => {
  e.preventDefault();
  if (!newItem) return;
  addItem(newItem);
  setNewItem('');
}

return (
  <div className="App">
    <Header title={"Groceries List"} subtitle={`Week of ${today.toDateString()}`} />
    <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} />
    <SearchItem search={search} setSearch={setSearch} />
    <main>
      {isLoading && <p>Loading items...</p>}
      {fetchError && <p style={{ color: "red" }}>{`Error: ${fetchError}`}</p>}
      {!fetchError && !isLoading && <Content items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))} handleCheck={handleCheck} handleDelete={handleDelete} />}
    </main>
    <Footer length={items.length} />
  </div>
);
}

export default App;
