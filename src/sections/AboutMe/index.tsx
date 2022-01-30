import React from 'react';
import './styles.scss';
import SectionTitle from '../../components/SectionTitle';
import DisplayPicture from '../../assets/display-picture.jpg';

const AboutMe = () => {
  return (
    <div className="about__me">
      <div className="about__me__message">
        <SectionTitle sectionNumber="01" sectionTitle="About Me" />
        <div className="about__me__bio">
          <p>
            In consectetuer turpis ut velit. Praesent metus tellus, elementum
            eu, semper a, adipiscing nec, purus. Vestibulum ante ipsum primis in
            faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui
            quis mi consectetuer lacinia. Fusce neque. Curabitur nisi.
            Suspendisse nisl elit, rhoncus eget, elementum ac, condimentum eget,
            diam. Phasellus magna. Duis arcu tortor, suscipit eget, imperdiet
            nec, imperdiet iaculis, ipsum. Maecenas egestas arcu quis ligula
            mattis placerat. Suspendisse pulvinar, augue ac venenatis
            condimentum, sem libero volutpat nibh, nec pellentesque velit pede
            quis nunc
          </p>
        </div>
      </div>
      <div className="empty__section">
        <div className="profile__pics--wrapper">
          <img src={DisplayPicture} alt="profile-pics" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
