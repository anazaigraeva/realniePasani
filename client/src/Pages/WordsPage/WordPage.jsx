import React, { useEffect, useState } from 'react'
import Card from '../../Components/Cards/Card'
import axiosInstance from '../../axiosinstance'

export default function HomePage() {
    const [categories, setCategory] = useState([])

    useEffect(()=>{
        axiosInstance.get('/categories/words').then(({data}) => {
            setCategory(data)
        })
    }, [])

    
  return (
    <>
    {categories.map((category) => (<Card key={Card.id} category={category} />))}
    </>
  )
}