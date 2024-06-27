import './AboutMe.css';
import {useNavigate} from "react-router-dom";

function AboutMe(){

    const navigate = useNavigate();

    const links = [
        { name: 'Main Page', path: '/mainpage' },
        { name: 'Latest works', path: '/latest-works' },
        { name: 'Extra Info', path: '/extra-information' }
    ];
    const handleClick = (path: string) => {
        navigate(`/${path}`);
    };

        return (
            <div className="grid-container-about-me">
                <header className="header">
                    <h1>About me</h1>
                </header>
                <aside className={`sidebar`}>
                    <div className="sidebar-content">
                        <h2 className="text-black">Sidebar</h2>
                        <nav>
                            <ul>
                                {links.map((link, index) => (
                                    <li className="text-black" key={index} onClick={() => handleClick(link.path)}>
                                        {link.name}
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </aside>
                <main className="main-about-me">
                    <div className="text-area">
                        <big>Learn more about me in the presentation down below:</big>
                    </div>
                    <div className="pdf-viewer">
                        <iframe
                            title="PDF Viewer"
                            src="public/documents/Praesentation_Anna_Maria_Buelk.pptx.pdf"
                            width="100%"
                            height="350px"
                        />

                    </div>
                </main>
                <footer className="footer">
                    <h4>Programmed by Anna-Maria Bülk</h4>
                </footer>
            </div>
        );
}

export default AboutMe