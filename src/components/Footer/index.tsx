/** @format */

import './footer.scss';
import { Icon } from '../../components';
import { BsInstagram, BsTwitter, BsGithub } from 'react-icons/all';
import Hands from '../../assets/hands.svg';

const Footer = () => {
  return (
    <div className="footer__wrapper">
      <div className="footer__left">
        <p className="get__in--touch">Get In Touch</p>
        <h2 className="lets__work--together">Let’s Work Together</h2>
        <p className="contact__me">
          Got a project in mind or have an open position on your team? I would
          love to hear about such opportunity
        </p>
        <p className="contact__email">
          <span>Get me at: </span>{' '}
          <a href="https://github.com/">igwechinonso77@gmail.com</a>
        </p>

        <div className="footer__icons-wrapper">
          <div>
            <Icon symbol={<BsInstagram />} color="#2A9D8F" />
          </div>
          <div>
            <Icon symbol={<BsTwitter />} color="#2A9D8F" />
          </div>
          <div>
            <Icon symbol={<BsGithub />} color="#2A9D8F" />
          </div>
        </div>
      </div>
      <div className="footer__right">
        <img src={Hands} alt="Hands" />
        <p>
          Developed by {'me'} - Designed by {'Deni'}
        </p>
      </div>
    </div>
  );
};
export default Footer;
