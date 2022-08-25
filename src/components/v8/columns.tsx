import { createColumnHelper } from '@tanstack/react-table'
import PersonModel from '../../stores/models/PersonModel'
import React from 'react'
import { toJS } from 'mobx'
import CustomTextInput from '../Common/CustomTextInput'

const columnHelper = createColumnHelper<PersonModel>()

export const COLUMNS_V8 = [
   columnHelper.accessor('id', {
      cell: (info) => info.getValue(),
      footer: (info) => info.column.id,
   }),
   columnHelper.accessor('firstName', {
      cell: (props) => {
         const { firstName, updateFirstName }: PersonModel = props.row.original
         return (
            <CustomTextInput
               defaultValue={firstName}
               onEnterKey={updateFirstName}
            />
         )
      },
      footer: (info) => info.column.id,
   }),
   columnHelper.accessor((row) => row.lastName, {
      id: 'lastName',
      cell: (props) => {
         const { lastName, updateLastName }: PersonModel = props.row.original
         return (
            <CustomTextInput
               defaultValue={lastName}
               onEnterKey={updateLastName}
            />
         )
      },
      header: () => <span>Last Name</span>,
      footer: (info) => info.column.id,
   }),
   columnHelper.accessor('age', {
      header: () => 'Age',
      cell: (props) => {
         const { age, updateAge }: PersonModel = props.row.original
         return <CustomTextInput defaultValue={age} onEnterKey={updateAge} />
      },
      footer: (info) => info.column.id,
   }),
   columnHelper.accessor('email', {
      header: () => <span>Visits</span>,
      footer: (info) => info.column.id,
      cell: (props) => {
         const { email, updateEmail }: PersonModel = props.row.original
         return (
            <CustomTextInput defaultValue={email} onEnterKey={updateEmail} />
         )
      },
   }),
   columnHelper.accessor('dob', {
      header: 'Status',
      footer: (info) => info.column.id,
   }),
   columnHelper.accessor('country', {
      header: 'Profile Progress',
      footer: (info) => info.column.id,
   }),
   columnHelper.accessor('phone', {
      header: 'Profile Progress',
      footer: (info) => info.column.id,
      cell: (props) => {
         const { phone, updatePhone }: PersonModel = props.row.original
         return (
            <CustomTextInput defaultValue={phone} onEnterKey={updatePhone} />
         )
      },
   }),
]
