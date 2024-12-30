import React from 'react'
import { IconType } from 'react-icons'
import LanguageTag from '../LanguageTag'

function EducationCard({icon, name, qualification, description, tags, comment}:{icon: IconType, name: string, qualification: string, description: string, tags: string[], comment?: string}) {
  return (
    <div className='bg-[#171717] font-sans p-6 rounded-xl hover:bg-[#171717]/80 hover:scale-[1.01] hover:transform transition-all'>
        <div className='text-black text-2xl relative -top-9 bg-green-400 rounded-full p-2 inline-block'>{React.createElement(icon)}</div>
        <div className='flex flex-col gap-2'>
            <div className="flex gap-2 items-center justify-between">
                <div className='text-neutral-200 text-lg font-semibold'>{name}</div>
                <div className='text-green-500 font-fira'>{qualification}</div>
            </div>
            <div className='text-neutral-400'>
                {description}
            </div>
            <div>
                {tags.map((tag, index) => (
                    <LanguageTag key={index} lang={tag} textColor='text-green-400' backgroundColor='bg-neutral-700' textSize='text-xs' />
                ))}
            </div>
            <div>
                {comment && <p className='text-neutral-400 text-sm font-fira'>{comment}</p>}
            </div>
        </div>

    </div>
  )
}

export default EducationCard