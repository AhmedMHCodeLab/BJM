import { Button, useMatches } from '@mantine/core'
import { useSelector } from 'react-redux'

const SubmitButton = () => {
  const { isLoading } = useSelector((store) => store.quota)
  const buttonSize = useMatches({
    base: 'xs',
    md: 'sm',
    lg: 'md',
  })

  return (
    <Button
      type="submit"
      variant="filled"
      color="purpleBlue.5"
      radius="md"
      size={buttonSize}
      disabled={isLoading}
      loading={isLoading}
      loaderProps={{ type: 'dots' }}
    >
      Submit
    </Button>
  )
}
export default SubmitButton
