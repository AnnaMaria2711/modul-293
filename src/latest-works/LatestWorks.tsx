import './LatestWorks.css';
import {useNavigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

function LatestWorks(){

    const navigate = useNavigate();

    const links = [
        { name: 'Main Page', path: '/mainpage' },
        { name: 'About me', path: '/about-me' },
        { name: 'Extra Info', path: '/extra-information' }
    ];
    const handleClick = (path: string) => {
        navigate(`/${path}`);
    };

    return (
        <div className="grid-container">
            <header className="header">
                <h1>Latest works</h1>
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
            <main className="main">
                <div className="text-area">
                    <h1>
                      <b>Cooplet</b>
                    </h1>
                    <h4>My preferred method to study</h4>
                    <big>As a developer, honing my coding skills and expanding my knowledge is crucial. I devote much of my free time to coding projects, which serve as invaluable learning opportunities. Recently, I undertook a significant project—a full-stack application completed within a deadline of 20 days. The project allowed us the freedom to choose its theme, and I opted to create a Studying app akin to Quizlet. This application facilitates studying by enabling users to create study sets featuring vocabulary, which can be practiced through typing exercises or flashcards.</big>
                <h4>To check my Project out, click the link below:</h4>
                    <h3>
                        <b><a href="https://cooplet.onrender.com/">Link to Cooplet</a></b>
                    </h3>
                </div>
            </main>
            <footer className="footer">
            <h4>Programmed by Anna-Maria Bülk</h4>
            </footer>
        </div>
    );
}

export default LatestWorks