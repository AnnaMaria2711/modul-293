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
        { name: 'Link 1', path: 'link1' },
        { name: 'Link 2', path: 'link2' },
        { name: 'Link 3', path: 'link3' }
    ];

    const handleClick = (path: string) => {
        navigate(`/${path}`);
    };

    return (
        <div className="grid-container">
            <header className="header">
                <h1>Hallo {user?.username}</h1>
            </header>
            <aside className={`sidebar`}>
                <div className="sidebar-content">
                    <h2>Sidebar</h2>
                    <nav>
                        <ul>
                            {links.map((link, index) => (
                                <li key={index} onClick={() => handleClick(link.path)}>
                                    {link.name}
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </aside>
            <main className="main">
                <div className="main-image">
                    <img src="/src/public/public/7d77d878fa89a097cb75468d2fae3bc4.jpg" alt="Panorama picture of a city" />
                </div>
                <div className="text-area">
                    <p>This is the main text area. You can put your content here.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vehicula cursus sapien, ut laoreet sapien hendrerit nec.</p>
                </div>
            </main>
            <footer className="footer">
                <h4>Footer Content</h4>
            </footer>
        </div>
    );
}

export default MainPage;
