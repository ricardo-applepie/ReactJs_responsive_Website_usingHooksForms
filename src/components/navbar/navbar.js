import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.scss';
import Button from '../button/button';
import { formerPageUrls } from '../../helper/helper';

function Navbar({ myRef }) {
  const executeScroll = () => myRef.current.scrollIntoView();
  return (
    <div>
      <div class="container">
        <div class="row align-items-center navbar">
          <div class="col">
            <Link to="/">
              <svg
                className="logo__svg"
                id="Layer_1"
                data-name="Layer 1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 229.33 46.89"
              >
                <defs>
                  <style></style>
                </defs>
                <text class="cls-1" transform="translate(0 32.78)">
                  101
                  <tspan class="cls-2" x="77.24" y="0">
                    Metrics
                  </tspan>
                </text>
              </svg>
            </Link>
          </div>
          <div class="col d-flex navbar__center">
            <div onClick={executeScroll} className="nav__item">
              <Link to="/">Product</Link>{' '}
            </div>
            <div className="nav__item">
              <Link to={formerPageUrls.plan}>Pricing</Link>{' '}
            </div>
            <div className="nav__item">
              <Link to={formerPageUrls.caseStudies}>Customers</Link>{' '}
            </div>
            <div className="nav__item">
              <Link to={formerPageUrls.blog}>Blog</Link>{' '}
            </div>
          </div>
          <div class="col d-flex align-items-center">
            <div className="nav__item">
              <Link to={formerPageUrls.signin}>Sign In </Link>{' '}
            </div>
            <Button
              buttonStyle="default-btn"
              buttonLink={formerPageUrls.signup}
            >
              Sign Up for Free
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
