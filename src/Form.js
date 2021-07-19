import React from 'react'
import { Link } from 'react-router-dom'
import Home from './Home'

const Form = () => {

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
            <form id='pizza-form'>
                <label> <h4>Choice of Size:</h4>
                <br/>
                    <select>
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
                        <input type='radio' value='original'/>
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
                <br/>

            </form>
        </>
    )
}

export default Form;