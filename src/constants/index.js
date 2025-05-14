const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  {
    value: 3,
    suffix: "+",
    label: "Years of Experience in Programming",
  },
  { value: 350, suffix: "+", label: "LeetCode Problems Solved" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 8.5, suffix: " GPA", label: "Current Semester" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Presented my Solution to protect Disney's IP and Copyrights. I was able to create a solution that was both innovative and practical.",
    imgPath: "/images/googleImg.png",
    logoPath: "/images/google.png",
    title: "Google Solutions Challenge Innovator",
    date: "February 2025 -  April 2025",
    responsibilities: [
      "Built Puppeteer-based web scraper detecting piracy across 100+ platforms with 95% accuracy.",
      "Reduced response time by 50% via AI-powered predictive analytics.",
      "Developed REST API using Express.js and MongoDB for real-time monitoring and data access.",
    ],
  },
  {
    review:
      "Connecting many companies across various domains to help them get talented students.",
    imgPath: "/images/s.png",
    logoPath: "/images/SNISTLogo.png",
    title: "Head of Corporate Relations",
    date: "March 2025 - Present",
    responsibilities: [
      "Led 5+ corporate networking events and built strategic partnerships for student placements.",
      "Represented the institute in high-level interactions; mentored 2,500+ students.",
      "Providing students with great companies to work with.",
    ],
  },
  {
    review:
      "Trying to make the world a better place by helping people find events near them.",
    imgPath: "/images/reactImg.png",
    logoPath: "/images/reactLogo.png",
    title: "React Native Developer",
    date: "May 2025 - Present",
    responsibilities: [
      "Building cross-platform mobile app using React Native, integrating with Google's API services.",
      "Combining geolocation, databases, and mobile UI/UX.",
      "Discovering events near you. Filtering by category, RSVP, and get you notified.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "LeetCode",
    mentions: "@LeetCode",
    review:
      "Solved more than 350 LeetCode problems, showcasing my problem-solving skills and dedication to coding excellence. This achievement reflects my commitment to continuous learning and improvement in the field of software development.",
    imgPath: "/images/lc.png",
  },
  {
    name: "Hackathons",
    mentions: "@CourseVita",
    review:
      "Working with Karthik was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Karthik's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website, Karthik is the ideal partner.",
    imgPath: "/images/hack.png",
  },
  {
    name: "Gold Medal Lecturer",
    mentions: "@NCC Telangana",
    review:
      "Received a Gold Medal from the NCC Telangana for my outstanding performance in the Lecturate Competition. This recognition reflects my commitment to excellence and leadership within the organization.",
    imgPath: "/images/ncc.png",
  },
  {
    name: "Hackathon Winner",
    mentions: "@Hackathon",
    review:
      "Participated in 5+ National Level Hackathons, Won in Special Category and got recognized for thinking and developing innovative solutions.",
    imgPath: "/images/cup.png",
  },
];

const socialImgs = [
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
