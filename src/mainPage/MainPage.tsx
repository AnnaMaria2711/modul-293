import 'bootstrap/dist/css/bootstrap.min.css';
import './MainPage.css';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

type User = {
    username: string;
    age: number;
    gender: string;
    agreeToTerms: boolean;
};

function MainPage() {
    const [user, setUser] = useState<User | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem('User');
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser) as User;
            setUser(parsedUser);
        }
    }, []);

    const links = [
        { name: 'About me', path: '/about-me' },
        { name: 'Latest works', path: '/latest-works' },
        { name: 'Extra Info', path: '/extra-information' }
    ];

    const handleClick = (path: string) => {
        navigate(`/${path}`);
    };

    return (
        <div className="grid-container">
            <header className="header">
                <h1>Hallo {user?.username}</h1>
            </header>
            <aside className="sidebar">
                <div className="sidebar-content" >
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
                <div className="main-image">
                    <img src="https://media1.tenor.com/m/ggmR_nHFsKoAAAAC/flowers-aesthetic.gif" alt="Cat Sky GIF" />
                    <img src="https://media1.tenor.com/m/Zhwtu4cG7KoAAAAC/ripples-shimmering.gif" alt="Ripples Shimmering GIF" />
                    <img src="https://media1.tenor.com/m/hukAljT7PnEAAAAC/nature-gif-anime.gif" alt="Anime GIF" />
                </div>
                <div className="text-area">
                    <h4>Welcome to my E-Portfolio</h4>
                    <big>I'm Anna-Maria, I'm a 16 year old aspiring developer, who is currently in her first year of her apprenticeship</big>
                    <p>Dive in to discover my professional journey, explore my latest projects, and learn more about me. Stay updated with my newest work and don't hesitate to connect with me! </p>
                </div>
            </main>
            <footer className="footer">
                <h4>Programmed by Anna-Maria Bülk</h4>
            </footer>
        </div>
    );
}

export default MainPage;
