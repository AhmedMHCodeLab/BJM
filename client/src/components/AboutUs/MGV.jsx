"use client"

import { Box, Container, Grid, Group, Space, Text, Title } from "@mantine/core"
import { useMediaQuery } from "@mantine/hooks"
import CountUp from "react-countup"
import { useInView } from "react-intersection-observer"
import { motion } from "framer-motion"

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const fadeInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const fadeInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
}

const StatBox = ({ value, label, index }) => {
  const isSmallMobile = useMediaQuery("(max-width: 375px)")
  const isMobile = useMediaQuery("(max-width: 768px)")
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  })

  // Parse the numeric value from the string
  const numericValue = Number.parseFloat(value.replace(/[^0-9.]/g, ""))
  const suffix = value.replace(numericValue, "")

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeInUp}
      custom={index}
      style={{ textAlign: "center" }}
    >
      <Text
        size={isSmallMobile ? "1.2rem" : isMobile ? "1.5rem" : "2rem"}
        fw={600}
        c="#6B6BFF"
        mb={4}
        style={{
          display: "inline-block",
          background: inView ? "linear-gradient(45deg, #6B6BFF, #8A8AFF)" : "none",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: inView ? "transparent" : "inherit",
          transition: "all 0.5s ease",
        }}
      >
        {inView ? (
          <CountUp
            end={numericValue}
            duration={2.5}
            separator=","
            decimals={value.includes(".") ? 1 : 0}
            suffix={suffix}
          />
        ) : (
          "0"
        )}
      </Text>
      <Text size={isSmallMobile ? "xs" : "sm"} c="dimmed">
        {label}
      </Text>
    </motion.div>
  )
}

const MGV = () => {
  const isSmallMobile = useMediaQuery("(max-width: 375px)")
  const isMobile = useMediaQuery("(max-width: 768px)")
  const { ref: sectionRef, inView: sectionInView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <Container size="lg" py={isMobile ? 30 : 50} ref={sectionRef}>
      <motion.div initial="hidden" animate={sectionInView ? "visible" : "hidden"} variants={fadeInUp}>
        <Text c="#6B6BFF" tt="uppercase" fw={500} mb={15} size="sm">
          WHO WE ARE
        </Text>
      </motion.div>

      <Grid>
        <Grid.Col>
          <Group
            position={isMobile ? "start" : "apart"}
            align="flex-start"
            spacing={isMobile ? "xl" : "md"}
            sx={{ flexDirection: isMobile ? "column" : "row" }}
          >
            <motion.div
              initial="hidden"
              animate={sectionInView ? "visible" : "hidden"}
              variants={fadeInLeft}
              style={{ maxWidth: isMobile ? "100%" : 550 }}
            >
              <Box maw={isMobile ? "100%" : 550}>
                <Title
                  order={1}
                  sx={{
                    fontSize: isMobile ? "2rem" : "2.5rem",
                    fontWeight: 600,
                    lineHeight: 1.2,
                    marginBottom: "1rem",
                  }}
                >
                  Making Life Smoother and Easier Every Day
                </Title>
              </Box>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={sectionInView ? "visible" : "hidden"}
              variants={fadeInRight}
              style={{ maxWidth: isMobile ? "100%" : 550 }}
            >
              <Box maw={isMobile ? "100%" : 550}>
                <Text c="dimmed" size="md" lh={1.6}>
                  We are dedicated to making life smoother and easier every day with practical and user-friendly
                  solutions. Our focus is on simplifying your daily routines and enhancing your overall convenience.
                  Experience seamless solutions designed to fit effortlessly into your lifestyle.
                </Text>
              </Box>
            </motion.div>
          </Group>
        </Grid.Col>
      </Grid>

      <Space h={isMobile ? 20 : 40} />
      <Grid>
        <Grid.Col span={isMobile ? 12 : 6}>
          <motion.div
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={fadeInLeft}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <Box
              sx={{
                height: isMobile ? 300 : 400,
                borderRadius: 8,
                overflow: "hidden",
                position: "relative",
                background: "#f8f9fa",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  boxShadow: "0 15px 40px rgba(0, 0, 0, 0.15)",
                },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "white",
                  padding: "2rem",
                  borderRadius: "8px",
                  transform: "translateY(0)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <Title order={3} mb="xs">
                  Our Vision
                </Title>
                <Text c="dimmed" size="md" lh={1.6}>
                  To be the leading innovator, transforming industries with cutting-edge solutions that improve lives.
                </Text>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "60%",
                  background: "url(/api/placeholder/800/600) center/cover",
                  transition: "transform 0.5s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
            </Box>
          </motion.div>
        </Grid.Col>

        <Grid.Col span={isMobile ? 12 : 6}>
          <motion.div
            initial="hidden"
            animate={sectionInView ? "visible" : "hidden"}
            variants={fadeInRight}
            whileHover={{ y: -10, transition: { duration: 0.3 } }}
          >
            <Box
              sx={{
                height: isMobile ? 300 : 400,
                borderRadius: 8,
                overflow: "hidden",
                position: "relative",
                background: "#f8f9fa",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                  boxShadow: "0 15px 40px rgba(0, 0, 0, 0.15)",
                },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  background: "white",
                  padding: "2rem",
                  borderRadius: "8px",
                  transform: "translateY(0)",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                  },
                }}
              >
                <Title order={3} mb="xs">
                  Our Goal
                </Title>
                <Text c="dimmed" size="md" lh={1.6}>
                  To consistently deliver exceptional value and achieve excellence in every project we undertake.
                </Text>
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "60%",
                  background: "url(/api/placeholder/800/600) center/cover",
                  transition: "transform 0.5s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              />
            </Box>
          </motion.div>
        </Grid.Col>
      </Grid>

      <Space h={isMobile ? 20 : 40} />
      <Grid mt={isMobile ? 10 : 20}>
        <Grid.Col span={isMobile ? 6 : 3}>
          <StatBox value="92%" label="Happy Clients" index={0} />
        </Grid.Col>

        <Grid.Col span={isMobile ? 6 : 3}>
          <StatBox value="24" label="Year of Experience" index={1} />
        </Grid.Col>

        <Grid.Col span={isMobile ? 6 : 3}>
          <StatBox value="14.2k+" label="Completed Project" index={2} />
        </Grid.Col>

        <Grid.Col span={isMobile ? 6 : 3}>
          <StatBox value="12+" label="Awards Won" index={3} />
        </Grid.Col>
      </Grid>
    </Container>
  )
}

export default MGV
