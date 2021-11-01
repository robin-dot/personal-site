import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import VideoCell from '../components/Projects/VideoCell';
import { data, videodata } from '../data/projects';

const Projects = () => (
  <Main
    title="Projects"
    description="Learn About My Projects."
  >
    <article className="post" id="projects">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/projects">Projects</Link></h2>
          <p>Things I&apos;ve done</p>
        </div>
      </header>
      {videodata.map((project) => (
        <VideoCell
          data={project}
          key={project.title}
        />
      ))}
      {data.map((project) => (
        <Cell
          data={project}
          key={project.title}
        />
      ))}
    </article>
  </Main>
);

export default Projects;
