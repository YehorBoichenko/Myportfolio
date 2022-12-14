import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import { ProjectCard } from "./ProjectCard";
import "animate.css";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/nft.png";
import projImg2 from "../assets/img/gym.png";
import projImg3 from "../assets/img/thumbnail.jpg";
import projImg4 from "../assets/img/go-corona.jpg";
import projImg5 from "../assets/img/britlex.jpg";
import projImg6 from "../assets/img/halloween.png";
import projImg7 from "../assets/img/helleng.jpg";
import projImg8 from "../assets/img/webstudio.jpg";
import projImg9 from "../assets/img/Filmoteka.jpg";
import projImg10 from "../assets/img/spacex.jpg";
import projImg11 from "../assets/img/React app.png";
import projImg12 from "../assets/img/ProTest.png";

export const Projects = () => {
  const landings = [
    {
      title: "NFT",
      description: "Landing page for NFT marketplace",
      imgUrl: projImg1,
      projectUrl: "",
    },
    {
      title: "Crystall Fitness",
      description: "Landing page for the gym",
      imgUrl: projImg2,
      projectUrl: "https://yehorboichenko.github.io/Gym-Website/",
    },
    {
      title: "Photographer Portfolio",
      description: "Landing page for photgrapher",
      imgUrl: projImg3,
      projectUrl: "",
    },
    {
      title: "Go-Corona",
      description: "Simple and beatiful landing page",
      imgUrl: projImg4,
      projectUrl: "",
    },
    {
      title: "Britlex Language School",
      description: "Design & Development",
      imgUrl: projImg5,
      projectUrl: "",
    },
    {
      title: "Halloween Party",
      description: "Landing page in Halloween thematics",
      imgUrl: projImg6,
      projectUrl: "",
    },
  ];
  const multipage = [
    {
      title: "Hellish English School",
      description: "Adaptive website for the English language school.",
      imgUrl: projImg7,
      projectUrl: "https://yehorboichenko.github.io/crazy-bears/",
    },
    {
      title: "Webstudio Website",
      description: "An adaptive and responsive web-site.",
      imgUrl: projImg8,
      projectUrl: "",
    },
    {
      title: "Filmoteka",
      description:
        "A responsive web-site for searching movies with theme swithcer",
      imgUrl: projImg9,
      projectUrl: "",
    },
    {
      title: "Space-X Clone",
      description: "Multi-page website inspired by Space-X ",
      imgUrl: projImg10,
      projectUrl: "",
    },
  ];
  const apps = [
    {
      title: "Kapusta App",
      description: "Financial web-app for monitoring expenses and income",
      imgUrl: projImg11,
      projectUrl: "",
    },
    {
      title: "Pro Test",
      description: "Quiz for QA developers",
      imgUrl: projImg12,
      projectUrl: "",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Recent Works</h2>
                  <p>
                    Below you can see the projects in the creation of which I took an
                    active part. These are not all my works! For obvious
                    reasons, I cannot show all the commercial projects in which
                    I participated.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Landing pages</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">
                          Multi-pages websites
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Applications</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {landings.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {multipage.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {apps.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                        {/* <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Cumque quam, quod neque provident velit, rem
                          explicabo excepturi id illo molestiae blanditiis,
                          eligendi dicta officiis asperiores delectus quasi
                          inventore debitis quo.
                        </p> */}
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="sharp"
      ></img>
    </section>
  );
};
