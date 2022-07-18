import React from "react";
//importing data from project.json
import ProjectData from "../data/projectdata.json";
import Project from "../Project";

import "./css/projects.module.css";
export default function PortFolio() {
  return (
    <div className="ProjectItem">
      {/* generate project component for each item in projectData array */}
      {ProjectData.map((item, i) => (
        <Project
          key={i}
          Url={item.Url}
          Repository={item.Repository}
          imgUrl={item.imgUrl}
          ProjectName={item.ProjectName}
          ProjectDescription={item.ProjectDescription}
          Technology={item.Technology}
        ></Project>
      ))}
    </div>
  );
}