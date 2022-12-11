import React from 'react';
import { Link } from 'react-router-dom';

const Projects = ({ project }) => {

    const { project: projectname, livelink, clientlink, serverlink, featureone, featuretwo, featurethree, technologies } = project;

    return (
        <div className='lg:mx-0 mx-5' >
            <div className="card  bg-base-100 shadow-xl lg:hover:scale-125 lg:hover:transition-all ease-in-out hover:duration-500">
                <div className="card-body">
                    <h2 className="card-title">Project Name: {projectname}</h2>
                    <div className='flex gap-2 text-sm' >
                        <a href={livelink} target="_blank" >Live Site </a> <span>||</span>
                        <a href={clientlink} target="_blank"  > Client Side </a> <span>||</span>
                        <a href={serverlink} target="_blank" > Server Side </a>
                    </div>
                    <div>
                        <h1 className='font-bold' >Features:</h1>
                        <div className='text-xs text-slate-400 flex flex-col gap-2 mt-3 ' >
                            <li>{featureone}</li>
                            <li>{featuretwo}</li>
                            <li>{featurethree}</li>
                        </div>
                        <div className='mt-3' >
                            <h1 className='font-bold' >Technologies:</h1>
                            <p className='text-xs text-slate-400 mt-3' >{technologies}</p>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
};

export default Projects; <h1>This is Projects layout</h1>