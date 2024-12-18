import { useDisclosure } from '@mantine/hooks'
import { Modal, Button, useMatches, Flex } from '@mantine/core'
import FormContainer from './FormContainer'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

const QuotaModal = () => {
  const { isModalOpened } = useSelector((store) => store.quota)
  const [opened, { open, close }] = useDisclosure(false)
  const buttonSize = useMatches({
    base: 'xs',
    md: 'sm',
    lg: 'md',
  })

  const modalSize = useMatches({
    base: 'sm',
    sm: 'md',
    md: 'lg',
  })

  useEffect(() => {
    if (!isModalOpened) {
      close()
    }
  }, [isModalOpened, close])

  return (
    <>
      <Modal
        size={modalSize}
        opened={opened}
        onClose={close}
        title="Fill up the details"
      >
        <FormContainer />
      </Modal>
      <Flex justify="flex-end">
        <Button
          variant="filled"
          onClick={open}
          size={buttonSize}
          color="purpleBlue.2"
          radius="lg"
          tt="uppercase"
        >
          request quote
        </Button>
      </Flex>
    </>
  )
}
export default QuotaModal
