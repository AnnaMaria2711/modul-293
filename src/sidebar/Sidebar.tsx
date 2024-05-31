import React, {useState} from 'react';
import './Sidebar.css';
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

const Sidebar: React.FC = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const navigate = useNavigate();

    const links = [
        {name: 'Link 1', path: 'link1'},
        {name: 'Link 2', path: 'link2'},
        {name: 'Link 3', path: 'link3'}
    ];

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };


    const handleClick = (path: string) => {
        navigate(`/${path}`);
    };


    return (
        <>
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <button className="toggle-btn" onClick={toggleSidebar}>
                    <FontAwesomeIcon icon={faBars}/>
                </button>
                <ul>
                    {links.map((link, index) => (
                        <li key={index} onClick={() => handleClick(link.path)}>
                            {link.name}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
};

export default Sidebar;
