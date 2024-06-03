import { useState } from "react";


const StatefulForm = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [ password,setPassword] = useState(null)

    const handleSubmit = e => {
        e.preventDefault();
        console.log(name, email,password)
    }
    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const handlePasswordChange =e =>{
        setPassword(e.target.value);
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>name <input onChange={handleNameChange} type="text" name="name" /></p>
                <p>email <input
                    onChange={handleEmailChange} type="email" name="email" /></p>
                <p>password <input 
                onChange={handlePasswordChange} type="password" name="password" /></p>
                <input type="submit" value="submit" />

            </form>
        </div>
    );
};

export default StatefulForm;