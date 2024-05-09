import "./css/Resume.css";
import resume_file from "../assets/Moksh Choudhary.pdf";
import NavigationBar from "../comp/NavigationBar";

export default function Resume() {
    return (
        <>
        <NavigationBar />
        <div className="absolute top-28 w-full">
            <div className="container mx-auto">
                <div className="card mx-auto">
                    {/* Your resume content goes here */}
                    <header>
                        <h2 className="text-2xl font-bold mb-4 text-center">EDUCATION</h2>
                    </header>
                    <section className="p-4">
                        <p><span className="font-bold">ABVGIET Shimla, H.P, India</span></p>
                        <p><span className="font-bold">Bachelors of Technology in Computer Science And Engineering</span> 2017 - 2021</p>
                    </section>
                </div>

                <div className="card mx-auto">
                    {/* Your resume content goes here */}
                    <header>
                        <h2 className="text-2xl font-bold mb-4 text-center">TECHNICAL SKILLS</h2>
                    </header>
                    <section className="p-4">
                        <ul>
                            <li>Languages: Java, C++, SQL (Postgres, Oracle, MySQL), JavaScript, JQuery, Kotlin, Dart, Golang, Typescript, C#, Python.</li>
                            <li>Methodologies: Agile, Scrum, Test Driven Development (TDD). Web</li>
                            <li>Database: MongoDB, MariaDB, MySQL, MS-SQL, Oracle, redis.</li>
                            <li>Technologies: Servlets, JSP, RESTful API Web Services, Java Beans, HTML, XML. Web</li>
                            <li>Frameworks: MVC, Spring 2.x, Spring Boot, Flutter, Android, WPF .Net, Flask, ReactJS, Laravel,</li>
                            <li>DevOps and API Tools: AWS, Git, Docker, Swagger, Postman</li>
                            <li>Servers: JBoss 7+, Tomcat 9, WebLogic Server 9/10, Xammp.</li>
                            <li>Version control: SVN, Git</li>
                        </ul>
                    </section>
                </div>

                <div className="card mx-auto">
                    {/* Your resume content goes here */}
                    <header>
                        <h2 className="text-2xl font-bold mb-4 text-center">WORK EXPERIENCE</h2>
                    </header>
                    <section className="work-experience-container p-4">
                        <div className="flex flex-col">
                            <div className="mb-6">
                                <div className="card">
                                    <p className="text-lg font-bold mb-2">Intern Android UI/UX Developer</p>
                                    <p className="mb-2"><span className="font-bold">Datsme, New Delhi, India</span> 02/2021 - 05/2021</p>
                                    <ul>
                                        <li>Worked as an intern on a chatting mobile application.</li>
                                        <li>Created small games for users to interact with each other.</li>
                                        <li>Made changes in the UI for the Android application.</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mb-6">
                                <div className="card">
                                    <p className="text-lg font-bold mb-2">Software Engineering</p>
                                    <p className="mb-2"><span className="font-bold">ServoSys Solutions, U.P, India</span> Mar 2022 - Present</p>
                                    <ul>
                                        <li>Lead the development of software applications using Java, C++, C, and Dart programming languages.</li>
                                        <li>Lead team to develop multiple modules for different programming domain(web, ai, android)</li>
                                        <li>Used Spring framework as a business logic tier to perform IOC , AOP and integration with Spring MVC to define Controller, action mappings, services, DAO, and DAOimpl to implement CRUD operations interactive with persisting objects</li>
                                        <li>Exposed in web sockets programming for providing real-time communication between client and server</li>
                                        <li>Configured and deployed applications on cloud server under Amazon Web Services using EC2, S3, Elastic Beanstalk, RDS</li>
                                        <li>Spearheaded the migration of a legacy monolithic application to micro-services architecture, increasing application scalability by 40%</li>
                                        <li>Designed and developed Restful APIs for different modules in the project as per the requirement</li>
                                        <li>Developed RESTful services using Spring Boot, resulting in a high-performance system with response times improved by 35%</li>
                                        <li>Primarily used Core Java (with a heavy emphasis on Design Patterns, Cryptography, and Parallel Programming), Spring Framework (JPA and Entities), Microsoft SQL Server, Oracle SQL Developer, and MySQL server</li>
                                        <li>Implemented DAOs, entities using Hibernate(JPA) and used SVN and GIT as version control system</li>
                                        <li>Created build and deployment script using Maven and Gradle</li>
                                        <li>Implemented advanced security measures by employing AES encryption algorithms to encrypt both requests and responses, enhancing data security significantly and reducing vulnerability to cyber-attacks</li>
                                        <li>Hand-on experience in configuration and deployment for Application/Web Server like Apache Tomcat, JBoss, and WebLogic</li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="card mx-auto">
                    {/* Your resume content goes here */}
                    <header>
                        <h2 className="text-2xl font-bold mb-4 text-center">PROJECTS</h2>
                    </header>
                    <section className="p-4">
                        <p><span className="font-bold">Online Judge</span></p>
                        <ul>
                            <li>Java, Springboot, MongoDB, ReactJs, Docker, Kubernetes, AWS</li>
                            <li>Developed a Full-stack application employing ReactJs and Springboot.</li>
                            <li>Engineered a user-friendly interface using React Js facilitating code submission, problem viewing, and profile management.</li>
                            <li>Ensured seamless accessibility across multiple devices through responsive design implementation.</li>
                            <li>Utilized MongoDB as the database system for storing user profiles, problem descriptions, submissions, and pertinent data.</li>
                            <li>Generated API documentation using Swagger.</li>
                            <li>Employed Docker for containerization to ensure consistent deployment across various environments.</li>
                            <li>Implemented a micro-service architecture for enhanced system stability and scalability.</li>
                        </ul>
                    </section>
                </div>

                <div className="primary-button-container">
                    <a href={resume_file} className="primary-button">Download Resume</a>
                </div>

            </div>
        </div>
        </>
    );
}
