import React from 'react';
import './Content.css';
import { Button, Container } from 'reactstrap';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../my-infor'

function Content({filter , setFilter}) {

  const showProjects = () =>{
    let result = projects;
    if(filter.favorite){
      result = result.filter((project) =>
        project.isFavorited === true
      )
    }
    if(filter.state !== -1){
      result = result.filter((project) =>
        project.state === filter.state
      )
    }
    if(filter.techid !== -1){
      result = result.filter((project) =>
        project.techid.some(techid => techid === filter.techid)
      )
    }
    if(result.length > 0){
      return result.map((project) =>
        <ProjectCard project={ project } key={ project.id }></ProjectCard>
      )
    }
    return (
      <div className="noproject-area">
        <h4>Chưa có dự án nào phù hợp</h4>
        <Button onClick={ () => setFilter({state:-1,techid:-1})}>
          <i className="fas fa-arrow-circle-left"></i>
          {" "}
          Trở lại
          </Button>
      </div>
    )
  }

  return (
    <Container className="mb-3 mt-4">
      {
        showProjects()
      }
    </Container>
  );
}

export default Content;
