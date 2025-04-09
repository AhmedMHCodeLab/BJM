"use client"

import { useEffect } from "react"
import ProfileCards from "../components/AboutUs/ProfileCards"
import { SectionTitle } from "../components"
import MGV from "../components/AboutUs/MGV"
import BJMMissionValues from "../components/AboutUs/MVO"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

// Fade-in animation for sections
const FadeInSection = ({ children, delay = 0 }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.8, delay: delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

const AboutUs = () => {
  // Add smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth"
    return () => {
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      style={{ marginBlock: "3.125rem" }}
    >
      <FadeInSection>
        <SectionTitle center title="Our Team" />
      </FadeInSection>

      <FadeInSection delay={0.2}>
        <ProfileCards />
      </FadeInSection>

      <FadeInSection delay={0.3}>
        <BJMMissionValues />
      </FadeInSection>

      <FadeInSection delay={0.4}>
        <MGV />
      </FadeInSection>

      
    </motion.div>
    
  )
  
}

export default AboutUs
