import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'
import * as yup from 'yup'
import axios from 'axios'

const Form = () => {

     // managing state for form inputs
     const defaultState = {
        name: '',
        size: '',
        sauce: '',
        toppings: '',
        instructions: '',
    }

    const [formState, setFormState] = useState(defaultState)
    const [errors, setErrors] = useState({...defaultState})
    const [disableButton, setDisabledButton] = useState(true)

    // formState schema
    let formSchema = yup.object().shape({
        name: yup.string().required('name must be at least 2 characters').min(2),
        size: yup.string().required('Please select a size'),
    })

    useEffect(() => {
        formSchema.isValid(formState)
        .then(valid => setDisabledButton(!valid))
    }, [formState, formSchema])

    // onSubmit function
    const formSubmit = event => {
        event.preventDefault();
        axios.post('https://reqres.in/api/orders', formState)
            .then(() => console.log('form submitted, success!'))
            .catch(err => console.log(err))
    }

    // validates if values meet schema
    const setFormErrors = (name, value) => {
        yup.reach(formSchema, name).validate(value)
           .then(() => setErrors({...errors, [name]: ''}))
           .catch(err => setErrors({...errors, [name]: err.errors[0]}))
    }

    // onChange function
    const inputChange = event => {
        const { name } = event.target
        const valueTernary = event.target.type === 'checkbox' ? event.target.checked : event.target.value
        setFormState({ ...formState, [event.target.name]: valueTernary })
        setFormErrors(name, valueTernary)
    }

    return(
        <>
        <h2>Build Your Own Pizza</h2>
        <div className='pizza-form-page'
            style={{ 
            backgroundImage:'url(./Pizza.jpg)',
            backgroundRepeat: 'no-repeat',
            width:'60%',
            height:'400px',
            display: 'block',
            margin:'0 auto'
            }}>
        </div>
        <h3 className='content-title'>Build Your Own Pizza</h3>
            <form id='pizza-form' onSubmit={formSubmit}>
            <div style={{ color: 'red' }}>
                <div>{errors.name}</div>
                <div>{errors.size}</div>
                <div>{errors.toppings}</div>
                <div>{errors.instructions}</div>
            </div>
                <label><h4>Name:</h4><br/>
                    <input 
                    type='text' 
                    name='name'
                    id='name-input'
                    onChange={inputChange}
                    value={formState.name} 
                    placeholder='Your Name'/>
                </label>
                <label> <h4>Choice of Size:</h4>
                <br/>
                    <select name='size' id='size-dropdown' onChange={inputChange}>
                        <option value=''> -- Please Select A Size -- </option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='Large'>Large</option>
                        <option value='extra-large'>Extra Large</option>
                    </select>
                </label>
                <br/>
                <div className='radio'>
                    <h4>Choice of Sauce:</h4>
                    <label>
                        <input name='original' type='radio' value={formState.sauce}/>
                        Original Red
                    </label>
                    <label>
                        <input type='radio' value='garlic-ranch'/>
                        Garlic Ranch
                    </label>
                    <label>
                        <input type='radio' value='bbq-sauce'/>
                        BBQ Sauce
                    </label>
                    <label>
                        <input type='radio' value='spinach-alfredo'/>
                        Spinach Alfredo
                    </label>
                </div>
                    <label>
                        <h4>
                           Add Toppings 
                        </h4>
                        <p>choose up to 10</p>
                        <input 
                        type='checkbox'
                        
                        />
                    </label>
                    <label>
                        <h4>Special Instruction:</h4>
                        <input type='text' id='special-text' placeholder='Extra Napkins, no utensils, etc.' />
                    </label>
                <br/>
                <button id='submit' disabled={disableButton}>Submit</button>
            </form>
        </>
    )
}

export default Form;