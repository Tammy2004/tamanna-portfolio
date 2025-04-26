// File: components/TechIcons.tsx

import {
  SiPython,
  SiRubyonrails,
  SiCplusplus,
  SiHaskell,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiTypescript,
  SiFlutter,
  SiAngular,
  SiWordpress,
  SiWix,
  SiFigma,
  SiLinux,
  SiAndroid,
  SiIos,
  SiMysql,
  SiOracle,
  SiTensorflow,
  SiKeras,
  SiPytorch,
  SiScikitlearn,
  SiOpencv,
  SiGit,
  SiUml,
} from "react-icons/si";

import { FaJava, FaWindows } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";
import { SiGoogleappsscript } from "react-icons/si";



const createIconBlock = (title: string, icons: JSX.Element[]) => (
  {
    title,
    description: icons.map((icon, i) => (
      <div key={i} className="hover:scale-110 transition-transform text-3xl">
        {icon}
      </div>
    )),
    images: [],
  }
);


export const techSkills = [
  createIconBlock("Programming Languages", [
    <SiPython title="Python" />, <FaJava title="Java" />, <SiRubyonrails title="Ruby with Sinatra" />,
    <SiCplusplus title="C++" />, <TbBrandCSharp title="C#" />, <SiHaskell title="Haskell" />
  ]),

  createIconBlock("Web Development", [
    <SiHtml5 title="HTML5" />, <SiCss3 title="CSS3" />, <SiJavascript title="JavaScript" />,
    <SiReact title="React" />, <SiTypescript title="TypeScript" />, <SiFlutter title="Flutter" />,
    <SiAngular title="Angular" />, <SiGoogleappsscript title="Google Sites" />, <SiWordpress title="WordPress" />, <SiWix title="Wix" />,
    <SiPython title="Python" />
  ]),

  createIconBlock("UI Design", [<SiFigma title="Figma" />]),

  createIconBlock("Operating Systems", [
    <FaWindows title="Windows" />, <SiLinux title="Linux" />, <SiAndroid title="Android" />, <SiIos title="iOS" />
  ]),

  createIconBlock("Database Systems", [<SiMysql title="SQL" />, <SiOracle title="Oracle" />]),

  createIconBlock("Machine Learning Tools", [
    <SiTensorflow title="TensorFlow" />, <SiKeras title="Keras" />, <SiPytorch title="PyTorch" />, <SiScikitlearn title="Scikit-learn" />
  ]),

  createIconBlock("Computer Vision", [<SiOpencv title="OpenCV" />]),

  createIconBlock("Version Control", [<SiGit title="Git" />]),

  createIconBlock("Software Development Methodologies", [<SiUml title="UML" />]),

  // For Data Structures & Algorithms, use text since icons don’t exist for concepts like BSTs, Sorting, etc.
  {
    title: "Data Structures and Algorithms",
    description: <>BSTs | Sorting | Search | Dynamic Programming</>,
    images: [],
  },
];
