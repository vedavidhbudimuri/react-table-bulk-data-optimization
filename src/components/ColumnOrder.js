import React, { useMemo } from 'react'
import { useTable, useColumnOrder } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import './table.css'

export const ColumnOrder = ({ personsData, columnData }) => {
   const columns = useMemo(() => columnData, [])
   const data = useMemo(() => personsData, [])

   const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      footerGroups,
      rows,
      prepareRow,
      setColumnOrder,
   } = useTable(
      {
         columns,
         data,
      },
      useColumnOrder
   )

   const changeOrder = () => {
      setColumnOrder([
         'id',
         'first_name',
         'last_name',
         'phone',
         'country',
         'date_of_birth',
      ])
   }

   return (
      <>
         <button onClick={changeOrder}>Change column order</button>
         <table {...getTableProps()}>
            <thead>
               {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                     {headerGroup.headers.map((column) => (
                        <th {...column.getHeaderProps()}>
                           {column.render('Header')}
                        </th>
                     ))}
                  </tr>
               ))}
            </thead>
            <tbody {...getTableBodyProps()}>
               {rows.map((row) => {
                  prepareRow(row)
                  return (
                     <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                           return (
                              <td {...cell.getCellProps()}>
                                 {cell.render('Cell')}
                              </td>
                           )
                        })}
                     </tr>
                  )
               })}
            </tbody>
         </table>
      </>
   )
}
