import moksh from "../assets/moksh.jpeg"
import git from "../assets/github.png"
import insta from "../assets/instagram.png"
import linkdin from "../assets/linkedin.png"

export default function Card() {
    return (
        <>
            <div className="absolute max-md:w-screen md:w-[70%] md:top-[22%] md:left-[20%] max-md:top-28">
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
                        <h1 className="text-8xl font-bold mb-3">Hey there, </h1>
                        <h1 className="text-2xl">Web-slingers and Code enthusiasts! </h1>
                        <div className="flex my-6">
                            <button className="rounded-full px-6 py-1 mx-3 bg-primary-button-color text-white">Resume</button>
                            <button className="rounded-full px-6 py-1 border border-black">Project</button>
                        </div>
                        <div>
                        
                            <p className="font-sans text-base md:text-sm leading-relaxed text-left mr-8">
                                <br/>
                                Welcome to my corner of the digital universe. I'm just your friendly neighborhood software engineer, swinging through the intricate world of Java, Angular JS, and Spring Boot.<br/>
                                With great power comes great responsibility, and I've embraced the challenge of crafting software solutions that pack a punch. From weaving together Spring frameworks to spinning RESTful APIs like a web, my journey has been nothing short of spectacular.<br/>
                                I've ventured into the uncharted territories of microservices architectures, facing down challenges with the same tenacity as your friendly neighborhood superhero.<br/>
                                So, grab your web shooters and dive into my portfolio to see how I'm using technology to make the world a better place, one line of code at a time!
                            </p>


                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}