import ItemList from "./ItemList.js";

const Content = ({items, handleCheck, handleDelete}) => {
    
    //<> means a fragment. Using this as jsx needs to have a parent element

    return (
        <> 
            { items.length ? (
                <ItemList items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
                ) : (
                    <p style={{ marginTop: '2rem'}}>Your list is empty.</p>
                )
            }
        </>
    )
}

export default Content