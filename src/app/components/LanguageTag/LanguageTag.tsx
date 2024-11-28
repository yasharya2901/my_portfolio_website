import React from 'react'

function LanguageTag({lang}: {lang: string}) {
  return (
    <div className={`text-[#4ADE80] bg-[#171717] text-sm rounded-3xl px-4 mx-1 my-[2px] py-1 inline-block`}>
        {lang}
    </div>
  )
}

export default LanguageTag