import { IconBrandWhatsapp } from '@tabler/icons-react'
import { Anchor, ThemeIcon } from '@mantine/core'

const WhatsAppBtn = () => {
  return (
    <Anchor
      href="https://wa.me/2203725113"
      target="_blank"
      pos="fixed"
      right={30}
      bottom={30}
    >
      <ThemeIcon radius="xl" size={55} color="#25D366">
        <IconBrandWhatsapp height={40} width={40} />
      </ThemeIcon>
    </Anchor>
  )
}
export default WhatsAppBtn
