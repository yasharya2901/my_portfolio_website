import React from 'react'

function WhoAmI() {
  return (
    <div className='flex flex-row'>
        <div className='flex flex-col gap-4'>
            <div className='text-[#4ADE80]'>/* about_me.go */</div>
            <div className='bg-[#171717] p-8 pr-32 rounded-xl'>
                <CodeBlock/>
            </div>
        </div>
        <div></div>
    </div>
  )
}

function CodeBlock() {
    return (
        <div className='text-neutral-400'>
            <p>
            <span className="text-purple-400">package</span> <span className="text-white">main</span>
            </p>
            <br/>
            <p>
            <span className="text-purple-400">type</span> <span className="text-blue-400">Engineer</span> <span className="text-purple-400">struct</span> {`{`}
            </p>
            <p className="ml-4">
            <span className="text-neutral-400">name</span> <span className="text-white">string</span>
            </p>
            <p className="ml-4">
            <span className="text-neutral-400">location</span> <span className="text-white">string</span>
            </p>
            <p className="ml-4">
            <span className="text-neutral-400">role</span> <span className="text-white">string</span>
            </p>
            <p>{`}`}</p>
            <br/>
            <p>
            <span className="text-purple-400">func</span> <span className="text-blue-400">NewEngineer</span>() Engineer {`{`}
            </p>
            <p className="ml-4">
            <span className="text-purple-400">return</span> Engineer{`{`}
            </p>
            <p className="ml-8">
            <span className="text-neutral-400">name:</span> <span className="text-green-400">"Yash Arya"</span>,
            </p>
            <p className="ml-8">
            <span className="text-neutral-400">location:</span> <span className="text-green-400">"Bengaluru, India"</span>,
            </p>
            <p className="ml-8">
            <span className="text-neutral-400">role:</span> <span className="text-green-400">"Backend Engineer"</span>,
            </p>
            <p className="ml-4">{`}`}</p>
            <p>{`}`}</p>
            <br />
        </div>
    )
}

export default WhoAmI