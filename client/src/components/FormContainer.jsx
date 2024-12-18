import { useDispatch, useSelector } from 'react-redux'
import FormInput from './FormInput'
import { Button, Flex, Group, useMatches } from '@mantine/core'
import TextAreaInput from './TextAreaInput'
import {
  createQuota,
  resetForm,
  updateForm,
} from '../features/quota/quotaSlice'
import { notifications } from '@mantine/notifications'
import SubmitButton from './SubmitButton'

const FormContainer = () => {
  const { companyName, contactNo, email, subject, description } = useSelector(
    (store) => store.quota
  )
  const dispatch = useDispatch()
  const buttonSize = useMatches({
    base: 'xs',
    md: 'sm',
    lg: 'md',
  })

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!companyName || !contactNo || !email || !subject || !description) {
      notifications.show({
        message: 'Please fill all the fields',
        color: 'red',
      })
      return
    }

    dispatch(
      createQuota({ companyName, contactNo, email, subject, description })
    )
  }

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    dispatch(updateForm({ [name]: value }))
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <Flex direction="column" rowGap={10}>
        <Group grow>
          {/* COMPANY NAME */}
          <FormInput
            labelText="Company Name"
            name="companyName"
            value={companyName}
            handleChange={handleChange}
            type="text"
          />
          {/* CONTACT NO */}
          <FormInput
            labelText="Contact No"
            name="contactNo"
            value={contactNo}
            handleChange={handleChange}
            type="text"
          />
        </Group>
        {/* EMAIL */}
        <FormInput
          labelText="Email"
          name="email"
          value={email}
          handleChange={handleChange}
          type="email"
        />
        {/* SUBJECT */}
        <FormInput
          labelText="Subject"
          name="subject"
          value={subject}
          handleChange={handleChange}
          type="text"
        />
        {/* DESCRIPTION */}
        <TextAreaInput
          labelText="Description"
          name="description"
          value={description}
          handleChange={handleChange}
        />
      </Flex>
      <Group mt={20} gap={20} grow>
        <SubmitButton />
        <Button
          type="button"
          variant="filled"
          color="red"
          radius="md"
          size={buttonSize}
          onClick={() => dispatch(resetForm())}
        >
          Reset
        </Button>
      </Group>
    </form>
  )
}
export default FormContainer
