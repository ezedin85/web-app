import burger from '../images/burger.png'
import coca from '../images/coca.png'
import icecream from '../images/icecream.png'
import kebab from '../images/kebab.png'
import pizza from '../images/pizza.png'
import salad from '../images/salad.png'
import water from '../images/water.png'

export const foods = [
    { title: "Pizza", price: 17.99, image: pizza, id: 1, category: "electronics" , sub_category: "smartPhones"},
    { title: "Burger", price: 15, image: burger, id: 2, category: "electronics" , sub_category: "smartPhones"},
    { title: "Coca", price: 3.5, image: coca, id: 3, category: "electronics" , sub_category: "laptops"},
    { title: "Kebab", price: 13.99, image: kebab, id: 4, category: "electronics" , sub_category: "laptops"},
    { title: "Salad", price: 2.5, image: salad, id: 5, category: "home_appliances" , sub_category: "refrigators"},
    { title: "water", price: 0.99, image: water, id: 6, category: "home_appliances" , sub_category: "refrigators"},
    { title: "Ice cream", price: 2.99, image: icecream, id: 7, category: "home_appliances" , sub_category: "refrigators"},
    { title: "Pizza", price: 17.99, image: pizza, id: 8, category: "home_appliances" , sub_category: "coffee_makers"},
    { title: "Burger", price: 15, image: burger, id: 9, category: "home_appliances" , sub_category: "coffee_makers"},
    { title: "Coca", price: 3.5, image: coca, id: 10, category: "outdoor_equipment" , sub_category: "sport_accessories"},
    { title: "Kebab", price: 13.99, image: kebab, id: 11, category: "outdoor_equipment" , sub_category: "sport_accessories"},
    { title: "Salad", price: 2.5, image: salad, id: 12, category: "outdoor_equipment" , sub_category: "fitness_equipment"},
    { title: "water", price: 0.99, image: water, id: 13, category: "outdoor_equipment" , sub_category: "fitness_equipment"},
    { title: "Ice cream", price: 2.99, image: icecream, id: 14, category: "outdoor_equipment" , sub_category: "camping_gear"},
    { title: "Burger", price: 15, image: burger, id: 15, category: "outdoor_equipment" , sub_category: "camping_gear"},
    { title: "Coca", price: 3.5, image: coca, id: 16, category: "electronics" , sub_category: "headPhones"},
    { title: "Kebab", price: 13.99, image: kebab, id: 17, category: "electronics" , sub_category: "headPhones"},
    { title: "Salad", price: 2.5, image: salad, id: 18, category: "electronics" , sub_category: "headPhones"},
    { title: "water", price: 0.99, image: water, id: 19, category: "home_appliances" , sub_category: "coffee_makers"},
    { title: "Ice cream", price: 2.99, image: icecream, id: 20, category: "home_appliances" , sub_category: "vacuum_cleaners"},
    { title: "Pizza", price: 17.99, image: pizza, id: 21, category: "home_appliances" , sub_category: "vacuum_cleaners"}
];

export const filter = {
    electronics: [{value: "smartPhones", name: "SmartPhones"}, {value: "laptops", name: "Laptops"}, {value: "headPhones", name: "HeadPhones"}],
    home_appliances: [{value: "refrigators", name: "Refrigators"}, {value: "coffee_makers", name: "Coffee Makers"}, {value: "vacuum_cleaners", name: "Vacuum Cleaners"}],
    outdoor_equipment: [{value: "sport_accessories", name: "Sport Accessories"}, {value: "fitness_equipment", name: "Fitness Equipment"}, {value: "camping_gear", name: "Camping Gear"}]
}