import React from 'react'
import LanguageTag from '../LanguageTag'

function ExperienceCard({fileName, role, company, duration, points, techStacks}: {fileName: string, role: string, company: string, duration: string, points: string[], techStacks: string[]}) {
  return (
    <div className='flex flex-col bg-neutral-900 hover:bg-neutral-900/80 hover:transform transition-all rounded-xl p-6 hover:scale-[1.01]'>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-col items-start gap-4'>
            <div className='font-fira text-green-500'>{fileName}</div>
            <div>
                <div className='text-neutral-200 text-xl font-semibold'>{role}</div>
                <div className='text-green-400 text-md'>@{company}</div>
            </div>
        </div>
        <div>
            <div className='text-neutral-500'>{duration}</div>
        </div>
      </div>
      <div className='m-4'>
        {/* Terminal like points */}
        <ul className='list-disc'>
            {points.map((point, index) => (
                <li key={index} className='text-neutral-200 font-fira text-sm py-1'>{point}</li>
            ))}
        </ul>
      </div>
      <div>
        {techStacks.map((tech, index) => (
          <LanguageTag key={index} lang={tech} textColor='text-green-400' backgroundColor='bg-neutral-700' />
        ))}
      </div>

    </div>
  )
}

export default ExperienceCard