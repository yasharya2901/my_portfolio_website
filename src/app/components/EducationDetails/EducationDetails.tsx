import React from 'react'
import EducationCard from '../EducationCard'
import { FaGraduationCap } from 'react-icons/fa'
import { TbBulb } from 'react-icons/tb'

const educationDetails = [
    {
        icon: FaGraduationCap,
        name: "Scaler School of Technology",
        description: 'Currently expanding my tech horizons and debugging my knowledge gaps',
        qualification: 'Software Engineering',
        tags: ['DSA', 'System Design', 'Advanced Algorithms', 'Software Architecture'],
        comment: `/* Learning: O(log n) but coffee consumption: O(n²) */`
    },
    {
        icon: FaGraduationCap,
        name: "Birla Institute of Technology and Science, Pilani",
        description: 'Where I learned that semicolons are not optional and indentation matters',
        qualification: 'B. Sc. Computer Science',
        tags: ['Computer Science', 'Data Structures', 'Web Development', 'Operating Systems', 'Database Management Systems'],
        comment: `// Graduated with a degree and caffeine addiction`
    }
]

function EducationDetails() {
  return (
    <div className={`bg-[#262626] font-sans pb-16`}>
        <div id="education-heading" className={`max-w-5xl mx-auto py-8 px-4`}>
            <div className='text-3xl font-bold text-neutral-50 mb-4'>Education</div>
            <div className='font-fira text-neutral-500'>{`$ cat /var/log/education.log`}</div>
        </div>

        <div className='grid md:grid-cols-2 gap-4 md:gap-6 justify-center md:max-w-5xl mx-auto px-4'>
            {educationDetails.map((education, index) => (
                <EducationCard key={index} icon={education.icon} name={education.name} description={education.description} qualification={education.qualification} tags={education.tags} comment={education.comment} />
            ))}
        </div>
        <div className='mx-4'>

        
        <div className='bg-[#171717] font-sans p-6 rounded-xl hover:scale-[1.005] hover:bg-[#171717]/80 hover:transform transition-all max-w-5xl mx-auto mt-8 px-4'>
            <div className={`flex flex-row justify-start items-center gap-4`}>
                <div className={`text-4xl text-green-500`}><TbBulb/></div>
                <div className='flex flex-col items-start justify-center'>
                    <div className='text-xl font-semibold text-neutral-200'>Continuous Learning</div>
                    <div className='text-neutral-400'>{`Because in tech, if you're not learning, you're debugging outdated code.`}</div>
                </div>
            </div>
            <div className={`font-fira flex flex-col items-center text-neutral-500 mt-4`}>
                <div>{`while(alive) {`}</div>
                <div className="ml-4">{`learn();`}</div>
                <div className="ml-4">{`code();`}</div>
                <div className="ml-4">{`debug();`}</div>
                <div className="ml-4">{`coffee++;`}</div>
                <div>{`}`}</div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default EducationDetails