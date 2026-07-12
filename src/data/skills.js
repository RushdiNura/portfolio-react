import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiFlutter,
  SiOpenjdk,
  SiCplusplus,
  SiPython,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
} from 'react-icons/si'
import { VscVscode } from 'react-icons/vsc'

export const skillGroups = [
  {
    id: 'frontend',
    label: 'Frontend',
    path: '~/stack/frontend',
    items: [
      { name: 'HTML', icon: SiHtml5, level: 95 },
      { name: 'CSS', icon: SiCss, level: 92 },
      { name: 'JavaScript', icon: SiJavascript, level: 94 },
      { name: 'TypeScript', icon: SiTypescript, level: 85 },
      { name: 'React', icon: SiReact, level: 93 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 90 },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    path: '~/stack/backend',
    items: [
      { name: 'Node.js', icon: SiNodedotjs, level: 92 },
      { name: 'Express.js', icon: SiExpress, level: 90 },
    ],
  },
  {
    id: 'database',
    label: 'Database',
    path: '~/stack/database',
    items: [
      { name: 'MongoDB', icon: SiMongodb, level: 90 },
      { name: 'MySQL', icon: SiMysql, level: 83 },
    ],
  },
  {
    id: 'mobile',
    label: 'Mobile',
    path: '~/stack/mobile',
    items: [
      { name: 'Flutter', icon: SiFlutter, level: 82 },
      { name: 'React Native', icon: SiReact, level: 88 },
    ],
  },
  {
    id: 'languages',
    label: 'Languages',
    path: '~/stack/languages',
    items: [
      { name: 'JavaScript', icon: SiJavascript, level: 94 },
      { name: 'TypeScript', icon: SiTypescript, level: 85 },
      { name: 'Java', icon: SiOpenjdk, level: 78 },
      { name: 'C++', icon: SiCplusplus, level: 75 },
      { name: 'Python', icon: SiPython, level: 80 },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    path: '~/stack/tools',
    items: [
      { name: 'Git', icon: SiGit, level: 90 },
      { name: 'GitHub', icon: SiGithub, level: 90 },
      { name: 'VS Code', icon: VscVscode, level: 92 },
      { name: 'Postman', icon: SiPostman, level: 85 },
      { name: 'Figma', icon: SiFigma, level: 78 },
    ],
  },
]
