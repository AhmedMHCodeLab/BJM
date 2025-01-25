import { TextInput, useMatches } from '@mantine/core'

const FormInput = ({ labelText, name, value, handleChange, type }) => {
  const size = useMatches({
    base: 'sm',
    sm: 'md',
  })
  return (
    <TextInput
      size={size}
      label={labelText || name}
      name={name}
      value={value}
      onChange={handleChange}
      type={type}
      withAsterisk
      required
    />
  )
}
export default FormInput
