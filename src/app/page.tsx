import Image from 'next/image'
import logo from '../assets/images/logo.png'; // with import

export default function Home() {
  return (
      <main> 
        <div class="flex justify-center items-center">
              <Image class="object-center scale-90 hover:scale-100 transform-gpu" src={logo} alt="LOGO" />
          </div>
          <div>
              <h1 class="text-center text-3xl font-bold hover:underline"> UNDER CONSTRUCTION</h1>
          </div>
      </main>
  )
}
