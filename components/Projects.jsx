import React from 'react'
import ProjectCard from './ProjectCard'
import { project } from '@/public/assets/data/data'

const Projects = () => {

    return (
        <section className="max-w-7xl mx-auto relative px-6 lg:px-8 ">
            <h1 className="text-center text-4xl  py-14  font-bold">
                What I&apos;ve built
            </h1>
            <div className=' gap-4 gap-y-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 '>
                {
                    project.map((p) => {
                        return <ProjectCard key={p.imgurl} project={p} />
                    })
                }
            </div>
            <div
                className="absolute inset-x-0 top-[calc(50%-30rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
            >
                <div
                    className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                />
            </div>
           
        </section>
    )
}

export default Projects
