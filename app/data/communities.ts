export interface Community {
  id: number
  name: string
  slug: string
  description: string
}

export const communities = [
  {
    id: 1,
    name: 'Web Development',
    slug: 'web-development',
    description: 'A community of frontend, backend, and full-stack developers.',
  },
  {
    id: 2,
    name: 'Mobile Development',
    slug: 'mobile-development',
    description: 'A community of mobile development.',
  },
  {
    id: 3,
    name: 'UI/UX Design',
    slug: 'ui-ux',
    description: 'Share designs, prototypes, and user experience ideas.',
  },
  {
    id: 4,
    name: 'Artificial Intelligence',
    slug: 'artificial-intelligence',
    description: ' machine learning, and automation projects.',
  },
  {
    id: 5,
    name: 'Cyber Security',
    slug: 'cyber-security',
    description: 'Learn security, ethical hacking, security and protection.',
  },
]
