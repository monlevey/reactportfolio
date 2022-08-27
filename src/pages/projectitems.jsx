import React from "react";
import "../components/css/portfolio.css";


//project data as props
function Project({
  Url,
  Repository,
  imgUrl,
  ProjectName,
  ProjectDescription,
  Technology,
}) {
  return (
    <div className="project_item">
      <div className="imgcontainer">
        <img src={require(`${imgUrl}`)} className="image" alt={ProjectName} />{" "}
          <div className="text">
                <a target="_blank" href={Repository}>
                </a>
                <a target="_blank" href={Url}>
                </a>
         </div>
      </div>

      <h4>{ProjectName}</h4>
      <p>
        <div className="descriptionClass">{ProjectDescription}</div>
      </p>
      <p>
        <div className="descriptionClass">{Technology}</div>
      </p>
    </div>
  );
}

export default Project;

