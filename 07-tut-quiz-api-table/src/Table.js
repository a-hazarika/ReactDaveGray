import TableRow from "./TableRow"

const Table = ({items}) => {
  return (
    <div className="table-container">
        <table>
            <tbody>
                {items.map(item => (
                    <TableRow key={item.id} item={item} />
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Table