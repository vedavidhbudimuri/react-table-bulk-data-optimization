import { action, observable } from 'mobx'
import { PersonDataType } from '../types'

class PersonModel {
   id!: number
   @observable firstName!: string
   @observable lastName!: string
   @observable email!: string
   @observable dob!: string
   @observable age!: number
   @observable country!: string
   @observable phone!: string

   constructor(data: PersonDataType) {
      const {
         id,
         first_name,
         last_name,
         email,
         date_of_birth,
         age,
         country,
         phone,
      } = data
      this.id = id
      this.firstName = first_name
      this.lastName = last_name
      this.email = email
      this.dob = date_of_birth
      this.age = age
      this.country = country
      this.phone = phone
   }

   @action.bound
   updateFirstName(updatedName: string) {
      this.firstName = updatedName
   }

   @action.bound
   updateLastName(updatedName: string) {
      this.lastName = updatedName
   }
   @action.bound
   updatePhone(updatedPhone: string) {
      this.phone = updatedPhone
   }
   @action.bound
   updateEmail(email: string) {
      this.email = email
   }

   @action.bound
   updateAge(age: number) {
      this.age = age
   }
}
export default PersonModel
