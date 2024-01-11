import React from "react";
import ProjectBox from "./ProjectBox";
import Ssatu from "../img/satu.png";
import Sdua from "../img/dua.png";
import Stiga from "../img/tiga.png";
import ProjectAnimation from "./ProjectAnimation";

const Projects = () => (
  <div className="project-wrapper">
    <div className="project-title">
      <p className="p-title"> Projects </p>
    </div>
    <div className="project-list">
      <ProjectBox
        visit="https://github.com/Web-1-RPLA/4601-tubes-festra"
        title="Festra Website"
        image={Ssatu}
        text="Designed for a Dormitory application Festra."
      />
      <ProjectBox
        visit="https://github.com/faisalabdulr/LifeNotes.git"
        title="Life Notes"
        image={Sdua}
        text="Website to do list with laravel"
      />
      <ProjectBox
        visit="https://github.com/faisalabdulr/Java_SIBIRU.git"
        title="Sibiru App"
        image={Stiga}
        text="Java desktop GUI application."
      />
    </div>
    <ProjectAnimation />
  </div>
);

export default Projects;
