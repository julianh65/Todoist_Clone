import React, {useState} from 'react'
import {useSelectedProjectValue, useProjectsValue} from '../context';

export const Projects = ({activeValue = true}) => {
    const [active, setActive] = useState(activeValue);
    const {setSelectedProjects} = useSelectedProjectValue();
    const {projects} = useProjectsValue();

    return(
        projects &&
        projects.map(project => (
            <li
            key={project.projectId}
            data-doc-id={project.docId}
            data-testid="project-action"
            className={
                active === project.projectId
                ? 'active sidebar__project'
                : 'sidebar__project'
            }
            onKeyDown={() => {
                setActive(project.projectId);
                setSelectedProject(project.projectId);
            }}
            >
                {JSON.stringify(project)}
                </li>

        ))
    )
} 