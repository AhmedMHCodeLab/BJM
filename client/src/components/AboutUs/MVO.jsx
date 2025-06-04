"use client"

import { useState, useCallback, memo, useEffect } from "react"

// Inline CSS styles to ensure component is fully self-contained
const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(to bottom right, #f8fafc, #eff6ff, #eef2ff)",
    fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
  },
  header: {
    textAlign: "center",
    padding: "2rem 1rem",
  },
  badge: {
    display: "inline-flex",
    alignItems: "center",
    borderRadius: "9999px",
    fontSize: "0.75rem",
    fontWeight: "600",
    padding: "0.25rem 0.75rem",
    marginBottom: "1.5rem",
    color: "#2563eb",
    border: "1px solid #bfdbfe",
    background: "white",
  },
  title: {
    fontSize: "2.25rem",
    fontWeight: "700",
    color: "#111827",
    marginBottom: "1rem",
    lineHeight: "1.2",
  },
  cardsContainer: {
    maxWidth: "64rem",
    margin: "1.5rem auto",
    padding: "0 1rem",
    marginBottom: "5rem",
  },
  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "1rem",
    marginBottom: "2rem",
  },
  interactiveCard: {
    cursor: "pointer",
    borderRadius: "0.5rem",
    overflow: "hidden",
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
    transition: "all 0.3s ease",
  },
  visionCard: {
    background: "linear-gradient(to bottom right, #2563eb, #1d4ed8)",
  },
  valuesCard: {
    background: "linear-gradient(to bottom right, #4f46e5, #7e22ce)",
  },
  cardContent: {
    padding: "2rem",
    textAlign: "center",
    position: "relative",
    color: "white",
  },
  iconContainer: {
    marginBottom: "1rem",
  },
  cardTitle: {
    fontSize: "1.25rem",
    fontWeight: "600",
    letterSpacing: "-0.025em",
  },
  progressBar: {
    position: "absolute",
    bottom: "0",
    left: "0",
    width: "100%",
    height: "4px",
    background: "rgba(255, 255, 255, 0.2)",
  },
  progressIndicator: {
    height: "100%",
    background: "white",
    transition: "width 0.3s ease",
  },
  expandedContent: {
    marginBottom: "2rem",
    overflow: "hidden",
    transition: "all 0.5s ease",
  },
  expandedCard: {
    background: "rgba(255, 255, 255, 0.8)",
    backdropFilter: "blur(8px)",
    borderRadius: "0.5rem",
    border: "1px solid #dbeafe",
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  },
  expandedCardContent: {
    padding: "2rem",
  },
  expandedHeader: {
    display: "flex",
    alignItems: "center",
    marginBottom: "1.5rem",
  },
  expandedTitle: {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#111827",
    marginLeft: "0.75rem",
  },
  expandedText: {
    fontSize: "1.125rem",
    color: "#374151",
    lineHeight: "1.7",
  },
  coreValuesGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "1rem",
  },
  valueCard: {
    background: "rgba(255, 255, 255, 0.95)",
    backdropFilter: "blur(8px)",
    borderRadius: "0.5rem",
    border: "1px solid #dbeafe",
    boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
    transition: "all 0.3s ease",
  },
  valueCardContent: {
    padding: "1.5rem",
  },
  valueHeader: {
    display: "flex",
    alignItems: "flex-start",
    gap: "1rem",
  },
  valueIconContainer: {
    width: "3rem",
    height: "3rem",
    background: "linear-gradient(to bottom right, #3b82f6, #2563eb)",
    borderRadius: "0.75rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: "0",
    transition: "transform 0.3s ease",
  },
  valueTitle: {
    fontWeight: "600",
    color: "#111827",
    marginBottom: "0.5rem",
    fontSize: "0.875rem",
    letterSpacing: "0.025em",
  },
  valueDescription: {
    fontSize: "0.875rem",
    color: "#4b5563",
    lineHeight: "1.5",
  },
  missionSection: {
    background: "linear-gradient(to right, #111827, #1e40af, #1e3a8a)",
    padding: "5rem 1rem",
    position: "relative",
    overflow: "hidden",
  },
  missionPattern: {
    position: "absolute",
    inset: "0",
    opacity: "0.2",
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
    backgroundRepeat: "repeat",
  },
  missionContent: {
    maxWidth: "64rem",
    margin: "0 auto",
    textAlign: "center",
    position: "relative",
    zIndex: "10",
  },
  missionBadge: {
    display: "inline-flex",
    alignItems: "center",
    borderRadius: "9999px",
    fontSize: "0.75rem",
    fontWeight: "600",
    padding: "0.25rem 0.75rem",
    marginBottom: "1.5rem",
    color: "#93c5fd",
    border: "1px solid rgba(147, 197, 253, 0.3)",
    background: "rgba(255, 255, 255, 0.1)",
  },
  missionTitle: {
    fontSize: "2.25rem",
    fontWeight: "700",
    color: "white",
    marginBottom: "2rem",
    lineHeight: "1.2",
  },
  missionHighlight: {
    color: "#93c5fd",
  },
  missionDivider: {
    width: "5rem",
    height: "0.25rem",
    background: "linear-gradient(to right, #60a5fa, #818cf8)",
    margin: "0 auto 2rem",
  },
  missionText: {
    fontSize: "1.125rem",
    color: "#bfdbfe",
    lineHeight: "1.7",
    maxWidth: "48rem",
    margin: "0 auto 3rem",
  },
  statsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "1rem",
  },
  statCard: {
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(8px)",
    borderRadius: "0.5rem",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    transition: "all 0.3s ease",
  },
  statCardContent: {
    padding: "1.5rem",
    textAlign: "center",
  },
  statNumber: {
    fontSize: "1.875rem",
    fontWeight: "700",
    color: "white",
    marginBottom: "0.5rem",
    transition: "transform 0.3s ease",
  },
  statLabel: {
    fontSize: "0.875rem",
    fontWeight: "500",
    color: "#93c5fd",
    marginBottom: "0.25rem",
  },
  statSublabel: {
    fontSize: "0.75rem",
    color: "rgba(147, 197, 253, 0.7)",
  },
  ctaSection: {
    padding: "4rem 1rem",
    textAlign: "center",
  },
  ctaContent: {
    maxWidth: "36rem",
    margin: "0 auto",
  },
  ctaTitle: {
    fontSize: "1.5rem",
    fontWeight: "600",
    color: "#111827",
    marginBottom: "1rem",
  },
  ctaText: {
    color: "#4b5563",
    marginBottom: "2rem",
    padding: "0 1rem",
  },
  ctaButton: {
    display: "inline-flex",
    alignItems: "center",
    gap: "0.5rem",
    background: "linear-gradient(to right, #2563eb, #4f46e5)",
    color: "white",
    fontWeight: "600",
    padding: "0.75rem 2rem",
    borderRadius: "9999px",
    boxShadow: "0 10px 15px -3px rgba(37, 99, 235, 0.3), 0 4px 6px -2px rgba(37, 99, 235, 0.2)",
    transition: "all 0.3s ease",
    border: "none",
    cursor: "pointer",
  },
  // Media queries will be handled in JavaScript
}

// Responsive style adjustments
const getResponsiveStyles = (isMobile, isTablet) => {
  return {
    cardsGrid: {
      ...styles.cardsGrid,
      gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
    },
    title: {
      ...styles.title,
      fontSize: isMobile ? "1.875rem" : isTablet ? "2rem" : "2.25rem",
    },
    coreValuesGrid: {
      ...styles.coreValuesGrid,
      gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
    },
    statsGrid: {
      ...styles.statsGrid,
      gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : isTablet ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
    },
    missionTitle: {
      ...styles.missionTitle,
      fontSize: isMobile ? "1.5rem" : isTablet ? "1.875rem" : "2.25rem",
    },
  }
}

// Simple icons as SVG components
const Eye = ({ style = {} }) => (
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
    style={style}
  >
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
)

const Heart = ({ style = {} }) => (
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
    style={style}
  >
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z" />
  </svg>
)

const ArrowRight = ({ style = {} }) => (
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
    style={style}
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
)

const CheckCircle = ({ style = {} }) => (
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
    style={style}
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <path d="m9 11 3 3L22 4" />
  </svg>
)

const Shield = ({ style = {} }) => (
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
    style={style}
  >
    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1Z" />
  </svg>
)

const Users = ({ style = {} }) => (
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
    style={style}
  >
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
)

const Target = ({ style = {} }) => (
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
    style={style}
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
)

const Zap = ({ style = {} }) => (
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
    style={style}
  >
    <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14Z" />
  </svg>
)

const Lightbulb = ({ style = {} }) => (
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
    style={style}
  >
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 12 2a6 6 0 0 0-6 6c0 1.3.5 2.6 1.5 3.5.8.8 1.3 1.5 1.5 2.5" />
    <path d="M9 18h6" />
    <path d="M10 22h4" />
  </svg>
)

// Custom hook for media queries
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    if (typeof window !== "undefined") {
      const media = window.matchMedia(query)
      setMatches(media.matches)

      const listener = (event) => setMatches(event.matches)
      media.addEventListener("change", listener)
      return () => media.removeEventListener("change", listener)
    }
  }, [query])

  return matches
}

// Core values data
const coreValues = [
  {
    title: "COMMITMENT",
    description: "We are dedicated to serving our clients and delivering quality outcomes",
    icon: CheckCircle,
  },
  {
    title: "INTEGRITY",
    description: "We stand by our word and do what we say",
    icon: Shield,
  },
  {
    title: "COLLABORATION",
    description: "We seek diversity and synergy in perspectives and partners",
    icon: Users,
  },
  {
    title: "IMPACT & SUSTAINABILITY",
    description:
      "We have a social commitment to serving the community and passionate about solving complex sustainability challenges",
    icon: Heart,
  },
  {
    title: "PROFESSIONALISM",
    description: "We aim to deliver best management practices",
    icon: Target,
  },
  {
    title: "PASSION",
    description: "We have a passion for our clients, the people and what we do",
    icon: Zap,
  },
  {
    title: "INNOVATION & TRANSPARENCY",
    description:
      "We are innovative in our methods and approach, endeavour to be opened and transparent such that our actions will reflect our values",
    icon: Lightbulb,
  },
]

// Stats data
const stats = [
  { number: "15+", label: "Years of Experience", sublabel: "Proven track record" },
  { number: "100%", label: "Client Satisfaction", sublabel: "Quality commitment" },
  { number: "All", label: "Sectors Served", sublabel: "Diverse expertise" },
  { number: "100+", label: "Successful Projects", sublabel: "Delivered excellence" },
]

// Interactive Card Component
const InteractiveCard = memo(({ title, icon: Icon, onClick, isActive, cardStyle, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)
    return () => clearTimeout(timer)
  }, [delay])

  const cardStyles = {
    ...styles.interactiveCard,
    ...cardStyle,
    transform: isHovered
      ? "translateY(-8px) scale(1.02)"
      : isVisible
        ? "translateY(0) scale(1)"
        : "translateY(20px) scale(0.95)",
    opacity: isVisible ? 1 : 0,
    transition: `all 0.5s ease ${delay}ms`,
  }

  return (
    <div
      style={cardStyles}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={styles.cardContent}>
        <div style={styles.iconContainer}>
          <Icon style={{ width: "48px", height: "48px", margin: "0 auto" }} />
        </div>
        <h3 style={styles.cardTitle}>{title}</h3>
        <div style={styles.progressBar}>
          <div style={{ ...styles.progressIndicator, width: isActive ? "100%" : "0%" }} />
        </div>
      </div>
    </div>
  )
})

InteractiveCard.displayName = "InteractiveCard"

// Core Value Card Component
const CoreValueCard = memo(({ value, index }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const Icon = value.icon

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, index * 100)
    return () => clearTimeout(timer)
  }, [index])

  const cardStyles = {
    ...styles.valueCard,
    transform: isHovered ? "translateY(-4px) scale(1.02)" : isVisible ? "translateY(0)" : "translateY(20px)",
    opacity: isVisible ? 1 : 0,
    transition: `all 0.5s ease ${index * 100}ms`,
  }

  const iconContainerStyles = {
    ...styles.valueIconContainer,
    transform: isHovered ? "scale(1.1)" : "scale(1)",
  }

  return (
    <div style={cardStyles} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div style={styles.valueCardContent}>
        <div style={styles.valueHeader}>
          <div style={iconContainerStyles}>
            <Icon style={{ width: "24px", height: "24px", color: "white" }} />
          </div>
          <div>
            <h4 style={styles.valueTitle}>{value.title}</h4>
            <p style={styles.valueDescription}>{value.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
})

CoreValueCard.displayName = "CoreValueCard"

// Stat Card Component
const StatCard = memo(({ stat, index, delay }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, delay)
    return () => clearTimeout(timer)
  }, [delay])

  const cardStyles = {
    ...styles.statCard,
    transform: isHovered ? "translateY(-4px) scale(1.05)" : isVisible ? "translateY(0)" : "translateY(20px)",
    opacity: isVisible ? 1 : 0,
    transition: `all 0.5s ease ${delay}ms`,
  }

  const numberStyles = {
    ...styles.statNumber,
    transform: isHovered ? "scale(1.1)" : "scale(1)",
  }

  return (
    <div style={cardStyles} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div style={styles.statCardContent}>
        <div style={numberStyles}>{stat.number}</div>
        <div style={styles.statLabel}>{stat.label}</div>
        <div style={styles.statSublabel}>{stat.sublabel}</div>
      </div>
    </div>
  )
})

StatCard.displayName = "StatCard"

// Core Values Section Component
const CoreValuesSection = memo(({ responsiveStyles }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const sectionStyles = {
    ...styles.expandedContent,
    maxHeight: isVisible ? "2000px" : "0",
    opacity: isVisible ? 1 : 0,
  }

  return (
    <div style={sectionStyles}>
      <div style={responsiveStyles.coreValuesGrid}>
        {coreValues.map((value, index) => (
          <CoreValueCard key={value.title} value={value} index={index} />
        ))}
      </div>
    </div>
  )
})

CoreValuesSection.displayName = "CoreValuesSection"

// Mission Stats Component
const MissionStats = memo(({ responsiveStyles }) => {
  return (
    <div style={responsiveStyles.statsGrid}>
      {stats.map((stat, index) => (
        <StatCard key={stat.label} stat={stat} index={index} delay={800 + index * 100} />
      ))}
    </div>
  )
})

MissionStats.displayName = "MissionStats"

// Main Component
function MVO() {
  const [activeSection, setActiveSection] = useState(null)
  const isMobile = useMediaQuery("(max-width: 768px)")
  const isTablet = useMediaQuery("(max-width: 1024px)")

  // Get responsive styles
  const responsiveStyles = getResponsiveStyles(isMobile, isTablet)

  // Memoized callbacks
  const handleVisionClick = useCallback(() => {
    setActiveSection(activeSection === "vision" ? null : "vision")
  }, [activeSection])

  const handleValuesClick = useCallback(() => {
    setActiveSection(activeSection === "values" ? null : "values")
  }, [activeSection])

  const handleGetStartedClick = useCallback(() => {
    // Add your get started logic here
    console.log("Get Started clicked")
  }, [])

  return (
    <div style={styles.container}>
      

      {/* Prominent Mission Section */}
      <div style={styles.missionSection}>
        <div style={styles.missionPattern} aria-hidden="true" />

        <div style={styles.missionContent}>
          <div>
            <div style={styles.missionBadge}>WHO WE ARE</div>
            <h2 style={responsiveStyles.missionTitle}>
              Making Business Excellence
              <br style={{ display: isMobile ? "none" : "block" }} />
              <span style={styles.missionHighlight}>{isMobile ? " " : ""}Accessible Every Day</span>
            </h2>
            <div style={styles.missionDivider} />
            <p style={styles.missionText}>
              Our mission is to make available to Private Sector, not-for profit and Public Sector innovative solutions,
              value added services and expertise, enabling them to achieve their long-term financial, economic and
              sustainability vision.
            </p>
          </div>

          {/* Mission Stats */}
          <MissionStats responsiveStyles={responsiveStyles} />
        </div>
      </div>

      {/* Interactive Vision & Core Values Cards */}
      <div style={styles.cardsContainer}>
        <div style={responsiveStyles.cardsGrid}>
          <InteractiveCard
            title="Our Vision"
            icon={Eye}
            cardStyle={styles.visionCard}
            isActive={activeSection === "vision"}
            onClick={handleVisionClick}
            delay={200}
          />
          <InteractiveCard
            title="Our Core Values"
            icon={Heart}
            cardStyle={styles.valuesCard}
            isActive={activeSection === "values"}
            onClick={handleValuesClick}
            delay={400}
          />
        </div>

        {/* Vision Content */}
        {activeSection === "vision" && (
          <div style={styles.expandedContent}>
            <div style={styles.expandedCard}>
              <div style={styles.expandedCardContent}>
                <div style={styles.expandedHeader}>
                  <Eye style={{ width: "24px", height: "24px", color: "#2563eb" }} />
                  <h3 style={styles.expandedTitle}>Our Vision</h3>
                </div>
                <p style={styles.expandedText}>
                  To be recognized as a valued, an impactful, innovative and efficient Management Consulting Partner to
                  our clients in Africa.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Core Values Grid */}
        {activeSection === "values" && <CoreValuesSection responsiveStyles={responsiveStyles} />}
      </div>

    </div>
  )
}

export default memo(MVO)
