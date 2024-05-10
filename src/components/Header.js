
import React, { useEffect, useState } from 'react'
import AllProducts from './AllProducts';

const Header = (props) => {
    let mainShopping = "https://fakestoreapi.com/products"
    const [products, setProducts] = useState([]);
    function mainDate() {
        fetch(mainShopping)
            .then(response => response.json())
            .then(data => {
                setProducts(data)
            });
    }

    useEffect(() => {
        mainDate()

    }, []);


    return (
        <div className='row'>
            {products.map((item) => {

                return (
                    <div className='col-4 main-products' key={item.id}>
                        <AllProducts {...item} />
                    </div>
         

                );
            })}

        </div>
    );
}

export default Header
