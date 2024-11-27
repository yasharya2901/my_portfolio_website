import React from 'react'

function WhoAmI() {
  return (
    <div className='flex flex-col-reverse md:flex-row md:justify-around pt-14 p-4 gap-10 max-w-[1080px]'>
        <div className='flex flex-col gap-4 m-2 mt-10 md:m-2'>
            <div className='text-[#4ADE80]'>{`/* about_me.go */`}</div>
            <div className='bg-[#171717] p-8 pr-32 rounded-xl'>
                <CodeBlock/>
            </div>
        </div>
        <div className={`font-sans`}>
            <AboutMe/>
        </div>
    </div>
  )
}


function AboutMe() {
    return (
        <div className={`m-2`}>
            <div className={`text-3xl font-bold text-white`}>
                About Me
            </div>
            <div className={`flex flex-col gap-6 mt-6 max-w-sm text-neutral-300`}>
                <p>
                    {`Currently building the future of fintech at Wealthy, where I architect and develop Go microservices that handle real-time financial data. My tech stack includes the Go-Gin Framework, Django, and a variety of cloud-native tools.`}
                </p>
                <p>
                    {`My approach to engineering is like my approach to solving a Rubik's cube - methodical, pattern-oriented, and occasionally involves staying up too late trying to figure out why something isn't aligned properly.`}
                </p>
                <div>
                    <FunFact />
                </div>
            </div>
        </div>
    )
}

function FunFact() {
    return (
        <div>

        </div>
    )
}

function CodeBlock() {
    return (
        <div className='text-neutral-400 min-w-72'>
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
            <span className="text-neutral-400">name:</span> <span className="text-green-400">&quot;Yash Arya&quot;</span>,
            </p>
            <p className="ml-8">
            <span className="text-neutral-400">location:</span> <span className="text-green-400">&quot;Bengaluru, India&quot;</span>,
            </p>
            <p className="ml-8">
            <span className="text-neutral-400">role:</span> <span className="text-green-400">&quot;Backend Engineer&quot;</span>,
            </p>
            <p className="ml-4">{`}`}</p>
            <p>{`}`}</p>
            <br />
        </div>
    )
}

export default WhoAmI