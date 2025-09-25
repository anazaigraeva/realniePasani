import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function HomePage() {
    const [categories, setCategory] = useState([])

    // useEffect(()=>{
    //     axios.get('/api/categories').then(({data}) => {
    //         setCategory(data)
    //     })
    // }, [])

    
  return (
    <>
    {categories.map((category) => (<Card key={category.id} category={category} />))}
    </>
  )
}
