import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { filter } from '../../db/db'
import Card from '../../components/user/Card'
import homeStyle from './home.module.css'
import { serverURL } from "../../config/config";
import useUserContext from "../../hooks/useUserContext";

export default function ProductsList() {

    const { cartItems, setCartItems } = useUserContext()
    const [category, setCategory] = useState("")
    const [subCategory, setSubCategory] = useState("")
    const [isLoading, setIsLoading] = useState()
    const [error, setError] = useState(null)
    const [products, setProducts] = useState(null)

    // Function to filter todos based on status and category
    function filteredProducts() {
        return products.filter(product =>
            (category === '' || product.category === category) &&
            (subCategory === '' || product.sub_category === subCategory)
        )
    }

    const changeCategory = (e) => {
        setCategory(e.target.value)
        setSubCategory("")
    }

    //Get the data
    useEffect(() => {

        const getData = async () => {
            setIsLoading(true)
            const response = await fetch(`${serverURL}products`)

            const json = await response.json()
            if (!response.ok) {
                setIsLoading(false)
                setError(json.error)
            } else {
                setIsLoading(false)
                setError() //reseting the error
                setProducts(json)
            }
        }
        getData()
    }, [])

    return (
        <div>
                <div className={homeStyle.filter}>
                    <div className={homeStyle.customSelect}>
                        <select id="fruit" name="fruit" value={category} onChange={changeCategory}>
                            <option value="" disabled>Select a category</option>
                            <option value="electronics">electronics</option>
                            <option value="home_appliances">Home Appliances</option>
                            <option value="outdoor_equipment">outdoor_equipment</option>
                        </select>
                    </div>
                    {category &&
                        <div className={homeStyle.customSelect}>
                            <select id="fruit" name="fruit" value={subCategory} onChange={e => setSubCategory(e.target.value)}>
                                <option value="" disabled>Select sub category</option>
                                {filter[category].map((v, i) => <option key={i} value={v.value}>{v.name}</option>)}
                            </select>
                        </div>
                    }
                </div>


            {products &&
                <div className={homeStyle.cardsContainer}>
                    {filteredProducts().map(food => {
                        return (
                            <Card food={food} key={food.id} cartItems={cartItems} setCartItems={setCartItems} />
                        )
                    })}
                </div>
            }
            {cartItems.length > 0 && <Link to="/selected-products" className='seeSelectedBtn'>የመረጧቸውን እቃዎች ይመልከቱ</Link>}
        </div>
    )
}
