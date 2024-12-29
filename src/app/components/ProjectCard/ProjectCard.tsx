import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons'
import { FaCode } from 'react-icons/fa6'
import LanguageTag from '../LanguageTag'

function ProjectCard({icon, projectLink, title, description, stacks}:{icon: IconType, projectLink?: string, title: string, description: string, stacks: string[]}) {
  return (
    <div className={`bg-[#262626] flex flex-col gap-2 font-sans p-6 rounded-xl hover:bg-neutral-800/60 hover:transform transition-all`}>
        <div className='flex flex-row items-center justify-between'>
            <div className='text-green-400 text-2xl'>{React.createElement(icon)}</div>
            <div>
                <Link href={projectLink || '#'} target={projectLink ? '_blank' : '_self'}>
                    <FaCode className='text-neutral-400 hover:text-green-400 hover:transform transition-all text-2xl'/>
                </Link>
            </div>
        </div>
        <h2 className='text-neutral-200 font-semibold text-xl'>{title}</h2>
        <p className={`text-neutral-400`}>{description}</p>
        <div className='mt-auto'>
            {stacks.map((val, index) => {
                return (
                    <LanguageTag key={index} lang={val} textColor='text-green-400' backgroundColor='bg-neutral-700' textSize='text-xs' />
                )
            })}
        </div>
    </div>
  )
}

export default ProjectCard