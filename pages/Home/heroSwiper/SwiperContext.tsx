import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useMemo,
  PropsWithChildren,
} from 'react'

interface ISwiperContext {
  itemActive: number
  setItemActive: Dispatch<SetStateAction<number>>
  activeAnimations: boolean
  setActiveAnimations: Dispatch<SetStateAction<boolean>>
}

export const SwiperContext = createContext<ISwiperContext>({} as ISwiperContext)

const SwiperProvider = ({ children }: PropsWithChildren) => {
  const [itemActive, setItemActive] = useState<number>(0)
  const [activeAnimations, setActiveAnimations] = useState<boolean>(false)

  const sharedData: ISwiperContext = useMemo(
    () => ({
      itemActive,
      setItemActive,
      activeAnimations,
      setActiveAnimations,
    }),
    [itemActive, setItemActive, activeAnimations, setActiveAnimations]
  )

  return (
    <SwiperContext.Provider value={sharedData}>
      {children}
    </SwiperContext.Provider>
  )
}

export default SwiperProvider
