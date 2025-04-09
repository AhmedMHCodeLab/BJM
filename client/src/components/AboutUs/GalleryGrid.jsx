"use client"

import { useState, useEffect, useRef } from "react"
import { Container, Text, Paper, Title, Modal, Image, Box, Grid, Tabs, useMantineTheme, Group } from "@mantine/core"
import { IconChevronLeft, IconChevronRight, IconX, IconMaximize, IconMinimize } from "@tabler/icons-react"
import { motion, AnimatePresence } from "framer-motion"

// Organize projects into folders/categories
const galleries = {
  events: {
    title: "Corporate Events",
    items: [
      {
        id: 1,
        title: "Business Conference 2023",
        size: "large",
        description: "Annual business strategy conference with industry leaders.",
        image: "https://bjmafrica.com/wp-content/uploads/2023/09/BJM2-1024x683.jpg",
      },
      {
        id: 2,
        title: "Leadership Summit",
        size: "small",
        description: "Executive leadership development program.",
        image: "https://bjmafrica.com/wp-content/uploads/2023/09/BJM3-1024x683.jpg",
      },
      {
        id: 3,
        title: "Strategy Session",
        size: "large",
        description: "Strategic planning and team alignment.",
        image: "https://bjmafrica.com/wp-content/uploads/2023/09/BJM4-1024x683.jpg",
      },
      {
        id: 10,
        title: "Leadership Forum 2023",
        size: "large",
        description: "Executive leadership forum focusing on strategic growth.",
        image: "https://bjmafrica.com/wp-content/uploads/2023/09/BJM8-1024x683.jpg",
      },
      {
        id: 11,
        title: "Innovation Summit",
        size: "small",
        description: "Summit focused on business innovation and digital transformation.",
        image: "https://bjmafrica.com/wp-content/uploads/2023/09/BJM9-1024x683.jpg",
      },
      {
        id: 12,
        title: "Annual Gala",
        size: "large",
        description: "Celebrating achievements and partnerships.",
        image: "https://bjmafrica.com/wp-content/uploads/2023/09/BJM10-1024x683.jpg",
      },
      {
        id: 13,
        title: "Industry Networking",
        size: "small",
        description: "Professional networking event for industry leaders.",
        image: "https://bjmafrica.com/wp-content/uploads/2023/09/BJM11-1024x683.jpg",
      },
    ],
  },
  workshops: {
    title: "Training Workshops",
    items: [
      {
        id: 4,
        title: "Management Workshop",
        size: "large",
        description: "Professional development workshop for managers.",
        image: "https://bjmafrica.com/wp-content/uploads/2023/09/BJM5-1-1024x683.jpg",
      },
      {
        id: 5,
        title: "Team Building",
        size: "small",
        description: "Interactive team building activities.",
        image: "https://bjmafrica.com/wp-content/uploads/2023/09/BJM6-2-1024x683.jpg",
      },
      {
        id: 6,
        title: "Leadership Development",
        size: "large",
        description: "Executive leadership training program.",
        image: "https://bjmafrica.com/wp-content/uploads/2023/09/BJM7-1-1024x683.jpg",
      },
      {
        id: 14,
        title: "Digital Skills Workshop",
        size: "large",
        description: "Advanced digital skills training for professionals.",
        image: "https://bjmafrica.com/wp-content/uploads/2023/09/BJM12-1024x683.jpg",
      },
      {
        id: 15,
        title: "Project Management",
        size: "small",
        description: "Professional project management certification workshop.",
        image: "https://bjmafrica.com/wp-content/uploads/2023/09/BJM13-1024x683.jpg",
      },
      {
        id: 16,
        title: "Financial Planning",
        size: "large",
        description: "Strategic financial planning and analysis workshop.",
        image: "https://bjmafrica.com/wp-content/uploads/2023/09/BJM14-1024x683.jpg",
      },
      {
        id: 17,
        title: "HR Development",
        size: "small",
        description: "Human resources management and development training.",
        image: "https://bjmafrica.com/wp-content/uploads/2023/09/BJM15-1024x683.jpg",
      },
      {
        id: 18,
        title: "Marketing Strategy",
        size: "large",
        description: "Digital marketing and brand strategy workshop.",
        image: "https://bjmafrica.com/wp-content/uploads/2023/09/BJM16-1024x683.jpg",
      },
    ],
  },
  consulting: {
    title: "Consulting Projects",
    items: [
      {
        id: 7,
        title: "Strategic Planning",
        size: "large",
        description: "Strategic planning sessions with clients.",
        image: "https://bjmafrica.com/wp-content/uploads/2023/09/BJM50-1024x683.jpg",
      },
      {
        id: 8,
        title: "Business Advisory",
        size: "small",
        description: "Business advisory meetings and consultations.",
        image: "https://bjmafrica.com/wp-content/uploads/2023/09/BJM51-1024x683.jpg",
      },
      {
        id: 9,
        title: "Client Workshop",
        size: "large",
        description: "Interactive workshop with key stakeholders.",
        image: "https://bjmafrica.com/wp-content/uploads/2023/09/BJM52-1024x683.jpg",
      },
      {
        id: 19,
        title: "Digital Transformation",
        size: "large",
        description: "Enterprise digital transformation consulting project.",
        image: "https://bjmafrica.com/wp-content/uploads/2023/09/BJM17-1024x683.jpg",
      },
      {
        id: 20,
        title: "Process Optimization",
        size: "small",
        description: "Business process reengineering and optimization.",
        image: "https://bjmafrica.com/wp-content/uploads/2023/09/BJM18-1024x683.jpg",
      },
      {
        id: 21,
        title: "Change Management",
        size: "large",
        description: "Organizational change management consulting.",
        image: "https://bjmafrica.com/wp-content/uploads/2023/09/BJM19-1024x683.jpg",
      },
      {
        id: 22,
        title: "Market Research",
        size: "small",
        description: "Comprehensive market analysis and research project.",
        image: "https://bjmafrica.com/wp-content/uploads/2023/09/BJM20-1024x683.jpg",
      },
    ],
  },
}

// Custom hook for intersection observer
const useIntersectionObserver = (options = {}) => {
  const [ref, setRef] = useState(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting)
    }, options)

    observer.observe(ref)

    return () => {
      if (ref) observer.unobserve(ref)
    }
  }, [ref, options])

  return [setRef, isVisible]
}

const ProjectCard = ({ project, onClick, index, prefersReducedMotion }) => {
  const [isHovered, setIsHovered] = useState(false)
  const theme = useMantineTheme()
  const [cardRef, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px",
  })

  const variants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: prefersReducedMotion ? 0 : (index * 0.1) % 0.5, // Stagger effect but reset every 5 items
      },
    },
  }

  return (
    <motion.div
      ref={cardRef}
      variants={prefersReducedMotion ? {} : variants}
      initial="hidden"
      animate={isVisible ? "visible" : "hidden"}
    >
      <motion.div
        whileHover={
          prefersReducedMotion
            ? {}
            : {
                scale: 1.03,
                transition: { duration: 0.3 },
              }
        }
        whileTap={
          prefersReducedMotion
            ? {}
            : {
                scale: 0.98,
                transition: { duration: 0.2 },
              }
        }
      >
        <Paper
          p="md"
          onClick={() => onClick(project)}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          style={{
            backgroundColor: isHovered ? theme.colors.dark[6] : theme.colors.dark[7],
            height: project.size === "large" ? 450 : 300,
            cursor: "pointer",
            transition: prefersReducedMotion ? "none" : "background-color 0.2s ease",
            position: "relative",
            overflow: "hidden",
            borderRadius: theme.radius.md,
            boxShadow: theme.shadows.md,
          }}
          role="button"
          aria-label={`View details of ${project.title}`}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              onClick(project)
            }
          }}
        >
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            height="100%"
            width="100%"
            style={{
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
              filter: isHovered ? "brightness(0.7)" : "brightness(1)",
              transition: prefersReducedMotion ? "none" : "filter 0.3s ease, transform 0.5s ease",
              transform: isHovered ? "scale(1.05)" : "scale(1)",
            }}
          />

          <motion.div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "1rem",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              zIndex: 3,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            initial={{ y: 100, opacity: 0 }}
            animate={{
              y: isHovered ? 0 : 100,
              opacity: isHovered ? 1 : 0,
              transition: {
                duration: prefersReducedMotion ? 0 : 0.3,
                ease: "easeOut",
              },
            }}
          >
            <Text size="md" color="white" weight={600} mb={8} align="center">
              {project.title}
            </Text>
            <Text size="sm" color="gray.3" align="center" lineClamp={2}>
              {project.description}
            </Text>
            <Box mt={12}>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Text
                  size="sm"
                  color="white"
                  weight={500}
                  style={{
                    padding: "4px 12px",
                    borderRadius: "4px",
                    backgroundColor: theme.colors.blue[7],
                    display: "inline-block",
                  }}
                >
                  View Details
                </Text>
              </motion.div>
            </Box>
          </motion.div>
        </Paper>
      </motion.div>
    </motion.div>
  )
}

export default function PortfolioGrid() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeTab, setActiveTab] = useState("events")
  const [fullscreen, setFullscreen] = useState(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const theme = useMantineTheme()
  const modalRef = useRef(null)

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleChange)

    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  const handleNavigate = (direction) => {
    const currentItems = galleries[activeTab].items
    const currentIndex = currentItems.findIndex((item) => item.id === selectedProject.id)

    if (direction === "next" && currentIndex < currentItems.length - 1) {
      setSelectedProject(currentItems[currentIndex + 1])
    } else if (direction === "prev" && currentIndex > 0) {
      setSelectedProject(currentItems[currentIndex - 1])
    }
  }

  // Handle keyboard navigation in modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!selectedProject) return

      switch (e.key) {
        case "ArrowLeft":
          handleNavigate("prev")
          break
        case "ArrowRight":
          handleNavigate("next")
          break
        case "Escape":
          setSelectedProject(null)
          setFullscreen(false)
          break
        case "f":
          setFullscreen(!fullscreen)
          break
        default:
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [selectedProject, fullscreen, activeTab])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <motion.div initial="hidden" animate="visible" variants={prefersReducedMotion ? {} : containerVariants}>
      <Container
        fluid
        style={{
          backgroundColor: theme.colors.dark[8],
          color: theme.colors.gray[0],
          padding: "2rem",
          maxWidth: "100vw",
        }}
      >
        <motion.div variants={prefersReducedMotion ? {} : titleVariants}>
          <Title order={1} size="h1" align="center" mb="sm">
            MOMENTS WE SHARED
          </Title>
          <Text size="lg" align="center" color="gray.4" mb="xl">
            Captured Times
          </Text>
        </motion.div>

        <Tabs value={activeTab} onChange={setActiveTab} variant="pills" radius="md" mb="xl">
          <Tabs.List position="center">
            {Object.entries(galleries).map(([key, gallery]) => (
              <motion.div
                key={key}
                whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
              >
                <Tabs.Tab
                  value={key}
                  style={{
                    color: activeTab === key ? theme.white : theme.colors.gray[4],
                    backgroundColor: activeTab === key ? theme.colors.blue[7] : "transparent",
                    transition: prefersReducedMotion ? "none" : "all 0.3s ease",
                  }}
                >
                  {gallery.title}
                </Tabs.Tab>
              </motion.div>
            ))}
          </Tabs.List>
        </Tabs>

        <Modal
          opened={!!selectedProject}
          onClose={() => {
            setSelectedProject(null)
            setFullscreen(false)
          }}
          centered
          size={fullscreen ? "100%" : "xl"}
          fullScreen={fullscreen}
          overlayBlur={2}
          radius="md"
          withCloseButton={true}
          styles={{
            modal: {
              backgroundColor: theme.colors.dark[7],
              color: theme.colors.gray[0],
              position: "relative",
              height: fullscreen ? "100vh" : "auto",
              display: "flex",
              flexDirection: "column",
            },
            body: {
              flex: 1,
              display: "flex",
              flexDirection: "column",
            },
          }}
          ref={modalRef}
        >
          {selectedProject && (
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedProject.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: prefersReducedMotion ? 0 : 0.3 }}
                style={{
                  position: "relative",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Group position="apart" mb="md">
                  <Title order={2} size="h3">
                    {selectedProject.title}
                  </Title>
                  <Group>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      <IconX
                        size={24}
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setSelectedProject(null)
                          setFullscreen(false)
                        }}
                        aria-label="Close modal"
                      />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                      {fullscreen ? (
                        <IconMinimize
                          size={24}
                          style={{ cursor: "pointer" }}
                          onClick={() => setFullscreen(false)}
                          aria-label="Exit fullscreen"
                        />
                      ) : (
                        <IconMaximize
                          size={24}
                          style={{ cursor: "pointer" }}
                          onClick={() => setFullscreen(true)}
                          aria-label="Enter fullscreen"
                        />
                      )}
                    </motion.div>
                  </Group>
                </Group>

                <Box
                  style={{
                    flex: 1,
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
                    style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center" }}
                  >
                    <Image
                      src={selectedProject.image || "/placeholder.svg"}
                      alt={selectedProject.title}
                      fit="contain"
                      radius="md"
                      style={{
                        maxHeight: fullscreen ? "calc(100vh - 200px)" : "70vh",
                        objectFit: "contain",
                      }}
                    />
                  </motion.div>

                  <Box
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: 0,
                      right: 0,
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "0 1rem",
                      transform: "translateY(-50%)",
                      pointerEvents: "none",
                    }}
                  >
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} style={{ pointerEvents: "auto" }}>
                      <IconChevronLeft
                        size={32}
                        color="white"
                        style={{
                          cursor: "pointer",
                          backgroundColor: "rgba(0,0,0,0.5)",
                          borderRadius: "50%",
                          padding: "5px",
                        }}
                        onClick={() => handleNavigate("prev")}
                        aria-label="Previous image"
                      />
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} style={{ pointerEvents: "auto" }}>
                      <IconChevronRight
                        size={32}
                        color="white"
                        style={{
                          cursor: "pointer",
                          backgroundColor: "rgba(0,0,0,0.5)",
                          borderRadius: "50%",
                          padding: "5px",
                        }}
                        onClick={() => handleNavigate("next")}
                        aria-label="Next image"
                      />
                    </motion.div>
                  </Box>
                </Box>

                <Box mt="md">
                  <Text size="sm" align="center" mt="sm" color="gray.4">
                    {selectedProject.description}
                  </Text>
                </Box>
              </motion.div>
            </AnimatePresence>
          )}
        </Modal>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: prefersReducedMotion ? 0 : 0.5 }}
          >
            <Grid gutter="md">
              {galleries[activeTab].items.map((project, index) => (
                <Grid.Col
                  key={project.id}
                  span={{
                    base: 12,
                    sm: project.size === "large" ? 12 : 6,
                    md: project.size === "large" ? 8 : 4,
                    lg: project.size === "large" ? 6 : 3,
                  }}
                >
                  <ProjectCard
                    project={project}
                    onClick={setSelectedProject}
                    index={index}
                    prefersReducedMotion={prefersReducedMotion}
                  />
                </Grid.Col>
              ))}
            </Grid>
          </motion.div>
        </AnimatePresence>
      </Container>
    </motion.div>
  )
}
