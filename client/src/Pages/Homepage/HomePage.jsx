import axios from 'axios'
import React, { useEffect, useState } from 'react'
import axiosInstance from '../../axiosinstance'

export default function HomePage() {
    const [categories, setCategory] = useState([])

    useEffect(()=>{
        axiosInstance.get('/categories').then(({data}) => {
            setCategory(data)
        })
    }, [])

    
  return (
    <>
    {categories.map((category) => (<Card key={category.id} category={category} />))}
    </>
  )
}
