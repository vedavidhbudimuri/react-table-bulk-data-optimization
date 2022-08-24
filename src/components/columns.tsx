import { format } from 'date-fns'
import React from 'react'
import TextField from '@mui/material/TextField'
import PersonModel from '../stores/models/PersonModel'
import CustomTextInput from './Common/CustomTextInput'

export const COLUMNS = [
   {
      Header: 'Id',
      Footer: 'Id',
      accessor: 'id',
      disableFilters: true,
      sticky: 'left',
   },
   {
      Header: 'First Name',
      Footer: 'First Name',
      accessor: 'firstName',
      sticky: 'left',
      Cell: (props) => {
         const { firstName, updateFirstName }: PersonModel = props.row.original
         return (
            <CustomTextInput
               defaultValue={firstName}
               onEnterKey={updateFirstName}
            />
         )
      },
   },
   {
      Header: 'Last Name',
      Footer: 'Last Name',
      accessor: 'lastName',
      sticky: 'left',
      Cell: (props) => {
         const { lastName, updateLastName }: PersonModel = props.row.original
         return (
            <CustomTextInput
               defaultValue={lastName}
               onEnterKey={updateLastName}
            />
         )
      },
   },
   {
      Header: 'Date of Birth',
      Footer: 'Date of Birth',
      accessor: 'dob',
      Cell: ({ value }) => {
         return format(new Date(value), 'dd/MM/yyyy')
      },
   },
   {
      Header: 'Country',
      Footer: 'Country',
      accessor: 'country',
      Cell: (props) => {
         const { firstName, updateFirstName }: PersonModel = props.row.original
         return (
            <CustomTextInput
               defaultValue={firstName}
               onEnterKey={updateFirstName}
            />
         )
      },
   },
   {
      Header: 'Phone',
      Footer: 'Phone',
      accessor: 'phone',
      Cell: (props) => {
         const { phone, updatePhone }: PersonModel = props.row.original
         return (
            <CustomTextInput defaultValue={phone} onEnterKey={updatePhone} />
         )
      },
   },
   {
      Header: 'Email',
      Footer: 'Email',
      accessor: 'email',
      Cell: (props) => {
         const { email, updateEmail }: PersonModel = props.row.original
         return (
            <CustomTextInput defaultValue={email} onEnterKey={updateEmail} />
         )
      },
   },
   {
      Header: 'Age',
      Footer: 'Age',
      accessor: 'age',
      Cell: (props) => {
         const { age, updateAge }: PersonModel = props.row.original
         return <CustomTextInput defaultValue={age} onEnterKey={updateAge} />
      },
   },
]

export const GROUPED_COLUMNS = [
   {
      Header: 'Id',
      Footer: 'Id',
      accessor: 'id',
   },
   {
      Header: 'Name',
      Footer: 'Name',
      columns: [
         {
            Header: 'First Name',
            Footer: 'First Name',
            accessor: 'first_name',
         },
         {
            Header: 'Last Name',
            Footer: 'Last Name',
            accessor: 'last_name',
         },
      ],
   },
   {
      Header: 'Info',
      Footer: 'Info',
      columns: [
         {
            Header: 'Date of Birth',
            Footer: 'Date of Birth',
            accessor: 'date_of_birth',
         },
         {
            Header: 'Country',
            Footer: 'Country',
            accessor: 'country',
         },
         {
            Header: 'Phone',
            Footer: 'Phone',
            accessor: 'phone',
         },
      ],
   },
]
