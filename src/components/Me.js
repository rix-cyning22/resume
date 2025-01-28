import React from "react";

const Me = ({ item }) => {
  const { name, role, description, photo, links } = item;
  return (
    <div className="me">
      <div className="card-header">
        <div className="me-data">
          <h3>{name}</h3>
          <h2>{role}</h2>
          <p>{description}</p>
          {links.length > 0 ? (
            <div className="links">
              {links.map((item, idx) => {
                return (
                  <a href={item.url} key={idx}>
                    <img src={item.icon} alt={item.alt} />
                  </a>
                );
              })}
            </div>
          ) : null}
        </div>
        <div className="me-img">
          <img src={photo} alt="My most recent photograph" />
        </div>
      </div>
    </div>
  );
};

export default Me;
