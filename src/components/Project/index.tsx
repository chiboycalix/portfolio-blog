/** @format */
import './project.scss';
import { Icon } from '../../components';
import {BsArrowUpRight} from 'react-icons/all'

interface IProps {
  projectImg: string;
  projectName: string;
  projectTitle: string;
  projectStacks: string[];
  projectLink: string;
  projectDescription: string;
  projectImgPosition: string;
}

const Project = ({
  projectImg,
  projectTitle,
  projectName,
  projectStacks,
  projectLink,
  projectDescription,
  projectImgPosition,
}: IProps) => {
  return (
    <div
      className={`project__wrapper  ${
        projectImgPosition === 'left' ? 'row__reverse' : ''
      }`}>
      <div className="project__texts">
        <p className="project__title">{projectTitle}</p>
        <h2 className="project__name">{projectName}</h2>
        <p className="project__description">{projectDescription}</p>
        <div className="project__stacks">
          {projectStacks.map((s) => {
            return <span>{s} | </span>;
          })}
        </div>

        <div className="project__Link--wrapper">
          <a href={projectLink}>View Project</a>
          <Icon symbol={<BsArrowUpRight />} color="#2A9D8F" />
        </div>
      </div>
      <div className="project__img">
        <img src={projectImg} alt="project-pics" />
      </div>
    </div>
  );
};

export default Project;
