import './App.css'
import menu from "./assets/menu.png"
import Card from './comp/Card'
import NameCard from './comp/NameCard'

function App() {

  return (
    <div className='text-[#000] w-screen h-screen p-0 m-0 '>
      <header className='fixed h-28 bg-white top-0 z-10  w-screen border-b-2 border-x-black shadow-sm '>
        <nav className='h-full md:grid max-md:flex grid-cols-2 gap-2'>
          <div className='relative h-full w-full'>
            <div className='absolute  transform -translate-y-1/2 top-1/2 left-2'>
              <div className='h-[15px] w-[15px] inline-flex bg-primary-button-color' />
              <div className='inline text-2xl font-bold'>Moksh Choudhary</div>  <div className='max-md:hidden m-0 p-0 left-0 font-mono inline'>Software Engineer</div>
            </div>
          </div>
          <div className='relative h-full'>
            <div className='md:hidden'>
              <img className='h-8 absolute transform -translate-y-1/2 top-1/2 right-2' src={String(menu)}></img>
            </div>
            <div className='max-md:hidden absolute transform -translate-y-1/2 top-1/2 right-2 grid grid-flow-col'>
              <div className='mx-3 font-thin active'>ABOUT ME</div>
              <div className='mx-3 font-thin'>RESUME</div>
              <div className='mx-3 font-thin'>PROJECT</div>
              <div className='mx-3 font-thin'>CONTACT</div>
            </div>
          </div>
        </nav>
      </header>
      <div className=' bg-white top-28 w-screen h-screen bg-primary-color grid-flow-col'>

        <div className='md:bg-primary-color h-screen w-[40%]' />

        {/* <NameCard classNameString={"mx-auto h-[60%] text-center absolute text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"} /> */}

      </div>

      <Card />

    </div>
  )
}

export default App
