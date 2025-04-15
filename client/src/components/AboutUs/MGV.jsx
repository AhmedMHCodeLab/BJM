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

  // Safe parsing with error handling
  let numericValue = 0;
  let suffix = "";
  
  if (value && typeof value === 'string') {
    const numericPart = value.replace(/[^0-9.]/g, "");
    numericValue = numericPart ? Number.parseFloat(numericPart) : 0;
    suffix = isNaN(numericValue) ? value : value.replace(numericPart, "");
  }

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
        mb={4}
        style={{
          display: "inline-block",
          background: inView ? "linear-gradient(45deg, #6B6BFF, #8A8AFF)" : "none",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          color: "transparent",
          WebkitTextFillColor: "transparent",
          MozBackgroundClip: "text",
          MozTextFillColor: "transparent",
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
    <Container 
      size="lg" 
      py={isMobile ? 30 : 50} 
      ref={sectionRef}
      sx={{ 
        textAlign: "center",
        margin: "0 auto"
      }}
    >
      <motion.div 
        initial="hidden" 
        animate={sectionInView ? "visible" : "hidden"} 
        variants={fadeInUp}
        style={{ textAlign: "center" }}
      >
        <Text c="#6B6BFF" tt="uppercase" fw={500} mb={15} size="sm" ta="center">
          WHO WE ARE
        </Text>
      </motion.div>

      <Grid justify="center">
        <Grid.Col>
          <Group
            position="center"
            align="center"
            spacing={isMobile ? "xl" : "md"}
            sx={{ flexDirection: isMobile ? "column" : "column" }}
          >
            <motion.div
              initial="hidden"
              animate={sectionInView ? "visible" : "hidden"}
              variants={fadeInLeft}
              style={{ 
                maxWidth: isMobile ? "100%" : 550,
                margin: "0 auto"
              }}
            >
              <Box maw={isMobile ? "100%" : 550} mx="auto">
                <Title
                  order={1}
                  sx={{
                    fontSize: isMobile ? "2rem" : "2.5rem",
                    fontWeight: 600,
                    lineHeight: 1.2,
                    marginBottom: "1rem",
                    
                    
                  }}
                >
                  Making Life Smoother & Easier Every Day
                </Title>
              </Box>
            </motion.div>
            <motion.div
              initial="hidden"
              animate={sectionInView ? "visible" : "hidden"}
              variants={fadeInRight}
              style={{ 
                maxWidth: isMobile ? "100%" : 550,
                margin: "0 auto"
              }}
            >
              <Box maw={isMobile ? "100%" : 550} mx="auto">
                <Text c="dimmed" size="md" lh={1.6} ta="center">
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

      <Grid mt={isMobile ? 10 : 20} justify="center">
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
