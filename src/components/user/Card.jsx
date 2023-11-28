import { useEffect, useState } from "react";
import Button from "./Button";
import homeStyle from '../../pages/user/home.module.css'

export default function Card({ food, cartItems, setCartItems }) {
console.log(food);
    const { _id, name, price, img_url } = food
    const [count, setCount] = useState(0)

    //Add to cart
    const onAdd = (food) => {
        const exist = cartItems.find((x) => x._id === food._id);
        if (exist) {
            setCartItems(
                cartItems.map((x) =>
                    x._id === food._id ? { ...exist, quantity: exist.quantity + 1 } : x
                )
            );
        } else {
            setCartItems([...cartItems, { ...food, quantity: 1 }]);
        }
    };

    //Remove from cart
    const onRemove = (food) => {
        const exist = cartItems.find((x) => x._id === food._id);
        if (exist?.quantity === 1) {
            setCartItems(cartItems.filter((x) => x._id !== food._id));
        } else {
            setCartItems(
                cartItems.map((x) =>
                    x._id === food._id ? { ...exist, quantity: exist.quantity - 1 } : x
                )
            );
        }
    };

    useEffect(() => {
        const exists = cartItems.find(item => item._id === _id) //find the product in the cart
        if (exists) setCount(exists.quantity); //if product found on the cart, set the count
        else setCount(0)
    }, [cartItems, _id])



    const handleIncrease = (food) => {
        onAdd(food)
    }
    const handleDecrease = (food) => {
        onRemove(food)
    }

    return (
        <div className={homeStyle.card}>
            {count !== 0 && <div className={homeStyle.badge}>{count}</div>}

            <img src={img_url} alt="no img" />

            <div className={homeStyle.detail}>{name}: {price}</div>

            <div className={homeStyle.actionBtns}>
                <Button type="add" title={count === 0 ? 'Add' : '+'} disabled={false} onClick={() => handleIncrease(food)} />
                {count !== 0 && <Button type="remove" title="-" disabled={false} onClick={() => handleDecrease(food)} />}
            </div>
        </div>
    )
}
