import React from 'react';
import './Content.css';
import { Container } from 'reactstrap';
import ProjectCard from '../components/ProjectCard';

function Content({isDarkMode}) {
  return (
    <Container className="mb-3 mt-4">
          <ProjectCard></ProjectCard>
          <ProjectCard></ProjectCard>
    </Container>
  );
}

export default Content;
