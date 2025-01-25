import { Textarea, useMatches } from '@mantine/core'

const TextAreaInput = ({ labelText, name, value, handleChange }) => {
  const size = useMatches({
    base: 'sm',
    sm: 'md',
  })
  return (
    <Textarea
      label={labelText || name}
      size={size}
      name={name}
      value={value}
      onChange={handleChange}
      withAsterisk
      required
    />
  )
}
export default TextAreaInput
