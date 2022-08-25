import { observer } from 'mobx-react'
import React, { useEffect, useMemo, useState } from 'react'
import {
   createColumnHelper,
   flexRender,
   getCoreRowModel,
   useReactTable,
} from '@tanstack/react-table'
import PersonModel from '../../stores/models/PersonModel'

import '../table.css'

export const BasicTable = observer(
   ({
      columnData,
      personsData,
   }: {
      columnData: any
      personsData: PersonModel[]
   }) => {
      const [data, setData] = useState([...personsData])

      useEffect(() => {
         setData(personsData)
      }, [personsData])

      const table = useReactTable({
         data,
         columns: columnData,
         getCoreRowModel: getCoreRowModel(),
      })

      return (
         <>
            <table>
               <thead>
                  {table.getHeaderGroups().map((headerGroup) => (
                     <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                           <th key={header.id}>
                              {header.isPlaceholder
                                 ? null
                                 : flexRender(
                                      header.column.columnDef.header,
                                      header.getContext()
                                   )}
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
                              {flexRender(
                                 cell.column.columnDef.cell,
                                 cell.getContext()
                              )}
                           </td>
                        ))}
                     </tr>
                  ))}
               </tbody>
            </table>
         </>
      )
   }
)
