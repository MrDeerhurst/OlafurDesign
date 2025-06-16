import { ref } from 'vue';
import gearsWebm from '@/assets/videos/Gears.webm';
import gearsMp4 from '@/assets/videos/Gears.mp4';
import trainingWebm from '@/assets/videos/Training.webm';
import trainingMp4 from '@/assets/videos/Training.mp4';
import trawlWebm from '@/assets/videos/Trawl.webm';
import trawlMp4 from '@/assets/videos/Trawl.mp4';

export const globalCounter = ref(0);

export const PorfolioProjectsList = [
  // Mobile AR Gear assembly
  {
    title: 'Mobile AR Gear Assembly Instructions',
    shortDescription: 'An augmented reality app for deploying an 3D model onto a surface as a part of assembly instructions.',
    myRole: 'Designer and developer',
    myRoleExpanded: '',
    product: '',
    task: 'Designing assembly instructions prototype for a type of a gear using AR.',
    keyResults: [
      'Proved the viability of AR mobile as additional assembly documentetion.',
      'Delivered protorype, technical and design files and reccomendations.'],
    skills: [
      'User-Centered Design (UCD)',
      'AR Interaction Design',
      'Quantitative & Qualitative User Research',
      'Agile Product Development',
      'Sensor & Ergonomic Awareness'
    ],
    technologies: ['ARKit', 'Unity', 'C#', 'Mobile', 'Blender','AutoCAD' ],
    steps: ['','',''],
    expandedPoints: [
      ,'',
      ''
    ],
    caseStudyLink: '#',
    image: 'https://i.imgur.com/49MVi84.png',
    webmLink: gearsWebm,
    mp4Link: gearsMp4,
  },
  // 3D Bottom Trawl Simulation
  {
    title: '3D Bottom Trawl Simulation',
    shortDescription: 'Simulation of a new type of bottom fising trawl that uses lasers instead of metal rakes that scrape the bottom and destroy the ocean floor.',
    myRole: 'Visualisation Designer and software developer',
    myRoleExpanded: '',
    product: '',
    task: 'Simulate a new type real world bottom trawl using unity for marketing material.',
    keyResults: [
      'Established the vision that company had for the simulation project and deliverables',
      'Translated effectively the real world functionality of the Trawl into simulated behaviour',
      'Optimized software pipelines for animation and rendering to accomodate a heavy processing simulation ',
      'Delivered the simulation and multiple video records of the simulations'
    ],
    skills: [
      'User-Centered Design (UCD)',
      'VR Interaction Design',
      'Quantitative & Qualitative User Research',
      'Agile Product Development',
      'Sensor & Ergonomic Awareness',
      'Cross-functional Collaboration'
    ],
    technologies: ['Unity', 'C#', 'Blender','AutoCAD' ],
    caseStudyLink: '#',
    steps: ['','',''],
    expandedPoints: [
      '',
      '',
      ''
    ],
    image: 'https://i.imgur.com/JnOtHst.png',
    webmLink: trawlWebm,
    mp4Link: trawlMp4,
  },
// VR Industry Training Research
  {
  title: 'VR Training Design & UX Research at KTH',
  shortDescription: 'Led a comparative UX study of VR hand tracking vs. physical controllers in immersive training scenarios integrating user research, interface design, and interaction testing to inform better HMI decisions in high-stakes environments.',
  myRole: 'UX Researcher, VR Designer & Interaction Technologist',
  myRoleExpanded: 'Designed and implemented the VR user experience, led research, and translated findings into actionable design insights for immersive training applications.',
  product: '“Moving Air” – a VR training simulation and comparative study conducted for the metals industry as a master’s thesis project',
  task: 'Design, prototype, and evaluate immersive interactions using Oculus VR hardware focusing on user experience, efficiency, and ergonomic design in industrial training environments.',
  keyResults: [
    'Gathered and analyzed data from 26 participants to compare interaction models and their effects on performance and immersion.',
    'Delivered evidence-based recommendations for HMI strategy in industrial VR based on both qualitative feedback and task-based metrics.'
  ],
  skills: [
    'User-Centered Design',
    'VR Interaction Design',
    'UX Research & Usability Testing',
    'Product Thinking',
    'Agile Prototyping',
    'Cross-functional Collaboration'
  ],
  technologies: ['Oculus VR','VR', 'Figma','Unity', 'Blender','AutoCAD' ],
  steps: [
    'Researched industrial training contexts and selected representative tasks for VR simulation.',
    'Designed and built two control systems: one using hand tracking, the other using physical controllers.',
    'Ran multi-metric testing with participants to capture immersion, performance, and usability insights.'
  ],
  keyResults: [
    'Demonstrated measurable differences in task performance and user preference between control types.',
    'Informed future VR interface design by providing data-driven insights on how users adapt to immersive training systems.'
  ],
  expandedPoints: [
    'Built and tested two distinct VR control paradigms hand tracking vs. physical controllers to assess impact on task accuracy, immersion, and user satisfaction in a simulated industrial task.',
    'Collected and synthesized both quantitative and qualitative feedback across 26 users, using statistical analysis and user interviews to inform interface design recommendations.',
    'Worked within the technical constraints of Oculus hardware while applying ergonomic principles and user-centered methodology to ensure real-world applicability of findings.'
  ],
  image: 'https://i.imgur.com/JnOtHst.png',
  webmLink: trainingWebm,
  mp4Link: trainingMp4
}
,
// UX Strategist & Developer at Advania
 {
  title: 'Transforming UX and Frontend Development at Advania',
  shortDescription: 'Redesigned how UX was practiced by introducing Figma into a developer-heavy workflow while also getting hands-on fixing broken code, modernizing legacy systems, and improving frontend experiences in Vue.js.',
  myRole: 'UX Strategist & Developer',
  myRoleExpanded: 'Led UX adoption and contributed hands-on development fixes across critical systems.',
  product: 'Enterprise-grade internal and client-facing systems at Advania',
  task: 'Modernize design and development practices across multiple teams, introduce UX tooling, and rebuild outdated code to improve product usability and stability.',
  keyResults: [
    'Introduced Figma into a previously design-less workflow, establishing visual collaboration as a standard.',
    'Resolved persistent legacy code issues, improving performance and reducing system downtime.'
  ],
  skills: [
    'UX Design & Prototyping',
    'Frontend Engineering',
    'Design System Integration',
    'Process Facilitation',
    'Problem Solving Across Teams'
  ],
  technologies: ['Figma', 'Vue.js', 'React','PostgreSQL','JavaScript' ],
  steps: [
    'Identified the absence of UX practices and introduced Figma as a collaborative design tool.',
    'Provided training and support to integrate design into the department’s everyday process.',
    'Updated deprecated Angular code and delivered new features through Vue.js, aligning them with visual prototypes.'
  ],
  keyResults: [
    'Improved communication between product managers, developers, and designers through shared design standards.',
    'Reduced future troubleshooting time through documentation and modern code architecture.'
  ],
  expandedPoints: [
    'Established design practices from scratch by embedding Figma into the department workflow, enabling visual thinking and rapid prototyping where none existed before.',
    'Fixed legacy code bottlenecks in systems running deprecated Angular elements, helping improve reliability and setting the stage for future maintainability.',
    'Designed and implemented frontend updates in Vue.js that were driven by user-focused prototypes, ensuring functional parity between design intent and production code.'
  ],
  image: 'https://i.imgur.com/Mg7nIyS.png',
  webmLink: '',
  mp4Link: ''
},
// Designing and developing a product impact website for DTE
{
  title: 'Designing an Impact Calculator for the Aluminum Industry',
  shortDescription: 'Redesigned and rebuilt a production impact calculator for DTE, transforming a friction-heavy experience into a streamlined, interactive tool built in Figma and React.',
  myRole: 'UI/UX Designer & Frontend Developer',
  myRoleExpanded: 'Led the UI/UX redesign and co-developed the frontend with a focus on translating design logic into interactive features.',
  product: 'Impact calculator website for DTE – a company serving the aluminum production industry',
  task: 'Redesign the user experience of a complex industrial calculator and lead the frontend development to align usability, performance, and business goals.',
  keyResults: [
    'Reduced user friction by removing early registration and simplifying inputs with industry templates.',
    'Improved engagement through a real-time, dual-pane interface combining inputs and results on a single screen.'
  ],
  skills: [
    'UX Research & Testing',
    'Wireframing & Prototyping',
    'Frontend Development',
    'User Interface Design',
    'Cross-functional Collaboration'
  ],
  technologies: ['Figma', 'React'],
  steps: [
    'Conducted interviews with marketing and engineering teams to identify user pain points and business needs.',
    'Prototyped and tested new UX flows using Figma, integrating feedback into a refined, interactive design.',
    'Coded the frontend in React, building a real-time interface that reflected user input immediately and accurately.'
  ],
  keyResults: [
    'Streamlined user flow led to faster access to core functionality, increasing usability for a broader audience.',
    'Project delivered on time with verified industry metrics and strong internal support, though launch was postponed to add more features.'
  ],
  expandedPoints: [
    'Transformed a multi-step, high-friction tool into a responsive and engaging experience by reducing inputs and removing early registration gates.',
    'Introduced pre-filled templates based on industry standards to simplify complex input workflows, while allowing for user customization.',
    'Designed and implemented a real-time calculator interface where changes on the left update results instantly on the right mirroring feedback models often used in HMI and XR dashboards.'
  ],
  image: 'https://i.imgur.com/ss73nwz.png',
  webmLink: '',
  mp4Link: ''
},
// Enhancing the Customer Portal at the Icelandic Student Loan Fund
{
  title: 'Modernizing the Icelandic Student Loan Fund Portal',
  shortDescription: 'Redesigned and helped develop key features of a national self-service portal to prevent errors, improve transparency, and reduce friction resulting in better compliance, fewer customer issues, and a more intuitive user experience.',
  myRole: 'UX Developer & Product Tester',
  myRoleExpanded: 'Designed and validated user flows, prototyped in Figma, and collaborated with developers to implement changes that addressed usability, support, and compliance.',
  product: 'Customer Portal for the Icelandic Student Loan Fund',
  task: 'Redesign user flows, reduce user error through interface logic, and collaborate with developers to build and test features that improve the overall service experience.',
  keyResults: [
    'Reduced accidental actions and customer service inquiries through key interface updates.',
    'Prevented invalid applications with logic-driven UX design and improved application transparency.'
  ],
  skills: [
    'UX Design & Wireframing',
    'Prototyping & Usability Testing',
    'Problem-Solving with Product Teams',
    'Frontend Implementation Planning',
    'Design System Contributions',
    'Cross-functional Collaboration'
  ],
  technologies: ['Figma', 'Agile collaboration tools'],
  steps: [
    'Interviewed stakeholders and support teams to identify recurring user pain points and legal risks.',
    'Prototyped and tested solutions to reduce user error and simplify the loan application process.',
    'Worked with developers to implement features like confirmation modals, real-time application views, and logic to prevent dual-loan applications.'
  ],
  keyResults: [
    'User satisfaction improved through better control and visibility over applications.',
    'Reduced support volume and legal risk through design-led process standardization.'
  ],expandedPoints: [
    'Introduced confirmation windows and logic-based controls that reduced accidental errors and eliminated prohibited application combinations minimizing both support burden and compliance risk.',
    'Designed a new view interface for ongoing applications, empowering users with better awareness and reducing unintended modifications.',
    'Contributed to the design system to ensure future UI consistency, making the portal more maintainable and cohesive across updates.'
  ],
  image: 'https://i.imgur.com/pXsecje.png',
  webmLink: '',
  mp4Link: ''
}

];





