import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return(
        <>
        <div style={{ 
            backgroundImage:'url(./Pizza.jpg)',
            backgroundRepeat: 'no-repeat',
            width:'100%',
            height:'400px'
            }} className='homepage-top-section'>
                
            <div className='pizza-link-container'>  
                <h2 className='pizza-title'> You're favorite food, delivered while coding </h2>  
                <Link to='/pizza' className='pizza-link' id='order-pizza'>Pizza?</Link>
            </div>
        </div>
        <div className='homepage-bottom-section'>
            <h2>
            Food Delivery in Gotham City
            </h2>
            <div className='first-row'>
                <div className='restaurant-1'>
                    <img src='https://www.freepnglogos.com/uploads/mcdonalds-png-logo/mcdonalds-png-logo-picture-3.png' alt='McDonalds logo'style={{width:'200px'}}/>
                    <h3>McDonald's</h3>
                    <p> $ - American - Fastfood - Burgers</p>
                    <div>
                        <p>20-30 Min</p>
                        <p>$5.99 Delivery Fee</p>
                    </div>
                </div>
                <div className='restaurant-2'>
                    <img src='https://blog.foodlogiq.com/hubfs/FoodLogiQ-Sweetgreen.png' alt='sweetgreen logo' style={{width:'200px'}}/>
                    <h3>sweetgreen</h3>
                    <p> $ - Healthy - Salads</p>
                    <div>
                        <p>30-45 Min</p>
                        <p>$4.99 Delivery Fee</p>
                    </div>
                </div>
                <div className='restaurant-3'>
                    <img src='https://www.freepnglogos.com/uploads/starbucks-logo-png-transparent-0.png' alt='Starbucks logo' style={{width:'200px'}}/>
                    <h3>Starbucks</h3>
                    <p> $ - Cafe - Coffee/Tea - Breakfast and Brunch</p>
                    <div>
                        <p>20-30 Min</p>
                        <p>$5.99 Delivery Fee</p>
                    </div>
                </div>
            </div>
        </div>
     </>
    )
}

export default Home;