import React from 'react'

function LanguageTag({lang, textColor, backgroundColor}: {lang: string, textColor: string, backgroundColor?: string}) {
  return (
    <div className={`${textColor} ${!backgroundColor ? "bg-[#171717]" : backgroundColor} text-sm rounded-3xl px-4 mx-1 my-[2px] py-1 inline-block`}>
        {lang}
    </div>
  )
}

export default LanguageTag