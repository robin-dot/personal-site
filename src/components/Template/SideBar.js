import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/projects/selfie.jpg`} alt="" />
      </Link>
      <header>
        <h2>Robin Young</h2>
        <p><a href="mailto:robinyoungkim@gmail.com">robinyoungkim@gmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hello, I&apos;m Robin, and this is my story.
        I&apos;m a student at Stony Brook School, Class of 2022.
        I was born and raised in Indonesia.
        Currently I&apos;m studying in the US and making
        the most of opportunities in my new environment and system.

      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
    </section>
  </section>
);

export default SideBar;
