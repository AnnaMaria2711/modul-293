import './ExtraInfo.css';
import {useNavigate} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'

function ExtraInfo(){

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
                <h1>Extra info</h1>
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
            <main className="main-extra-info">
                <div className="text-area">
                    <h3>My favorite song at the moment</h3>
                    <big>Dig it- Bring me the Horizon</big>
                </div>
                <div className="text-area-2">
                    <h3>A cute cat video</h3>
                    <big>Just in case you've had a bad day:)</big>
                </div>
                <div className="mp3">
                    <audio controls>
                        <source src="public/mp3/brin_me_the_horizon_dig_it.mp3" type="audio/mpeg"/>
                    </audio>
                </div>
                <div className="youtube-video">
                    <iframe width="560" height="315" src="https://www.youtube.com/embed/X8avbciUP3c?si=Ahm1qDvrAMgri2F6"
                            title="YouTube video player"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>
            </main>
            <footer className="footer">
                <h4>Programmed by Anna-Maria Bülk</h4>
            </footer>
        </div>
    );
}

export default ExtraInfo