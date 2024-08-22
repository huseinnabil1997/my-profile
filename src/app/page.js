'use client';

import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md';
import { FaLinkedin } from 'react-icons/fa';
import { useState, useEffect, useRef } from 'react';
import styled, { keyframes, createGlobalStyle, css } from 'styled-components';
import { motion } from 'framer-motion';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AnimatedCard = styled.div`
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;

  &.visible {
    opacity: 1;
    transform: translateY(0);
    animation: ${fadeInUp} 0.6s ease-out;
  }
`;

const GlowingTool = styled.span`
  transition: all 0.3s ease;
  &:hover {
    box-shadow: 0 0 10px #3b82f6, 0 0 20px #3b82f6, 0 0 30px #3b82f6;
    transform: translateY(-2px);
  }
`;

const ProjectCard = styled(AnimatedCard)`
  position: relative;
  overflow: hidden;
`;

const InteractiveLink = styled.a`
  position: absolute;
  right: -100px;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  padding: 0 20px;
  color: white;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
  opacity: 0;
  width: 100px;

  ${props => props.isNoLink
    ? css`
      background: linear-gradient(to left, #9ca3af, transparent);
      &:hover {
        background: linear-gradient(to left, #6b7280, transparent);
      }
    `
    : css`
      background: linear-gradient(to left, #3b82f6, transparent);
      &:hover {
        background: linear-gradient(to left, #2563eb, transparent);
      }
    `
  }
`;

const CardContent = styled.div`
  transition: all 0.3s ease;
`;

const GlobalStyle = createGlobalStyle`
  ${ProjectCard}:hover ${InteractiveLink} {
    right: 0;
    opacity: 1;
  }

  ${ProjectCard}:hover ${CardContent} {
    transform: translateX(-100px);
  }
`;

const ProjectList = styled(motion.ul)`
  list-style-type: none;
  padding: 0;
`;

const ProjectItem = styled(motion.li)`
  margin-bottom: 8px;
  padding: 8px;
  background: rgba(59, 130, 246, 0.1);
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(59, 130, 246, 0.2);
    transform: translateX(5px);
  }
`;

const ProjectIcon = styled(motion.span)`
  display: inline-block;
  margin-right: 8px;
  color: #3b82f6;
`;

const CompanyName = styled.p`
  font-size: 1.1rem;
  font-weight: 600;
  background: linear-gradient(90deg, var(--accent-blue), var(--accent-purple), var(--accent-pink));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  transition: text-shadow 0.3s ease;

  &:hover {
    text-shadow: 0 0 10px rgba(255, 107, 107, 0.5), 0 0 20px rgba(254, 202, 87, 0.5), 0 0 30px rgba(72, 219, 251, 0.5), 0 0 40px rgba(255, 159, 243, 0.5);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  background: linear-gradient(90deg, var(--accent-blue), var(--accent-purple), var(--accent-pink));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  display: inline-block;
  transition: text-shadow 0.3s ease;

  &:hover {
    text-shadow: 0 0 10px rgba(18, 194, 233, 0.5), 0 0 20px rgba(196, 113, 237, 0.5), 0 0 30px rgba(246, 79, 89, 0.5);
  }
`;


const shineAnimation = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1.5rem;
  background: linear-gradient(90deg, var(--accent-blue), var(--accent-purple), var(--accent-pink));
  background-size: 200% auto;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${shineAnimation} 5s linear infinite;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: -10px;
    width: 50px;
    height: 3px;
    background: var(--accent-purple);
    transform: translateX(-50%);
    border-radius: 2px;
  }

  @keyframes shine {
    to {
      background-position: 200% center;
    }
  }
`;

const ProfileTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 2rem;
  padding: 0.5rem 0;
  background: linear-gradient(300deg, var(--accent-blue), var(--accent-purple), var(--accent-pink));
  background-size: 300% 300%;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${shineAnimation} 5s ease-in-out infinite;
  position: relative;
  
  @media (min-width: 640px) {
    font-size: 3rem;
  }
  
  @media (min-width: 768px) {
    font-size: 4rem;
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 3px;
    background: linear-gradient(90deg, transparent, var(--accent-blue), var(--accent-purple), var(--accent-pink), transparent);
    transform: scaleX(0.8);
    opacity: 0;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  &:hover::after {
    transform: scaleX(1);
    opacity: 1;
  }
`;

const LiquidShape = styled.div`
  position: absolute;
  inset: 0;
  overflow: hidden;
  animation: liquidAnimation 8s ease-in-out infinite;
  box-shadow: 
    0 0 20px rgba(59, 130, 246, 0.5),
    0 0 40px rgba(139, 92, 246, 0.3),
    0 0 60px rgba(236, 72, 153, 0.2);

  &::before {
    content: '';
    position: absolute;
    inset: -5px;
    background: radial-gradient(
      circle at center,
      rgba(59, 130, 246, 0.3) 0%,
      rgba(139, 92, 246, 0.2) 50%,
      rgba(236, 72, 153, 0.1) 100%
    );
    z-index: -1;
    filter: blur(10px);
  }

  @keyframes liquidAnimation {
    0%, 100% {
      border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    }
    25% {
      border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
    }
    50% {
      border-radius: 50% 60% 50% 70% / 40% 70% 60% 50%;
    }
    75% {
      border-radius: 70% 40% 60% 30% / 60% 40% 50% 70%;
    }
  }
`;

const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 10%;
  position: relative;
  z-index: 1;
`;

export default function Home() {
  const [visibleExperiences, setVisibleExperiences] = useState([]);
  const experienceRefs = useRef([]);
  const [expandedProject, setExpandedProject] = useState(null);

  const experiences = [
    {
      title: "Frontend Developer",
      company: "PT. Bank Rakyat Indonesia (BRI) tbk.",
      period: "March 2024 - Present",
      description: [
        "Assigned to PT. Bank Rakyat Indonesia tbk. to create a BUM Desa web using Nextjs and Material-UI",
        "Participated in BUM Desa Progress Meetings",
        "Sliced the registration OTP and password reset display email formats",
        "Sliced reset password, change password, bumdesa manager, faq, profile, setting, report (profit-loss, equity, balance sheet, cash flow), remember me, and business unit features",
        "Integrated API for password reset, password change, report (profit-loss, equity, balance sheet, cash flow), bumdesa manager, faq, setting, profile, and business unit features",
        "Created reusable custom components",
        "Set up middleware for session checking",
        "Performed debugging and bug fixing",
        "Conducted Sharing Sessions",
      ],
      tools: [
        "React",
        "Nextjs",
        "Material-UI",
        "JavaScript",
        "HTML",
        "CSS",
        "Git",
        "Figma",
        "Jira",
        "Postman",
        "Axios"
      ],
      project: [
        "BUM Desa Digital",
      ]
    },
    {
      title: "Frontend Developer",
      company: "Juke Solutions",
      period: "December 2022 - December 2023 (1 Year 1 Month)",
      description: [
        "Developed features for web applications using React/React Native, and JavaScript",
        "Created user-friendly, responsive, and cross-browser compatible webpages",
        "Wrote, tested, and debugged code to ensure optimum performance",
        "Implemented timely updates to existing webpages and functionalities",
        "Collaborated with back-end developers to ensure app integration and performance"
      ],
      tools: [
        "React",
        "React Native Expo",
        "JavaScript",
        "HTML",
        "CSS",
        "Git",
        "Figma",
        "Jira",
        "API",
        "Axios",
        "Postman"
      ],
      project: [
        "EMIS",
        "Mentor Bootcamp Javascript"
      ]
    },
    {
      title: "Startup Engineer",
      company: "PT. Digital Integrasi Asia",
      period: "January 2022 - November 2022 (11 Months)",
      description: [
        "Developed features for mobile applications using React Native, Typescript, and JavaScript",
        "Created user-friendly, responsive display.",
        "Wrote, tested, and debugged code to ensure optimum performance",
        "Implemented timely updates to existing webpages and functionalities",
        "Collaborated with back-end developers to ensure app integration and performance"
      ],
      tools: [
        "React Native",
        "JavaScript",
        "Typescript",
        "Git",
        "Figma",
        "Github",
        "API",
        "Axios",
        "Postman"
      ],
      project: [
        "Fooddev",
        "Privo Live"
      ]
    },
    {
      title: "Frontend Developer",
      company: "PT. Ihsan Solusi Informatika",
      period: "March 2020 - May 2021 (1 Year 3 Months)",
      description: [
        "Developed features for mobile applications and Web using React Native, React, and JavaScript",
        "Created user-friendly, responsive display.",
        "Wrote, tested, and debugged code to ensure optimum performance",
        "Implemented timely updates to existing webpages and functionalities",
        "Collaborated with back-end developers to ensure app integration and performance"
      ],
      tools: [
        "React",
        "React Native",
        "JavaScript",
        "Git",
        "Figma",
        "API",
        "Axios",
        "Postman"
      ],
      project: [
        "Bahana Sekuritas Open Account",
        "Autopay",
      ]
    },
    {
      title: "React Native Developer",
      company: "SanberCode",
      period: "October 2019 - March 2020 (6 Months)",
      description: [
        "Developed features for mobile applications using React Native Expo, and JavaScript",
        "Created user-friendly, responsive display.",
        "Wrote, tested, and debugged code to ensure optimum performance",
        "Implemented timely updates to existing webpages and functionalities",
        "Collaborated with back-end developers to ensure app integration and performance"
      ],
      tools: [
        "React Native",
        "JavaScript",
        "API",
        "Axios",
        "Postman"
      ],
      project: [
        "SIKERJA"
      ]
    },
  ];

  const projects = [
    {
      title: "BUM Desa Digital",
      description: "Developed a website that can generate reports according to journals for BUM Desa",
      technologies: ["React", "Redux", "Material UI", "JavaScript", "Git", "Figma", "HTML", "CSS"],
      link: "https://bumdesa.co.id/"
    },
    {
      title: "EMIS",
      description: "Developed an education data gateway website for the Ministry of Religious Affairs",
      technologies: ["React", "Redux", "React Native Expo", "JavaScript", "Git", "Jira", "Figma", "HTML", "CSS"],
      link: "https://emis.kemenag.go.id/"
    },
    {
      title: "Mentor Bootcamp Javascript",
      description: "Volunteered as a teacher in the NuxtJs bootcamp for the JavaScript section",
      technologies: ["Javascript"],
      link: "No Link"
    },
    {
      title: "Fooddev",
      description: "Developed an Android B2B application between suppliers and restaurants",
      technologies: ["React Native", "Javascript", "Redux", "Git", "Github"],
      link: "No Link"
    },
    {
      title: "Privo Live",
      description: "Developed an Android video call service application similar to BIGO (slicing only)",
      technologies: ["React Native", "Javascript", "Typescript", "Redux", "Git", "Github"],
      link: "No Link"
    },
    {
      title: "Bahana Sekuritas Open Account",
      description: "Developed the account registration section of an Android application for Bahana Sekuritas",
      technologies: ["React", "React Native", "Javascript", "Redux", "Git", "Figma"],
      link: "No Link"
    },
    {
      title: "Autopay",
      description: "Developed an Android application for cashless online payments (slicing only)",
      technologies: ["React Native", "Javascript", "Redux", "Git", "Figma"],
      link: "No Link"
    },
    {
      title: "SIKERJA",
      description: "Developed an Android application for evaluating logistics vendors at Institut Teknologi Bandung",
      technologies: ["React Native", "Javascript"],
      link: "No Link"
    },
    // Add other projects as needed
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const index = experienceRefs.current.indexOf(entry.target);
            setVisibleExperiences((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: [0.5], rootMargin: '0px' }
    );

    experienceRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  // Function to get project description
  const getProjectDescription = (projectTitle) => {
    const project = projects.find(p => p.title === projectTitle);
    return project ? project.description : "Project description not available.";
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 font-poppins">
      <ProfileTitle>My Profile</ProfileTitle>

      <div className="w-full max-w-4xl">
        <div className="glassmorphism flex flex-col p-4 sm:p-6 w-full">
          <div className="flex flex-col sm:flex-row items-center sm:items-start w-full">
            <div className="mb-4 sm:mb-0 sm:mr-6 relative w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0">
              <LiquidShape>
                <ProfileImage
                  src="/images/profile_photo.jpg"
                  alt="Foto Profil"
                />
              </LiquidShape>
            </div>
            <div className="text-center sm:text-left flex-grow">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-2 sm:mb-4">Husein Nabil</h2>
              <p className="text-sm sm:text-base md:text-lg text-white">Passionate Frontend Developer | Creating Enchanting User Experiences using React.js, React Native, and Next.js (HTML, CSS, JavaScript)</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row sm:justify-end mt-6 sm:mt-8 w-full">
            <p className="flex items-center mb-2 sm:mb-0 sm:mr-4 text-sm md:text-base">
              <MdEmail className="mr-2 text-blue-300" />
              seinnabil@gmail.com
            </p>
            <p className="flex items-center mb-2 sm:mb-0 sm:mr-4 text-sm md:text-base">
              <MdPhone className="mr-2 text-blue-300" />
              +62 81 8048 34487
            </p>
            <p className="flex items-center mb-2 sm:mb-0 sm:mr-4 text-sm md:text-base">
              <MdLocationOn className="mr-2 text-blue-300" />
              Bandung, Indonesia
            </p>
            <p className="flex items-center">
              <FaLinkedin className="mr-2 text-blue-300" />
              <a href="https://www.linkedin.com/in/huseinnabil" className="text-blue-300 hover:underline text-sm md:text-base">linkedin.com/in/huseinnabil</a>
            </p>
          </div>
        </div>
      </div>

      <div className="w-full max-w-4xl mt-8">
        <SectionTitle>Experiences</SectionTitle>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <AnimatedCard
              key={index}
              ref={(el) => (experienceRefs.current[index] = el)}
              className={`glassmorphism p-6 ${visibleExperiences.includes(index) ? 'visible' : ''
                }`}
            >
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                <h3 className="text-xl font-semibold gradient-text-experience">{exp.title}</h3>
                <p className="text-sm text-blue-300">{exp.period}</p>
              </div>
              <CompanyName>{exp.company}</CompanyName>
              <ul className="text-sm text-gray-300 space-y-2 mb-4">
                {exp.description.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2 mt-1.5 animate-pulse"></span>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 mb-4">
                {exp.tools.map((tool, idx) => (
                  <GlowingTool
                    key={idx}
                    className="bg-blue-500 text-white text-xs px-2 py-1 rounded cursor-pointer"
                  >
                    {tool}
                  </GlowingTool>
                ))}
              </div>
              {exp.project && exp.project.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="mt-4"
                >
                  <motion.p
                    className="text-sm font-semibold text-blue-300"
                    // whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Projects:
                  </motion.p>
                  <ProjectList>
                    {exp.project.map((proj, idx) => (
                      <ProjectItem
                        key={idx}
                        onClick={() => setExpandedProject(expandedProject === `${index}-${idx}` ? null : `${index}-${idx}`)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <ProjectIcon
                          initial={{ rotate: 0 }}
                          animate={{ rotate: expandedProject === `${index}-${idx}` ? 90 : 0 }}
                        >
                          {expandedProject === `${index}-${idx}` ? '▼' : '▶'}
                        </ProjectIcon>
                        {proj}
                        {expandedProject === `${index}-${idx}` && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="mt-2 text-xs text-gray-400"
                          >
                            {getProjectDescription(proj)}
                          </motion.div>
                        )}
                      </ProjectItem>
                    ))}
                  </ProjectList>
                </motion.div>
              )}
            </AnimatedCard>
          ))}
        </div>
      </div>

      <div className="w-full max-w-4xl mt-8">
        <SectionTitle>Projects</SectionTitle>
        <div className="space-y-6">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              ref={(el) => (experienceRefs.current[index + experiences.length] = el)}
              className={`glassmorphism p-6 ${visibleExperiences.includes(index + experiences.length) ? 'visible' : ''
                }`}
            >
              <CardContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <p className="text-sm text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <GlowingTool
                      key={idx}
                      className="bg-blue-500 text-white text-xs px-2 py-1 rounded cursor-pointer"
                    >
                      {tech}
                    </GlowingTool>
                  ))}
                </div>
              </CardContent>
              <InteractiveLink
                href={project.link === "No Link" ? "#" : project.link}
                target={project.link === "No Link" ? "_self" : "_blank"}
                rel={project.link === "No Link" ? "" : "noopener noreferrer"}
                isNoLink={project.link === "No Link"}
              >
                {project.link === "No Link" ? "No Link" : "Website"}
              </InteractiveLink>
            </ProjectCard>
          ))}
        </div>
      </div>

      <GlobalStyle />
    </div>
  );
}