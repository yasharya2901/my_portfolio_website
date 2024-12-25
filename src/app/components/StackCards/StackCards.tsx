import React, { ReactNode } from 'react'
import { IconType } from 'react-icons'



function StackCards({icon, title, content}: {icon: IconType, title: string, content?: ReactNode}) {
  return (
    <div className={`bg-neutral-800 rounded-xl p-6 font-sans hover:scale-[1.02] hover:transform transition-all max-w-lg`}>
        <div className={`flex flex-row items-center gap-4 mb-2`}>
            <span className='text-green-400 text-2xl bg-[#25362c] p-2 rounded-md'>{React.createElement(icon)}</span>
            <span className={`text-neutral-200 text-xl font-semibold`}>{title}</span>
        </div>
        {content}
    </div>
  )
}

export default StackCards