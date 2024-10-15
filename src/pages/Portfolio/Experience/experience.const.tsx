import { Skill } from 'components/Card/SkillCard/skill.types';
import { CompanyDetails, ProjectDetails, ProjectType } from './experience.types';

export const EXPERIENCE: (CompanyDetails | ProjectDetails)[] = [
  {
    company: 'Linear GmbH',
    startDate: new Date('2024/10/01'),
    imagePath: '/assets/projects/linear-gmbh.png',
    href: 'https://www.linear.eu/de/home/',
    employmentType: 'experience.linear-gmbh.employmentType',
    projects: [
      {
        nameTextKey: 'experience.linear-gmbh.web-tools.name',
        type: ProjectType.FULL_STACK,
        detailTextKeys: ['experience.linear-gmbh.web-tools.part1'],
        skills: [
          Skill.JAVASCRIPT,
          Skill.TYPESCRIPT,
          Skill.NEXT_JS,
          Skill.MATERIAL_UI,
          Skill.MONGO_DB,
          Skill.REDIS,
          Skill.NODE_JS,
          Skill.GIT_HUB,
        ],
      },
    ],
  },
  {
    company: 'VEDA GmbH',
    startDate: new Date('2021/09/01'),
    imagePath: '/assets/projects/veda-gmbh.png',
    href: 'https://www.veda.net',
    employmentType: 'experience.veda-gmbh.employmentType',
    projects: [
      {
        nameTextKey: 'experience.veda-gmbh.veda-horizon.name',
        type: ProjectType.FULL_STACK,
        detailTextKeys: ['experience.veda-gmbh.veda-horizon.part1', 'experience.veda-gmbh.veda-horizon.part2'],
        skills: [
          Skill.JAVASCRIPT,
          Skill.JAVA,
          Skill.TYPESCRIPT,
          Skill.REACT,
          Skill.MATERIAL_UI,
          Skill.SPRING_BOOT,
          Skill.GIT_HUB,
          Skill.DOCKER,
          Skill.JENKINS,
        ],
      },
      {
        nameTextKey: 'experience.veda-gmbh.nuwork.name',
        type: ProjectType.FULL_STACK,
        detailTextKeys: ['experience.veda-gmbh.nuwork.part1'],
        skills: [
          Skill.JAVASCRIPT,
          Skill.JAVA,
          Skill.TYPESCRIPT,
          Skill.REACT,
          Skill.TAILWIND_CSS,
          Skill.PRISMA,
          Skill.PLAYWRIGHT,
          Skill.NODE_JS,
          Skill.NEST_JS,
          Skill.SPRING_BOOT,
          Skill.GIT_HUB,
          Skill.GIT_LAB,
          Skill.AWS,
        ],
      },
    ],
    endDate: new Date('2024/08/20'),
  },
  {
    company: 'Plagge.IT',
    startDate: new Date('2019/10/01'),
    imagePath: '/assets/projects/plagge-it.png',
    href: 'https://plagge.it',
    employmentType: 'experience.plagge-it.employmentType',
    projects: [
      {
        nameTextKey: 'experience.plagge-it.stock-management.name',
        type: ProjectType.FULL_STACK,
        detailTextKeys: ['experience.plagge-it.stock-management.part1', 'experience.plagge-it.stock-management.part2'],
        skills: [Skill.RUBY_ON_RAILS, Skill.VUE_JS, Skill.GIT_LAB],
      },
      {
        nameTextKey: 'experience.plagge-it.evaluation-tool.name',
        type: ProjectType.FULL_STACK,
        detailTextKeys: ['experience.plagge-it.evaluation-tool.part1'],
        skills: [Skill.RUBY_ON_RAILS, Skill.GIT_LAB],
      },
      {
        nameTextKey: 'experience.plagge-it.roomlight.name',
        type: ProjectType.MICROCONTROLLER,
        detailTextKeys: ['experience.plagge-it.roomlight.part1', 'experience.plagge-it.roomlight.part2'],
        skills: [Skill.ARDUINO, Skill.C_CPP],
      },
    ],
    endDate: new Date('2021/11/30'),
  },
];
