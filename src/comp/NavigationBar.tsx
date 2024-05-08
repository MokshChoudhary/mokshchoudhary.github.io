import { useEffect, useState } from "react";
import menu from "../assets/menu.png"


export default function NavigationBar() {
  const [selectedView,setSelectedView]  = useState('');

  useEffect(()=>{
    const selected = localStorage.getItem("selectedView")
    if(selected){
      setSelectedView(selected)
    }else{
      setSelectedView("1")
    }
  })

  return (
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
            <div onClick={() => { setSelectedView("1"); localStorage.setItem("selectedView", selectedView); }} className={selectedView && selectedView == "1" ? 'mx-3 font-thin ' : "mx-3 font-thin"} > <a href="/">ABOUT ME</a> </div>
            <div onClick={() => { setSelectedView("2"); localStorage.setItem("selectedView", selectedView); }} className={selectedView && selectedView == "2" ? 'mx-3 font-thin ' : "mx-3 font-thin"} > <a href="/Resume">RESUME</a> </div>
            <div onClick={() => { setSelectedView("3"); localStorage.setItem("selectedView", selectedView); }} className={selectedView && selectedView == "3" ? 'mx-3 font-thin ' : "mx-3 font-thin"} > <a href="/Projects"> PROJECT</a></div>
            <div onClick={() => { setSelectedView("4"); localStorage.setItem("selectedView", selectedView); }} className={selectedView && selectedView == "4" ? 'mx-3 font-thin ' : "mx-3 font-thin"} ><a href="/Contact"> CONTACT</a></div>
          </div>
        </div>
      </nav>
    </header>
  );
}