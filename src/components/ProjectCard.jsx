import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projectUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a
        href={projectUrl}
        target="_blank"
        rel="noreferrer"
        className="img-link"
      >
        <div className="proj-imgbx">
          <img src={imgUrl} alt="project" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
