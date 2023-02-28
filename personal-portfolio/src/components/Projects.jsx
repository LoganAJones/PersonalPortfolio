import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/PQEapp.png";
import projImg2 from "../assets/img/lipscomb+.png";
import projImg3 from "../assets/img/rmndapp.png";
import projImg4 from "../assets/img/socialapp.png";
import projImg5 from "../assets/img/personalapp.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Nissan PQE App",
      description: "Nissan Engineer Vehicle Procurement Service | Team Lead",
      imgUrl: projImg1,
    },
    {
      title: "Lipscomb +",
      description: "Design & Development | Team Lead",
      imgUrl: projImg2,
    },
    {
      title: "Rmnd",
      description: "Design & Development: IOS/Web App | Personal Project",
      imgUrl: projImg3,
    },
    {
      title: "Social App",
      description: "Basic Social App",
      imgUrl: projImg4,
    },
    {
      title: "Personal Portfolio",
      description: "Design & Development",
      imgUrl: projImg5,
    },
  ];

  const personalProjects = [
    {
      title: "Rmnd",
      description: "Design & Development: IOS/Web App | Personal Project",
      imgUrl: projImg3,
    },
    {
      title: "Social App",
      description: "Basic Social App",
      imgUrl: projImg4,
    },
    {
      title: "Personal Portfolio",
      description: "Design & Development",
      imgUrl: projImg5,
    },
  ];

  const schoolProjects = [
    {
      title: "Nissan PQE App",
      description: "Nissan Engineer Vehicle Procurement Service | Team Lead",
      imgUrl: projImg1,
    },
    {
      title: "Lipscomb +",
      description: "Design & Development | Team Lead",
      imgUrl: projImg2,
    },
  ]


  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Listed below are the projects that I have undertaken during my tenure at Lipscomb University, as well as a few personal projects that I have worked on.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="tabs" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">All Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second"> Personal Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">School Projects</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          personalProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          schoolProjects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

export default Projects