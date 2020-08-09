import React, { useState, useEffect } from 'react'
import axios from 'axios';
import CharacterGrid from '../components/characters/CharacterGrid'

const Home = () => {

    const [items, setItems] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [query, setQuery] = useState('')

    useEffect(() => {
        const fetchItems = async () => {
            const result = await axios(`https://breakingbadapi.com/api/characters`)
            console.log(result.data[0])
            setItems(result.data)
            setIsLoading(false)
        }
        fetchItems()
    }, [])
    return (
        <div className="container">
            <h4 style={{ textAlign: "center", color: "white", fontFamily: "monospace" }}>Breaking-Bad Characters</h4>
            <br />
            <CharacterGrid isLoading={isLoading} items={items} />
        </div>
    )
}

export default Home
