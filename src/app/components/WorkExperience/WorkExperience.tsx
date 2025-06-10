import React from 'react'
import ExperienceCard from '../ExperienceCard'

const workExperienceObj = [
    {
      fileName: 'sde1.service.ts',
      role: 'SDE 1',
      company: 'Signzy',
      duration: 'Jun 2025 - Present',
      points: [
        "Working with multistack systems"
      ],
      techStacks: ["Go", "Python", "Node.js", "Rust"]
    },
    {
        fileName: 'sde1.service.ts',
        role: 'SDE 1',
        company: 'Quartic.ai',
        duration: 'Feb 2025 - May 2025',
        points: [
          "Worked with Djano-based web services",
          "Implemented SMTP feature to enable automated email notification",
          "Used Celery for asynchronous task execution",
          "Integrated Flower API to monitor the Celery tasks"
        ],
        techStacks: ["Python", "Django", "Go", "React", "AWS", "Kubernetes", "Docker"]
    },
    {
        fileName: 'backend.service.ts',
        role: 'SDE Intern',
        company: 'Wealthy',
        duration: 'Aug 2024 - Feb 2025',
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
        <div className='flex flex-col pt-10 max-w-5xl px-4 font-fira text-sm text-neutral-500 items-center justify-center mx-auto'>
          <div>{`# Fun fact: My git commit messages are better than my dating profile`}</div>
          <div>{`# Also: I debug in production because I like to live dangerously (just kidding)`}</div>
        </div>
    </div>
  )
}

export default WorkExperience