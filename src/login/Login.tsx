import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



export type User = {
    username: string;
    age: number;
    gender: string;
    birthdate: Date;
    continentOfBirth: string;
};

const continents = [
    {value: "na", label: "North America"},
    {value: "sa", label: "South America"},
    {value: "eu", label: "Europe"},
    {value: "af", label: "Africa"},
    {value: "as", label: "Asia"},
    {value: "oc", label: "Oceania"},
    {value: "an", label: "Antarctica"}
];

export default function Login() {
    const [name, setName] = useState<string>("");
    const [age, setAge] = useState<number>(1);
    const [gender, setGender] = useState<string>("male");
    const [birthdate, setBirthdate] = useState<Date | null>(null);
    const [agreeToTerms, setAgreeToTerms] = useState<boolean>(false);
    const [continentOfBirth, setContinentOfBirth] = useState<string>("select continent");
    const [formErrors, setFormErrors] = useState<string[]>([]);
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();


        const errors: string[] = [];
        if (!name.trim()) {
            errors.push("Username is required.");
        }
        if (age < 1 || age > 99) {
            errors.push("Age must be between 1 and 99.");
        }
        if (!gender) {
            errors.push("Please select a gender.");
        }
        if (!birthdate) {
            errors.push("Please select a valid date of birth.");
        }
        if (!continentOfBirth || continentOfBirth === "select continent") {
            errors.push("Please select the continent of birth.");
        }
        if (!agreeToTerms) {
            errors.push("You must agree to the terms and conditions.");
        }

        if (errors.length > 0) {
            setFormErrors(errors);
        } else {
            const user: User = {
                username: name,
                age: age,
                gender: gender,
                birthdate: birthdate!,
                continentOfBirth: continentOfBirth
            };
            localStorage.setItem("User", JSON.stringify(user));
            navigate("/mainpage");
        }
    };

    return (
        <main className="container mt-5 ">
            <section className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card">
                        <header className="card-header">
                            <h3>Login</h3>
                        </header>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <fieldset>
                                    <legend>Personal Information</legend>
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input
                                            placeholder="Enter your Username"
                                            value={name}
                                            type="text"
                                            className="form-control"
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="ageSlider">Select your age: {age}</label>
                                        <input
                                            id="ageSlider"
                                            type="range"
                                            min="1"
                                            max="99"
                                            value={age}
                                            className="form-control"
                                            onChange={(e) => setAge(parseInt(e.target.value))}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <fieldset>
                                            <legend>Gender</legend>
                                            <div className="row">
                                                <div className="col-4">
                                                    <div className="form-check gender-grid-cell">
                                                        <label>
                                                        <input
                                                            type="radio"
                                                            value="male"
                                                            checked={gender === "male"}
                                                            className="form-check-input"
                                                            onChange={(e) => setGender(e.target.value)}
                                                        />
                                                        </label>
                                                        <label className="form-check-label">Male</label>

                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="form-check gender-grid-cell">
                                                        <input
                                                            type="radio"
                                                            value="female"
                                                            checked={gender === "female"}
                                                            className="form-check-input"
                                                            onChange={(e) => setGender(e.target.value)}
                                                        />
                                                        <label className="form-check-label">Female</label>
                                                    </div>
                                                </div>
                                                <div className="col-4">
                                                    <div className="form-check gender-grid-cell">
                                                        <label>
                                                            <input
                                                                type="radio"
                                                                value="other"
                                                                checked={gender === "other"}
                                                                className="form-check-input"
                                                                onChange={(e) => setGender(e.target.value)}
                                                            />
                                                        </label>
                                                            <label className="form-check-label">Other</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </fieldset>
                                    </div>
                                    <div className="form-group">
                                        <label>Date of Birth:</label>
                                        <DatePicker
                                            selected={birthdate}
                                            onChange={(date) => setBirthdate(date as Date)}
                                            dateFormat="dd.MM.yyyy"
                                            className="form-control"
                                        />
                                    </div>
                                    <div className="form-group">
                                        <fieldset>
                                            <legend>Place of Birth</legend>
                                            <label>What continent were you born in?</label>
                                            <select
                                                value={continentOfBirth}
                                                onChange={(e) => setContinentOfBirth(e.target.value)}
                                                className="form-control"
                                            >
                                                <option value="">Select continent</option>
                                                {continents.map(continent => (
                                                    <option key={continent.value}
                                                            value={continent.value}>{continent.label}</option>
                                                ))}
                                            </select>
                                        </fieldset>
                                    </div>
                                    <div className="form-group">
                                        <label>
                                            <input
                                                type="checkbox"
                                                checked={agreeToTerms}
                                                className="form-check-input"
                                                onChange={(e) => setAgreeToTerms(e.target.checked)}
                                            />
                                            I agree to the terms and conditions
                                        </label>
                                    </div>
                                    {formErrors.length > 0 && (
                                        <div className="alert alert-danger">
                                            {formErrors.map((error, index) => (
                                                <p key={index} className="mb-0">{error}</p>
                                            ))}
                                        </div>
                                    )}
                                    <button type="submit" className="btn btn-dark btn-block">Log in</button>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
