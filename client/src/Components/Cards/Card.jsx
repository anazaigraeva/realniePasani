import React from 'react';
import BSCard from 'react-bootstrap/Card';
import { useNavigate } from 'react-router';
import './Cards.css';

export default function Card({ category }) {
  const navigate = useNavigate();

  return (
    <BSCard className="category-card">
      <BSCard.Body>
        <BSCard.Title className="category-title">{category?.gen}</BSCard.Title>
        <BSCard.Text className="category-description">
          {category?.description}
        </BSCard.Text>
        <button
          type="button"
          className="category-btn"
          onClick={() => navigate(`/words/${category.id}`)}
        >
          Изучить
        </button>
      </BSCard.Body>
    </BSCard>
  );
}
