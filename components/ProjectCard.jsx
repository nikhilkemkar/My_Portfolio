"use client"
import Image from 'next/image'

import React from 'react'
import Tilt from "react-parallax-tilt";

const ProjectCard = ({ project }) => {

  return (
    <Tilt
      glareEnable={true}
      glareMaxOpacity={0.1}
      glareColor="#ffffff"
      glarePosition="bottom"
      glareBorderRadius="7px"
      className="h-fit"
    >
      <div className='bg-gray-100 rounded-2xl'>
        <Image className="object-cover w-full h-[170px] rounded-t-2xl" src={project.imgurl} height="1000" width="1000" alt="project img" />
        <div className='p-4'>
          <div className="flex justify-between items-center">
            <h3 className='text-xl font-bold my-3 hover:text-[#aea2e8]'>{project.name}</h3>
            {project.link && (
              <a
                className="rounded text-xs font-bold me-2 px-2.5 py-0.5 bg-green-900 dtext-green-300"
                href={project.link}
                target="_blank"
              >
                Live
              </a>
            )}
          </div>
          <p className=' opacity-80'>
            {project.desc}
          </p>
          <div className='flex-between mt-3 gap-1'>
            <div className='flex gap-2'>
              {
                project?.tech?.map((t, i) => {
                  return <div key={i} className='p-2 bg-gray-200 rounded-md w-fit'>
                    <Image className='rounded-sm' width={20} height={20} key={i} src={t} alt="stack icon" />
                  </div>
                })
              }
            </div>
            <a
              href={project.github}
              target="_blank"
              className="p-2  text-sm bg-gray-200 hover:bg-gray-300   rounded-md"
            >
              Github
            </a>

          </div>


        </div>
      </div>
    </Tilt>
  )
}

export default ProjectCard
