"use client"

import { useState } from "react"
import { Card, Group, Text, UnstyledButton, Grid, Image } from "@mantine/core"
import {
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconExternalLink,
} from "@tabler/icons-react"
import { motion } from "framer-motion"
import styles from "./ProfileCards.module.css"
import BioModal from "./BioModal"

const designers = [
  {
    name: "Mr. Bakary Marong",
    title: "Chairman and CEO",
    bio: "Founder with over 20 years of experience in International Development, Public Sector, and Audit practice. Former Regional Director at Sightsavers with expertise in finance, strategic leadership, and program management across 18 countries in West and Central Africa.",
    fullBio:
      "Mr Bakary Marong is the founder of BJM Management Consultancy Company Ltd and also an International Consultant for the African Peer Review Mechanism (APRM) and representative for Organisation of Business professionals (OBPUK). He has a wealth of knowledge and extensive experience of more than 20 years working in International Development, Public Sector and Audit practice. Mr Marong led a distinguished career at Sightsavers (International NGO), successfully completed his tour of duty at Sightsavers after 19 years. He was an accomplished Regional Director, Regional Finance and Support Services Director West Africa and member of the Global Senior Management Team with a track record of understanding and experience in Finance, Programme management, strategic leadership, people management, inclusive development, change management, capacity building, organisational development, distance management, developing and managing partnerships & consortium across multi-country and substantial experience of developing and delivering high value institutional funding income. Mr Marong was instrumental in developing and strengthening Regional office & country office teams, partner organisations, strategic partnerships, new innovative programmes, business systems & processes, performance management, new policy and advocacy initiatives, health & education systems and extending Sightsavers work across 18 countries in West and Central Africa. Prior to Sightsavers, he was the Accountant and Company Secretary at Banjul Shipyard a subsidiary of The Gambia Ports Authority. In 1996, he was project Accountant for Women -in- Development (WID) Skills Development Component funded by African Development Bank. Looking retrospectively in 1995, he began his career as Audit Senior with Augustus Prom and Co. Chartered Accountants and Business Consultants. Mr Marong is a highly relational personality with a strategic focus on building rapport and proven track record of external representation at the highest level. Consequently, during his journey with NGOs he had developed and maintained excellent relationships that had return him positive feedback from employee engagements and project reviews. He held various recognition awards from Governments, Diplomatic missions, West Africa Health Organisation (WAHO) and the International Agency for the Prevention of Blindness (IAPB). Mr Marong qualified as FMAAT (UK 1995), MBA - Financial Management and Investment from the Cyprus Institute of Marketing, Cyprus Business School in 2005. Mr. Marong is a member of the Institute of Certified Management Accountants (ICMA) Australia and New Zealand 2021, Chartered Manager & Fellow Member of Chartered Management Institute (CMI) 2021. Mr Marong is also a Certified Global Business Analyst (CGBA®) is the premier global business analysis designation that recognises a unique group of corporate analysts who have reached the highest benchmark of quality and competence in strategic business analysis.",
    image: "https://bjmafrica.com/wp-content/uploads/2024/08/bmarong3.jpg",
    social: {
      facebook: "https://facebook.com/johndoe",
      twitter: "https://twitter.com/johndoe",
      linkedin: "https://linkedin.com/in/johndoe",
      instagram: "https://instagram.com/johndoe",
    },
  },
  {
    name: "Mrs. Jainaba Jallow Marong",
    title: "Managing Director",
    bio: "Co-founder with over 15 years of experience in Media and Communication, marketing, and real estate project management. Former CEO of Gambia-China Business Council and senior TV presenter at GRTS TV with expertise in building strategic relationships.",
    fullBio:
      "Mrs Jainaba Jallow Marong co-founder of BJM management consultancy Ltd has over 15 years of significant work experience in Media and Communication, marketing, customer relations and real estate project management. Mrs Marong was the CEO of Gambia – China Business Council in The Gambia. As part of her personality traits, she has strategic focus on building rapport, networking and external engagements. She is a dependable and highly committed person. Mrs. Marong was pioneer senior TV presenter and producer at GRTS TV (The Gambia State Broadcaster) as well as branding and marketing products. On a more professional role, she worked for Gambia Bird Airlines until 2014. She joined TAF Africa Global (First Private Real Estate Developer) in 2004 as Assistant Manager Sales and Marketing and rose to the position of Estate Manager.Mrs Marong holds certificate in TV production and Presentation, institutional Transformation Management Training, Diploma in Management studies, Post Graduate Diploma in Strategic Management and Innovation from Copenhagen Business School. Mrs Marong held various recognition awards from The Gambia Government",
    image: "https://bjmafrica.com/wp-content/uploads/2024/08/jMarong.jpg",
    social: {
      facebook: "https://facebook.com/janesmith",
      linkedin: "https://linkedin.com/in/janesmith",
      instagram: "https://instagram.com/janesmith",
    },
  },
  {
    name: "Mr. Hadim Ndow",
    title: "Director, Business & Organization Development",
    bio: "Joined BJM in 2018, bringing expertise in Accounting, Business, Management, and Finance. Previously Senior Accountant at Banjul Breweries Ltd with extensive experience in planning, implementation, and evaluation of processes and systems. Holds an MBA Global, CMI Level 7 Diploma in Strategic Management and Leadership, and multiple qualifications in accounting and business.",
    fullBio:
      "Mr Hadim Ndow joined BJM Management Consultancy in June 2018 as a way forward in restoring back his academic and professional expertise around Accounting, Business, Management and Finance. Previously, he worked as Accounts personnel at Banjul Shipyard a subsidiary of The Gambia Ports Authority and later rose to Senior Accountant at the Banjul Breweries Ltd, before relocating to UK in pursuit of his career advancement. During his tenure with Banjul Breweries Ltd, he had been consistent with the aims and objectives of the Finance and Administrative Department. He had always demonstrated high sense of maturity and intellectualism and shown high degree of professionalism. He worked as member of various groups during his career on local and international platforms. He has gained extensive experience in planning, implementation and evaluation of processes and systems and their effect on staff across all levels of management. Whilst living in the UK and advancing his career, Mr Ndow was a support worker employed by various firms within the health and security industry. He became self employed in 2015 to 2018 prior to joining BJM management consultancy where he was providing varied services to the NHS through contracts with employment agencies. Mr Ndow holds Diploma in Accounting, Health and Social Care, AAT, ACCA part qualified, HND (management), Professional Certificate in Management (Open University), BA Hons Business Studies (University of West London), Member and CMI Level 7 Diploma in Strategic Management and Leadership (Post Graduate), Master's Degree in Business Administration Global (University of Derby).",
    image: "https://bjmafrica.com/wp-content/uploads/2024/08/mmarong-768x1128.jpg",
    social: {
      facebook: "https://facebook.com/bobbrown",
      linkedin: "https://linkedin.com/in/bobbrown",
      instagram: "https://instagram.com/bobbrown",
    },
  },
  

  // Add more designers as needed
]

// Enhanced DesignerCard component with animations
const DesignerCard = ({ name, title, bio, fullBio, social, image, index }) => {
  const [modalOpen, setModalOpen] = useState(false)

  // Staggered animation for social icons
  const socialIconVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.1,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          delay: index * 0.15,
          ease: "easeOut",
        }}
        whileHover={{ y: -8, transition: { duration: 0.3 } }}
      >
        <Card shadow="md" p={0} w="100%" className={styles.card} radius="lg">
          <div className={styles.imageContainer}>
            <Image
              src={image || "/placeholder.svg"}
              alt={`Portrait of ${name}, ${title}`}
              className={styles.cardImage}
              fit="cover"
              loading="lazy"
            />
          </div>
          <div className={styles.cardInner} aria-hidden="true"></div>
          <div className={styles.content}>
            <Text className={styles.title}>
              {name}
              <br />
              <span>{title}</span>
            </Text>

            {/* Bio text */}
            <Text className={styles.bio}>{bio}</Text>

            <Group spacing="xs" className={styles.sci}>
              {social.facebook && (
                <motion.div
                  custom={0}
                  variants={socialIconVariants}
                  initial="hidden"
                  whileHover="visible"
                  className={styles.socialIconWrapper}
                >
                  <UnstyledButton
                    component="a"
                    href={social.facebook}
                    className={styles.socialButton}
                    aria-label={`Visit ${name}'s Facebook profile`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconBrandFacebook size={22} />
                  </UnstyledButton>
                </motion.div>
              )}
              {social.twitter && (
                <motion.div
                  custom={1}
                  variants={socialIconVariants}
                  initial="hidden"
                  whileHover="visible"
                  className={styles.socialIconWrapper}
                >
                  <UnstyledButton
                    component="a"
                    href={social.twitter}
                    className={styles.socialButton}
                    aria-label={`Visit ${name}'s Twitter profile`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconBrandTwitter size={22} />
                  </UnstyledButton>
                </motion.div>
              )}
              {social.linkedin && (
                <motion.div
                  custom={2}
                  variants={socialIconVariants}
                  initial="hidden"
                  whileHover="visible"
                  className={styles.socialIconWrapper}
                >
                  <UnstyledButton
                    component="a"
                    href={social.linkedin}
                    className={styles.socialButton}
                    aria-label={`Visit ${name}'s LinkedIn profile`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconBrandLinkedin size={22} />
                  </UnstyledButton>
                </motion.div>
              )}
              {social.instagram && (
                <motion.div
                  custom={3}
                  variants={socialIconVariants}
                  initial="hidden"
                  whileHover="visible"
                  className={styles.socialIconWrapper}
                >
                  <UnstyledButton
                    component="a"
                    href={social.instagram}
                    className={styles.socialButton}
                    aria-label={`Visit ${name}'s Instagram profile`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconBrandInstagram size={22} />
                  </UnstyledButton>
                </motion.div>
              )}
              <motion.div
                custom={4}
                variants={socialIconVariants}
                initial="hidden"
                whileHover="visible"
                className={styles.socialIconWrapper}
              >
                <UnstyledButton
                  className={styles.socialButton}
                  aria-label={`Read more about ${name}`}
                  onClick={() => setModalOpen(true)}
                >
                  <IconExternalLink size={22} />
                </UnstyledButton>
              </motion.div>
            </Group>
          </div>
        </Card>
      </motion.div>

      <BioModal isOpen={modalOpen} onClose={() => setModalOpen(false)} name={name} title={title} bio={fullBio || bio} />
    </>
  )
}

const DesignerGrid = () => {
  return (
    <section className={styles.container}>
      <Grid justify="center" gutter={{ base: 16, sm: 24, lg: 32 }}>
        {designers.map((designer, index) => (
          <Grid.Col span={{ base: 12, sm: 6, md: 4, lg: 3 }} key={index}>
            <DesignerCard
              name={designer.name}
              title={designer.title}
              bio={designer.bio}
              fullBio={designer.fullBio}
              image={designer.image}
              social={designer.social}
              index={index}
            />
          </Grid.Col>
        ))}
      </Grid>
    </section>
  )
}

export default DesignerGrid
