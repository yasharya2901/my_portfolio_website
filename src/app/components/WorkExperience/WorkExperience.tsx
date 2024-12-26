import React from 'react'
import ExperienceCard from '../ExperienceCard'

const workExperienceObj = [
    {
        fileName: 'backend.service.ts',
        role: 'Backend Engineer',
        company: 'Wealthy',
        duration: 'Aug 2024 - Present',
        points: ["Created and optimized Go microservices for real-time financial data processing", "Integrated Slack bots for automated reporting and team communication", "Developed scalable Django microservices for insurance domain"],
        techStacks: ["Go", "Django", "AWS", "Microservices", "Docker"]
    },
    {
      fileName: 'developer.config',
      role: 'Software Engineer',
      company: 'HCL Tech',
      duration: 'Previous Role',
      points: ["Collaborated with cross-functional teams on software development projects", "Gained hands-on experience in full software development lifecycle"],
      techStacks: ["Software Development", "Team Collaboration", "Agile", "SDLC", "SLA", "SAP"]
    }
]

function WorkExperience() {
  return (
    <div className={`bg-[#262626] font-sans pb-16`}>
        <div id="heading" className={`max-w-5xl mx-auto py-8 px-4`}>
            <div className='text-3xl font-bold text-neutral-50 mb-4'>Work Experience</div>
            <div className='font-fira text-neutral-500'>{`$ cat career_history.log`}</div>
        </div>

        <div className='grid md:grid-cols-2 gap-4 md:gap-6 justify-center md:max-w-5xl mx-auto px-4'>
            {workExperienceObj.map((obj, index) => (
                <ExperienceCard key={index} fileName={obj.fileName} role={obj.role} company={obj.company} duration={obj.duration} points={obj.points} techStacks={obj.techStacks} />
            ))}
        </div>
    </div>
  )
}

export default WorkExperience