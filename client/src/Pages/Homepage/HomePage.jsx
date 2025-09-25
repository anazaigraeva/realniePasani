import React, { useEffect, useState } from 'react';
import Card from '../../Components/Cards/Card';
import axiosInstance from '../../axiosinstance';

export default function HomePage({setCategory, categories}) {
  
  console.log(categories)

  return (
    <>
      {categories.map((category) => (
        <Card key={category.id} category={category} />
      ))}
      Bonjour
    </>
  );
}
