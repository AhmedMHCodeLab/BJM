"use client"
import { Modal, Text, Title, Button, Box, Divider } from "@mantine/core"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

export const BioModal = ({ isOpen, onClose, name, title, bio }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Modal
          opened={isOpen}
          onClose={onClose}
          title={null}
          size="lg"
          padding="xl"
          centered
          withCloseButton={false}
          styles={{
            modal: {
              borderRadius: "1rem",
              boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
            },
            body: {
              padding: "2rem",
            },
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <Box sx={{ position: "absolute", top: "1rem", right: "1rem" }}>
              <Button
                variant="subtle"
                color="gray"
                radius="xl"
                compact
                onClick={onClose}
                sx={{ width: 36, height: 36, padding: 0 }}
              >
                <X size={20} />
              </Button>
            </Box>

            <Title order={2} mb="xs" sx={{ color: "#2563eb" }}>
              {name}
            </Title>
            <Text size="md" color="dimmed" mb="md" weight={500}>
              {title}
            </Text>
            <Divider mb="xl" />
            <Text size="sm" lh={1.7} sx={{ whiteSpace: "pre-line" }}>
              {bio}
            </Text>
          </motion.div>
        </Modal>
      )}
    </AnimatePresence>
  )
}

export default BioModal
