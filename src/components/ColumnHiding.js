import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import MOCK_DATA from './MOCK_DATA.json'
import { COLUMNS } from './columns'
import './table.css'
import { Checkbox } from './Checkbox'

export const ColumnHiding = ({ columnData, personsData }) => {
   const columns = columnData
   const data = personsData

   const {
      getTableProps,
      getTableBodyProps,
      headerGroups,
      footerGroups,
      rows,
      prepareRow,
      allColumns,
      getToggleHideAllColumnsProps,
   } = useTable({
      columns,
      data,
   })

   return (
      <>
         <div>
            <div>
               <Checkbox {...getToggleHideAllColumnsProps()} /> Toggle All
            </div>
            {allColumns.map((column) => (
               <div key={column.id}>
                  <label>
                     <input
                        type='checkbox'
                        {...column.getToggleHiddenProps()}
                     />{' '}
                     {column.Header}
                  </label>
               </div>
            ))}
            <br />
         </div>
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
