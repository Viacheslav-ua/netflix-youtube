import Image from 'next/image'
import { BgProvider } from './components/BgProvider'

const LandingPage = () => {
  return (
    <BgProvider>
      {/* navbar */}
      <div className='flex flex-col justify-center items-center pt-80 px-5 text-center gap-10'>
        <h1 className='font-extrabold text-white text-5xl'>Фільми серіали й інший контент без обмежань</h1>
        <h4 className='font-semibold text-white text-3xl'>Дивіться будь де. Скасувати підписку можна будь-коли</h4>
      </div>

    </BgProvider>
  )
}

export default LandingPage