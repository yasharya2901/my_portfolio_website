import React from 'react'
import ProjectCard from '../ProjectCard'
import { FaPython, FaServer } from 'react-icons/fa'
import { title } from 'process'
import { TbWorld } from 'react-icons/tb'

let myProjects = [
    {
        title: 'Custom Multithreaded HTTP Server',
        description: 'Implemented a multithreaded application to understand TCP and HTTP/1.1 protocol design. Because who needs sleep when you can handle concurrent connections?',
        icon: FaServer,
        stacks: ['Java', 'Multithreading', 'HTTP', 'TCP/IP'],
        projectLink: "https://github.com/yasharya2901/codecrafters-http-server-java/"
    },
    {
        title: 'Custom DNS Server',
        description: "Built a DNS server from scratch to understand UDP connections and domain name resolution. Because sometimes you need to know what's in a name.",
        icon: TbWorld,
        stacks: ['UDP', 'DNS', 'Networking']
    },
    {
        title: 'Python Price Scrapper',
        description: 'Developed a web scraper to monitor prices of products on e-commerce websites. Because who doesn\'t like a good deal?',
        icon: FaPython,
        stacks: ['Python', 'Web Scraping', 'BeautifulSoup'],
        projectLink: "https://github.com/yasharya2901/Python-Price-Scrapper"
    }
]

function FeaturedProjects() {
  return (
    <div className={`bg-[#171717] font-sans pb-16`}>
        <div id="heading" className={`max-w-5xl mx-auto py-8 px-4`}>
            <div className='text-3xl font-bold text-neutral-50 mb-4'>Featured Projects</div>
            <div className='font-fira text-neutral-500'>{`$ ls -la ~/projects/`}</div>
        </div>

        <div className='grid md:grid-cols-2 gap-4 md:gap-6 lg:grid-cols-3 justify-center md:max-w-5xl mx-auto px-4'>
            {myProjects.map((project, index) => (
                <ProjectCard key={index} title={project.title} description={project.description} icon={project.icon} stacks={project.stacks} projectLink={project.projectLink} />
            ))}
        </div>
        <div className='flex flex-col pt-10 max-w-5xl px-4 font-fira text-sm text-neutral-500 items-center justify-center mx-auto'>
          <div>{`/* These projects are like my children - they keep me up at night and have bugs I can't explain */`}</div>
        </div>
    </div>
  )
}

export default FeaturedProjects