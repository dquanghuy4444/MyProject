import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import "./ProjectCard.css";

const ProjectCard = ({project}) => {
  return (
    <div>
      <Card className="mt-4 mb-4 project-card ani-lefttoright-projectcard">
        <Row>
            <Col sm="12" lg="5" xs="12">
                <div className="imgbg-projectcard">
                  <img src={ process.env.PUBLIC_URL + "/images/background cards/" + project.imgBg } alt="Card image cap" width="100%" />
                </div>
                <div className="state">
                  {
                    project.wasCompleted && (
                      <img src={ process.env.PUBLIC_URL + "/completed.png" } alt="Card image cap" width="10%" />
                    )
                  }
                  {
                    project.wasPublish && (
                      <img src={ process.env.PUBLIC_URL + "/www.png" } alt="Card image cap" width="10%" />
                      )
                  }
                </div>
                <div className="tech">
                  {
                    project.imgTech.map((img , index) =>
                      <img src={ process.env.PUBLIC_URL + "/images/tech icons/" + img } alt="Card image cap" width="8%" />
                    )
                  }
                </div>   
            </Col>
            <Col sm="12" lg="7" xs="12">
                <CardBody>
                    <CardTitle tag="h5">
                      { project.name }
                    </CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                      { project.state === 0 ? "Tự thiết kế" : "Sao chép từ tác giả khác"}
                    </CardSubtitle>
                    <CardSubtitle tag="span" className="mb-2 text-muted">
                      {
                        project.wasCompleted ? (
                          <>
                            <>Đã hoàn thành</>
                            <span style={{float : "right"}}>
                              Thời gian : { project.time }
                            </span>
                          </>
                        ) : (
                          <p>Đang hoàn thành</p>
                        )
                      }

                    </CardSubtitle>
                    <h6>
                      { project.tech }
                    </h6>
                    <CardText>
                      { project.description }
                    </CardText>
                    {
                      project.wasPublish && (
                        <a href={ project.linkPublicWeb } target="_blank" className="btn btn-success mr-2">
                          <i className="fas fa-location-arrow"></i>
                          {" "}
                          Chuyển tới trang
                        </a>
                      )
                    }
                    <a href={ project.linkSourceCode } target="_blank" className="btn btn-primary">
                      <i className="fab fa-github"></i>
                      {" "}
                      Source Code
                    </a> 
                </CardBody>    
            </Col>
        </Row>
      </Card>
    </div>
  );
};

export default ProjectCard;