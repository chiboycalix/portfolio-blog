import React from 'react';
import { Header, Emoji, Icon } from '../../components';
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
            <div className="line"></div>
            <div className="bio__message">
              <h2>
                I’m Nonso, a frontend developer currently based in Nigeria.
              </h2>
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
          </div>

          <div className="social__icons">
            <Icon symbol={<FiGithub />} />
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
