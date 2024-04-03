import React from 'react'
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement>{}

 export function Button( { children,...props}: Props ) {
  return ( 
    <button className='w-[19.2rem] h-[4.4rem] rounded-[3rem] bg-[#F0EFEB] text-[#252127] font-semibold text-[1.8rem] leading-[2.16rem]' {...props}>
        {children}
    </button>
  )
  }

