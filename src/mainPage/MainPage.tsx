import './MainPage.css';
import Sidebar from '../sidebar/Sidebar';

function MainPage() {
    const username = localStorage.getItem('User');
    console.log('Username from localStorage:', username);

    return (
        <>
            <div className="main">
                <header className="header">Hello {username ? username : 'Guest'}</header>
                <div className="main-image">image</div>
                <div className="content">
                    <div className="image-section">image</div>
                    <div className="image-section">image</div>
                    <div className="image-section">image</div>
                    <div className="text-section">text</div>
                    <div className="text-section">text</div>
                    <div className="text-section">text</div>
                </div>
                <footer className="footer">footer</footer>
            </div>
            <div>
                <Sidebar />
            </div>
        </>
    );
}

export default MainPage;
