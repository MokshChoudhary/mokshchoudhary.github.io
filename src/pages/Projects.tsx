import { useState, useEffect } from 'react';
import axios from 'axios';
import './css/Projects.css'; // Import the style sheet

const GitHubProjects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        // Fetch GitHub repositories using GitHub API
        axios.get('https://api.github.com/users/MokshChoudhary/repos')
            .then(response => {
                setProjects(response.data);
            })
            .catch(error => {
                console.error('Error fetching GitHub projects:', error);
            });
    }, []);

    return (
        <div className="absolute top-24 w-full">
            <div className="container">
                <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">GitHub Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project['id']} className="project-card shadow-md rounded-lg bg-white overflow-hidden transform transition-transform duration-300 hover:scale-105">
                            <h3 className="project-title text-xl font-semibold mb-4">{project['name']}</h3>
                            <p className="project-description text-gray-700 mb-6">{project['description']}</p>
                            <div className="project-details flex flex-wrap items-center justify-between">
                                <p className="project-detail text-sm text-gray-700 mr-2">Language: {project['language']}</p>
                                <p className="project-detail text-sm text-gray-700 mr-2">Stars: {project['stargazers_count']}</p>
                                <p className="project-detail text-sm text-gray-700 mr-2">Forks: {project['forks_count']}</p>
                            </div>
                            <a href={project["html_url"]} className="view-on-github text-blue-600 font-semibold mt-4 inline-block hover:underline">View on GitHub</a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default GitHubProjects;
