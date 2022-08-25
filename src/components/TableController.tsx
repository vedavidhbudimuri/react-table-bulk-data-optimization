import { observer } from 'mobx-react'
import React from 'react'
import { useContext } from 'react'

import { countries } from '../constants'
import { TableStoreContext } from '../stores/storesContext'
import { ColumnHiding } from './ColumnHiding'
import MultipleSelectChip from './Common/Select'
import { BasicTable } from './v8/BasicTable'
import { COLUMNS_V8 } from './v8/columns'

const TableController = observer(() => {
   const { filteredData, updateFilter } = useContext(TableStoreContext)
   console.log('TCL: TableController -> filteredData', filteredData)

   const onChangeCountry = (countries: string[]) => {
      updateFilter('country', countries)
   }

   return (
      <div style={{ padding: '12px' }}>
         <div>
            Filters:
            <MultipleSelectChip
               options={countries}
               onChange={onChangeCountry}
            />
         </div>
         <BasicTable columnData={COLUMNS_V8} personsData={filteredData} />
      </div>
   )
})

export default TableController
