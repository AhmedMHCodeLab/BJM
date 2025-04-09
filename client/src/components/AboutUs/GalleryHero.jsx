"use client"

// GalleryHero.jsx
import { useState, useEffect, useRef } from "react"
import { Box, Text } from "@mantine/core"
import { motion, AnimatePresence } from "framer-motion"
import styles from "./GalleryHero.module.css"

const galleryData = [
  {
    id: 1,
    title: "Gambia ",
    subtitle: "Breakfast & Networking",
    location: "Gambia",
    image: "https://bjmafrica.com/wp-content/uploads/2023/09/BJM51-1024x683.jpg",
  },
  {
    id: 2,
    title: "Swiss Alps - Switzerland",
    subtitle: "Experience breathtaking views",
    location: "Gambia",
    image: "https://bjmafrica.com/wp-content/uploads/2023/09/BJM3.jpg",
  },
  {
    id: 3,
    title: "Bali - Indonesia",
    subtitle: "Paradise on Earth awaits",
    location: "Gambia",
    image:
      "https://scontent.fkul8-5.fna.fbcdn.net/v/t39.30808-6/305238122_572580524451636_4026373282440208838_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=2tnSSZHbCGsQ7kNvgFJfXAb&_nc_oc=AdhLy8cTfRG_CUF60f3Iu74BvH3wRKNyS8fgZJGjVkAV9RctJkm6ZBiLhuTQBoYQ37lv-Mkv6jzYIyTi34HxLy64&_nc_zt=23&_nc_ht=scontent.fkul8-5.fna&_nc_gid=AiGsPcBKS03WjWQk6cOVn21&oh=00_AYBwZoi9-crX0-lY5rKMxuvdRDDBK129DAOndgSd-IpZiQ&oe=67B6A559",
  },
  {
    id: 4,
    title: "Norwegian Fjords",
    subtitle: "Nature at its finest",
    location: "Gambia",
    image: "https://bjmafrica.com/wp-content/uploads/2023/09/BJM53.jpg",
  },
  {
    id: 5,
    title: "Great Barrier Reef",
    subtitle: "Underwater wonders",
    location: "Gambia",
    image: "https://bjmafrica.com/wp-content/uploads/2023/09/BJM6-2-1024x683.jpg",
  },
]

export default function GalleryHero() {
  const [activeIndex, setActiveIndex] = useState(2)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)
  const [direction, setDirection] = useState(0) // -1 for left, 1 for right, 0 for initial
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)
  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches)
    mediaQuery.addEventListener("change", handleChange)

    return () => mediaQuery.removeEventListener("change", handleChange)
  }, [])

  // Auto scroll effect
  useEffect(() => {
    let intervalId

    if (isAutoScrolling && !prefersReducedMotion) {
      intervalId = setInterval(() => {
        handleNext()
      }, 5000) // Change slide every 5 seconds
    }

    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [isAutoScrolling, activeIndex, prefersReducedMotion])

  // Pause auto-scroll on user interaction
  const handleUserInteraction = () => {
    setIsAutoScrolling(false)
    setTimeout(() => setIsAutoScrolling(true), 10000) // Resume after 10 seconds of inactivity
  }

  // Update existing handlers to include user interaction
  const handlePrevious = () => {
    if (isTransitioning) return
    handleUserInteraction()
    setDirection(-1)
    setIsTransitioning(true)
    setActiveIndex((current) => (current === 0 ? galleryData.length - 1 : current - 1))
    setTimeout(() => setIsTransitioning(false), 500)
  }

  const handleNext = () => {
    if (isTransitioning) return
    setDirection(1)
    setIsTransitioning(true)
    setActiveIndex((current) => (current === galleryData.length - 1 ? 0 : current + 1))
    setTimeout(() => setIsTransitioning(false), 500)
  }

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event) => {
      if (isTransitioning) return

      switch (event.key) {
        case "ArrowLeft":
          handlePrevious()
          break
        case "ArrowRight":
          handleNext()
          handleUserInteraction()
          break
        default:
          break
      }
    }

    window.addEventListener("keydown", handleKeyPress)
    return () => window.removeEventListener("keydown", handleKeyPress)
  }, [isTransitioning])

  // Handle touch events for swipe
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX
  }

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 100) {
      // Swipe left
      handleNext()
    } else if (touchEndX.current - touchStartX.current > 100) {
      // Swipe right
      handlePrevious()
    }
  }

  const calculatePosition = (index) => {
    const position = index - activeIndex
    const total = galleryData.length

    // Create loop effect by adjusting position
    if (position > total / 2) return position - total
    if (position < -total / 2) return position + total
    return position
  }

  const getResponsiveSpacing = () => {
    if (typeof window === "undefined") return 80
    if (window.innerWidth <= 480) return 90
    if (window.innerWidth <= 768) return 85
    return 80
  }

  // Animation variants for framer-motion
  const backgroundVariants = {
    enter: (direction) => ({
      scale: direction ? 1.2 : 1,
      opacity: 0,
    }),
    center: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.4, 0, 0.2, 1],
      },
    },
    exit: (direction) => ({
      scale: direction ? 0.9 : 1.1,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1],
      },
    }),
  }

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
        delay: 0.3,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeIn",
      },
    },
  }

  return (
    <Box
      className={styles.heroContainer}
      onMouseEnter={() => setIsAutoScrolling(false)}
      onMouseLeave={() => setIsAutoScrolling(true)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      role="region"
      aria-label="Gallery showcase"
    >
      {/* Layer 1: Dynamic Background */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={activeIndex}
          className={styles.background}
          custom={direction}
          variants={prefersReducedMotion ? {} : backgroundVariants}
          initial="enter"
          animate="center"
          exit="exit"
        >
          <motion.img
            src={galleryData[activeIndex].image}
            alt={`Background: ${galleryData[activeIndex].title}`}
            className={styles.backgroundImage}
            loading="eager"
          />
          <div className={styles.overlay} />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Indicators */}
      <div className={styles.indicators}>
        {galleryData.map((_, index) => (
          <button
            key={index}
            className={`${styles.indicator} ${index === activeIndex ? styles.activeIndicator : ""}`}
            onClick={() => {
              setDirection(index > activeIndex ? 1 : -1)
              setActiveIndex(index)
              handleUserInteraction()
            }}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === activeIndex ? "true" : "false"}
          />
        ))}
      </div>

      {/* Carousel Layer */}
      <div className={styles.carouselContainer}>
        <div className={styles.carousel}>
          {galleryData.map((item, index) => {
            const position = calculatePosition(index)
            const translateX = position * getResponsiveSpacing() // Dynamic spacing based on screen size

            return (
              <motion.div
                key={item.id}
                className={`${styles.card} ${index === activeIndex ? styles.activeCard : ""}`}
                style={{
                  zIndex: index === activeIndex ? 5 : 1,
                }}
                animate={{
                  x: `${translateX}%`,
                  scale: index === activeIndex ? 1 : 0.7,
                  opacity: index === activeIndex ? 1 : 0.65,
                  filter: index === activeIndex ? "brightness(1.05)" : "brightness(0.8)",
                }}
                transition={{
                  duration: prefersReducedMotion ? 0 : 0.5,
                  ease: [0.4, 0, 0.2, 1],
                }}
                whileHover={
                  index !== activeIndex && !prefersReducedMotion
                    ? {
                        scale: 0.8,
                        opacity: 0.8,
                        transition: { duration: 0.3 },
                      }
                    : {}
                }
                onClick={() => {
                  if (!isTransitioning && index !== activeIndex) {
                    setDirection(index > activeIndex ? 1 : -1)
                    setActiveIndex(index)
                    handleUserInteraction()
                  }
                }}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && index !== activeIndex) {
                    setDirection(index > activeIndex ? 1 : -1)
                    setActiveIndex(index)
                    handleUserInteraction()
                  }
                }}
                role="button"
                aria-label={`View ${item.title}`}
                aria-current={index === activeIndex ? "true" : "false"}
              >
                <img src={item.image || "/placeholder.svg"} alt={item.title} />
                <motion.div
                  className={styles.locationTag}
                  animate={{
                    y: index === activeIndex ? 0 : 10,
                    opacity: index === activeIndex ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  {item.location}
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>

      {/* Layer 3: Hero Text */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`text-${activeIndex}`}
          className={styles.heroText}
          variants={prefersReducedMotion ? {} : textVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <Text component="h1" className={styles.title}>
            {galleryData[activeIndex].title}
          </Text>
          <Text className={styles.subtitle}>{galleryData[activeIndex].subtitle}</Text>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <motion.button
        className={`${styles.navArrow} ${styles.prevArrow}`}
        onClick={handlePrevious}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Previous slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </motion.button>

      <motion.button
        className={`${styles.navArrow} ${styles.nextArrow}`}
        onClick={handleNext}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Next slide"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      </motion.button>
    </Box>
  )
}
