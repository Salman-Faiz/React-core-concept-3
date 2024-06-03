import { useEffect, useRef } from "react";


const RefForm = () => {
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(nameRef.current.value)
        console.log(emailRef.current.value)
        console.log(passwordRef.current.value)
    }
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    useEffect(()=>{
        nameRef.current.focus();
      
        
    },[])
    return (
        <div>
            <form onSubmit={handleSubmit}>
               <p>name <input ref={nameRef} type="text" defaultValue={'name'} name="name" /></p>
                <p>email <input ref={emailRef} defaultValue={'enter your email'} type="email" name="email" /></p>
                <p>password <input ref={passwordRef} type="password" name="password" /></p>
                <input type="submit" value="submit" />
          
            </form> 
        </div>
    );
};

export default RefForm;