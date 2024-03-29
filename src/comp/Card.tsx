import moksh from "../assets/moksh.jpeg"
import git from "../assets/github.png"
import insta from "../assets/instagram.png"
import linkdin from "../assets/linkedin.png"

export default function Card() {
    return (
        <>
            <div className="absolute w-[70%] md:top-[25%] left-[15%] md:left-[25%] max-md:top-28">
                <div className="md:flex">
                    <div className="bg-secondary-color max-md:mb-10 w-full border shadow-lg">
                        <img className="rounded-full w-60 p-8 m-auto" src={String(moksh)} alt="Moksh Choudhary" />
                        <div className="">
                            <div className="font-bold text-3xl my-6 text-center">Moksh <br className="max-md:hidden" /> Choudhary</div>
                            <div className='bg-primary-button-color w-20 my-2 h-[2px] mx-auto' />
                            <div className="text-[#1a1919] max-md:hidden my-6 tracking-widest text-xl font-thin text-center mx-auto">
                                SOFTWARE ENGINEER
                            </div>
                            <div className="flex md:hidden justify-center items-center my-6">
                                <button className="bg-primary-button-color transition-colors duration-300 ease-in-out hover:bg-white hover:border-primary-button-color border-2 hover:text-black rounded-full px-9 py-1 me-2 border-primary-button-color text-white">Resume</button>
                                <button className="bg-white transition-colors duration-300 ease-in-out hover:bg-primary-button-color hover:border-primary-button-color border-2 hover:text-white rounded-full px-9 py-1 ms-2 border-black">Project</button>
                            </div>
                        </div>
                        <div className="relative bottom-0 bg-white">
                            <div className="flex items-center justify-center">
                                <img src={String(git)} className="w-6 mx-6 py-2" />
                                <img src={String(linkdin)} className="w-6 mx-6 py-2" />
                                <img src={String(insta)} className="w-6 mx-6 py-2" />
                            </div>
                        </div>
                    </div>
                    <div className="md:ms-10 mt-10">
                        <h1 className="text-8xl font-bold">Hello </h1>
                        <h1 className="text-2xl mb-6">Here's who I am & what I do </h1>
                        <div className="flex max-md:hidden  my-6">
                            <button className="bg-primary-button-color transition-colors duration-300 ease-in-out hover:bg-white hover:border-primary-button-color border-2 hover:text-black rounded-full px-10 py-1 mx-1 border-primary-button-color text-white">Resume</button>
                            <button className="bg-white transition-colors duration-300 ease-in-out hover:bg-primary-button-color hover:border-primary-button-color border-2 hover:text-white rounded-full px-10 py-1 border-black">Project</button>
                        </div>
                        <div>
                            Hey there - it's Moksh! <br/>
                            🌟 I'm not just hitting high notes in the world of software engineering – I'm a pro at coding in Java, C++, C#, and Dart.<br/>
                            I've dived into the coolest libraries like Android, Flutter, and Spring Boot, creating magical, user-friendly solutions.<br/>
                            I'm all about crafting applications that resonate with the audience, using my coding skills to make technology sing.
                            I'm on a journey of constant exploration, always chasing the newest tech trends to keep the software world vibing at its best.   
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}