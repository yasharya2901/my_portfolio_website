import React from 'react'
import { FaRegFaceSmile } from 'react-icons/fa6'
import { IoLibraryOutline } from 'react-icons/io5'

function FunCorner() {
  return (
    <div className={`bg-[#171717] font-sans pb-16`}>
        <div id="fun-corner-heading" className={`max-w-5xl mx-auto py-8 px-4`}>
            <div className='text-3xl font-bold text-neutral-50 mb-4'>Fun Corner</div>
            <div className='font-fira text-neutral-500'>{`$ echo "Because life isn't all about semicolons"`}</div>
        </div>
        <div className='grid md:grid-cols-2 gap-4 md:gap-6 justify-center md:max-w-5xl mx-auto px-4'>
            <div className='bg-neutral-800 p-4 flex flex-col gap-4 rounded-lg hover:scale-[1.01] hover:transform transition-all'>
                <div className='flex flex-row items-center gap-4'>
                    <div className='text-green-400 text-xl bg-[#25362c] p-4 rounded-xl font-sans'><FaRegFaceSmile /></div>
                    <div className='text-xl font-semibold text-neutral-100'>{`Life.interests()`}</div>
                </div>
                <div className='font-fira text-neutral-100 rounded-md bg-neutral-700/60 p-4'>
                    <div className='text-green-400'>{`while (energy > 0) {`}</div>
                    <div className='ml-4'>{`swimming();`}</div>
                    <div className='ml-4'>{`exploreMountains();`}</div>
                    <div className='ml-4'>{`studyAI();`}</div>
                    <div className='ml-4'>{`roadTrip();`}</div>
                    <div className='text-green-400'>{`}`}</div>
                </div>
                <div className='text-neutral-400'>
                    {`When not fixing bugs, you'll find me:`}
                </div>
                <div>
                    <ul className='list-disc ml-4 flex flex-col gap-2 text-base text-neutral-300'>
                        <li>{`Swimming (because floating is better than null pointer exceptions)`}</li>
                        <li>{`Road tripping (because life is a journey, not a destination)`}</li>
                        <li>{`Hiking (because mountains have better views than code)`}</li>
                    </ul>
                </div>
            </div>

            <div className='bg-neutral-800 p-4 flex flex-col gap-4 rounded-lg hover:scale-[1.01] hover:transform transition-all'>
                <div className='flex flex-row items-center gap-4'>
                    <div className='text-green-400 text-xl bg-[#25362c] p-4 rounded-xl font-sans'><IoLibraryOutline /></div>
                    <div className='text-xl font-semibold text-neutral-100'>{`Dev Jokes.js`}</div>
                </div>
                <div className='font-fira flex flex-col gap-2 text-neutral-100 rounded-md bg-neutral-700/60 p-4'>
                    <div>{`// Why do programmers prefer dark mode?`}</div>
                    <div className='font-sans text-green-400'>{`Because light attracts bugs! 🪲`}</div>
                </div>
                <div className='font-fira text-sm flex flex-col gap-2 text-neutral-100 rounded-md bg-neutral-700/60 p-4'>
                    <div>{`try {`}</div>
                    <div className='ml-4'>{`coffee.drink();`}</div>
                    <div className='ml-4'>{`code.write();`}</div>
                    <div>{`} catch (CoffeeEmptyError) {`}</div>
                    <div className='ml-4'>{`orderMore();`}</div>
                    <div>{`}`}</div>
                </div>
                <div className='font-sans flex flex-col gap-2 text-neutral-100 rounded-md bg-neutral-700/60 p-4'>
                    <div>{`My code doesn't have bugs,`}</div>
                    <div className='text-green-400'>{`it just develops random unexpected features! 🎯`}</div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default FunCorner