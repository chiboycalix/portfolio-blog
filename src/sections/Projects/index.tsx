import './styles.scss';
import { SectionTitle, SectionIntro, Project } from '../../components';
import SchoolnNg from '../../assets/schoolng.svg';
import AWF from '../../assets/awf.svg';
import GSI from '../../assets/gsi.svg';

const Projects = () => {
  return (
    <div className="projects__wrapper">
      <SectionTitle sectionNumber="02" sectionTitle="Projects" />
      <div className="projects__section--intro">
        <SectionIntro sectionIntroText="Here’s a selection of some of the projects I’ve worked on" />
      </div>
      <div className="project__section--wrapper">
        <Project
          projectImg={SchoolnNg}
          projectTitle="Frontend"
          projectName="Schooln.ng"
          projectStacks={[
            'html',
            'css',
            'React',
            'Redux',
            'TypeScript',
            'Ant design',
            'webpack',
          ]}
          projectLink="https://www.google.com"
          projectDescription="A startup that connects students from different universities for information sharing"
          projectImgPosition="right"
        />
      </div>
      <div className="project__section--wrapper">
        <Project
          projectImg=""
          projectTitle="Frontend"
          projectName="CentralPay"
          projectStacks={[
            'html',
            'css',
            'React',
            'Redux',
            'TypeScript',
            'Ant design',
            'webpack',
          ]}
          projectLink="https://www.google.com"
          projectDescription="An online payment solution used by ecommerce merchants for accepting payment for goods and services. Accessed through a merchant's website"
          projectImgPosition="left"
        />
      </div>
      <div className="project__section--wrapper">
        <Project
          projectImg={AWF}
          projectTitle="Frontend"
          projectName="Approval Workflow"
          projectStacks={[
            'html',
            'css',
            'React',
            'Redux',
            'TypeScript',
            'Ant design',
            'webpack',
          ]}
          projectLink="https://www.google.com"
          projectDescription="A solution that uses telcom services providers USSD system for making payment for products bought or services rendered. A monitoring portal was built for transaction monitoring and user management"
          projectImgPosition="right"
        />
      </div>

      <div className="project__section--wrapper">
        <Project
          projectImg={GSI}
          projectTitle="Frontend"
          projectName="GSI"
          projectStacks={[
            'html',
            'css',
            'React',
            'Redux',
            'TypeScript',
            'Ant design',
            'webpack',
          ]}
          projectLink="https://www.google.com"
          projectDescription="A solution to monitor and penalize loan payment defaulters. A monitoring portal was built to manage transactions and loan defaulters"
          projectImgPosition="left"
        />
      </div>
    </div>
  );
};

export default Projects;
