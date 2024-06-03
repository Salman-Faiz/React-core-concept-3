import { useState } from 'react';

const UseCustomHook = (defaultValue = null) => {
    const [value, setValue] = useState(defaultValue);

    const handleValueChanger = e => {
        setValue(e.target.value);
    }
    return [value, handleValueChanger]
};

export default UseCustomHook;