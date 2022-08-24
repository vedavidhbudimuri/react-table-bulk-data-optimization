import { TextField, TextFieldProps } from '@mui/material'
import React, { useState } from 'react'

type Props = TextFieldProps & { onEnterKey: (value) => void }

function CustomTextInput(props: Props) {
   const { onChange, onEnterKey } = props
   const [value, setValue] = useState(props.value)

   const OnKeydown = (e) => {
      if (e.keycode === 13) {
         onEnterKey(value)
      }
   }
   const onChangeInput = (val) => {
      onChange && onChange(val)
      setValue(value)
   }

   return (
      <TextField
         id='outlined-required'
         {...props}
         onKeyDown={OnKeydown}
         onChange={onChangeInput}
      />
   )
}

export default CustomTextInput
