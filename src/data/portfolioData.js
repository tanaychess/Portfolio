// Single source of truth for all portfolio content.
// Keeping every section's data here avoids the old pattern of half-empty,
// unused per-section data files scattered around the project.

export const profile = {
  name: "Tanay Pathare",
  firstName: "Tanay",
  role: "Software Developer",
  tagline:
    "Full-stack developer building clean, scalable web apps — and a competitive chess player who thinks in openings and endgames.",
  intro:
    "I'm a passionate Software Developer who enjoys building web applications that solve real problems. I love writing clean code, learning new technologies, and continuously improving my skills.",
  location: "India",
  github: "https://github.com/tanaychess",
  linkedin: "https://linkedin.com/in/tanaychess",
  githubHandle: "github.com/tanaychess",
  linkedinHandle: "linkedin.com/in/tanaychess",
}

export const education = [
  {
    school: "Savitribai Phule Pune University",
    degree: "M.Sc. Computer Science",
    score: "CGPA: 8.91 / 10",
    period: "Jul 2025 — Jul 2027",
    location: "Maharashtra",
  },
  {
    school: "Savitribai Phule Pune University",
    degree: "B.Sc. Computer Science",
    score: "CGPA: 8.37 / 10",
    period: "Jun 2022 — Apr 2025",
    location: "Maharashtra",
  },
]

export const experience = [
  {
    company: "Infosys Springboard",
    role: "Software Developer Intern",
    period: "Jun 2026 — Present",
    location: "Remote",
    type: "work",
    points: [
      "Developing full-stack web applications using React, Spring Boot, REST APIs, and PostgreSQL.",
      "Designing RESTful APIs and relational database schemas for scalable backend workflows.",
      "Implementing backend business logic using Java, Spring Data JPA, and OOP design principles.",
      "Collaborating through Git and GitHub using structured version-control workflows.",
    ],
    stack: ["React", "Spring Boot", "PostgreSQL", "REST APIs", "Java"],
  },
]

export const projects = [
  {
    title: "CodeXO",

    subtitle: "Competitive Programming Platform",

    description:
      "A full-stack competitive programming platform with an online IDE, live contests, submissions, and leaderboards — built end to end, from a sandboxed multi-language judge to contest scoring.",

    highlights: [
      "Engineered a multi-language judge executing C++, Java, Python & JavaScript against test cases.",
      "Containerized code execution with Docker — CPU, memory, process, and network isolation.",
      "Built contest workflows: automated scoring, time limits, tab-switch detection, participant tracking.",
      "Implemented JWT auth, role-based authorization, and RESTful backend services on PostgreSQL.",
    ],

    stack: [
      "React",
      "Spring Boot",
      "PostgreSQL",
      "Docker",
      "Gemini API",
    ],

    category: "Full Stack",

    // Project-specific thumbnail
    // File is located inside /public
    image: "/CodeXO.png",

    accent: "from-gold-300 via-gold-400 to-gold-600",

    demo: "#",

    repo: "https://github.com/tanaychess",
  },
]

export const skillGroups = [
  {
    label: "Languages",
    skills: ["Java", "C++", "JavaScript", "SQL"],
  },
  {
    label: "Frontend",
    skills: ["React", "HTML5", "CSS3", "Bootstrap"],
  },
  {
    label: "Backend",
    skills: ["Spring Boot", "Spring Data JPA", "REST APIs"],
  },
  {
    label: "Databases",
    skills: ["PostgreSQL", "MySQL"],
  },
  {
    label: "Developer Tools",
    skills: ["Git", "GitHub", "Docker", "Postman", "Linux"],
  },
  {
    label: "Core CS",
    skills: ["Data Structures & Algorithms", "OOP", "DBMS"],
  },
]

// Flattened + de-duplicated technology pills,
// used in Hero + About "Technologies I work with"
export const techStack = [
  {
    name: "React",
    icon: "react",
  },
  {
    name: "Java",
    icon: "java",
  },
  {
    name: "Spring Boot",
    icon: "spring",
  },
  {
    name: "JavaScript",
    icon: "js",
  },
  {
    name: "PostgreSQL",
    icon: "postgres",
  },
  {
    name: "MySQL",
    icon: "mysql",
  },
  {
    name: "Docker",
    icon: "docker",
  },
  {
    name: "Git",
    icon: "git",
  },
  {
    name: "C++",
    icon: "cpp",
  },
  {
    name: "SQL",
    icon: "sql",
  },
]

export const chess = {
  title: "Competitive Chess Player",
  subtitle: "Regional Tournament Participant",
  description:
    "Competes in regional chess tournaments — the same discipline of strategic planning, pattern recognition, and time management shows up in how Tanay approaches debugging and system design.",
  status: "Present",
  period: "2019 — Present",
}

// Traits shown in the About "grid of 4" cards
export const traits = [
  {
    icon: "target",
    title: "Problem Solver",
    description:
      "I love solving problems and turning ideas into real, working software.",
  },
  {
    icon: "zap",
    title: "Quick Learner",
    description:
      "I quickly adapt to new technologies, tools, and frameworks.",
  },
  {
    icon: "crown",
    title: "Strategic Thinker",
    description:
      "Years of competitive chess sharpened how I plan, debug, and design systems.",
  },
  {
    icon: "eye",
    title: "Detail Oriented",
    description:
      "I focus on writing clean, maintainable, and well-tested code.",
  },
]

// Hero stat cards — derived honestly from the data above, nothing fabricated.
export const stats = [
  {
    value: "4+",
    label: "Years in CS",
  },
  {
    value: "1",
    label: "Live Project",
  },
  {
    value: "20+",
    label: "Technologies",
  },
  {
    value: "2",
    label: "Degrees",
  },
]

// Unified experience + education + chess timeline
// for the Experience section
export const timeline = [
  {
    type: "work",
    title: experience[0].role,
    org: experience[0].company,
    period: experience[0].period,
    location: experience[0].location,
    points: experience[0].points,
    stack: experience[0].stack,
    current: true,
  },

  {
    type: "education",
    title: education[0].degree,
    org: education[0].school,
    period: education[0].period,
    location: education[0].location,
    points: [
      `Currently pursuing with a ${education[0].score}.`,
      "Deepening focus on advanced software systems and applied CS.",
    ],
  },

  {
    type: "education",
    title: education[1].degree,
    org: education[1].school,
    period: education[1].period,
    location: education[1].location,
    points: [
      `Graduated with a ${education[1].score}.`,
      "Built the core CS + programming foundation for everything since.",
    ],
  },

  {
    type: "chess",
    title: chess.title,
    org: chess.subtitle,
    period: chess.period,
    location: "India",
    points: [chess.description],
  },
]
