import React from 'react'

function WhoAmI() {
  return (
    <div className='flex flex-row'>
        <div className='flex flex-col'>
            <div className='text-[#4ADE80]'>/* about_me.go */</div>
            <div>
                <CodeBlock/>
            </div>
        </div>
        <div></div>
    </div>
  )
}

function CodeBlock() {
    return (
        <div>
            <p><span className='text-purple-400'>package</span> main</p>
            <br />
            <p>type Engineer struct {`{`}</p>
            <p className='ml-4'>name string</p>
            <p className='ml-4'>location string</p>
            <p className='ml-4'>role string</p>
            <p>{`}`}</p>
            <br />
            <p>func NewEngineer() Engineer {`{`}</p>
            <p className="ml-4">return Engineer{`{`}</p>
            <p className="ml-8">name: "Yash Arya",</p>
            <p className="ml-8">location: "Bangalore, India",</p>
            <p className="ml-8">role: "Backend Engineer",</p>
            <p className="ml-4">{`}`}</p>
            <p>{`}`}</p>
            <br />
        </div>
    )
}

export default WhoAmI