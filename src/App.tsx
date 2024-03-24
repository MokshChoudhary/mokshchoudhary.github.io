import './App.css'
import menu from "./assets/menu.png"
import Card from './comp/Card'
import Nav from 'react-bootstrap/Nav';

function App() {

  return (
    <div className='text-[#000] w-screen h-screen p-0 m-0'>
      <div className=' hidden fixed bg-secondary-color top-0 left-0 h-dvh w-screen z-10 overflow-hidden'>
        <Nav className=" max-md:hidden absolute transform -translate-y-1/2 top-1/2 right-2 grid grid-flow-col">
          <Nav.Link className='mx-3 font-thin' href="#aboutMe">ABOUT ME</Nav.Link>
          <Nav.Link className='mx-3 font-thin' href="#resume">RESUME</Nav.Link>
          <Nav.Link className='mx-3 font-thin' href="#project">PROJECT</Nav.Link>
          <Nav.Link className='mx-3 font-thin' href="#contact">CONTACT</Nav.Link>
        </Nav>
      </div>


      <header className='max:md:fixed max-md:h-1/2 md:h-28 bg-white top-0 max-md:z-10  w-screen border-b-2 border-x-black shadow-sm '>
        <nav className='h-full md:grid max-md:flex grid-cols-2 gap-2'>
          <div className='relative h-full w-full'>
            <div className='absolute  md:transform md:-translate-y-1/2 md:top-1/2 md:left-2 max-md:top-3 max-md:left-3'>
              <div className='h-[15px] w-[15px] me-2 inline-flex bg-primary-button-color' />
              <div className='inline text-2xl font-bold'>Moksh Choudhary</div>  <div className=' m-0 p-0 left-0 font-mono inline'><br className='md:hidden' />Software Engineer</div>
            </div>
          </div>
          <div className='md:relative '>
            <div className='md:hidden absolute top-6 right-5'>
              <img className='h-8 w-8' src={String(menu)} />

            </div>
            <Nav className="me-auto max-md:hidden absolute transform -translate-y-1/2 top-1/2 right-2 grid grid-flow-col">
              <Nav.Link className='mx-3 font-thin' href="#aboutMe">ABOUT ME</Nav.Link>
              <Nav.Link className='mx-3 font-thin' href="#resume">RESUME</Nav.Link>
              <Nav.Link className='mx-3 font-thin' href="#project">PROJECT</Nav.Link>
              <Nav.Link className='mx-3 font-thin' href="#contact">CONTACT</Nav.Link>
            </Nav>
          </div>
        </nav>
      </header>
      <div className=' bg-white top-28 w-screen h-1/2 md:h-screen bg-primary-color grid-flow-col'>

        <div className='max-md:absolute max-md:top-[40%] bg-primary-color h-screen w-screen md:w-[40%]' />
      </div>

      <Card />

    </div>
  )
}

export default App
