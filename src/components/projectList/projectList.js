import React from 'react'
import './projectList.css'
import Project from '../project/project'
import {projects} from '../../data'

const projectList = () => {
    return (
        <div className="container-project-list">
            <div className="project-list-text">
                <h1 className="project-list-title"> Creates & Manage</h1>
                <p className="project-list-desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat duis aute irure dolor in reprehende.
                </p>
            </div>
            <div className="project-list-items">
                {projects.map((item)=>(
                <Project key={item.id} img={item.img} link={item.link} />
                ))}
            </div>
        </div>
    )
}

export default projectList
