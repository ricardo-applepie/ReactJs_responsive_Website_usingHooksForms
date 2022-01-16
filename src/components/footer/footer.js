import React from 'react';
import './footer.scss';
import footerLogo from '../../images/101_logo.png';
import Button from '../button/button';
import { Link } from 'react-router-dom';
import { formerPageUrls } from '../../helper/helper';

function Footer({ hidegetstartedtoday }) {
  return (
    <div className="footer-container">
      <div className="footer container">
        <div
          className={`footer-get-started-today_wrapper ${hidegetstartedtoday}`}
        >
          <h2 className="footer-get-started-today-title">
            Get Started Today for Free
          </h2>
          <div className="footer-get-started-today">
            <p>
              Everything you need for professional-grade data extraction &
              reporting from 100’s of platforms.
            </p>
          </div>
          <div>
            <Button buttonStyle="green-btn" buttonLink="/register">
              Sign Up Free
            </Button>
          </div>
        </div>
        <div className="footer__contents__wrapper">
          <div className="footer__logo-wrapper">
            <img alt="" className="footer__logo" src={footerLogo} />
            <div>
              <p className="footer-text">
                <span className="footer-text-span">© 101metrics</span>
                <br />
                <br />
                <span>
                  <a href={formerPageUrls.privacy}>Privacy</a>
                  <a href={formerPageUrls.terms}>· Terms</a>
                  <a href={formerPageUrls.security}>· Security</a>
                </span>
              </p>
            </div>
          </div>
          <div className=" footer__list">
            <div>
              <ul className=" footer__list-items">
                <li className=" footer__list-item">
                  <Link> Connect</Link>
                </li>
                <li className=" footer__list-item">
                  <a href={formerPageUrls.connect}>Feedback</a>
                </li>
                <li className=" footer__list-item">
                  <a href={formerPageUrls.expert}>Book a Demo </a>
                </li>
                <li className=" footer__list-item">
                  <a href={formerPageUrls.about}>About Us</a>
                </li>
                <li className=" footer__list-item">
                  <a href={formerPageUrls.blog}>Blog</a>
                </li>
                <li className=" footer__list-item">
                  <a href={formerPageUrls.expert}>Twitter</a>
                </li>
              </ul>
            </div>
            <div>
              <ul className=" footer__list-items">
                <li className=" footer__list-item">
                  <a href={formerPageUrls.features}>Product</a>
                </li>
                <li className=" footer__list-item">
                  <a href={formerPageUrls.features}>Features</a>
                </li>
                <li className=" footer__list-item">
                  <a href={formerPageUrls.plan}>Pricing</a>
                </li>
                <li className=" footer__list-item">
                  <a href={formerPageUrls.caseStudies}>Use Cases</a>
                </li>
                <li className=" footer__list-item">
                  <Link>Integrations</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Footer;
