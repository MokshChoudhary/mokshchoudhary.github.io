import Card from '../comp/Card'
import '../App.css'
import NavigationBar from '../comp/NavigationBar';


export default function Home() {
  return (
    <>
      <NavigationBar />

      <div className='text-[#000] w-screen h-screen p-0 m-0 '>

        <div className='bg-white top-28 w-screen h-screen max-md:bg-white grid-flow-col'>

          <div className='md:bg-primary-color h-screen w-[40%]' />

          {/* <NameCard classNameString={"mx-auto h-[60%] text-center absolute text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"} /> */}

        </div>

        <Card />

      </div>
    </>
  );
}