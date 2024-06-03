import { useState } from "react";


const StatefulForm = () => {
    const [name, setName] = useState('Enter you name');
    const [email, setEmail] = useState('Enter Your Email');
    const [ password,setPassword] = useState(null);
    const [error, setError] =useState('');


    const handleSubmit = e => {
        e.preventDefault();
        
        if(password.length < 6){
            setError('password must be 6 characters')
        }
        else{
            setError('')
            console.log(name, email,password);

        }
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
                <p>name <input onChange={handleNameChange} type="text" name="name" value={name} /></p>
                <p>email <input
                    onChange={handleEmailChange} type="email" name="email" value={email}/></p>
                <p>password <input 
                onChange={handlePasswordChange} type="password" name="password" required/></p>
                <input type="submit" value="submit" />

            </form>
            {
                error && <p> {error}</p>
            }
        </div>
    );
};

export default StatefulForm;