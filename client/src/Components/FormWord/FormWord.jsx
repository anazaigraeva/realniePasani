import React from 'react';
import axiosInstance from '../../axiosinstance';

export default function FormWord() {
    async function addCard(e) {
        e.preventDefault();

        const form = new FormData(e.target);
        const newC = Object.fromEntries(form);

        const {data} = await axiosInstance.post('/words', newC);

        
    }
  return (

  );
}
