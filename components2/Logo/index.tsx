import Image from 'next/image'

const Logo = () => {
  return (
    <Image
      src='/assets/logo.svg'
      alt='logo de sebaritta'
      width={210}
      height={40}
    />
  )
}

export default Logo
