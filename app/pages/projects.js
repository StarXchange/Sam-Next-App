import Header from '../components/Header';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
    return (
        <div>
            <Header />
            <main>
                <h1> My Projects</h1>
                <ProjectCard
                title="Project 1"
                description="This is an awesome project about X."
                imageUrl="/profile.jpg"
                />
                <ProjectCard
                title="Project 1"
                description="This project does Y and is built with Z."
                imageUrl="/project1.jpg"
                />

            </main>
            <Footer />
        </div>
    );
};