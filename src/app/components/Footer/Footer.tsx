import React from 'react'

function Footer() {

    const aboutItems = [
        {
            heading: "About",
            content: "Passionate backend engineer crafting elegant solutions to complex problems."
        },
        {
            heading: "Contact",
            content: (
                <ul className='text-left'>
                    <li><a className='hover:text-white' href="mailto:yasharya2901@gmail.com">yasharya2901@gmail.com</a></li>
                    <li><a className='hover:text-white' href="https://www.linkedin.com/in/yasharya29">LinkedIn</a></li>
                    <li><a className='hover:text-white' href="https://www.github.com/yasharya2901">GitHub</a></li>    
                </ul> 
            )
        },
        {
            heading: "Location",
            content: "Based in Bengaluru, India"
        }
    ]
return (
    <div className='bg-[#171717] text-neutral-200 text-center py-4'>
            <div className='flex flex-col md:grid md:grid-cols-3 justify-around gap-4 font-sans max-w-5xl mx-auto py-8 px-4'>
                    {aboutItems.map(({heading, content}, index) => {
                            return <Card key={index} heading={heading} content={content} />
                    })}
            </div>
            <div className="mt-8 border-t border-neutral-800 pt-8 mx-auto max-w-5xl font-sans">
                <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                    <p className="text-sm text-neutral-400">© 2025 Yash Arya. All rights reserved.</p>
                    <p className="text-sm text-neutral-400">Made with ❤️ in India</p>
                </div>
            </div>
    </div>
)
}


function Card({heading, content}:{heading:string, content:React.ReactNode}) {
    return (
        <div className='flex flex-col gap-2 md:gap-4 items-start mb-2'>
            <div className='text-lg font-bold text-neutral-100'>{heading}</div>
            <div className='text-left text-neutral-300'>
                {content}
            </div>
        </div>
    )
}

export default Footer