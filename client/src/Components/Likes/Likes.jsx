import React from 'react'

import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useState } from 'react';
import axiosInstance from '../../axiosinstance';


 function Likes({Likes}) {
    const [like, setLike] = useState(null);
    const { id } = useParams();
    const [active, setactive] = useState(false);


  useEffect(() => {
    axiosInstance.post(`/like/${id}`).then((response) => {
      setLike(response.data);
    });
  }, [id]);



  return (
    <>
    <button className='likeButton' onClick={() => setactive((status) => !status)}>{active ? '♥' : '♡'}</button>
    </>
  )
}

export default Likes