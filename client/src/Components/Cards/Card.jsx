import React from 'react';
import BSCard from 'react-bootstrap/Card';


export default function Card({ category }) {
  // console.log({category})
  
  return (
    <BSCard>
      <BSCard.Body>
        <BSCard.Title>{category?.gen}</BSCard.Title>
        <BSCard.Text>{category?.description}</BSCard.Text>
        <button type="button" className="btn btn-primary">
          Изучить
        </button>
      </BSCard.Body>
    </BSCard>
  );
}
