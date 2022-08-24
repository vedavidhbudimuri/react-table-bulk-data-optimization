import { observer } from 'mobx-react'
import React from 'react'
import { useContext } from 'react'

import { countries } from '../constants'
import { TableStoreContext } from '../stores/storesContext'
import { BasicTable } from './BasicTable'
import { ColumnHiding } from './ColumnHiding'
import { COLUMNS } from './columns'
import MultipleSelectChip from './Common/Select'

const TableController = observer(() => {
   const { filteredData, updateFilter } = useContext(TableStoreContext)

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
         <BasicTable columnData={COLUMNS} personsData={filteredData} />
      </div>
   )
})

export default TableController
