import React from "react"
import {useState, useEffect } from "react"
import { remeras } from "../asyncmock"
import ItemList from '../ItemList/ItemList'



const ItemListContainer = ({greeting}) => {
    const [productos, setProducts] = useState([])
    useEffect(() => {
        remeras().then(response => {
            setProducts(response)

        })
    }, 
    [])

    return(
        <div className="ItemListContainer">
            <h1>{greeting}</h1>
            <ItemList productos={productos}/>
        </div>
    )
}


export default ItemListContainer