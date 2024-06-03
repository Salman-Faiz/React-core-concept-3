

const SimpleForm = () => {
    const handleSubmit = e =>{
        e.preventDefault();
        console.log('form submitted');
        console.log(e.target.name.value);

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
               <p>name <input type="text" name="name" /></p>
                <p>email <input type="email" name="email" /></p>
                <p>password <input type="password" name="password" /></p>
                <input type="submit" value="submit" />
          
            </form>
        </div>
    );
};

export default SimpleForm;