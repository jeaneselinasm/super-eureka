import React from 'react'
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import type { ColumnDef } from "@tanstack/react-table"
type Person = {
    name : string
    age : number
}


const data : Person[] = [
  { name: 'John', age: 25 },
  { name: 'Jane', age: 28 }
]

const columns : ColumnDef<Person>[] = [
    {header : 'Name', accessorKey : 'name'},
    {header : "Age", accessorKey : 'age'}
]

const UserTable = () => {
    const table = useReactTable({
        data,
        columns,
        getCoreRowModel : getCoreRowModel()
    })
  return (
     <table>
      <thead>
        {table.getHeaderGroups().map((hg) => (
          <tr key={hg.id}>
            {hg.headers.map((header) => (
              <th key={header.id}>
                {flexRender(header.column.columnDef.header, header.getContext())}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default UserTable
