import { Image } from '@mantine/core'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.svg'

const ImageLogo = () => {
  return (
    <Link to="/">
      <Image
        src={logo}
        h={{ base: '60', sm: '70', md: '80' }}
        maw="180px"
        fit="cover"
      />
    </Link>
  )
}
export default ImageLogo
