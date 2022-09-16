import Footer from "../Footer";
import Hero from "../Header/Hero";
import About from "../Main/About";
import Projects from "../Main/Projects";
import Skills from "../Main/Skills";


const Home = () => {
    return (
        <>
            <Hero />
            <main className="container">
                <About />
                <Skills />
                <Projects />
            </main>
            <Footer />     
        </>       
        
    );
};

export default Home;