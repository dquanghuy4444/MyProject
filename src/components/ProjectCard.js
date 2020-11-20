import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import "./ProjectCard.css";

const ProjectCard = (props) => {
  return (
    <div>
      <Card className="mt-4 mb-4 project-card">
        <Row>
            <Col sm="12" lg="5" xs="12">
                <div className="imgbg-projectcard">
                  <img src={ process.env.PUBLIC_URL + "/images/background cards/1.jpg" } alt="Card image cap" width="100%" />
                </div>
                <div className="state">
                  <img src={ process.env.PUBLIC_URL + "/completed.png" } alt="Card image cap" width="10%" />
                  <img src={ process.env.PUBLIC_URL + "/www.png" } alt="Card image cap" width="10%" />
                </div>
                <div className="tech">
                  <img src={ process.env.PUBLIC_URL + "/images/tech icons/reactjs.png" } alt="Card image cap" width="8%" />
                  <img src={ process.env.PUBLIC_URL + "/images/tech icons/api.png" } alt="Card image cap" width="8%" />
                </div>   
            </Col>
            <Col sm="12" lg="7" xs="12">
                <CardBody>
                    <CardTitle tag="h5">Wishy wishy</CardTitle>
                    <CardSubtitle tag="h6" className="mb-2 text-muted">
                      Tự thiết kế
                    </CardSubtitle>
                    <CardSubtitle tag="p" className="mb-2 text-muted">
                      Đã hoàn thành
                      <span style={{float : "right"}}>
                        Thời gian : 50 giờ 
                      </span>
                    </CardSubtitle>
                    <h6>ReactJS</h6>
                    <CardText>
                      Some quick example text to build on the card title and make up the bulk of the card's content.
                    </CardText>
                    <a href="" className="btn btn-success">
                      <i class="fas fa-location-arrow"></i>
                      {" "}
                      Chuyển tới trang
                    </a>
                    <a href="" className="btn btn-primary ml-2">
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