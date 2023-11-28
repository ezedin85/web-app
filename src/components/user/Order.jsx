import selectedStyle from '../../pages/user/selected.module.css'

export default function Order({cartItem}) {
    return (
        <div className={selectedStyle.order}>
            <img src={cartItem?.img_url} alt="" />
            <div>
                <h3 className={selectedStyle.name}>{cartItem.title} <span className={selectedStyle.quantity}>{`(${cartItem.quantity})`}</span></h3>
                <small>{cartItem.category + ' : ' + cartItem.sub_category}</small>
            </div>
            <div className={selectedStyle.price}>{cartItem.price * cartItem.quantity} birr</div>
        </div>
    )
}
