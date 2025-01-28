import React from "react";
import { Achievement, Skill } from "./paras";
import Me from "./Me";
import data from "../assets/asset.json";
import {
  EducationCard,
  ExperienceCard,
  ProjectCard,
  ResearchCard,
} from "./cards";

const Section = ({ label, id, children }) => {
  return (
    <section id={id} className="section">
      <h1 className="section-heading">{label}</h1>
      <div className="section-content">{children}</div>
    </section>
  );
};

const components = {
  Me,
  Skill,
  Achievement,
  EducationCard,
  ExperienceCard,
  ResearchCard,
  ProjectCard,
};

const Main = ({ sections }) => {
  return (
    <main>
      {sections.map((secItem, index) => {
        const SectionComponent = components[secItem.component];
        return (
          <Section key={index} id={secItem.id} label={secItem.label}>
            {Array.isArray(data[secItem.id]) ? (
              data[secItem.id].map((item, idx) => (
                <SectionComponent item={item} key={idx} />
              ))
            ) : (
              <SectionComponent {...data[secItem.id]} />
            )}
          </Section>
        );
      })}
    </main>
  );
};

export default Main;
