import React from 'react';
import BSCard from 'react-bootstrap/Card';
import { useNavigate } from 'react-router';


export default function Card({ category }) {
  console.log({category})
   const navigate = useNavigate()
  return (
    <BSCard>
      <BSCard.Body>
        <BSCard.Title>{category?.gen}</BSCard.Title>
        <BSCard.Text>{category?.description}</BSCard.Text>
        <button type="button" className="btn btn-primary" onClick={() => navigate(`/words/${category.id}`)}>
          Изучить
        </button>
      </BSCard.Body>
    </BSCard>
  );
}
