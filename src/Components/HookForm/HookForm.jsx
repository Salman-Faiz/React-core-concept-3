
import UseCustomHook from '../../../public/hooks/UseCustomHook/UseCustomHook';

const HookForm = () => {
    const [name,setHandleValueChanger] = UseCustomHook('salman');



    const handleSubmit = e =>{
        e.preventDefault();
        console.log('form data' ,name);
    }
    return (
        <div>
              <form onSubmit={handleSubmit}>
               <p>name <input value={name} onChange={setHandleValueChanger} type="text" name="name" /></p>
                <p>email <input type="email" name="email" /></p>
                <p>password <input type="password" name="password" /></p>
                <input type="submit" value="submit" />
          
            </form>
        </div>
    );
};

export default HookForm;