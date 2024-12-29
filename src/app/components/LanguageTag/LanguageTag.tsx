import React from 'react'

function LanguageTag({lang, textColor, backgroundColor, textSize}: {lang: string, textColor: string, backgroundColor?: string, textSize?: string}) {
  return (
    <div className={`${textColor} ${!backgroundColor ? "bg-[#171717]" : backgroundColor} ${textSize ? textSize : "text-sm"} rounded-3xl px-4 mx-1 my-[2px] py-1 inline-block`}>
        {lang}
    </div>
  )
}

export default LanguageTag