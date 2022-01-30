import './section-intro.scss';
interface IProps {
  sectionIntroText: string;
}

const SectionIntro = ({ sectionIntroText }: IProps) => {
  return (
    <div className="section__intro--wrapper">
      <div className="line"></div>
      <div className="bio">
        <h2>{sectionIntroText}</h2>
      </div>
    </div>
  );
};

export default SectionIntro
