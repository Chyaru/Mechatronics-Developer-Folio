/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Fernanda Mancilla",
  title: "Hello Engineers! 👾",
  subTitle: emoji(
    "I'm a Mechatronics and Software Engineering student at Universidad Panamericana, passionate about robotics, embedded systems, and competitive programming. 🤖💻 Always building, always learning!"
  ),
  resumeLink:
    "https://drive.google.com/file/d/18rhKoHELjc5AVY_r1JfFMN4KBHoOfo-X/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Chyaru",
  linkedin: "https://www.linkedin.com/in/fernanda-sarahy-mancilla-n%C3%BA%C3%B1ez-26a522237/",
  gmail: "fernandasarahy12500@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Mechatronics + Software Engineering = ❤️",
  skills: [
    emoji("⚙️ Mechanical design, CAD modeling and simulation (SolidWorks, FEA, kinematics & dynamics)."),
    emoji("🔌 Electronics and embedded systems: STM32, Arduino, ESP32, sensor integration."),
    emoji("🤖 Robotics software development with ROS, control systems (PID), motion planning and SLAM."),
    emoji("🧠 Programming in C++, Python, and Java for embedded logic, automation and robotics control."),
    emoji("📊 PLC programming."),
    emoji("🛠️ Experience building robots and go-karts from scratch: welding, machining, electronics and control.")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "ROS (Robot Operating System)",
    fontAwesomeClassname: "fas fa-network-wired" // ícono simbólico para ROS
  },
  {
    skillName: "C/C++",
    fontAwesomeClassname: "fas fa-code" // buena opción para mostrar código
  },
  {
    skillName: "Java",
    fontAwesomeClassname: "fab fa-java"
  },
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "SolidWorks",
    fontAwesomeClassname: "fas fa-cogs" // no hay uno oficial, este queda bien
  },
  {
    skillName: "PLC Programming",
    fontAwesomeClassname: "fas fa-project-diagram" // representación simbólica
  },
  {
    skillName: "Linux",
    fontAwesomeClassname: "fab fa-linux"
  },
  {
    skillName: "STM32/Raspberry/Arduino",
    fontAwesomeClassname: "fas fa-microchip"
  },{
    skillName: "I2C",
    fontAwesomeClassname: "fas fa-exchange-alt"
  },
  {
    skillName: "SPI",
    fontAwesomeClassname: "fas fa-random"
  },
  {
    skillName: "UART",
    fontAwesomeClassname: "fas fa-ethernet"
  },
  {
    skillName: "Workshop Tools & Manufacturing",
    fontAwesomeClassname: "fas fa-toolbox"
  }
  
],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universidad Panamericana",
      logo: require("./assets/images/up.png"),
      subHeader: "Mechatronics Engineering",
      duration: "August 2022 - July 2027",
      desc: "Represented the University in two International Competitions",
      descBullets: [
        "ICPC World Finals 2024 hosted in Egypt",
        "ROBOCUP Rescue League 2023 and 2024 hosted in Paris and Netherlands"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true,
  experience: [
    {
      Stack: "Robotics (ROS, Control Systems, SLAM)",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming (C++, Python, Java)",
      progressPercentage: "80%"
    },
    {
      Stack: "Embedded Systems & Microcontrollers",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false
};


// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Member of COMI",
      company: "Committee of the Mexican Olympiad in Informatics",
      companylogo: require("./assets/images/OMI.png"),
      date: "June 2023 – Present",
      desc: "I am actively involved in various aspects of the competition's management process.",
      descBullets: [
        "Creation of problems (C++/Karel)",
        "Teach advanced algorithm to young mexican students",
        "Overall event organization"
      ]
    },
    {
      role: "Head of Robotics Programming Deparment",
      company: "UPRobotics",
      companylogo: require("./assets/images/uprobotics.jpg"),
      date: "September 2022 – December 2024",
      desc: "Manage a team of 14 programmers in order to develope the autonomy of a rescue robot.",
      descBullets: [
        "Varios simulations such as a 6th axis freedom arm, LiDAR and SLAM",
        "API compatible with Xbox One Controller",
        "Object Detection"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements and Certification",

  achievementsCards: [
    {
      title: "ICPC World Finalist 47th Edition",
      subtitle:
        "",
      image: require("./assets/images/ICPC.png"),
      imageAlt: "ICPC",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1cnSFJaZkmBA7YHo40so9N3muokPg-gYF/view?usp=sharing"
        }
      ]
    },
    {
      title: "International Olympiad in Informatics 2021",
      subtitle:
        "Represented the Mexican Delegation.",
      image: require("./assets/images/IOI.png"),
      imageAlt: "IOI logo",
      footerLink: [
        {
          name: "View IOI 2021 ranking",
          url: "https://stats.ioinformatics.org/results/2021"
        }
      ]
    },
    {
      title: "Silver Medal in European Girls' Olympiad in Informatics 2022 hosted in Türkiye",
      subtitle:
        "Represented the Mexican Delegation and achieve silver medal.",
      image: require("./assets/images/EGOI.jpg"),
      imageAlt: "EGOI logo",
      footerLink: [
        {
          name: "View EGOI 2022 ranking",
          url: "https://stats.egoi.org/editions/2022/results/"
        }
      ]
    },

    {
      title: "ROBOCUP Rescue League 2024 hosted in Netherlands",
      subtitle: "Represented my University in the ROBOCUP Rescue League after developing a rescue robot",
      image: require("./assets/images/robocup.png"),
      imageAlt: "ROBOCUP Logo",
      footerLink: [
        {
          name: "Certification", url: ""
        },
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "I am looking for my first formal job 😊",
  number: "+524775794566",
  email_address: "0254460@up.edu.mx"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
