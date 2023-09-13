import Image from 'next/image'
import logo from '../assets/images/logo.png'; // with import


export default function Home() {
  return (
      <main > 
        <div className="grid justify-center items-center">
              <Image className="object-center scale-90 hover:scale-100 transform-gpu" src={logo} alt="LOGO" />
          </div>
          <div className="text-center text-3xl text-#2F4858 font-bold hover:underline">
              <h1>🛠️ UNDER CONSTRUCTION 🛠️</h1>
              <a href="https://www.instagram.com/the.craftywildflower/?hl=en"> Instagram: @the.craftywildflower</a>
          </div>
      </main>
  )
}
