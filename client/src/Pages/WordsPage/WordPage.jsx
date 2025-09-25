import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../../Components/Cards/Card'

export default function HomePage() {
    const [categories, setCategory] = useState([])

    useEffect(()=>{
        axios.get('/api/categories').then(({data}) => {
            setCategory(data)
        })
    }, [])

    
  return (
    <>
    {categories.map((category) => (<Card key={Card.id} category={category} />))}
    </>
  )
}