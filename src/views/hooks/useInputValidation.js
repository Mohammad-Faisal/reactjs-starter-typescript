import {useEffect, useState} from "react";


export default function useInputValidation (INITIAL_STATE , validationSchema) {
    const [values , setValues] = useState(INITIAL_STATE);
    const [errors , setErrors] = useState();

    const handleInputChange = (e) => {
        setValues({
                ...values ,
                [e.target.name] : e.target.value
            }
        )
    }

    const handleCheckboxSelectionChange = (name , selectedItems) => {
        setValues({
                ...values ,
                [name] : selectedItems
            }
        )
    }

    const handleDropdownSelectionChange = ( name ,  selectedItem) => {
        setValues({
                ...values ,
                [name] : selectedItem.value
            }
        )
    }

    useEffect( () => {
        validationSchema.validate(values , {abortEarly : false } ).then(() => {
            setErrors({})
        }).catch(err => {
            const errorObject ={}
            err.inner.forEach(item =>errorObject[item.path] = item.message)
            setErrors(errorObject)
        })
    } , [values])

    const resetData = () => {
        setValues(INITIAL_STATE);
    }

    const handleSubmit =  async () => {

    }



    return {values , handleInputChange , handleDropdownSelectionChange ,handleCheckboxSelectionChange , resetData ,errors, handleSubmit  }

}