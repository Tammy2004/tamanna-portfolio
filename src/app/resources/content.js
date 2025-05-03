import { InlineCode } from "@/once-ui/components";
import { techSkills } from "@/components/Icons";


const person = {
  firstName: "Tamanna",
  lastName: "Mishra",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Machine Learning/Software Engineer",
  avatar: "/images/avatar.png",
  location: "Europe/London", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Hindi", "Japanese"], // optional: Leave the array empty if you don't want to display languages
};


const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Tammy2004/",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/tamanna-mishra/",
  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:mishratamanna3@gmail.com",
  },
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>ML/Software Engineer</>,
  subline: (
    <>
      I'm Tamanna, a student at The University of Sheffield, where I'm studying
      Computer Science (AI).<br /> I'm currently on placement with <InlineCode>AMRC </InlineCode> 
       as an Assistant Project Engineer.
    </>
  ),
};



const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendar.app.google/AM9fqciwSmyCeAVZ6",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Tamanna is an Assistant Project Engineer at AMRC, working on machine learning and 
        software development projects. She is also a Computer Science undergraduate at The 
        University of Sheffield, specializing in artificial intelligence, with a strong 
        interest in technology's impact on healthcare.</>
    ),
  },
  work: {
      display: true, // set to false to hide this section
      title: "Work Experience",
      experiences: [
        {
          company: "Advanced Manufacturing Research Centre (AMRC)",
          timeframe: "2024 - Present (Internship)",
          role: "Assistant Project Engineer",
          achievements: [
            <>
              <div className="p-4 bg-gradient-to-br from-gray-900 to-black text-white rounded-2xl shadow-md">
              <h3 className="text-lg font-semibold mb-2">PPE Compliance System</h3>
              <p>
                Developed a machine learning model <span className="italic">(Object Detection + Pose Estimation)</span> for real-time PPE compliance in a manufacturing environment.
              </p>
              <p className="mt-2">
                Achieved <span className="font-semibold text-green-400">0.71 mAP</span> using RTSP and webcam inputs.
              </p>
              <p className="mt-2 font-semibold">Tools used:</p>
              <div className="flex flex-wrap gap-2 mt-1 text-sm">
                <span className="bg-blue-600 text-white px-2 py-1 rounded">Python</span>
                <span className="bg-yellow-400 text-black px-2 py-1 rounded">TensorFlow</span>
                <span className="bg-gray-700 text-white px-2 py-1 rounded">OpenCV</span>
                <span className="bg-green-600 text-white px-2 py-1 rounded">YOLOv8/11</span>
                <span className="bg-red-600 text-white px-2 py-1 rounded">PyTorch</span>
              </div>
            </div>
          </>,
            <>
              Collaborated with a project engineer to research and write up a trade study report on the feasibility of using edge technologies to
              improve the efficiency of the manufacturing process for a client company. The report was well-received and led to further discussions
              with the client about working together on a project to implement the proposed solutions.
              <br /><b>Tools used:</b> <i>Microsoft Word. </i>
            </>,
            <>
              Collaborated with a senior software engineer to design and implement a dashboard for organisational chart
              visualisation of the AMRC along with adding a feature to generate a difference report indicating new personnel
              to be added to the system and old staff to be removed, improving data accessibility and decision-making processes.
              <br /><b>Tools used:</b> <i> Vue, Next.js, Bulma CSS, Figma.</i>
            </>,
          ],
          images: [],
        },
        {
          company: "The University of Sheffield",
          timeframe: "Summer 2023",
          role: "Website Developer",
          achievements: [
            <>
              Developed a website for the University of Sheffield's Department of Electric and Electronic Engineering,
              showcasing the department's research and projects. The website was built using Google Sites and included
              features such as a project gallery, faculty profiles, and a CTA to subscribe to the department's newsletter.
              <br /><b>Tools used:</b> <i>Google Sites, HTML, CSS.</i>
            </>,
            <>
              Collaborated with faculty members to gather content and design the website layout, ensuring that it met the
              department's branding guidelines and effectively communicated its mission and values.
            </>,
          ],
          images: [],
        },
      ],
    },
    studies: {
      display: true, // set to false to hide this section
      title: "Studies",
      institutions: [
        {
          name: "University of Sheffield",
          degree: "BSc Computer Science (AI)",
          timeframe: "2022 - 2026",
          modules: {
            "First Year (2:1)": [
              "Introduction to Software Engineering",
              "Foundations of Computer Science",
              "Java Programming",
              "Machines and Intelligence",
              "Devices and Networks",
              "Web and Internet Technology",
              "Introduction to Algorithms and Data Structures",
            ],
            "Second Year (2:1)": [
              "Data Driven Computing",
              "Systems Design and Security",
              "Functional Programming",
              "Robotics",
              "Automata, Computation and Complexity",
              "Logic in Computer Science",
              "AI Group Project",
            ],
          },
          description: [
            <>
              I am a placement student entering my final year in 2025-26, specializing in machine learning
              and software engineering. My academic background includes advanced coursework in AI, data science, 
              and software development. Through research and internships, I apply my skills to real-world problems, 
              with a particular interest in the intersection of technology and healthcare.
            </>
          ],
        },
      ],
    },
    technical: {
      display: true, // set to false to hide this section
      title: "Technical skills",
      skills: techSkills,
  },
};

const portfolio = {
  label: "Portfolio",
  title: "Showcase",
  description: `A collection of ${person.name}s work, including projects and skills I 
  have acquired`,
  // Create new portfolio posts by adding a new .mdx file to app/portfolio/posts
  // All posts will be listed on the /portfolio route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/portfolio/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/Tv-awards.webp",
      alt: "I won the award for the most innovative member among the tech societies!",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/trident_meeting.jpg",
      alt: "The first meeting of Project Trident, a student-led initiative to develop a submarine to compete in the RoboSub competition.",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/trident_presentation.jpg",
      alt: "I was presenting to my team (Machine Learning) about Project Trident.",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/istanbul.jpg",
      alt: "Istanbul, Turkey",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Birthday cake.png",
      alt: "A birthday cake I made for my friend.",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Brookies.jpeg",
      alt: "Brookies - a combination of brownies and cookies.",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/Birthday_cake.png",
      alt: "Cake version of the birthday cake Jellycat for a friend's birthday.",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Mango.png",
      alt: "mango Cheesecake",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Matcha_Cheesecake.png",
      alt: "Matcha Cheesecake",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/Yule_log.png",
      alt: "Yule log",
      orientation: "horizontal",
    },
  ],
};

export { person, social, home, about, portfolio, work, gallery };
