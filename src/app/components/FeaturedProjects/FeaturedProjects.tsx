import React from 'react'

function FeaturedProjects() {
  return (
    <div className={`bg-[#171717] font-sans pb-16`}>
        <div id="heading" className={`max-w-5xl mx-auto py-8 px-4`}>
            <div className='text-3xl font-bold text-neutral-50 mb-4'>Featured Projects</div>
            <div className='font-fira text-neutral-500'>{`$ ls -la ~/projects/`}</div>
        </div>

        {/* <div className='grid md:grid-cols-2 gap-4 md:gap-6 justify-center md:max-w-5xl mx-auto px-4'>
            {workExperienceObj.map((obj, index) => (
                <ExperienceCard key={index} fileName={obj.fileName} role={obj.role} company={obj.company} duration={obj.duration} points={obj.points} techStacks={obj.techStacks} />
            ))}
        </div> */}
        <div className='flex flex-col pt-10 max-w-5xl px-4 font-fira text-sm text-neutral-500 items-center justify-center mx-auto'>
          <div>{`/* These projects are like my children - they keep me up at night and have bugs I can't explain */`}</div>
        </div>
    </div>
  )
}

export default FeaturedProjects