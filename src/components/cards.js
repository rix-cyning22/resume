import React, { useState } from "react";

const Card = ({ title, toggleTitle = null, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="card-card">
      {isOpen ? (
        <>
          <div className="card-header">
            <h3>{title}</h3>
            <button className="button" onClick={toggleOpen}>
              Hide Details
            </button>
          </div>
          {children}
        </>
      ) : (
        <>
          <div className="card-header">
            {toggleTitle ? (
              <p
                className="card-institute"
                dangerouslySetInnerHTML={{ __html: toggleTitle }}
              />
            ) : (
              <p className="card-institute">{title}</p>
            )}
            <button className="button" onClick={toggleOpen}>
              Show Details
            </button>
          </div>
        </>
      )}
    </div>
  );
};

const EducationCard = ({ item }) => {
  const hidden = `<b>${item.degree}</b> in <b>${item.in}</b> at <i>${item.institute}</i>`;
  return (
    <Card title={item.degree} toggleTitle={hidden}>
      <div className="card-header">
        <h4>{item.instituteName}</h4>
        <div className="card-dates">
          <p>
            <strong>Duration:</strong> {item.start} - {item.end}
          </p>
          {!item.passed && <div className="ongoing">Ongoing</div>}
        </div>
      </div>
      {item.additional_info && (
        <p className="card-institute">{item.additional_info}</p>
      )}
      <p className="card-institute">
        <i>{item.institute}</i>
      </p>
      {Object.entries(item.grades).map(([key, value], idx) => (
        <p key={idx}>
          <strong>{key}:</strong> {value}
        </p>
      ))}
      {item.gradesheet_link && (
        <a
          href={item.gradesheet_link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Download Gradesheet
        </a>
      )}
    </Card>
  );
};

const ExperienceCard = ({ item }) => {
  const hidden = `<b>${item.role}</b> at <b>${item.institute}</b>, <i>${item.location}</i>`;
  return (
    <Card title={item.role} toggleTitle={hidden}>
      <p className="card-institute">
        <i>{item.institute}</i>
      </p>
      <div className="card-dates">
        <p>
          <strong>Duration:</strong> {item.start} - {item.end}
        </p>
        {item.ongoing && <div className="ongoing">Ongoing</div>}
      </div>
      <p className="card-institute">
        <strong>Location: </strong>
        {item.location}
      </p>
      <p className="card-details">{item.description}</p>
    </Card>
  );
};

const ResearchCard = ({ item }) => {
  return (
    <Card title={item.title}>
      <div className="card-guide">
        <p>
          <b>Guide: {item.guide.name}</b>
          <br />
          {item.guide.post} at {item.guide.location}
          <br />
          {item.guide.link && <a href={item.guide.link}>Visit</a>}
        </p>
      </div>
      <div className="card-description">
        <p>{item.description}</p>
      </div>
    </Card>
  );
};

const ProjectCard = ({ item }) => {
  return (
    <Card title={item.title}>
      <p
        className="card-institute"
        dangerouslySetInnerHTML={{ __html: item.description }}
      />
      {item.links.length > 0 && (
        <div className="list">
          <p>Learn More at: </p>
          {item.links.map((link, index) => (
            <a
              href={link.url}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={link.type_img} alt="Repo for the Project" />
            </a>
          ))}
        </div>
      )}
    </Card>
  );
};

export { EducationCard, ExperienceCard, ResearchCard, ProjectCard };
