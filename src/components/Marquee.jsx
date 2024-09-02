import React from 'react'

function Marquee({imagesurls}) {
  return (
    <div className='flex w-full overflow-hidden'>
        {imagesurls.map((url)=>(
            <img src={url} className='flex flex-shrink-0 gap-40 py-10 pr-40' alt="images" />
        ))}
        {imagesurls.map((url)=>(
            <img src={url} className='flex flex-shrink-0 gap-40 py-10 pr-40' alt="images" />
        ))}
    </div>
  )
}

export default Marquee