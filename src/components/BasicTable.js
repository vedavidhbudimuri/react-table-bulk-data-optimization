import { observer } from 'mobx-react'
import React, { useMemo } from 'react'
import { useTable } from 'react-table'

import './table.css'

export const BasicTable = observer(({ columnData, personsData }) => {
   const columns = useMemo(() => columnData, [])
   const data = useMemo(() => personsData, [])

   const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      footerGroups,
      rows,
      prepareRow,
   } = useTable({
      columns,
      data,
   })

   return (
      <>
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
})
