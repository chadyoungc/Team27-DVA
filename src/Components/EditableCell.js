import React from 'react'
import { TextField } from '@rmwc/textfield'
import '@rmwc/textfield/styles';
// Create an editable cell renderer
export const EditableCell = ({
    value: initialValue,
    row: { index },
    column: { id },
    updateCellValue, // This is a custom function that we supplied to our table instance
  }) => {
    // We need to keep and update the state of the cell normally
    const [value, setValue] = React.useState(initialValue)
  
    const onChange = e => {
      setValue(e.target.value)
    }
  
    // We'll only update the external data when the input is blurred
    const onBlur = () => {
      updateCellValue(index, id, value)
    }
  
    // If the initialValue is changed external, sync it up with our state
    React.useEffect(() => {
      setValue(initialValue)
    }, [initialValue])
  
    return <TextField value={value} onChange={onChange} onBlur={onBlur} />
  }