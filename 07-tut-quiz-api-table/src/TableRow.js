import TableCell from './TableCell'

const TableRow = ({ item }) => {
    return (
        <tr>
            {Object.entries(item).map(([key, value]) => {
                return (
                    <TableCell key={key} cellData={JSON.stringify(value)} />
                )
            })}
        </tr>
    )
}

export default TableRow