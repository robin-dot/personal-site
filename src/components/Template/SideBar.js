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
        I am a student in Stony Brook School, and in the graduate class of 2022.
        I was born and raised in Indonesia up until I was 10. Since then I moved to the US, and
        adapted myself to a new environment and a new system to follow
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
