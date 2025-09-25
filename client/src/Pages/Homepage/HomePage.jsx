import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Card from '../../Components/Cards/Card'
import axiosInstance from '../../axiosinstance'

export default function HomePage() {
    const [categories, setCategory] = useState([])


    useEffect( ()=>{
        axiosInstance.get('/category').then((response) => {
          console.log(response.data);
            setCategory(response.data)
        })
    }, [])

    
    
  return (
    <>
    {categories.map((category) => (<Card key={category.id} category={category} />))}
    Bonjour
    </>
  )
}
