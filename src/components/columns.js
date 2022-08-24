import { format } from 'date-fns'
import React from 'react'
import TextField from '@mui/material/TextField'

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
      accessor: 'first_name',
      sticky: 'left',
      Cell: (props) => {
         return <TextField id='outlined-required' defaultValue={props.value} />
      },
   },
   {
      Header: 'Last Name',
      Footer: 'Last Name',
      accessor: 'last_name',
      sticky: 'left',
      Cell: (props) => {
         return <TextField id='outlined-required' defaultValue={props.value} />
      },
   },
   {
      Header: 'Date of Birth',
      Footer: 'Date of Birth',
      accessor: 'date_of_birth',
      Cell: ({ value }) => {
         return format(new Date(value), 'dd/MM/yyyy')
      },
   },
   {
      Header: 'Country',
      Footer: 'Country',
      accessor: 'country',
      Cell: (props) => {
         return <TextField id='outlined-required' defaultValue={props.value} />
      },
   },
   {
      Header: 'Phone',
      Footer: 'Phone',
      accessor: 'phone',
      Cell: (props) => {
         return <TextField id='outlined-required' defaultValue={props.value} />
      },
   },
   {
      Header: 'Email',
      Footer: 'Email',
      accessor: 'email',
      Cell: (props) => {
         return <TextField id='outlined-required' defaultValue={props.value} />
      },
   },
   {
      Header: 'Age',
      Footer: 'Age',
      accessor: 'age',
      Cell: (props) => {
         console.log('TCL: props', props)
         return <TextField id='outlined-required' defaultValue={props.value} />
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
