import React from 'react';
import BSCard from 'react-bootstrap/Card';
// import { useNavigate, useParams } from 'react-router';
import axiosInstance from '../../axiosinstance';
import { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';


export default function WordCard({ category }) {
  const navigate = useNavigate()
  const [word, setWord] = useState(null)
  console.log(category)
  const {id} = useParams()


  useEffect  (() => {
    const sdc = axiosInstance.get(`/words/${id}`, category)
    console.log(sdc.data, '1231231')
    setWord(sdc.data)

    }, [])
 
  console.log(word);
  
    
  
  
  return (
    <>
    {word.map((el) => <div> {el.sleng}</div>)}
    
    </>
  )
}

