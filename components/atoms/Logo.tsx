import Image from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

interface LogoProps {
  className?: string
  alt?: boolean
}

export const Logo: FC<LogoProps> = ({ className, alt }) => {
  return (
    <Link href={'/'} legacyBehavior>
      <picture className={`logoCont ${className} cursor-pointer`}>
        {alt ? (
          <Image
            src={"/logo.png"}
            width={1000}
            height={1000}
            className='h-full  object-contain'
            alt=''
          ></Image>
        ) : (
          <Image
            src={"/logo.png"}
            width={1000}
            height={1000}
            className='w-full h-full object-contain'
            alt=''
          ></Image>
        )}
      </picture>
    </Link>
  )
}
