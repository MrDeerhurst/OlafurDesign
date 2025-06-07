

import { ref } from 'vue';
export const globalCounter = ref(0);

export const projectsList = [
  {
    title: 'Mobile AR Gear Assembly Instructions',
    short_description:
      'An augmented reality app for detecting an image in paper instructions and span an interactive assembly instructions.',
    image: 'https://i.imgur.com/49MVi84.png',
    gif: "https://i.imgur.com/Ngn5g9V.gif",
    expandedPoints: [
      'Master’s thesis completed at KTH Royal Institute of Technology.',
      'Explored immersive training for the metals industry using Oculus VR.',
      'Compared hand tracking and physical controllers with 26 participants.',
      'Measured performance, task completion, and immersion using both qualitative and quantitative metrics.',
      'Project applied core UX methods: user research, iterative design, and usability testing.',
      'Highlighted challenges in balancing hardware limitations and immersive design.',
      'Reflects cross-disciplinary strengths in UX, product management, and human-computer interaction.'
    ],
    skills: [
      'User-Centered Design (UCD)',
      'VR Interaction Design',
      'Quantitative & Qualitative User Research',
      'Agile Product Development',
      'Sensor & Ergonomic Awareness'
    ],
    technologies: ['ARKit', 'Unity', 'C#'],
    caseStudyLink: '#',
    isSmallScreen: false,

  },
  {
    title: 'VR Industry Training Research',
    short_description: 'A virtual reality experience for employee onboarding and safety training research.',
    expandedPoints: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    ,'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'],
    image: "https://i.imgur.com/WEBm5LN.png",
    gif: "https://i.imgur.com/zD0JDdV.gif",
     skills: [
      'User-Centered Design (UCD)',
      'VR Interaction Design',
      'Quantitative & Qualitative User Research',
      'Agile Product Development',
      'Sensor & Ergonomic Awareness'
    ],
    technologies: ['Unity', 'C#', 'Meta Quest SDK'],
    caseStudyLink: '#',
    isSmallScreen: false,
  },
  {
    title: '3D Bottom Trawl Simulation',
    short_description: 'Simulation of a new type of bottom trawl that uses lasers instead of scraping the bottom for Optitog.',
    expandedPoints: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    ,'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'],
    image: "https://i.imgur.com/JnOtHst.png",
    gif: 'https://i.imgur.com/x7Big3d.gif',
     skills: [
      'User-Centered Design (UCD)',
      'VR Interaction Design',
      'Quantitative & Qualitative User Research',
      'Agile Product Development',
      'Sensor & Ergonomic Awareness'
    ],
    technologies: ['Unity', 'C#'],
    caseStudyLink: '#',
    isSmallScreen: false,
  }
];


