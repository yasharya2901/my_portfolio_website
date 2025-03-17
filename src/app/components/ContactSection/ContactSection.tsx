"use client";
import Link from 'next/link'
import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { MdOutlineEmail } from 'react-icons/md'

const contactMethods = [
    {
        name: "Email",
        link: "mailto:yasharya2901@gmail.com",
        preview: "yasharya2901@gmail.com",
        icon: MdOutlineEmail
    },
    {
        name: "LinkedIn",
        link: "https://www.linkedin.com/in/yasharya29",
        preview: "linkedin.com/in/yasharya29",
        icon: FaLinkedin
    },
    {
        name: "X",
        link: "https://www.x.com/yasharya2901",
        preview: "x.com/yasharya2901",
        icon: FaXTwitter
    }
]

function ContactSection() {
    // const [formDetails, setFormDetails] = React.useState({
    //     name: "",
    //     email: "",
    //     message: ""
    // })

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     const { name, value } = e.target;
    //     setFormDetails((prevDetails) => ({
    //         ...prevDetails,
    //         [name]: value
    //     }));
    // }

    // const handleClick = () => {
    //     console.log(formDetails)
    // }

  return (
    <div className='bg-[#262626] font-sans pb-16'>
        <div id="fun-corner-heading" className={`max-w-5xl mx-auto py-8 px-4`}>
            <div className='text-3xl font-bold text-neutral-50 mb-4'>Contact</div>
            <div className='font-fira text-neutral-500'>{`$ ssh user@yasharya`}</div>
        </div>
        <div className='grid md:grid-cols-2 gap-4 md:gap-6 justify-center md:max-w-5xl mx-auto px-4'>
            <div>
                <div className='bg-[#171717] font-sans p-6 rounded-xl hover:transform transition-all max-w-5xl mx-auto mt-8 px-6'>
                    <div className='font-fira text-neutral-500 pb-4'>
                        {`// Initialize contact methods`}
                    </div>
                    {contactMethods.map((contact, index) => {
                        return (
                            <div key={index} className='flex flex-row items-center gap-4 mt-4'>
                                <div className='text-green-400 text-xl bg-[#25362c] p-4 rounded-xl font-sans'>
                                    <contact.icon/>
                                </div>
                                <div className='flex flex-col'>
                                    <div className='text-neutral-500'>{contact.name}</div>
                                    <div className='text-neutral-200 hover:text-green-400 hover:transform transition-all'><Link href={contact.link}>{contact.preview}</Link></div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                <div className='bg-[#171717] font-fira p-6 rounded-xl hover:transform transition-all max-w-5xl mx-auto mt-8 px-6'>
                    <div className='text-sm text-neutral-500'>{`// Quick Response Promise`}</div>
                    <br/>
                    <div>
                        <span className="text-purple-400">async</span>{" "}
                        <span className="text-purple-400">def</span>{" "}
                        <span className="text-green-400">response_time</span>
                        <span className="text-neutral-400">(</span>
                        <span className="text-green-400">has_coffee</span>
                        <span className="text-neutral-400">)</span>:
                        </div>
                        <div className="ml-4">
                        <span className="text-purple-400">if</span>{" "}
                        <span className="text-green-400">has_coffee</span>:
                        </div>
                        <div className="ml-8">
                        <span className="text-purple-400">return</span>{" "}
                        <span className="text-blue-400">
                            {`"ASAP! (Running on asyncio and espresso ☕)"`}
                        </span>
                        </div>
                        <div className="ml-4">
                        <span className="text-purple-400">return</span>{" "}
                        <span className="text-blue-400">
                            {`"Soon (after a quick coffee coroutine)"`}
                        </span>
                        </div>

                </div>
            </div>
            {/* <div className='bg-[#171717] font-fira p-6 rounded-xl hover:transform transition-all max-w-5xl mx-auto mt-8 px-6'>
                {/* Contact Form *
                <div className='font-fira text-neutral-500'>{`// Send me a message`}</div>

                <div className='flex flex-col gap-4 mt-4'>
                    <div>
                        <label className='text-neutral-400 text-sm'>{`name.toString()`}</label>
                        <input type='text' className='bg-[#171717] text-neutral-200 p-4 w-full rounded-xl border border-neutral-800 focus:outline-none focus:border-green-400' placeholder='Yash Arya' onChange={handleChange} name='name' />
                    </div>
                    <div>
                        <label className='text-neutral-400 text-sm'>{`email.validate()`}</label>
                        <input type='email' className='bg-[#171717] text-neutral-200 p-4 w-full rounded-xl border border-neutral-800 focus:outline-none focus:border-green-400' placeholder='hello@yasharya.me' onChange={handleChange} name='email' />
                    </div>
                    <div>
                        <label className='text-neutral-400 text-sm'>{`message.length > 0`}</label>
                        <textarea className='bg-[#171717] h-36 text-neutral-200 p-4 w-full rounded-xl border border-neutral-800 focus:outline-none focus:border-green-400' placeholder='Your message here...' onChange={handleChange} name='message' />
                    </div>
                </div>

                <div className='flex flex-col gap-4 mt-4'>
                    <button className='bg-green-400 text-white font-fira p-4 rounded-xl hover:transform transition-all hover:bg-green-500' onClick={handleClick}>{`sendMessage()`}</button>
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default ContactSection