import React, { useState, useEffect } from 'react'
import axios from 'axios';
import QuoteItem from '../components/quote/QuoteItem';

const SecondHome = () => {
    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios(`https://breakingbadapi.com/api/quotes`)
            console.log(result.data[0])
            setItems(result.data)
            setIsLoading(false)
        }
        fetchItems()
    }, [])
    return (
        <div>
            <h4 style={{ textAlign: "center", color: "white", fontFamily: "monospace" }}>Quotes by Breaking-Bad Characters</h4>
            <br />
            {
                items.map(item => (
                    <QuoteItem key={item.quote_id} item={item} />
                ))}

        </div>
    )
}

export default SecondHome
