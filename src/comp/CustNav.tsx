import { useState } from "react";
import menu from "../assets/menu.png";


const CustomNav = ({ li }:any) => {
  const [window, setWindow] = useState(true);
  const [hide, setHide] = useState(true);
  const [itemClick, setItemClick] = useState(0);

  let openClose = () => {
    if (window === false) {
      setWindow(true);
      setHide(true);
    } else {
      setWindow(false);
      setHide(false);
    }
  };

  return (
    <>
    <div className={hide === true ?  "hidden fixed bg-secondary-color top-0 left-0 h-dvh w-screen z-10 overflow-hidden" : " fixed transform transition-transform scale-y-100 duration-500 ease-linear bg-secondary-color top-0 left-0 h-dvh w-screen z-10 overflow-hidden"}/>
    
    <nav className="relative navbar-menu w-screen cursor-pointer">
      <div className="absolute z-20 right-6 top-6 burger" onClick={() => openClose()}>
        <img src={String(menu)} alt="burger" />
      </div>
      <ul className="absolute z-20 transform translate-x-1/2 translate-y-1/2 right-1/2 top-1/2 object-center justify-center items-center">
        {li.map((item:any, i:any) => (
          <div className="text-center my-6" key={i}>
            <li
              className={itemClick == i ? "text-2xl active" : "text-2xl"}
              onClick={()=>setItemClick(i)}
              style={{ display: window === false ? "inline-block" : "none" }}
            >
              {item[0]}
            </li>
          </div>
        ))}
      </ul>
    </nav>
    </>
  );
};

export default CustomNav;
