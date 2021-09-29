import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Robin Young's personal website. Graduate class of 2022 in Stony Brook School."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2>Welcome to My personal website</h2>
          <p>
            Feel free to read more <Link to="/about">about me</Link>,
            or you can check out my {' '}
            <Link to="/resume">resume</Link>, {' '}
            <Link to="/projects">projects</Link>, {' '}
            view <Link to="/stats">site statistics</Link>, {' '}
            or <Link to="/contact">contact</Link> me.
            {/* <h4>Some Games to play while learning about me</h4> */}
            {/* <iframe src="http://www.freeonlinegames.com/embed/144157" width="800" height="480" title="Some Games" frameBorder="no" scrolling="no">p</iframe> */}
            {/* <iframe src="http://www.freeonlinegames.com/embed/144942" width="640" height="800" title="game" frameBorder="no" scrolling="no">p</iframe> */}
            {/* <iframe src="http://www.freeonlinegames.com/embed/145059" width="960" height="540" title="games" frameBorder="no" scrolling="no">p</iframe> */}
            {/* <p> Source for games available <a href="https://www.freeonlinegames.com/?ref=icon">here</a>.</p> */}
          </p>
        </div>
      </header>
      <p> Source available <a href="https://github.com/mldangelo/personal-site">here</a>.</p>
    </article>
  </Main>
);

export default Index;
