"use client"

import { useState, useEffect } from "react"
import { Box, Paper, Title, Text, Group, Stack, Grid } from "@mantine/core"
import { motion, AnimatePresence } from "framer-motion"
import { Eye, Target, Heart, Check, Users, Star, Lightbulb } from "lucide-react"
import { useInView } from "react-intersection-observer"

// Custom hook for responsive design
const useViewportSize = () => {
  const [width, setWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 0)

  useEffect(() => {
    if (typeof window === "undefined") return

    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return { width, isMobile: width < 768 }
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

const CoreValue = ({ title, description, icon: Icon, delay }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay, ease: "easeOut" }}
    >
      <Box mb="sm">
        <Group spacing="sm" noWrap align="flex-start">
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1, rotate: [0, 10, -10, 0] } : { scale: 0 }}
            transition={{ duration: 0.5, delay: delay + 0.2, ease: "easeOut" }}
          >
            <Box pt={2}>
              <Icon size={20} color="#2563eb" />
            </Box>
          </motion.div>
          <Box>
            <Text weight={700} size="sm">
              {title}
            </Text>
            <Text size="sm" color="gray.7">
              {description}
            </Text>
          </Box>
        </Group>
      </Box>
    </motion.div>
  )
}

const Section = ({ icon: Icon, title, content, isExpanded, onClick, color, isMobile }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  // Optimized for both desktop and mobile view
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      layout
      style={{
        width: isExpanded ? "90%" : isMobile ? "100%" : "30%",
        maxWidth: isExpanded ? "90%" : "150px",
        minWidth: isMobile ? "100%" : "80px",
        transition: "width 0.3s ease",
        marginBottom: isMobile ? "10px" : "0",
      }}
    >
      <Paper
        p="md"
        onClick={onClick}
        style={{
          height: "100%",
          cursor: "pointer",
          backgroundColor: color,
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          boxShadow: isExpanded ? "0 15px 30px rgba(0, 0, 0, 0.2)" : "0 10px 20px rgba(0, 0, 0, 0.1)",
          transition: "box-shadow 0.3s ease",
        }}
      >
        <Group position="left" spacing="md" noWrap>
          <motion.div
            animate={isExpanded ? { rotate: [0, 360] } : { rotate: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <Icon size={24} color="white" />
          </motion.div>
          <motion.div animate={isExpanded ? { scale: 1.05 } : { scale: 1 }} transition={{ duration: 0.3 }}>
            <Title
              order={3}
              color="white"
              style={{
                writingMode: isExpanded || isMobile ? "horizontal-tb" : "vertical-rl",
                transform: isExpanded || isMobile ? "none" : "rotate(180deg)",
                transition: "all 0.3s ease",
                whiteSpace: "nowrap",
                fontSize: isMobile ? "16px" : "24px",
              }}
            >
              {title}
            </Title>
          </motion.div>
        </Group>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Text c="white" mt="md" mb="xl" style={{ whiteSpace: "normal" }}>
                {content}
              </Text>

              {title === "Our Core Values" && (
                <motion.div variants={containerVariants} initial="hidden" animate="visible">
                  <Grid gutter="md">
                    <Grid.Col xs={12} sm={6}>
                      <Stack spacing="lg">
                        <CoreValue
                          title="INTEGRITY"
                          description="We are committed to conducting business with honesty, fairness and high ethical standards"
                          icon={Heart}
                          delay={0.1}
                        />
                        <CoreValue
                          title="EXCELLENCE"
                          description="We strive to deliver exceptional quality in all our services"
                          icon={Star}
                          delay={0.2}
                        />
                        <CoreValue
                          title="COLLABORATION"
                          description="We believe in working together as a team and with our clients"
                          icon={Users}
                          delay={0.3}
                        />
                      </Stack>
                    </Grid.Col>

                    <Grid.Col xs={12} sm={6}>
                      <Stack spacing="lg">
                        <CoreValue
                          title="PROFESSIONALISM"
                          description="We maintain high standards of professionalism in all our interactions"
                          icon={Check}
                          delay={0.4}
                        />
                        <CoreValue
                          title="INNOVATION"
                          description="We constantly seek new and better ways to serve our clients"
                          icon={Lightbulb}
                          delay={0.5}
                        />
                        <CoreValue
                          title="CLIENT FOCUS"
                          description="We put our clients' needs first and strive to exceed their expectations"
                          icon={Target}
                          delay={0.6}
                        />
                      </Stack>
                    </Grid.Col>
                  </Grid>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </Paper>
    </motion.div>
  )
}

const BJMMissionValues = () => {
  const [expanded, setExpanded] = useState(null)
  const { isMobile } = useViewportSize()
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const sections = [
    {
      title: "Our Vision",
      icon: Eye,
      content:
        "To be recognized as a valued, an impactful, innovative and efficient Management Consulting Partner to our clients in Africa.",
      color: "#2563eb",
    },
    
    {
      title: "Our Core Values",
      icon: Heart,
      content:
        "The building blocks of BJM Management Consultancy Company Ltd is a set of values. They guide us in our client engagement and delivery.",
      color: "#60a5fa",
    },
  ]

  return (
    <Box
      ref={ref}
      p="xl"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "10vh",
        width: "100%",
      }}
    >
      <Box
        style={{
          maxWidth: "1200px",
          width: "100%",
          margin: "0 auto",
          padding: "0 20px",
        }}
      >
        {/* Responsive title with animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Title
            order={1}
            align="center"
            mb="xl"
            style={{
              fontSize: isMobile ? "28px" : "36px",
            }}
          >
            Our Vision, Mission & Core Values
          </Title>
        </motion.div>

        {/* Responsive container for the sections */}
        <Box
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: "1rem",
            alignItems: "stretch",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {sections.map((section, index) => (
            <Section
              key={section.title}
              {...section}
              isExpanded={expanded === index}
              onClick={() => setExpanded(expanded === index ? null : index)}
              isMobile={isMobile}
            />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default BJMMissionValues
