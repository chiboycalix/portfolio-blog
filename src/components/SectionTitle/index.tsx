import './section-title.scss';

interface IProps {
  sectionNumber: string;
  sectionTitle: string;
}
const SectionTitle = ({ sectionNumber, sectionTitle }: IProps) => {
  return (
    <div className="section-title-wrapper">
      <h1 className="section-number">{sectionNumber}</h1>
      <p className="section-title">{sectionTitle}</p>
    </div>
  );
};

export default SectionTitle;
