import { observable, ObservableMap, action } from 'mobx'

class FilterStore {
   @observable filters!: Map<string, string[]>

   constructor() {
      this.init()
   }

   @action.bound
   init() {
      this.filters = new ObservableMap()
   }

   @action.bound
   addFilter(filterKey, filterValues: string[]) {
      this.filters.set(filterKey, filterValues)
   }
}

export default FilterStore
