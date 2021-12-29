import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = ({ projects }) => {
    return (
        <div>
            <h1 className="flex flex-wrap space-x-4 justify-center">My projects</h1>
            <div class="flex flex-wrap space-x-4 justify-center">
            {projects.map((project) => (
                <ProjectCard project={project} />
            ))}
            </div>
        </div>
    );
};

export default Projects;