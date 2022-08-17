import { useState } from 'react'

export const useForm = ( initialForm = {} ) => {
    const [formState, setFormState] = useState(initialForm);
    // console.log(formState)

    const onInputChange = (e) => {
        const {name, value} = e.target;
        console.log(value)
        setFormState({
            ...formState,
            [name]: value
        })
    };
    

    const onResetForm = () => {
        setFormState( initialForm )
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}