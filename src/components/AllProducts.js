
import { useContext, useEffect, useState } from 'react'

import { useShoppingCart } from './share-data/ContTextApi'

const AllProducts = (item) => {
    const [content, setContent] = useState("Add To Cart");
    const [clicked, setClicked] = useState(false);

    const { addToCart } = useShoppingCart();

    const handleClick = () => {
        setContent('Added To Cart');
        addToCart(item)
        setClicked(true);
    };

    return (
        
        <>


            <div className="card text-center">
                <img src={item.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h6 className="card-title">{item.title}</h6>
                    <h6 className="card-text">{item.price}$.</h6>
                    <button onClick={handleClick}
                        href="#" className="add-to-cart">{content} </button>
                </div>
            </div>
            <div>
            </div>



        </>
    )
}

export default AllProducts
