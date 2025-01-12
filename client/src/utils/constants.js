import {
  IconAdjustmentsCog,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandMeta,
  IconBrandX,
  IconChessBishop,
  IconFileSmile,
} from '@tabler/icons-react'

export const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: 'about-us' },
  { name: 'Gallery', path: 'gallery' },
  { name: 'Program', path: 'program' },
  { name: 'Services', path: 'services' },
]

export const services = [
  {
    index: 1,
    name: 'Leadership & Management Development',
    description:
      "Transform your team's potential through strategic leadership training and organizational development that inspires exceptional performance.",
  },
  {
    index: 2,
    name: 'Financial Services',
    description:
      'Navigate financial complexities with expert accounting, management, and technology solutions that drive smart business decisions.',
  },
  {
    index: 3,
    name: 'Business Development and Advisory',
    description:
      'Accelerate your business growth with strategic planning, targeted marketing insights, and expert proposal development.',
  },
  {
    index: 4,
    name: 'Training, Learning, and Capacity Building',
    description:
      'Empower your team with dynamic learning experiences that turn potential into measurable performance and innovation.',
  },
  {
    index: 5,
    name: 'Policy and Governance Support',
    description:
      'Develop robust organizational policies and governance structures that align with your strategic vision and operational excellence.',
  },
  {
    index: 6,
    name: 'Research, Feasibility Studies, and M&E',
    description:
      'Transform complex data into actionable insights that guide strategic decision-making and minimize business risks.',
  },
]

export const socialLinks = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/bjmafrica',
    icon: IconBrandMeta,
  },
  { name: 'X', url: 'https://x.com/ManagementBjm', icon: IconBrandX },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/company/bjm-management-consultancy-co-ltd/',
    icon: IconBrandLinkedin,
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/bjmmanagementconsultancy/',
    icon: IconBrandInstagram,
  },
]

export const solutions = [
  {
    name: 'Strategic Business Development',
    description:
      'Transform your business growth through expert-driven strategies. We help you develop robust business plans to increase revenue, strengthen market position, and expand your product portfolio and distribution networks.',
    icon: IconChessBishop,
  },
  {
    name: 'Operational Excellence',
    description:
      'Optimize your business performance with our proven operational expertise. We analyze your environment, deliver tailored solutions, and implement sustainable improvements that drive measurable results.',
    icon: IconAdjustmentsCog,
  },
  {
    name: 'HR & Organizational Development',
    description:
      'Enhance your organizational capabilities with our HR expertise. Our dedicated consultants partner with you to strengthen workforce management, implement development initiatives, and guide you through organizational transformation.',
    icon: IconFileSmile,
  },
]
