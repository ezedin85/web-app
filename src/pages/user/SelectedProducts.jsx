import { Link } from "react-router-dom";
import selectedStyle from '../../pages/user/selected.module.css'
import Order from "../../components/user/Order";
import useUserContext from "../../hooks/useUserContext";

const tele = window.Telegram.WebApp;

export default function SelectedProducts() {

  const { cartItems, setCartItems } = useUserContext()

  const handleOrder = async (order) => {
    await tele.sendData(JSON.stringify(order))
  }
  const message = () => {
    let orders = []
    cartItems?.map(item => orders.push({ id: item.id, quantity: item.quantity }))
    return { orders }
  }


  return (
    <div className={selectedStyle.selectedPage}>
      <div className={selectedStyle.head}>
        <h2>ትእዛዞች</h2>
        <Link to="/products-list">ትእዛዞችን ያስተካክሉ</Link>
      </div>

      {cartItems.map(cartItem => {
        return (<Order key={cartItem.id} cartItem={cartItem} />)
      })}

      <button onClick={() => handleOrder(message())} className='seeSelectedBtn'>ይዘዙ</button>

    </div >
  )
}


