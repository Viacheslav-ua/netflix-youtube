import React, { FC } from 'react'

type BgProviderProps = {
  children: React.ReactNode,
  removeBgOnMobile?: boolean,
}

export const BgProvider: FC<BgProviderProps> = ({children, removeBgOnMobile}) => {
  return (
    <div className='h-full w-full bg-[url("/images/main-bg.jpg")] bg-no-repeat bg-center bg-fixed bg-cover'>
      <div className={`bg-black h-full w-full ${removeBgOnMobile ? "lg:bg-opacity-60" : "bg-opacity-80"}`}>
        {children}
      </div>
    </div>
  )
}
