import moksh from "../assets/moksh.jpeg"
import git from "../assets/github.png"
import insta from "../assets/instagram.png"
import linkdin from "../assets/linkedin.png"

interface prop {
    classNameString: String
}

export default function NameCard({ classNameString }: prop) {

    return (
        <div className={String(classNameString) + " bg-transparent flex"}>
            <div className="relative bg-secondary-color w-[60%] shadow-2xl shadow-[#4b4b4b]">
                <img className="w-1/2 mx-auto my-4 flex items-center justify-center rounded-full" src={String(moksh)} alt="Moksh Choudhary"></img>
                <div className="flex-row items-center px-6 py-5">
                    <div className="font-bold text-xl mb-3 text-center">Moksh <br /> Choudhary</div>
                    <div className='bg-primary-button-color w-20 my-2 h-[2px] mx-auto' />
                    <div className="text-gray-700 text-base mx-auto">
                        <h2>Software Engineer</h2>
                    </div>
                </div>
                <div className='bg-white absolute bottom-0 w-full grid place-items-center'>
                    <div className='p-2'>
                        <img src={String(git)} className="w-[30px] h-[30px] mx-2 inline"/>
                        <img src={String(linkdin)} className="w-[30px] h-[30px] mx-2 inline ¡"/>
                        <img src={String(insta)} className="w-[30px] h-[30px] mx-2 inline"/>
                    </div>
                </div>
            </div>
            <div className="relative w-[70%] ms-1">
                <div className="absolute text-center">
                    <div className="text-6xl font-bold">Hello</div>
                    <div className="text-xl font-bold">Here's who I am & what I do</div>

                    <div className="">
                        <button className="bg-transparent me-3 border-2 border-primary-button-color inline rounded-full">Resume</button>
                        <button className="bg-transparent border-2 border-black inline rounded-full ">Project</button>
                    </div>


                    <div className="">
                        I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click “Edit Text” or double click me to add your own content and make changes to the font.
            
                        I'm a great place for you to tell a story and let your users know a little more about you.
                    </div>

                </div> 


            </div>
        </div>
    );


};