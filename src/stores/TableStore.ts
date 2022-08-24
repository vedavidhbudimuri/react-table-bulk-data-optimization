import { observable, ObservableMap, action, computed } from 'mobx'
import MOCK_DATA from '../components/MOCK_DATA.json'
import PersonModel from './models/PersonModel'

interface PersonDataType {
   id: number
   first_name: string
   last_name: string
   email: string
   date_of_birth: string
   age: number
   country: string
   phone: string
}

class TableStore {
   @observable filters!: Map<string, string[]>

   @observable tableData!: Map<number, PersonModel>

   constructor() {
      this.init()
   }

   @action.bound
   init() {
      this.filters = new ObservableMap()
      this.tableData = new ObservableMap()
      MOCK_DATA.map((data) => {
         this.tableData.set(data.id, new PersonModel(data))
      })
   }

   @computed
   get filteredData() {
      const data = Array.from(this.tableData.values())
      const countries = this.filters.get('country')

      if (countries && countries?.length) {
         return data.filter((d) => countries.includes(d.country))
      }
      return data
   }

   @action.bound
   updateFilter(filterKey: string, filterValues: string[]) {
      this.filters.set(filterKey, filterValues)
   }

   @action.bound
   updatePersonDetails(personId: string, key: string, value: any) {}
}

export default TableStore
