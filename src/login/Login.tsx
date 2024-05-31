import './Login.css';
import {useState} from "react";
import {useNavigate} from "react-router-dom";

export type User = {
    username: string;
};

export default function Login() {
    const [name, setName] = useState<string>("");
    const navigate = useNavigate();

    const handleSubmit=(e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        localStorage.setItem("User", name);
        navigate("/mainpage");
    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <input placeholder={"Enter your Username"} value={name} type="text" onChange={(e) =>{
                setName(e.target.value);
                    }}/>
                <button type={"submit"}>Log in</button>
            </form>
        </>
    );
}
