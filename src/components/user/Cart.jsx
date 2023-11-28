import Button from "./Button"

export default function Cart({ cartItems, onCheckout }) {
    const total = cartItems.reduce((a, c) => a + (c.quantity * c.price), 0)
    return (
        <div className="cart">
            {cartItems.length === 0 ?
                'Select Products'
                :
                <div>
                    <span>Total: :{total}</span>
                    <Button title="Checkout" type="checkout" onClick={onCheckout} />
                </div>
            }

        </div>
    )
}
