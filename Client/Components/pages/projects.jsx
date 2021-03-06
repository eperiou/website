import React from 'react';
import projectdata from '../assets/projectdata';
import Project from './project';

const Projects = () => (
  <main className="projectspage">
    {projectdata.data.map((project, ind) =>
      <Project projectnumber={ind} project={project} key={project.title} />)}
  </main>
);

export default Projects;
