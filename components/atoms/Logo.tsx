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
            src={"/home/social/logo.svg"}
            width={1000}
            height={1000}
            className='h-full  object-contain'
            alt=''
          ></Image>
        ) : (
          <Image
            src={"/home/social/logo.svg"}
            width={1000}
            height={1000}
            className='w-full h-full object-contain'
            alt=''
            style={{
              textAlign: "left",
              width: "auto",
              marginLeft: "calc(-1.7rem * var(--scale))"
            }}
          ></Image>
        )}
      </picture>
    </Link>
  )
}
