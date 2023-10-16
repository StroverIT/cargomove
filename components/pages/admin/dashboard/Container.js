import React from 'react'
import Icons from '../../../Icons/Icons'
import ImageContaner from '../../../Icons/ImageContainer'
import Link from 'next/link'

export default function Container({icon, text, link, imageData}) {

  return (
    <Link href={`${link}`}>
    <section className='flex items-center justify-between px-4 py-10 transition-all border border-gray-300 shadow-md cursor-pointer hover:shadow-xl hover:scale-105'>
        <div className='flex items-center'>
            <ImageContaner icon={icon} imageData={imageData} />
            <div className='text-xl '>{text}</div>
        </div>
        <div className='text-xl'><Icons iconType="rightArrow" /></div>
    </section>
</Link>
  )
}
