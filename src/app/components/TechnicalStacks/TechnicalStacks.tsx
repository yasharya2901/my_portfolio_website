import React from 'react'
import StackCards from '../StackCards'
import { HiOutlineTerminal } from 'react-icons/hi'
import LanguageTag from '../LanguageTag'
import { PiFlask } from 'react-icons/pi'
import { MdWeb } from 'react-icons/md'
import { LiaToolsSolid } from 'react-icons/lia'

const programmingLanguages = [
    {tag: 'Go', comment: "// My daily driver"},
    {tag: 'Java', comment: "// For when I miss semicolons"},
    {tag: 'Python', comment: "// Because readability counts"},
    {tag: 'C++', comment: "// For memory lane trips"},
    {tag: 'JavaScript', comment: "// Because everything is an object"}
]

const fundamentalBackendConcept = [
    "Multithreading",
    "TCP/IP",
    "HTTP",
    "UDP",
    "Operating Systems",
    "Cloud Computing",
    "Databases",
    "Networking"
]

const frontendTechnologies = [
    "HTML",
    "CSS",
    "DOM Manipulation",
    "React",
    "React Native",
    "Flutter",
    "Swift UI",

]

const toolsAndFrameworks = [
    "Go-Gin",
    "Django",
    "Spring Boot",
    "Express",
    "Docker",
    "PostgreSQL",
    "MongoDB",
    "AWS",
    "GCP",
    "Azure",
    "Kubernetes",
    "Jenkins",
    "Git",
]



function TechnicalStacks() {
  return (
    <div className={`bg-[#171717] p-4 pb-20`}>
        <div className={`flex flex-col items-center my-4`}>
            <h2 className={`text-white font-sans text-3xl font-bold my-4`}>Technical Stacks</h2>
            <p className={`text-neutral-400 my-2`}>{`// The tools I debug with`}</p>
        </div>

        <div className={`grid md:grid-cols-2 gap-4 md:gap-6 justify-center md:max-w-5xl mx-auto`}>

            <StackCards 
                title='Programming Languages' 
                icon={HiOutlineTerminal}
                content={<div className='text-neutral-300'>
                    <div>
                        <span className={`text-green-400`}>const</span><span>{` languages = [`}</span>
                    </div>
                    <div className='ml-8'>
                        {programmingLanguages.map((obj, index) => (
                            <div key={index} className='m-1'>
                                <LanguageTag lang={obj.tag} textColor='text-green-300' backgroundColor='bg-neutral-700' /> <span className={`text-sm text-neutral-400`}>{obj.comment}</span>
                            </div>
                        ))}
                    </div>
                    <div>
                        <span>{`];`}</span>
                    </div>
                </div>}
            />

            <StackCards
                title='Backend Expertise'
                icon={PiFlask}
                content={
                    <>
                        {fundamentalBackendConcept.map((concept, index) => (
                            <span key={index}>
                                <LanguageTag lang={concept} textColor='text-green-400' backgroundColor='bg-neutral-700' />
                            </span>
                        ))}

                        <p className='text-neutral-400 m-2 mt-6 text-sm'>
                            {"// Fun fact: I speak TCP/IP better than I speak human languages"}
                        </p>
                    </>
                }
            />

            <StackCards
                title="Frontend Technologies"
                icon={MdWeb}
                content={
                    <>
                        {frontendTechnologies.map((tech, index) => (
                            <span key={index}>
                                <LanguageTag lang={tech} textColor='text-green-400' backgroundColor='bg-neutral-700' />
                            </span>
                        ))}

                        <p className='text-neutral-400 m-2 mt-6 text-sm'>
                            {"// Yes, I can center a div"}
                        </p>
                    </>
                }
            />

            <StackCards
                title="Tools & Frameworks"
                icon={LiaToolsSolid}
                content={
                    <>
                        {toolsAndFrameworks.map((tool, index) => (
                            <span key={index}>
                                <LanguageTag lang={tool} textColor='text-green-400' backgroundColor='bg-neutral-700' />
                            </span>
                        ))}

                        <p className='text-neutral-400 m-2 mt-6 text-sm'>
                            {"// I'm a tool-agnostic developer"}
                        </p>
                    </>
                }
            />
        </div>
    </div>
  )
}

export default TechnicalStacks