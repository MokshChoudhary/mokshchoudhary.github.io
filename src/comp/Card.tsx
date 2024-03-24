import moksh from "../assets/moksh.jpeg"
import git from "../assets/github.png"
import insta from "../assets/instagram.png"
import linkdin from "../assets/linkedin.png"

export default function Card() {
    return (
        <>
            <div className="absolute max-md:w-screen md:w-[70%] md:top-[25%] md:left-[20%] max-md:top-28">
                <div className="md:flex">
                    <div className="bg-secondary-color max-md:mb-10 w-full border shadow-lg">
                        <img className="rounded-full w-60 md:p-8 max-md:p-1 m-auto" src={String(moksh)} alt="Moksh Choudhary" />
                        <div className="">
                            <div className="font-bold text-3xl my-6 text-center">Moksh <br className="max-md:hidden"/> Choudhary</div>
                            <div className='bg-primary-button-color w-20 my-2 h-[2px] mx-auto' />
                            <div className="text-[#1a1919] my-6 tracking-widest text-xl font-thin text-center mx-auto">
                                SOFTWARE ENGINEER
                            </div>
                        </div>
                        <div className="relative bottom-0 bg-white">
                            <div className="flex items-center justify-center">
                                <img src={String(git)}     className="w-6 mx-6 py-2"/>
                                <img src={String(linkdin)} className="w-6 mx-6 py-2"/>
                                <img src={String(insta)}   className="w-6 mx-6 py-2"/>
                            </div>
                        </div>
                    </div>
                    <div className="ms-10">
                        <h1 className="text-8xl font-bold">Hello </h1>
                        <h1 className="text-2xl">Here's who I am & what I do </h1>
                        <div className="flex my-6">
                            <button className="rounded-full px-6 py-1 mx-3 bg-primary-button-color text-white">Resume</button>
                            <button className="rounded-full px-6 py-1 border border-black">Project</button>
                        </div>
                        <div>
                            I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.

                            I’m a great place for you to tell a story and let your users know a little more about you.
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}