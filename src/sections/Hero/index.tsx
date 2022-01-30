import { Header, Emoji, Icon, SectionIntro } from '../../components';
import { FiGithub, FiLinkedin, RiTwitterLine, BsMouse } from 'react-icons/all';
import './styles.scss';


const Hero = () => {
  return (
    <section className="hero">
      <Header />
      <section className="hero__content">
        <div className="greeting__section">
          <h1>
            {'{H}ello'} <Emoji symbol="👋" label="waving hand" />
          </h1>
          <div className="intro__section">
            <SectionIntro sectionIntroText="I’m Nonso, a frontend developer currently based in Nigeria." />
              <p>
                I’m a software engineer specializing in building websites with a
                focus on accessibility. Currently, I work on the engineering
                team at{' '}
                <a
                  href="https://www.nibss-plc.com.ng/"
                  target="_blank"
                  rel="noreferrer">
                  NIBSS
                </a>
                .
              </p>
          </div>

          <div className="social__icons">
            <Icon symbol={<FiGithub />}/>
            <Icon symbol={<FiLinkedin />} />
            <Icon symbol={<RiTwitterLine />} />
          </div>
          <div className="hero__footer__section">
            <div className="line"></div>
            <p>
              <Icon symbol={<BsMouse />} />
              <span>Scroll Down</span>
            </p>
          </div>
        </div>
        <div className="stack__section"></div>
      </section>
    </section>
  );
};

export default Hero;
