import './MainPage.css';
import Sidebar from '../sidebar/Sidebar.tsx';

function MainPage() {
    const username = localStorage.getItem('User');
    console.log('Username from localStorage:', username);

    return (
        <>
            <div className={"grid-container"}>
            <h1>Hello {username ? username : 'Guest'}</h1>
            </div>
            <div>
                <Sidebar />
            </div>
        </>
    );
}

export default MainPage;
