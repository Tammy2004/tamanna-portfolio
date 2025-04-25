import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Tamanna",
  lastName: "Mishra",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Machine Learning/Software Engineer",
  avatar: "/images/avatar.jpg",
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
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Tamanna is currently an Assistant Project Engineer at AMRC, where she is involved in
        various projects related to machine learning and software development. She is also an undergraduate
        student at The University of Sheffield, pursuing a degree in Computer Science with a focus on
        artificial intelligence. Tamanna has a strong interest in the intersection of technology and healthcare.
      </>
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
              Developed a machine learning model (Object Detection + Pose Estimation) to develop a real-time PPE compliance system in
              a manufacturing environment with 0.71 mAP on RTSP stream and webcam inputs.
              <br /><b>Tools used:</b> Python, Tensorflow, OpenCV, YOLOv8/11, PyTorch.
            </>,
            <>
              Collaborated with a project engineer to research and write up a trade study report on the feasibility of using edge technologies to
              improve the efficiency of the manufacturing process for a client company. The report was well-received and led to further discussions
              with the client about working together on a project to implement the proposed solutions.
              <br /><b>Tools used:</b> Microsoft Word.
            </>,
            <>
              Collaborated with a senior software engineer to design and implement a dashboard for organisational chart
              visualisation of the AMRC along with adding a feature to generate a difference report indicating new personnel
              to be added to the system and old staff to be removed, improving data accessibility and decision-making processes.
              <br /><b>Tools used:</b> Vue, Next.js, Bulma CSS, Figma.
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
              <br /> <b>Tools used:</b> Google Sites, HTML, CSS.
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
              - Currently a placement student going on to final year in 2025-26.
              <br />
              - I specialize in machine learning and software engineering, with a focus on developing innovative solutions to real-world problems.
              <br />
              - My coursework includes advanced topics in artificial intelligence, data science, and software development methodologies.
              <br />
              - I have also completed projects in areas such as computer vision, natural language processing, and web development.
              <br />
              - I am actively involved in research projects and internships, where I apply my skills to practical applications.
              <br />
              - Interested in the intersection of technology and healthcare.
            </>
          ],
        },
      ],
    },
    technical: {
      display: true, // set to false to hide this section
    title: "Technical skills",
    skills: [
      {
        title: "Figma",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Building next gen apps with Next.js + Once UI + Supabase.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};


const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,

  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-02.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-03.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-04.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-05.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-06.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-07.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-08.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-09.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-10.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-11.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/img-12.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-13.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/img-14.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, home, about, work, gallery };
