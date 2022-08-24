import { createContext } from 'react'
import stores from './index'

const TableStoreContext = createContext(stores.tableStore)

export { TableStoreContext }
